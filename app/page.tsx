export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Productivity Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Who Actually Shows Up to Discord Calls
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time attendance analytics for Discord voice channels. See who joins, who leaves early, and who never shows — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $12/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-24">
        {[
          { icon: "📊", title: "Attendance Reports", desc: "Per-user and per-channel breakdowns" },
          { icon: "⏱️", title: "Punctuality Scores", desc: "Track who joins on time vs late" },
          { icon: "🔔", title: "Webhook Alerts", desc: "Get notified of no-shows instantly" },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Discord servers",
              "Real-time join/leave tracking",
              "Attendance & punctuality charts",
              "CSV export for reports",
              "Webhook & email alerts",
              "30-day data history",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to Discord?",
              a: "You invite our bot to your server. It listens to voice channel events via the Discord Gateway API and sends data to your dashboard — no manual setup needed.",
            },
            {
              q: "Is my server data private?",
              a: "Yes. We only store join/leave timestamps and user IDs. No messages, no media. Data is encrypted at rest and never shared with third parties.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. Cancel from your billing portal with one click. You keep access until the end of your billing period.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Discord VC Attendance Tracker. All rights reserved.
      </footer>
    </main>
  )
}
