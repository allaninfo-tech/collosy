import Link from 'next/link';
import { Button } from '@collosy/react/form/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-50 font-sans selection:bg-[#ADFA1D] selection:text-black overflow-hidden relative">
      {/* Background ambient light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-[#ADFA1D]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#ADFA1D]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#ADFA1D] flex items-center justify-center">
            <span className="text-black font-bold text-lg leading-none mt-[2px]">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Collosy</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Log in
          </Link>
          <Link href="/auth">
            <Button className="h-9 px-4 rounded-md !bg-white hover:!bg-slate-200 !text-black font-semibold text-sm transition-colors">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-[#27272a] bg-[#09090b] px-3 py-1 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#ADFA1D] mr-2"></span>
          <span className="text-slate-300">Collosy 2.0 is now live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6 leading-[1.1]">
          The operating system for your <span className="text-[#ADFA1D]">social presence</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Schedule posts, analyze performance, and scale your brand across all platforms from one beautifully designed dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="/auth">
            <Button className="h-12 px-8 rounded-md !bg-[#ADFA1D] hover:!bg-[#84CC16] !text-black font-bold text-base transition-colors shadow-[0_0_20px_rgba(173,250,29,0.3)] hover:shadow-[0_0_30px_rgba(173,250,29,0.5)]">
              Get Started for Free
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button className="h-12 px-8 rounded-md bg-transparent border border-[#27272a] hover:bg-[#27272a]/50 text-white font-semibold text-base transition-colors">
              View Dashboard
            </Button>
          </Link>
        </div>

        {/* Dashboard Preview / CSS Art Mockup */}
        <div className="w-full max-w-5xl rounded-xl border border-[#27272a]/80 bg-[#09090b]/50 backdrop-blur-md shadow-2xl p-4 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ADFA1D]/50 to-transparent"></div>
          
          {/* Mock Header */}
          <div className="flex items-center justify-between mb-8 border-b border-[#27272a]/50 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-[#27272a] animate-pulse"></div>
              <div className="w-32 h-4 rounded bg-[#27272a] animate-pulse"></div>
            </div>
            <div className="w-64 h-8 rounded-md bg-[#27272a]/50 border border-[#27272a]"></div>
          </div>
          
          {/* Mock Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 rounded-lg bg-[#18181b] border border-[#27272a]/50 p-4 flex flex-col justify-between">
                    <div className="w-16 h-3 rounded bg-slate-700"></div>
                    <div className="w-24 h-6 rounded bg-slate-200"></div>
                  </div>
                ))}
              </div>
              <div className="h-64 rounded-lg bg-[#18181b] border border-[#27272a]/50 p-4 flex items-end gap-2">
                {/* Fake Chart Bars */}
                {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#ADFA1D] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" 
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="col-span-1 h-full rounded-lg bg-[#18181b] border border-[#27272a]/50 p-4 flex flex-col gap-4">
              <div className="w-32 h-4 rounded bg-slate-700 mb-2"></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="w-full h-2 rounded bg-slate-600"></div>
                    <div className="w-2/3 h-2 rounded bg-slate-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
