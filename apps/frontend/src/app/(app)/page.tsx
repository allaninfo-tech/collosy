import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-slate-100 font-sans selection:bg-[#ADFA1D] selection:text-black overflow-x-hidden relative">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[200px] left-[50%] -translate-x-[50%] w-[900px] h-[450px] bg-[#612bd3]/20 blur-[160px] rounded-full mix-blend-screen" />
        <div className="absolute top-[800px] -left-[200px] w-[500px] h-[500px] bg-[#ADFA1D]/10 blur-[180px] rounded-full mix-blend-screen" />
        <div className="absolute top-[1800px] -right-[200px] w-[600px] h-[600px] bg-[#d82d7e]/15 blur-[200px] rounded-full mix-blend-screen" />
      </div>

      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1a1919] bg-[#0e0e0e]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#612bd3] flex items-center justify-center shadow-[0_0_20px_rgba(97,43,211,0.4)] group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-extrabold text-xl leading-none">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white transition-colors">
              Collosy
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#agents" className="hover:text-white transition-colors">Agents</a>
            <a href="#analytics" className="hover:text-white transition-colors">Analytics</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login" 
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-[#1a1919] transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth" 
              className="h-10 px-5 rounded-lg bg-[#ADFA1D] hover:bg-[#96d917] text-black font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(173,250,29,0.2)] hover:shadow-[0_0_35px_rgba(173,250,29,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2b2b2b] bg-[#1a1919]/80 backdrop-blur-md mb-10 hover:border-[#612bd3]/50 transition-colors cursor-pointer group">
          <span className="flex h-2 w-2 rounded-full bg-[#d82d7e] animate-pulse" />
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            Meet your new social media agents
          </span>
          <svg className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mb-8 leading-[1.1]">
          Manage your <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ADFA1D] via-[#612bd3] to-[#d82d7e]">
            Social Posting Schedule
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
          Plan, organize, and grow your brand across 20+ platforms from one unified workspace. Let intelligent AI agents handle the heavy lifting of content creation and scheduling.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <Link 
            href="/auth" 
            className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#612bd3] hover:bg-[#5221b8] text-white font-bold text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(97,43,211,0.4)] transition-all transform hover:-translate-y-1"
          >
            <span>Start Free Trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Hero Image / Mockup */}
        <div className="w-full max-w-5xl relative rounded-2xl overflow-hidden border border-[#2b2b2b] shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10 opacity-60" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Team collaborating on social media schedule"
            className="w-full h-[500px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute bottom-10 left-10 z-20 text-left">
            <h3 className="text-3xl font-bold text-white mb-2 shadow-sm">Built for modern teams</h3>
            <p className="text-slate-200 text-lg max-w-xl">Collaborate seamlessly and let our tools streamline your entire content pipeline.</p>
          </div>
        </div>
      </section>

      {/* Bento Box Features Section */}
      <section id="features" className="relative z-10 py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything you need to scale</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete suite of tools designed to take the stress out of social media management.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          {/* Feature 1 - Large spanning 2 columns */}
          <div className="md:col-span-2 relative rounded-3xl border border-[#2b2b2b] bg-[#1a1919]/60 backdrop-blur-sm overflow-hidden group hover:border-[#612bd3]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#612bd3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-10 z-10 relative h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#612bd3]/20 flex items-center justify-center mb-6 text-[#ADFA1D]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Multi-Platform Calendar</h3>
                <p className="text-slate-400 max-w-md">
                  Visualize your entire content strategy. Drag and drop posts, schedule weeks in advance, and perfectly time your launches across Twitter, LinkedIn, Instagram, and more.
                </p>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden border border-[#2b2b2b]">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Social Media platforms" className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Feature 2 - Small */}
          <div className="relative rounded-3xl border border-[#2b2b2b] bg-[#1a1919]/60 backdrop-blur-sm overflow-hidden group hover:border-[#d82d7e]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d82d7e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-10 z-10 relative h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#d82d7e]/20 flex items-center justify-center mb-6 text-[#d82d7e]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Agents</h3>
              <p className="text-slate-400">
                Generate high-quality captions, create threads, and even let AI agents find the best free slots on your calendar to post automatically.
              </p>
              <div className="mt-auto pt-6 flex justify-end">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="AI Agent Mascot" className="w-24 h-24 rounded-full object-cover border-2 border-[#2b2b2b]" />
              </div>
            </div>
          </div>

          {/* Feature 3 - Small */}
          <div className="relative rounded-3xl border border-[#2b2b2b] bg-[#1a1919]/60 backdrop-blur-sm overflow-hidden group hover:border-[#ADFA1D]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ADFA1D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-10 z-10 relative h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#ADFA1D]/20 flex items-center justify-center mb-6 text-[#ADFA1D]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Unified Analytics</h3>
              <p className="text-slate-400">
                Track views, engagements, and follower growth across all networks in one centralized dashboard.
              </p>
            </div>
          </div>

          {/* Feature 4 - Large spanning 2 columns */}
          <div className="md:col-span-2 relative rounded-3xl border border-[#2b2b2b] bg-[#1a1919]/60 backdrop-blur-sm overflow-hidden group hover:border-[#612bd3]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#612bd3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-10 z-10 relative h-full flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#612bd3]/20 flex items-center justify-center mb-6 text-[#612bd3]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Automations & Add-ons</h3>
                <p className="text-slate-400">
                  Save hours of manual work. Automatically ingest RSS feeds, shrink links via custom domains, and trigger custom workflows with inbound webhooks.
                </p>
              </div>
              <div className="flex-1 w-full h-full rounded-xl overflow-hidden border border-[#2b2b2b]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Data and automation" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 py-24 mb-10 max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-[#2b2b2b] bg-gradient-to-br from-[#1a1919] to-[#0e0e0e] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ADFA1D]/10 blur-[100px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#612bd3]/20 blur-[100px] rounded-full mix-blend-screen" />
          
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Ready to transform your social strategy?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of creators and brands who use Collosy to schedule posts and grow their audience effortlessly.
          </p>
          <Link 
            href="/auth" 
            className="inline-flex h-14 px-8 rounded-xl bg-[#ADFA1D] hover:bg-[#96d917] text-black font-bold text-base items-center justify-center gap-3 shadow-[0_0_30px_rgba(173,250,29,0.3)] hover:shadow-[0_0_45px_rgba(173,250,29,0.5)] transition-all transform hover:-translate-y-1 relative z-10"
          >
            Get Started For Free
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1a1919] py-10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Collosy. All rights reserved.</p>
      </footer>
    </div>
  );
}
