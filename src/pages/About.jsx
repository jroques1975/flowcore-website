import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const values = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Practical over complicated',
    description:
      'We start with the problem, not the technology. Every feature we build has to earn its place by making something meaningfully easier.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Clarity in everything',
    description:
      'Good software surfaces the right information at the right time. We design for clarity — in data, in workflows, and in interfaces.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 14l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Built for real business',
    description:
      'Our users are operators, owners, and teams managing real work. We build tools that fit into actual workflows, not ideal ones.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 10v6M10 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Incremental and intentional',
    description:
      'We grow the platform deliberately. Each product is fully developed before the next begins, so quality stays consistent.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v4M9 12v4M2 9h4M12 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Reduce operational friction',
    description:
      'Every hour spent fighting bad software is an hour not spent on the work that matters. We take that seriously.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 14V8a5 5 0 0110 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="2" y="14" width="14" height="2" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Long-term foundation',
    description:
      'We are building a platform, not a collection of disconnected tools. Future products will connect and compound on what comes before.',
  },
];

export default function About() {
  return (
    <main className="flex-1 pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none opacity-60" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight max-w-3xl mx-auto">
            Building software for{' '}
            <span className="gradient-text">businesses that need it to work</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            FlowCore Systems was created to build practical software that helps businesses run better. The focus is on clarity, usefulness, and systems that support real operational needs.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Our mission</p>
              <h2 className="text-3xl font-semibold text-white mb-6 leading-snug">
                Practical software for businesses that want to operate with more clarity
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Most businesses don't need more complexity — they need better visibility, cleaner systems, and tools that fit into how they actually work. FlowCore Systems was built around that belief.
                </p>
                <p>
                  We started with accounting because it is one of the areas where small businesses most often struggle with clarity. LedgerFlowAI was built to address that directly — not as a generic tool, but as a focused platform for financial operations.
                </p>
                <p>
                  Over time, we are expanding into other operational areas where the same problem exists: too much friction, too little visibility, and software that was designed for someone else's needs.
                </p>
              </div>
            </div>

            {/* Stats / highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1', label: 'Live product' },
                { value: '2+', label: 'Products in development' },
                { value: '100%', label: 'Focused on small business' },
                { value: '∞', label: 'Room to grow' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-7 text-center">
                  <p className="text-4xl font-semibold gradient-text mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">How we think</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Our approach to building software
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              These principles guide every product decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/15 to-violet-500/15 border border-indigo-500/15 flex items-center justify-center text-indigo-400 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we build for */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/6 to-violet-600/6 pointer-events-none rounded-3xl" />
            <div className="relative max-w-xl">
              <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Who we build for</p>
              <h2 className="text-2xl font-semibold text-white mb-5">
                Small businesses, operators, and growing teams
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Our tools are for business owners managing their own financials, operators who need to see what's actually happening across their work, and teams that need better structure without enterprise complexity.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                If you run a small business and you're tired of software that feels like it was built for someone ten times your size, we're building for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let's connect"
        heading="Interested in what we're building?"
        subtext="Reach out to learn more about our products or share what you're looking for."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="See our products"
        secondaryTo="/products"
      />
    </main>
  );
}
