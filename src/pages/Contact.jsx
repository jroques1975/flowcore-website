import { useState } from 'react';

const contactReasons = [
  'Learn about LedgerFlowAI',
  'Request a demo',
  'General inquiry',
  'Partnership',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', reason: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1 pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none opacity-60" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Let's talk about what you need
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you want to learn more about LedgerFlowAI, request a demo, or just see what we're building — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">Get in touch</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We're an early-stage company that takes every conversation seriously. If you have a question or want to explore how our tools might help your business, send us a message and we'll follow up.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-indigo-400 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm text-white">contact@flowcoresystemsai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-indigo-400 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Response time</p>
                    <p className="text-sm text-white">Within 1–2 business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-indigo-400 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2C5.79 2 4 3.79 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Website</p>
                    <p className="text-sm text-white">www.flowcoresystemsai.com</p>
                  </div>
                </div>
              </div>

              {/* Demo CTA */}
              <div className="glass-card rounded-xl p-5 border-indigo-500/15">
                <p className="text-sm font-semibold text-white mb-1.5">Schedule a demo</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Want to see LedgerFlowAI in action? Mention it in your message and we'll set up a walkthrough.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message received</h3>
                  <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out. We'll get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Your name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Email address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">What brings you here?</label>
                    <select
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-navy-900">Select a reason</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r} className="bg-navy-900">{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for or what questions you have..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/20"
                  >
                    Send message
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    We'll respond to every message personally.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
