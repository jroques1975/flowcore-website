import { Link } from 'react-router-dom';

export default function CTASection({
  eyebrow = 'Get started',
  heading = 'Ready to bring more clarity to your operations?',
  subtext = 'Explore our products or reach out to learn what we are building.',
  primaryLabel = 'Explore products',
  primaryTo = '/products',
  secondaryLabel = 'Contact us',
  secondaryTo = '/contact',
}) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden glass-card p-12 md:p-16 text-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-indigo-500/60 to-transparent" />

          <div className="relative">
            {eyebrow && (
              <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">{eyebrow}</p>
            )}
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 max-w-2xl mx-auto leading-snug">
              {heading}
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">{subtext}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={primaryTo}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/25"
              >
                {primaryLabel}
              </Link>
              <Link
                to={secondaryTo}
                className="w-full sm:w-auto px-7 py-3 rounded-xl glass-card hover:bg-white/[0.08] text-white font-medium text-sm transition-all"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
