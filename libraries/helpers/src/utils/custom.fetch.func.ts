export interface Params {
  baseUrl: string;
  beforeRequest?: (url: string, options: RequestInit) => Promise<RequestInit>;
  afterRequest?: (
    url: string,
    options: RequestInit,
    response: Response
  ) => Promise<boolean>;
}
export const customFetch = (
  params: Params,
  auth?: string,
  showorg?: string,
  secured: boolean = true
) => {
  return async function newFetch(url: string, options: RequestInit = {}) {
    const loggedAuth =
      typeof window === 'undefined'
        ? undefined
        : new URL(window.location.href).searchParams.get('loggedAuth');
    const newRequestObject = await params?.beforeRequest?.(url, options);
    let authStorageToken: string | null = null;
    let orgStorageVal: string | null = null;
    if (typeof window !== 'undefined') {
      try {
        authStorageToken = localStorage.getItem('auth');
        orgStorageVal = localStorage.getItem('showorg');
      } catch (e) {}
    }

    const authCookieToken =
      typeof document === 'undefined'
        ? null
        : document.cookie
            .split(';')
            .map((c) => c.trim())
            .find((p) => p.startsWith('auth='))
            ?.split('=')[1];

    const orgCookieVal =
      typeof document === 'undefined'
        ? null
        : document.cookie
            .split(';')
            .map((c) => c.trim())
            .find((p) => p.startsWith('showorg='))
            ?.split('=')[1];

    const authNonSecuredImpersonate =
      typeof document === 'undefined'
        ? null
        : document.cookie
            .split(';')
            .map((c) => c.trim())
            .find((p) => p.startsWith('impersonate='))
            ?.split('=')[1];

    const resolvedAuth = auth || loggedAuth || authCookieToken || authStorageToken;
    const resolvedOrg = showorg || orgCookieVal || orgStorageVal;

    const rawBaseUrl = params?.baseUrl || (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BACKEND_URL : '') || 'https://collosy.onrender.com';
    const cleanBaseUrl = rawBaseUrl.replace(/\/+$/, '');
    const targetUrl = url.startsWith('/') ? url : `/${url}`;
    const fetchRequest = await fetch(`${cleanBaseUrl}${targetUrl}`, {
      ...(secured ? { credentials: 'include' } : {}),
      ...(newRequestObject || options),
      headers: {
        ...(resolvedOrg ? { showorg: resolvedOrg } : {}),
        ...(options.body instanceof FormData
          ? {}
          : { 'Content-Type': 'application/json' }),
        Accept: 'application/json',
        ...(resolvedAuth ? { auth: resolvedAuth } : {}),
        ...options?.headers,
        ...(authNonSecuredImpersonate
          ? { impersonate: authNonSecuredImpersonate }
          : {}),
      },
      // @ts-ignore
      ...(!options.next && options.cache !== 'force-cache'
        ? { cache: options.cache || 'no-store' }
        : {}),
    });

    if (
      !params?.afterRequest ||
      (await params?.afterRequest?.(url, options, fetchRequest))
    ) {
      return fetchRequest;
    }

    // @ts-ignore
    return new Promise((res) => {}) as Response;
  };
};

export const fetchBackend = customFetch({
  get baseUrl() {
    return process.env.BACKEND_URL!;
  },
});
