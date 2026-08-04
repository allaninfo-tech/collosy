import { parse } from 'tldts';

export function getCookieUrlFromDomain(domain?: string): string | undefined {
  if (!domain) return undefined;
  try {
    const cleanDomain = domain.replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
    if (
      cleanDomain.endsWith('vercel.app') ||
      cleanDomain.endsWith('onrender.com') ||
      cleanDomain === 'localhost' ||
      cleanDomain === '127.0.0.1'
    ) {
      return undefined;
    }
    const url = parse(cleanDomain);
    if (!url.domain || url.isIp) {
      return undefined;
    }
    return '.' + url.domain;
  } catch (e) {
    return undefined;
  }
}
