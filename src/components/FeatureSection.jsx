export default function FeatureSection({ eyebrow, heading, subheading, features }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-glow absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          {eyebrow && (
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">{eyebrow}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">{heading}</h2>
          {subheading && (
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{subheading}</p>
          )}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/15 to-violet-500/15 border border-indigo-500/15 flex items-center justify-center text-indigo-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
