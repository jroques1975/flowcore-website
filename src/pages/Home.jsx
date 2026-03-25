import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';

const products = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14M3 9h9M3 13h6M15 12v6M12 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'LedgerFlowAI',
    tagline: 'Accounting & financial operations',
    description:
      'A practical accounting platform for small businesses. Keep financial records organized, gain visibility into performance, and manage accounting workflows without unnecessary complexity.',
    features: ['Financial reporting', 'Transaction organization', 'Reconciliation support', 'Performance visibility'],
    badge: 'Live',
    to: '/products',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="9" width="10" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    name: 'Task Intelligence',
    tagline: 'Workflow & task management',
    description:
      'A smart tool for organizing work, managing priorities, and improving follow-through. Designed to reduce friction in day-to-day task management for individuals and growing teams.',
    features: ['Task organization', 'Priority management', 'Workflow visibility', 'Team execution'],
    badge: 'In development',
    to: '/products',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'More coming',
    tagline: 'Platform vision',
    description:
      'FlowCore Systems is building a connected foundation for business software. Future products will cover automation, reporting, workflow integration, and other operational tools.',
    features: ['Business automation', 'Connected workflows', 'Operational reporting', 'Integrated tooling'],
    badge: 'Planned',
    to: '/products',
  },
];

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 9h14M9 2v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Reduce friction',
    description: 'Every product is designed to remove unnecessary steps and simplify how work gets done.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Improve visibility',
    description: 'Clear systems mean better decisions. Our tools surface what matters so you can act with confidence.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 15l5-5 3 3 4-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Practical, not bloated',
    description: 'We build focused tools that solve real problems — not feature-heavy platforms that create new ones.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Support better decisions',
    description: 'Software that organizes information clearly helps teams make faster, more informed choices.',
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background glows */}
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 relative text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-medium text-indigo-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
            Practical software for modern business
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            Intelligent systems for{' '}
            <span className="gradient-text">modern business</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            FlowCore Systems builds software designed to help businesses operate with more clarity, better structure, and less friction — from accounting to workflow management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors shadow-lg shadow-indigo-600/25"
            >
              Explore our products
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-card hover:bg-white/[0.08] text-white font-medium transition-all"
            >
              Learn what we're building
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">Products</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Software built for real operations
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Each product is designed around a specific operational need — practical tools that support the way businesses actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.name} {...product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Why FlowCore */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">Why FlowCore</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Software that supports real work
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We believe good software should get out of your way and help you focus on what actually matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass-card rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/15 to-violet-500/15 border border-indigo-500/15 flex items-center justify-center text-indigo-400 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to get started"
        heading="Bring more clarity to your business operations"
        subtext="Explore LedgerFlowAI or reach out to learn about what we are building next."
        primaryLabel="See our products"
        primaryTo="/products"
        secondaryLabel="Get in touch"
        secondaryTo="/contact"
      />
    </main>
  );
}
