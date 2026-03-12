export default function Home() {
  const services = [
    {
      number: "01",
      title: "Content Creation",
      description:
        "Scroll-stopping visuals and copy engineered for each platform. We don't repurpose—we create natively for where your audience lives.",
      tags: ["Reels", "Carousels", "Short-Form", "Copywriting"],
    },
    {
      number: "02",
      title: "Paid Social",
      description:
        "Meta, TikTok, and YouTube ad campaigns built around real data. Every dollar is tracked, tested, and optimized to turn spend into revenue.",
      tags: ["Meta Ads", "TikTok Ads", "Retargeting", "A/B Testing"],
    },
    {
      number: "03",
      title: "Brand Strategy",
      description:
        "We define how your brand sounds, looks, and feels across every touchpoint—so your presence is unmistakable no matter the platform.",
      tags: ["Positioning", "Voice & Tone", "Visual Identity", "Messaging"],
    },
    {
      number: "04",
      title: "Community Growth",
      description:
        "Organic growth that compounds. We build engaged communities that convert—turning followers into customers and customers into advocates.",
      tags: ["Organic Strategy", "Engagement", "Influencer", "Analytics"],
    },
  ];

  const work = [
    {
      label: "Fashion & Lifestyle",
      headline: "340% follower growth in 90 days.",
      description:
        "A DTC fashion brand came to us with a stagnant audience. We rebuilt their content engine from scratch—new creative direction, posting cadence, and community strategy.",
      stat: "340%",
      statLabel: "Follower Growth",
    },
    {
      label: "Fitness App",
      headline: "2.1M organic impressions per month.",
      description:
        "We repositioned their TikTok presence around educational content and founder-led storytelling. The account became a top-of-funnel machine.",
      stat: "2.1M",
      statLabel: "Monthly Impressions",
    },
    {
      label: "Restaurant Group",
      headline: "$180K in social-driven revenue, one quarter.",
      description:
        "Hyper-local paid campaigns paired with organic buzz created a sellout effect. Every campaign we ran outperformed the previous one.",
      stat: "$180K",
      statLabel: "Attributed Revenue",
    },
  ];

  const metrics = [
    { value: "50M+", label: "Total impressions generated across client accounts" },
    { value: "3×–10×", label: "Average return on paid social investment" },
    { value: "100+", label: "Brands scaled since we started" },
  ];

  const ticker = [
    "Instagram",
    "TikTok",
    "YouTube",
    "LinkedIn",
    "X / Twitter",
    "Threads",
    "Facebook",
    "Pinterest",
  ];

  return (
    <div className="bg-[#080808] text-[#f0f0f0] min-h-screen overflow-x-hidden">
      {/* ── NAV ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-subtle bg-[#080808]/80 backdrop-blur-md">
        <a href="#" className="text-lg font-semibold tracking-wider uppercase">
          3six9
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[#888] tracking-wide">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
        <a
          href="#contact"
          className="text-sm border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all px-5 py-2 rounded-full tracking-wide"
        >
          Start a Project
        </a>
      </header>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="grid-bg relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-[#666] mb-8">
            Social Media Agency — Est. 2022
          </p>

          <h1 className="animate-fade-up-delay-1 text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-tight mb-10">
            We Build Brands<br />
            <span className="text-grad">The Internet Remembers.</span>
          </h1>

          <p className="animate-fade-up-delay-2 max-w-xl text-[#777] text-lg md:text-xl leading-relaxed mb-12">
            3six9 is a social media agency for brands that want more than
            impressions. We build content strategies, run campaigns, and grow
            communities that actually convert.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#e0e0e0] transition-colors"
            >
              See Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm text-[#888] hover:text-white px-7 py-3.5 transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div className="border-y border-subtle overflow-hidden py-5 bg-[#0c0c0c]">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-sm text-[#555] uppercase tracking-[0.2em] mx-8">
              {item}
              <span className="ml-8 text-[#333]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="px-6 md:px-12 py-32 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Built for the<br />feed economy.
            </h2>
          </div>
          <p className="text-[#666] max-w-sm text-sm leading-relaxed">
            Every service we offer is designed around one goal: making your brand
            the one people stop scrolling for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-[#080808] p-8 md:p-10 group hover:bg-[#0f0f0f] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-[#444] font-mono">{s.number}</span>
                <svg
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[#555]"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#555] border border-white/[0.06] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <section id="work" className="px-6 md:px-12 py-32 border-t border-subtle">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-4">Featured Work</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-20">
            Results that<br />speak for themselves.
          </h2>

          <div className="space-y-px bg-white/[0.06]">
            {work.map((item, i) => (
              <div
                key={i}
                className="bg-[#080808] hover:bg-[#0d0d0d] transition-colors group"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 p-8 md:p-12 items-start">
                  <div>
                    <p className="text-xs text-[#444] uppercase tracking-[0.15em] mb-5">{item.label}</p>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                      {item.headline}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed max-w-lg">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end justify-between md:min-w-[180px]">
                    <div className="text-right">
                      <p className="text-5xl md:text-6xl font-bold text-grad leading-none">{item.stat}</p>
                      <p className="text-xs text-[#555] mt-2 uppercase tracking-widest">{item.statLabel}</p>
                    </div>
                    <span className="mt-8 text-xs text-[#444] group-hover:text-[#888] transition-colors uppercase tracking-widest">
                      Case Study →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────────────── */}
      <section id="about" className="px-6 md:px-12 py-32 border-t border-subtle bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-20">By The Numbers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {metrics.map((m, i) => (
              <div key={i} className="bg-[#0a0a0a] p-10 md:p-14">
                <p className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-none tracking-tight text-grad mb-4">
                  {m.value}
                </p>
                <p className="text-[#555] text-sm leading-relaxed max-w-[240px]">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 border border-subtle rounded-2xl p-8 md:p-12 bg-[#0d0d0d]">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#bbb] max-w-3xl">
              &ldquo;Most agencies chase vanity metrics. We obsess over the ones
              that move your business forward—revenue, conversions, and
              communities that stay.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                3S9
              </div>
              <div>
                <p className="text-sm font-medium">3six9 Agency</p>
                <p className="text-xs text-[#555]">Social Media Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="contact" className="px-6 md:px-12 py-40 border-t border-subtle grid-bg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[400px] rounded-full bg-white/[0.015] blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#555] mb-6">Let&apos;s Work Together</p>
          <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight mb-8">
            Ready to dominate<br />
            <span className="text-grad">your feed?</span>
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us about your brand. We&apos;ll tell you exactly how we&apos;d grow it.
            No templates, no guesswork—just a real strategy built for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@3six9agency.com"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#e0e0e0] transition-colors"
            >
              Start a Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:hello@3six9agency.com"
              className="text-sm text-[#666] hover:text-white transition-colors"
            >
              hello@3six9agency.com
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-10 border-t border-subtle">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-semibold tracking-wider uppercase">3six9</p>
          <div className="flex items-center gap-8 text-xs text-[#555] tracking-wide">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs text-[#444]">© 2025 3six9 Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
