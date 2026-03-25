import { Link } from 'react-router-dom';

export default function ProductCard({ icon, name, tagline, description, features, badge, to = '/products', delay = 0 }) {
  return (
    <div
      className="glass-card rounded-2xl p-8 hover:border-indigo-500/20 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:from-indigo-500/30 group-hover:to-violet-500/30 transition-all">
          {icon}
        </div>
        {badge && (
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-sm font-medium text-indigo-400 mb-3">{tagline}</p>
      <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors mt-auto"
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}
