'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useFetch } from '@collosy/helpers/utils/custom.fetch';
import Link from 'next/link';
import { Button } from '@collosy/react/form/button';
import { Input } from '@collosy/react/form/input';
import { useMemo, useState } from 'react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { LoginUserDto } from '@collosy/nestjs-libraries/dtos/auth/login.user.dto';
import { GithubProvider } from '@collosy/frontend/components/auth/providers/github.provider';
import { OauthProvider } from '@collosy/frontend/components/auth/providers/oauth.provider';
import { GoogleProvider } from '@collosy/frontend/components/auth/providers/google.provider';
import { useVariables } from '@collosy/react/helpers/variable.context';
import { useT } from '@collosy/react/translation/get.transation.service.client';
type Inputs = {
  email: string;
  password: string;
  providerToken: '';
  provider: 'LOCAL';
};
export function Login() {
  const t = useT();
  const [loading, setLoading] = useState(false);
  const [notActivated, setNotActivated] = useState(false);
  const { isGeneral, genericOauth } = useVariables();
  const resolver = useMemo(() => {
    return classValidatorResolver(LoginUserDto);
  }, []);
  const form = useForm<Inputs>({
    resolver,
    defaultValues: {
      providerToken: '',
      provider: 'LOCAL',
    },
  });
  const fetchData = useFetch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setNotActivated(false);
    const login = await fetchData('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        provider: 'LOCAL',
      }),
    });
    if (login.status === 200 || login.status === 201) {
      window.location.href = '/';
    } else if (login.status === 400 || login.status === 401 || login.status === 403 || login.status === 404) {
      const errorMessage = await login.text();
      if (errorMessage === 'User is not activated') {
        setNotActivated(true);
      } else {
        form.setError('email', {
          message: errorMessage,
        });
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <FormProvider {...form}>
      <form className="flex-1 flex" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col flex-1 w-full">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">
              {t('sign_in', 'Sign In')}
            </h1>
            <p className="text-sm text-slate-400 mb-8">
              Enter your email below to log into your account
            </p>
          </div>
          
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {isGeneral && genericOauth ? (
                <div className="col-span-2"><OauthProvider /></div>
              ) : !isGeneral ? (
                <div className="col-span-2"><GithubProvider /></div>
              ) : (
                <div className="col-span-2">
                  <GoogleProvider />
                </div>
              )}
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#27272a]" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#09090b] px-2 text-slate-500">
                  {t('or_continue_with', 'Or continue with email')}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 text-slate-200">
                <Input
                  label="Email"
                  translationKey="label_email"
                  {...form.register('email')}
                  type="email"
                  placeholder={t('email_address', 'm@example.com')}
                  className="bg-[#09090b] border-[#27272a] focus-visible:ring-[#ADFA1D] rounded-md h-10"
                />
                <Input
                  label="Password"
                  translationKey="label_password"
                  {...form.register('password')}
                  autoComplete="off"
                  type="password"
                  placeholder={t('label_password', 'Password')}
                  className="bg-[#09090b] border-[#27272a] focus-visible:ring-[#ADFA1D] rounded-md h-10"
                />
              </div>
              
              {notActivated && (
                <div className="bg-[#ADFA1D]/10 border border-[#ADFA1D]/30 rounded-md p-4 mt-2">
                  <p className="text-[#ADFA1D] text-sm mb-2">
                    {t(
                      'account_not_activated',
                      'Your account is not activated yet. Please check your email for the activation link.'
                    )}
                  </p>
                  <Link
                    href="/auth/activate"
                    className="text-[#ADFA1D] underline hover:font-bold text-sm"
                  >
                    {t('resend_activation_email', 'Resend Activation Email')}
                  </Link>
                </div>
              )}
              
              <div className="mt-4">
                <Button
                  type="submit"
                  className="w-full h-10 rounded-md !bg-[#ADFA1D] hover:!bg-[#84CC16] !text-black font-semibold transition-colors"
                  loading={loading}
                >
                  {t('sign_in_1', 'Sign in')}
                </Button>
                
                <div className="mt-6 flex flex-col gap-2 text-center text-sm text-slate-400">
                  <p>
                    {t('don_t_have_an_account', "Don't have an account?")}{' '}
                    <Link href="/auth" className="text-white hover:text-[#ADFA1D] underline underline-offset-4 transition-colors">
                      {t('sign_up', 'Sign up')}
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/auth/forgot"
                      className="text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      {t('forgot_password', 'Forgot your password?')}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
