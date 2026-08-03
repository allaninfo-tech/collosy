import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08090a] text-slate-100 font-sans selection:bg-[#ADFA1D] selection:text-black overflow-x-hidden relative">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[200px] left-[50%] -translate-x-[50%] w-[900px] h-[450px] bg-[#ADFA1D]/15 blur-[160px] rounded-full mix-blend-screen" />
        <div className="absolute top-[900px] -left-[200px] w-[500px] h-[500px] bg-[#ADFA1D]/5 blur-[180px] rounded-full mix-blend-screen" />
        <div className="absolute top-[1800px] -right-[200px] w-[600px] h-[600px] bg-[#ADFA1D]/8 blur-[200px] rounded-full mix-blend-screen" />
      </div>

      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1b1e26]/80 bg-[#08090a]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#ADFA1D] flex items-center justify-center shadow-[0_0_25px_rgba(173,250,29,0.4)] group-hover:scale-105 transition-transform duration-300">
              <span className="text-black font-extrabold text-xl leading-none">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#ADFA1D] transition-colors">
              Collosy
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
            <a href="#showcase" className="hover:text-white transition-colors">Analytics</a>
            <a href="#wall-of-love" className="hover:text-white transition-colors">Wall of Love</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login" 
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-[#16181d] transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth" 
              className="h-10 px-5 rounded-lg bg-[#ADFA1D] hover:bg-[#96d917] text-black font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(173,250,29,0.35)] hover:shadow-[0_0_35px_rgba(173,250,29,0.55)] transition-all transform hover:-translate-y-0.5"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#232733] bg-[#10121a]/80 backdrop-blur-md mb-8 hover:border-[#ADFA1D]/50 transition-colors cursor-pointer group">
          <span className="flex h-2 w-2 rounded-full bg-[#ADFA1D] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ADFA1D]">Collosy 2.0</span>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            AI-Powered Social Media Operating System
          </span>
          <svg className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mb-8 leading-[1.08]">
          Supercharge your <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ADFA1D] to-[#84CC16]">
            Social Growth Engine
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Plan, schedule, analyze, and automate content across all social networks from a single, high-performance command center.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <Link 
            href="/auth" 
            className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#ADFA1D] hover:bg-[#96d917] text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(173,250,29,0.4)] hover:shadow-[0_0_45px_rgba(173,250,29,0.6)] transition-all transform hover:-translate-y-1"
          >
            <span>Start Free Trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a 
            href="#showcase" 
            className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#12141a] hover:bg-[#1a1d26] border border-[#272a33] text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:border-slate-500"
          >
            <span>Explore Dashboard</span>
          </a>
        </div>

        {/* Social Proof Bar */}
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#08090a] bg-slate-800 text-xs font-bold text-slate-200 flex items-center justify-center">AR</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#08090a] bg-emerald-950 text-[#ADFA1D] text-xs font-bold flex items-center justify-center">SC</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#08090a] bg-purple-950 text-purple-300 text-xs font-bold flex items-center justify-center">MV</div>
          </div>
          <span>Trusted by <strong className="text-white">20,000+</strong> creators and growth teams worldwide</span>
        </div>
      </section>

      {/* Supported Platforms Banner */}
      <section id="platforms" className="relative z-10 border-y border-[#181a20] bg-[#0b0c10]/70 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Supported Integrations & Channels
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {['Twitter / X', 'LinkedIn', 'Instagram', 'YouTube', 'TikTok', 'Threads', 'Telegram', 'Pinterest'].map((platform) => (
              <div 
                key={platform} 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#13151c] border border-[#22252e] text-slate-300 font-semibold text-sm hover:border-[#ADFA1D]/60 hover:text-[#ADFA1D] transition-all cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-[#ADFA1D]" />
                <span>{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase (Abstract Sleek Mockup) */}
      <section id="showcase" className="relative z-10 py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#ADFA1D] mb-3">Live Platform Preview</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Engineered for speed, clarity & control</h3>
        </div>

        <div className="rounded-2xl border border-[#232733] bg-[#0c0e14]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
          {/* Top Window Bar */}
          <div className="h-12 border-b border-[#1f232e] bg-[#10121a] px-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-500 font-medium ml-4">collosy.app / workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-6 px-3 rounded-md bg-[#181b24] text-[11px] font-medium text-slate-400 flex items-center gap-2 border border-[#242834]">
                <span className="w-2 h-2 rounded-full bg-[#ADFA1D]" />
                System Status: Operational
              </div>
            </div>
          </div>

          {/* App Window Layout */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="hidden lg:flex flex-col gap-3 border-r border-[#1f232e] pr-6">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Workspace</div>
              {[
                { name: 'Analytics Hub', active: true },
                { name: 'Post Scheduler', active: false },
                { name: 'AI Copilot', active: false },
                { name: 'Channel Manager', active: false },
                { name: 'Media Library', active: false },
                { name: 'Settings', active: false },
              ].map((item) => (
                <div 
                  key={item.name} 
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    item.active 
                      ? 'bg-[#ADFA1D]/15 text-[#ADFA1D] border border-[#ADFA1D]/30' 
                      : 'text-slate-400 hover:text-white hover:bg-[#151821]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.active && <div className="w-1.5 h-1.5 rounded-full bg-[#ADFA1D]" />}
                </div>
              ))}
            </div>

            {/* Main Mock Dashboard View */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-[#131620] border border-[#222633] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Total Engagement</span>
                    <span className="text-[#ADFA1D] bg-[#ADFA1D]/10 px-2 py-0.5 rounded font-bold">+28.4%</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">142,890</div>
                  <div className="text-xs text-slate-500">Total interactions across channels</div>
                </div>

                <div className="p-5 rounded-xl bg-[#131620] border border-[#222633] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Net Audience Reach</span>
                    <span className="text-[#ADFA1D] bg-[#ADFA1D]/10 px-2 py-0.5 rounded font-bold">+44.1%</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">2,850,400</div>
                  <div className="text-xs text-slate-500">Unique monthly impressions</div>
                </div>

                <div className="p-5 rounded-xl bg-[#131620] border border-[#222633] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                    <span>Active Queued Posts</span>
                    <span className="text-slate-300 bg-slate-800 px-2 py-0.5 rounded font-bold">24 Active</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">186</div>
                  <div className="text-xs text-slate-500">Published this month</div>
                </div>
              </div>

              {/* Chart Graphic */}
              <div className="p-6 rounded-xl bg-[#131620] border border-[#222633]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-base font-bold text-white">Audience Trajectory</h4>
                    <p className="text-xs text-slate-400">Real-time performance analytics</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#ADFA1D] text-black text-xs font-bold">7 Days</span>
                    <span className="px-3 py-1 rounded-md bg-[#1b1f2b] text-slate-400 text-xs font-medium">30 Days</span>
                  </div>
                </div>

                {/* SVG Chart Visualization */}
                <div className="h-48 flex items-end gap-3 pt-4 pb-2 border-b border-[#222633]">
                  {[
                    { day: 'Mon', h: 30, val: '14k' },
                    { day: 'Tue', h: 55, val: '32k' },
                    { day: 'Wed', h: 45, val: '24k' },
                    { day: 'Thu', h: 80, val: '68k' },
                    { day: 'Fri', h: 65, val: '48k' },
                    { day: 'Sat', h: 95, val: '96k' },
                    { day: 'Sun', h: 70, val: '58k' },
                  ].map((bar) => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">{bar.val}</span>
                      <div 
                        className="w-full rounded-t-lg bg-gradient-to-t from-[#84CC16] to-[#ADFA1D] group-hover:brightness-125 transition-all shadow-[0_0_15px_rgba(173,250,29,0.2)]" 
                        style={{ height: `${bar.h}%` }}
                      />
                      <span className="text-xs font-semibold text-slate-500">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Clean Abstract Cards, NO EMOJIS) */}
      <section id="features" className="relative z-10 py-24 max-w-7xl mx-auto px-6 border-t border-[#181a20]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#ADFA1D] mb-3">Capabilities</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">Designed for scale and execution</h3>
          <p className="text-base text-slate-400">Everything you need to automate your social pipeline without compromising quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tag: 'AI ENGINE',
              title: 'Content Generation & Optimization',
              desc: 'Draft viral posts, format long-form threads, and tailor messaging to platform specs automatically.',
            },
            {
              tag: 'SCHEDULING',
              title: 'Multi-Channel Calendar Queue',
              desc: 'Plan, queue, and schedule posts across all active channels with precision timing.',
            },
            {
              tag: 'ANALYTICS',
              title: 'Unified Performance Tracking',
              desc: 'Consolidate impressions, engagement ratios, and audience growth into clear visual dashboards.',
            },
            {
              tag: 'WORKSPACES',
              title: 'Team & Client Management',
              desc: 'Structure separate organization workspaces, manage access permissions, and streamline client reviews.',
            },
            {
              tag: 'AUTOMATION',
              title: 'Evergreen Content Recycling',
              desc: 'Automatically re-queue top performing posts to maximize reach without duplicate effort.',
            },
            {
              tag: 'SECURITY',
              title: 'Encrypted Token Storage',
              desc: 'Bank-level encryption for OAuth tokens, strict security controls, and complete privacy.',
            },
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-[#0f1117] border border-[#202430] hover:border-[#ADFA1D]/60 hover:bg-[#131620] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex px-3 py-1 rounded-md bg-[#ADFA1D]/10 border border-[#ADFA1D]/30 text-[11px] font-extrabold text-[#ADFA1D] uppercase tracking-wider mb-6">
                  {feature.tag}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#ADFA1D] transition-colors">{feature.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1a1d26] flex items-center text-xs font-bold text-slate-400 group-hover:text-[#ADFA1D] gap-1 group-hover:translate-x-1 transition-all">
                <span>View Details</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wall of Love Section */}
      <section id="wall-of-love" className="relative z-10 py-24 bg-[#0b0c10] border-t border-[#181a20]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#ADFA1D] mb-3">Feedback</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">What creators are saying</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Collosy saved us over 15 hours a week in content operations. The AI tools generate better hooks than our old agency.",
                name: "Alex Rivera",
                role: "Founder @ SaaSify",
              },
              {
                quote: "Managing 12 client accounts used to be overwhelming. With Collosy, we schedule our entire week in under 2 hours.",
                name: "Sarah Chen",
                role: "Head of Growth @ Digital Agency",
              },
              {
                quote: "The cross-platform analytics breakdown is unmatched. Having all engagement metrics in one dark mode screen is essential.",
                name: "Marcus Vance",
                role: "Tech Creator (250k Audience)",
              },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#12141c] border border-[#222633] flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="pt-4 border-t border-[#1f2330]">
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-b from-[#141722] to-[#0d0f17] border border-[#2a2f40] p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_100px_rgba(173,250,29,0.1)]">
          <div className="absolute -top-[100px] left-[50%] -translate-x-[50%] w-[400px] h-[200px] bg-[#ADFA1D]/20 blur-[100px] rounded-full" />

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 relative z-10">
            Ready to scale your social footprint?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of creators and businesses using Collosy to manage content automatically.
          </p>

          <div className="flex justify-center relative z-10">
            <Link 
              href="/auth" 
              className="h-14 px-10 rounded-xl bg-[#ADFA1D] hover:bg-[#96d917] text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(173,250,29,0.5)] transition-all transform hover:-translate-y-1"
            >
              Get Started Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#181a20] bg-[#060708] py-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#ADFA1D] flex items-center justify-center text-black font-black text-xs">C</div>
            <span className="text-base font-bold text-white">Collosy</span>
          </div>
          <div>© {new Date().getFullYear()} Collosy Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="https://collosy.com/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="https://collosy.com/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
