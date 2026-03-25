import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const products = [
  {
    id: 'ledgerflow',
    name: 'LedgerFlowAI',
    logo: '/images/ledgerflow-logo-dark.png',
    tagline: 'Accounting & financial operations platform',
    badge: 'Live',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description:
      'LedgerFlowAI is an accounting and financial operations platform built for small businesses. It helps teams keep financial records organized, understand their financial position, and manage the workflows around accounting with less friction.',
    detail:
      'Whether you are tracking transactions, running reports, or working through reconciliation, LedgerFlowAI is designed to make the day-to-day financial work more manageable — and give business owners better visibility into how their company is performing.',
    features: [
      { title: 'Financial Reporting', description: 'Profit & loss, balance sheet, and cash flow reports that give you a clear view of your business performance.' },
      { title: 'Transaction Organization', description: 'Keep income and expenses categorized and organized so your records stay accurate and accessible.' },
      { title: 'Reconciliation Support', description: 'Tools to help match transactions and maintain clean financial records over time.' },
      { title: 'Accounts Management', description: 'Manage your chart of accounts with a structure that fits your business.' },
      { title: 'Invoices & Billing', description: 'Create and track invoices for your customers and manage outstanding balances.' },
      { title: 'Built for Growth', description: 'Designed to support small businesses that need practical tools without enterprise complexity.' },
    ],
    icon: null,
  },
  {
    id: 'task-intelligence',
    name: 'Task Intelligence',
    logo: null,
    tagline: 'Smart task and workflow management',
    badge: 'In development',
    badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    description:
      'Task Intelligence is a workflow and task management tool built to help individuals and teams organize work clearly, manage priorities, and improve execution. It is designed to reduce the friction that comes with scattered tasks and unclear ownership.',
    detail:
      'The goal is a tool that helps you see what needs to be done, what matters most, and what is actually getting done — without adding layers of complexity or unnecessary process overhead.',
    features: [
      { title: 'Task Organization', description: 'Capture, organize, and group tasks in a way that reflects how your work actually flows.' },
      { title: 'Priority Management', description: 'Keep focus on what matters by surfacing high-priority work and reducing noise.' },
      { title: 'Workflow Visibility', description: 'See the state of work across your team or projects without digging through updates.' },
      { title: 'Better Execution', description: 'Simple, focused tools that support follow-through without adding overhead.' },
      { title: 'Personal & Team Use', description: 'Works for individual operators as well as small teams managing shared workloads.' },
      { title: 'Intelligent Over Time', description: 'Designed to evolve toward smarter workflow support as usage patterns develop.' },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="5" width="20" height="4" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="4" y="12" width="14" height="4" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="4" y="19" width="9" height="4" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <main className="flex-1 pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none opacity-60" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Products</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Software built for{' '}
            <span className="gradient-text">real business operations</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each product targets a specific operational need. Practical tools, clean design, and a focus on what actually helps businesses run better.
          </p>
        </div>
      </section>

      {/* Product detail sections */}
      {products.map((product, idx) => (
        <section key={product.id} className={`py-20 relative ${idx % 2 === 1 ? 'bg-white/[0.02]' : ''}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: info */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon — only shown when there's no logo */}
                  {!product.logo && (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      {product.icon}
                    </div>
                  )}
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product name — logo image or text heading */}
                {product.logo ? (
                  <div className="mb-4">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="h-10 w-auto"
                      style={{ mixBlendMode: 'screen' }}
                    />
                  </div>
                ) : (
                  <h2 className="text-3xl font-semibold text-white mb-2">{product.name}</h2>
                )}

                <p className="text-indigo-400 font-medium mb-5">{product.tagline}</p>
                <p className="text-slate-400 leading-relaxed mb-4">{product.description}</p>
                <p className="text-slate-500 leading-relaxed text-sm">{product.detail}</p>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-600/20"
                  >
                    Get in touch
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: features */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                {product.features.map((f) => (
                  <div key={f.title} className="glass-card rounded-xl p-5 hover:border-white/[0.12] transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mb-3" />
                    <h4 className="text-sm font-semibold text-white mb-1.5">{f.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Future vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="section-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 to-violet-600/8 pointer-events-none rounded-3xl" />
            <div className="relative max-w-2xl">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Planned
              </span>
              <h2 className="text-3xl font-semibold text-white mt-5 mb-4">
                A growing platform for business software
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                FlowCore Systems is building more than individual tools. The longer-term goal is a connected foundation for business software — products that work well independently and even better together.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Future solutions may include automation tools, advanced reporting, workflow integrations, and other systems designed for the operational needs of growing businesses. We build incrementally, based on what businesses actually need.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Learn about our approach
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Interested in our products"
        heading="Let's talk about what we're building"
        subtext="Have questions about LedgerFlowAI or want to know more? We'd love to hear from you."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="About FlowCore"
        secondaryTo="/about"
      />
    </main>
  );
}
