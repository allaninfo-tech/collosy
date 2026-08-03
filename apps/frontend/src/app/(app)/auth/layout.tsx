import { getT } from '@collosy/react/translation/get.translation.service.backend';

export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import loadDynamic from 'next/dynamic';
import { TestimonialComponent } from '@collosy/frontend/components/auth/testimonial.component';
import { LogoTextComponent } from '@collosy/frontend/components/ui/logo-text.component';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getT();

  return (
    <div className="bg-[#09090b] flex flex-1 min-h-screen w-screen text-slate-50 relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#ADFA1D]/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] bg-[#ADFA1D]/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <ReturnUrlComponent />
      
      {/* Form Container */}
      <div className="flex flex-col py-[60px] px-[20px] sm:px-[40px] flex-1 lg:w-[50%] lg:flex-none justify-center z-10 relative bg-[#09090b]/80 backdrop-blur-xl border-r border-[#27272a]/50">
        <div className="w-full max-w-[440px] mx-auto flex flex-col gap-[32px] text-slate-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[32px] h-[32px] rounded-full bg-[#ADFA1D] flex items-center justify-center">
              <span className="text-black font-bold text-lg leading-none mt-[2px]">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Collosy</span>
          </div>
          <div className="flex">{children}</div>
        </div>
      </div>
      
      {/* Testimonial / Showcase Container */}
      <div className="flex-1 hidden lg:flex flex-col items-center justify-center relative z-10 bg-[#09090b]">
        <div className="max-w-[600px] text-center flex flex-col gap-8 px-12">
          <h2 className="text-[48px] font-semibold tracking-tight leading-[1.1] text-white">
            Grow Your Social Presence<br/>
            <span className="text-[#ADFA1D]">Faster Than Ever.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-[480px] mx-auto">
            Join over <strong className="text-white">20,000+</strong> entrepreneurs scaling their brands on autopilot with Collosy.
          </p>
          <div className="mt-8 scale-110 opacity-90 hover:opacity-100 transition-opacity duration-500">
            <TestimonialComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
