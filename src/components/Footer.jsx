import { Link } from 'react-router-dom';

const links = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Products: [
    { label: 'LedgerFlowAI', to: '/products' },
    { label: 'Task Intelligence', to: '/products' },
    { label: 'Coming soon', to: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/flowcore-logo-dark.png"
                alt="FlowCore Systems"
                className="h-8 w-auto"
                style={{ mixBlendMode: 'screen' }}
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building practical software for businesses that need clarity, structure, and better operational tools.
            </p>
            <p className="text-slate-600 text-xs mt-5">
              www.flowcoresystemsai.com
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} FlowCore Systems. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            contact@flowcoresystemsai.com
          </p>
        </div>
      </div>
    </footer>
  );
}
