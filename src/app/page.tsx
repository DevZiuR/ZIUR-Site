import { Reveal } from "@/components/Reveal";

const services = [
  {
    number: "001",
    title: "Web Design & Development",
    copy: "Custom sites built to convert high-intent visitors into booked clients. Not templates, not builders.",
    items: [
      "UI/UX Design",
      "Booking & Lead Flow Systems",
      "API & Chatbot Integrations",
      "Mobile & Speed Optimization",
      "Ecommerce Design",
    ],
  },
  {
    number: "002",
    title: "Paid Advertising",
    copy: "Google and Meta campaigns structured around your actual revenue goals, not vanity metrics.",
    items: [
      "Meta & Google Ads",
      "Landing Page Design",
      "Retargeting Systems",
      "Conversion Tracking",
    ],
  },
  {
    number: "003",
    title: "SEO & Content",
    copy: "Location pages, editorial content, and GMB optimization that put you in front of people searching right now.",
    items: [
      "Technical SEO",
      "On-Page Optimization",
      "Editorial Content",
      "Local & GMB Ranking",
    ],
  },
  {
    number: "004",
    title: "Brand & Positioning",
    copy: "Visual identity and messaging that makes your price tag feel justified before they ever call you.",
    items: [
      "Brand Strategy",
      "Visual Identity",
      "Voice & Messaging",
      "Creative Direction",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Diagnose",
    copy: "A deep audit of your market, funnel, and positioning to find the real friction.",
  },
  {
    step: "02",
    title: "Design",
    copy: "Strategy-turned-art direction: copy, visuals, and experience built as one system.",
  },
  {
    step: "03",
    title: "Launch",
    copy: "Ship the site, turn on the campaigns, and wire everything to a single source of truth.",
  },
  {
    step: "04",
    title: "Compound",
    copy: "Weekly iteration on data. We keep what converts and cut what doesn't.",
  },
];

const marqueeItems = [
  "Web Design",
  "Paid Advertising",
  "SEO & Content",
  "Brand & Positioning",
  "Conversion Rate Optimization",
];

const whoItsFor = [
  {
    title: "Exotic Car Rentals",
    copy: "You close $10K deals. Your website shouldn't look like a $500 build.",
  },
  {
    title: "Luxury Detailing, PPF & Ceramic Coating",
    copy: "Owners protecting a six-figure car don't Google shop on price. They shop on trust — and trust starts with your site.",
  },
  {
    title: "Luxury Contractors",
    copy: "You're bidding six figures on trust alone. Your site should build that trust before you ever pick up the phone.",
  },
  {
    title: "Premium Hotels",
    copy: "Guests compare five properties in five tabs. The best-looking site wins the booking, not the best room.",
  },
];

const caseStudies = [
  {
    number: "01",
    client: "APEX EXOTICS",
    year: "2026",
    title: "A $2.4M booking engine for a premier Miami exotic car fleet.",
    category: "Web Design & Development",
    services: ["UI/UX Design", "Booking Systems", "Conversion Optimization"],
    imageGradient: "from-emerald-950/80 via-teal-900/40 to-[#0a0a0a]",
  },
  {
    number: "02",
    client: "OBSIDIAN PPF",
    year: "2026",
    title: "Positioning a high-end protection studio as the obvious choice for six-figure owners.",
    category: "Brand & High-Converting Site",
    services: ["Brand Strategy", "Visual Identity", "Custom Development"],
    imageGradient: "from-neutral-900 via-zinc-900/60 to-[#0a0a0a]",
  },
  {
    number: "03",
    client: "VESPER HOTEL",
    year: "2025",
    title: "A cinematic digital experience that tripled direct bookings over OTA channels.",
    category: "Hospitality UI/UX",
    services: ["UI/UX Architecture", "Booking Flow", "Speed Optimization"],
    imageGradient: "from-amber-950/70 via-stone-900/50 to-[#0a0a0a]",
  },
];

const pricingTiers = [
  {
    name: "Launch",
    tier: "Tier 01",
    price: "$1,500",
    cadence: "One-Time",
    tagline: "Your foundation. Built to convert from day one.",
    features: [
      "Custom Next.js or WordPress build (no templates)",
      "Sub-2s load time, Core Web Vitals optimized",
      "Up to 3 location or service landing pages",
      "GMB setup + schema markup (LocalBusiness)",
      "GA4 + Google Tag Manager + conversion tracking",
      "Click-to-call, WhatsApp widget, booking integration",
      "sitemap.xml, robots.txt, canonical tags on delivery",
    ],
    note: null,
    highlighted: false,
    cta: "Get the Launch Build →",
  },
  {
    name: "Growth",
    tier: "Tier 02",
    price: "$2,500",
    cadence: "/ month",
    tagline: "Paid traffic and SEO running together as one system.",
    features: [
      "Everything in Launch",
      "Google Ads: full campaign build, weekly optimization, A/B tested copy",
      "Meta Ads: cold + retargeting funnels across Facebook and Instagram",
      "4 SEO location/service pages per month",
      "GMB management (4 posts/month + Q&A)",
      "Retargeting via Meta Pixel + Google remarketing lists",
      "Weekly conversion report + live Looker Studio dashboard",
      "Monthly 60-min strategy call",
    ],
    note: "Ad spend billed directly by Google/Meta. Not included.",
    highlighted: true,
    cta: "Secure the Growth Retainer →",
  },
  {
    name: "Full System",
    tier: "Tier 03",
    price: "$4,000",
    cadence: "/ month",
    tagline: "Total market ownership. Built for businesses ready to dominate their category.",
    features: [
      "Everything in Growth",
      "8 SEO pages/month + 2 long-form editorial pieces",
      "Full brand messaging framework and visual identity audit",
      "Email/SMS lead follow-up sequence (written and configured)",
      "AI video content pipeline (scripts, direction, assets)",
      "8 social media assets/month",
      "Competitor brand term targeting on Google Ads",
      "Same-day WhatsApp access + 2-hour emergency response",
      "Quarterly 90-min strategy session with written action plan",
    ],
    note: "Ad spend billed directly by Google/Meta. Not included.",
    highlighted: false,
    cta: "Claim the Full System →",
  },
];

const FAQ = () => {
  const faqs = [
    {
      question: 'Are u gay',
      answer: 'Yes I am, do you have a problem with that?'
    },
    {
      question: 'Are u gay',
      answer: 'Yes I am, do you have a problem with that?'
    },
    {
      question: 'Are u gay',
      answer: 'Yes I am, do you have a problem with that?'
    },
  ]
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-transparent border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-heading text-xl font-semibold text-black">
            ZIUR.
          </a>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm text-black">
            <a href="#services" className="hover:text-black transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-black transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="font-sans text-sm font-semibold px-5 py-2 rounded-full bg-white text-ink hover:bg-white/90 transition-colors duration-300"
          >
            Start a project
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-32 text-center overflow-hidden bg-[#0a0a0a] text-white">
          <img
            src="https://i.imgur.com/3eVRuEG.png"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Diagonal line accents */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 0 L540 560"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <path
              d="M1440 0 L900 560"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </svg>

          <div className="relative z-10 flex flex-col items-center">
            <Reveal immediate>
              <p className="flex items-center gap-4 text-label font-sans uppercase text-neutral-500 mb-8">
                <span className="h-px w-10 bg-white/20" aria-hidden />
                Web · Ads · SEO
                <span className="h-px w-10 bg-white/20" aria-hidden />
              </p>
            </Reveal>

            <Reveal delay={100} immediate>
              <h1 className="font-heading text-display font-medium text-black text-6xl max-w-5xl mb-8 uppercase tracking-tight leading-[1.1]">
                Your competitors have worse service and better marketing. Let's fix that.
              </h1>
            </Reveal>

            <Reveal delay={200} immediate>
              <p className="font-sans text-lead text-black max-w-xl mb-12">
                Web, ads, and SEO built for exotic car rentals, luxury contractors, and premium hospitality, not generic small business marketing.
              </p>
            </Reveal>

            <Reveal delay={300} immediate>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="
                    inline-block font-sans font-semibold text-sm uppercase tracking-widest
                    px-8 py-4 rounded-full
                    bg-white text-ink
                    transition-colors duration-300
                    hover:bg-white/90
                  "
                >
                  Book Now
                </a>
                <a
                  href="#work"
                  className="
                    inline-block font-sans font-semibold text-sm uppercase tracking-widest
                    px-8 py-4 rounded-full
                    border border-white/25 text-white
                    transition-colors duration-300
                    hover:bg-white/10 hover:border-white/40
                  "
                >
                  See Our Work
                </a>
              </div>
            </Reveal>
          </div>

          {/* Marquee strip
          <div className="absolute bottom-0 inset-x-0 z-10 bg-ink text-paper border-t border-white/10 overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 px-4 py-3 font-sans text-label uppercase whitespace-nowrap"
                >
                  {item}
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-paper/50"
                    aria-hidden
                  />
                </span>
              ))}
            </div>
          </div>
          */}
        </section>

        {/* Studio positioning */}
        <section className="bg-[#e9e8e4] text-ink py-20 md:py-24 border-b border-ink/10">
          <div className="mx-auto max-w-[1500px] px-6 md:px-12">
            <Reveal>
              <div className="mb-10">
                <p className="font-sans text-label uppercase text-[#767676] tracking-[0.2em]">
                  Your Growth Partner
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-ink max-w-[1700px]">
                WE BUILD FOR BRANDS THAT SELL PRESTIGE, NOT PRICE. EXOTIC CAR RENTALS,
                LUXURY CONTRACTORS, AND PREMIUM BUSINESSES THAT REFUSE TO LOOK LIKE EVERYONE
                ELSE&apos;S COMPETITION. WE DON&apos;T BUILD PRETTY WEBSITES THAT SIT THERE, WE
                BUILD SYSTEMS THAT TURN YOUR TRAFFIC INTO BOOKINGS, YOUR BRAND INTO THE
                OBVIOUS CHOICE, AND YOUR MARKETING INTO SOMETHING YOUR COMPETITORS CAN&apos;T MATCH.
              </h2>
            </Reveal>

            <div className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-ink" aria-hidden />
                <a
                  href="#contact"
                  className="font-sans text-label uppercase tracking-[0.12em] text-ink hover:text-slate-indigo transition-colors duration-300"
                >
                  Contact us
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-10 md:mt-0">
                <p className="font-sans text-[0.78rem] uppercase leading-[1.55] text-ink/75 max-w-sm font-extrabold color-[#rgb(30, 32, 29)]">
                  ZIUR EXISTS TO TURN HIGH-TICKET BRANDS INTO THE BUSINESS PEOPLE ACTUALLY BOOK WITH, THROUGH WORK BUILT ON PROOF, NOT PROMISES.
                </p>
                <p className="font-sans text-[0.78rem] uppercase leading-[1.55] text-ink/75 max-w-sm">
                  WE TURN WEBSITES, ADS, AND SEARCH INTO SYSTEMS THAT CONVERT, DRIVE REAL BOOKINGS, AND MAKE YOUR PRICE TAG FEEL OBVIOUS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-[#111111] text-white py-28 sm:py-36 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-16 md:mb-24">
                <p className="font-sans text-label uppercase text-[#a0a0a0] tracking-[0.2em] mb-5">
                  The Gap
                </p>
                <h2 className="font-heading text-h1 md:text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white leading-[1.05] tracking-tight max-w-3xl">
                  Your service is premium.<br />Your marketing isn&apos;t keeping up.
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              <Reveal delay={0}>
                <div className="group bg-[#111111] p-8 sm:p-12 transition-colors duration-300 hover:bg-[#181818]">
                  <div className="mb-6">
                    <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-lavender-grey border border-lavender-grey/30 rounded-full px-3 py-1 mb-5">
                      Problem 01
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug">
                      The Website Problem
                    </h3>
                  </div>
                  <p className="font-sans text-body text-neutral-400 leading-relaxed">
                    Your site loads slow, looks generic, and sends high-intent visitors straight to your competitor&apos;s booking page.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="group bg-[#111111] p-8 sm:p-12 transition-colors duration-300 hover:bg-[#181818]">
                  <div className="mb-6">
                    <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-lavender-grey border border-lavender-grey/30 rounded-full px-3 py-1 mb-5">
                      Problem 02
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug">
                      The Ads Problem
                    </h3>
                  </div>
                  <p className="font-sans text-body text-neutral-400 leading-relaxed">
                    You&apos;re running Google Ads to your homepage with no dedicated landing page, no conversion tracking, and no idea what&apos;s actually working.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="group bg-[#111111] p-8 sm:p-12 transition-colors duration-300 hover:bg-[#181818]">
                  <div className="mb-6">
                    <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-lavender-grey border border-lavender-grey/30 rounded-full px-3 py-1 mb-5">
                      Problem 03
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug">
                      The SEO Problem
                    </h3>
                  </div>
                  <p className="font-sans text-body text-neutral-400 leading-relaxed">
                    Your competitors rank for &ldquo;exotic car rental Miami Beach&rdquo; and you don&apos;t. That search happens 800 times a month and you&apos;re invisible for it.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-[#0f0f0f] text-white py-28 sm:py-36 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-16 md:mb-24">
                <p className="font-sans text-label uppercase text-[#a0a0a0] tracking-[0.2em]">
                  Who We Work With
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2">
              {whoItsFor.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div
                    className={`
                      group relative p-8 sm:p-12 lg:p-16
                      transition-colors duration-300
                      border-[#222]
                      ${i === 0 ? "border-b md:border-r md:border-b" : ""}
                      ${i === 1 ? "border-b md:border-b" : ""}
                      ${i === 2 ? "border-b md:border-r md:border-b-0" : ""}
                      ${i === 3 ? "border-b-0" : ""}
                      md:hover:bg-white/[0.02]
                    `}
                  >
                    <div
                      className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-lavender-grey opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                      aria-hidden="true"
                    />
                    <h3 className="font-heading text-h3 font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="font-sans text-body text-[#a0a0a0] leading-relaxed">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="selected-projects" className="bg-[#e9e8e4] text-ink pt-16 md:pt-20 pb-4 md:pb-6 border-b border-ink/10">
          <div className="flex items-center justify-between px-6 md:px-12 mb-4">
            <p className="font-sans text-label uppercase tracking-[0.22em] text-ink/70">
              Selected Projects
            </p>
            <a href="#work" className="font-sans text-label uppercase tracking-[0.22em] text-ink/90 hover:text-slate-indigo transition-colors duration-300">
              See All Work
            </a>
          </div>

          <div className="px-6 md:px-12 pb-10 md:pb-14">
            <div className="relative overflow-hidden border border-ink/10 bg-[#191d20]">
              <img
                src="https://i.imgur.com/m7ES6Gy.png"
                alt=""
                className="block h-auto w-full max-w-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {/*
        <section id="work" className="bg-[#0a0a0a] text-white py-28 sm:py-36 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
                <div>
                  <p className="text-label font-sans uppercase text-[#a0a0a0] tracking-[0.2em] mb-4">
                    Case Studies
                  </p>
                  <h2 className="font-heading text-h1 font-semibold text-white">
                    Proof over promises.
                  </h2>
                </div>
                <p className="font-sans text-body text-neutral-400 max-w-md mt-4 md:mt-0">
                  Explore how we transform digital presence into high-ticket leverage for luxury brands.
                </p>
              </div>
            </Reveal>

            <div className="space-y-24 md:space-y-32">
              {caseStudies.map((study, index) => (
                <Reveal key={study.client} delay={index * 100}>
                  <div className="border border-white/10 rounded-2xl bg-white/[0.01] overflow-hidden transition-all duration-500 hover:border-white/20">
                    <div className="px-6 py-4 sm:px-8 sm:py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-label text-neutral-400">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-sm bg-lavender-grey" />
                        <span className="tracking-widest font-semibold text-white">{study.number}</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="tracking-widest uppercase">CLIENT <span className="text-white font-semibold">{study.client}</span></span>
                        <span className="tracking-widest uppercase">YEAR <span className="text-white font-semibold">{study.year}</span></span>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
                      <div className="lg:col-span-7 relative group/card rounded-xl overflow-hidden aspect-[16/10] border border-white/10 bg-neutral-900">
                        <div className={`absolute inset-0 bg-gradient-to-br ${study.imageGradient} opacity-90 transition-transform duration-700 group-hover/card:scale-105`} />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/60 pointer-events-none" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="font-heading text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80">
                              {study.client}
                            </span>
                            <span className="text-xs font-sans text-white/50 tracking-widest">{study.year}</span>
                          </div>

                          <div className="text-center my-auto">
                            <h3 className="font-heading text-xl md:text-2xl font-medium text-white/90 max-w-md mx-auto italic">
                              &ldquo;{study.title}&rdquo;
                            </h3>
                          </div>

                          <div className="flex items-center justify-between text-xs text-white/60">
                            <span>Featured Case Study</span>
                            <span className="flex items-center gap-1 text-white">
                              Explore metrics <span aria-hidden>→</span>
                            </span>
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 bg-[#111111]/90 backdrop-blur-md border-t border-white/10 p-4 flex items-center justify-between transition-transform duration-300">
                          <span className="font-sans text-sm font-semibold tracking-widest text-white">
                            VIEW PROJECT
                          </span>
                          <div className="w-9 h-9 rounded-full bg-lavender-grey flex items-center justify-center text-white transition-transform duration-300 group-hover/card:translate-x-1">
                            →
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 lg:pl-6">
                        <div>
                          <p className="font-sans text-xs uppercase tracking-[0.2em] text-lavender-grey mb-4 font-semibold">
                            {study.category}
                          </p>
                          <h3 className="font-heading text-h2 font-medium text-white mb-6 leading-snug">
                            {study.title}
                          </h3>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-white/10">
                          <div>
                            <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mb-3">
                              Services Provided
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {study.services.map((service) => (
                                <span
                                  key={service}
                                  className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 font-sans text-xs text-neutral-300"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white hover:text-lavender-grey transition-colors duration-300 group/link"
                          >
                            <span>Request project breakdown</span>
                            <span className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* What We Do */}
        <section
          id="services"
          className="bg-[#0a0a0a] text-white border-b border-white/10 py-28 sm:py-36"
        >
          <div className="w-full px-6">
            <Reveal>
              <p className="font-sans text-label uppercase text-[#a0a0a0] tracking-[0.2em] mb-8">
                What We Do
              </p>
            </Reveal>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {services.map((service, i) => (
                <Reveal key={service.number} delay={i * 80}>
                  <div
                    className="group relative flex items-start justify-between min-h-[90px] py-7 md:py-10 transition-colors duration-300 hover:bg-[#e8e6df]"
                  >
                    <div className="flex flex-col gap-2 pr-8">
                      <h3 className="font-heading text-h1 md:text-[clamp(2rem,4vw,3.2rem)] font-semibold uppercase leading-none text-white transition-colors duration-300 group-hover:text-ink">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm text-neutral-500 max-w-xl leading-relaxed opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-ink/60">
                        {service.copy}
                      </p>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 md:h-32 md:w-32 border border-white/60 bg-gradient-to-br from-[#effaf7] via-[#b19b78] to-[#111111] opacity-0 scale-95 shadow-2xl blur-[1px] transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(255,255,255,.7),transparent_28%),linear-gradient(135deg,transparent,rgba(0,0,0,.9))]" />
                    </div>

                    <span className="font-sans text-label font-semibold uppercase tracking-[0.16em] text-neutral-400 transition-colors duration-300 group-hover:text-[#8b8b8b] shrink-0 mt-2">
                      {service.number}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-20 md:mt-28 text-center font-sans text-body text-neutral-400">
                Not sure what you need?{" "}
                <a
                  href="#contact"
                  className="text-white underline decoration-lavender-grey decoration-2 underline-offset-4 transition-colors duration-300 hover:text-lavender-grey"
                >
                  Get the free teardown and we&apos;ll tell you.
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-[#0a0a0a] text-white py-28 sm:py-36 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <p className="font-sans text-label uppercase text-[#a0a0a0] tracking-[0.2em] mb-4">
                  Investment &amp; Pricing
                </p>
                <h2 className="font-heading text-h1 font-semibold text-white mb-6">
                  Transparent tiers built for real leverage.
                </h2>
                <p className="font-sans text-lead text-neutral-400">
                  Three distinct ways to work with us. No hidden retainers, no mystery bills — priced around the value of closed $10K+ deals.
                </p>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {pricingTiers.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 100}>
                  <div
                    className={`
                      h-full flex flex-col rounded-2xl p-8 sm:p-10 transition-all duration-300
                      ${tier.highlighted
                        ? "bg-white/[0.04] border-2 border-slate-indigo relative shadow-2xl"
                        : "bg-white/[0.02] border border-white/10 hover:border-white/25"
                      }
                    `}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-indigo text-white font-sans text-xs uppercase tracking-widest font-semibold">
                        Most Popular
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-500">
                          {tier.tier}
                        </span>
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-600">
                          {tier.cadence === "One-Time" ? "One-Time" : "Monthly Retainer"}
                        </span>
                      </div>
                      <h3 className="font-heading text-h2 font-semibold text-white mb-1">
                        {tier.name}
                      </h3>
                      <p className="font-sans text-sm text-neutral-500 italic mb-5 leading-snug">
                        {tier.tagline}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading text-4xl sm:text-5xl font-semibold text-white">
                          {tier.price}
                        </span>
                        <span className="font-sans text-sm text-neutral-400">
                          {tier.cadence}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 font-sans text-sm text-neutral-300 leading-snug">
                          <span className="h-1.5 w-1.5 rounded-full bg-lavender-grey mt-1.5 shrink-0" aria-hidden />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Per-tier note */}
                    {tier.note && (
                      <p className="font-sans text-xs text-neutral-600 italic mb-5 border-t border-white/[0.06] pt-4">
                        {tier.note}
                      </p>
                    )}

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`
                        w-full py-4 rounded-full font-sans text-sm font-semibold uppercase tracking-widest text-center transition-colors duration-300 block
                        ${tier.highlighted
                          ? "bg-white text-ink hover:bg-white/90"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        }
                      `}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Footnotes */}
            <Reveal>
              <div className="mt-12 border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center">
                <p className="font-sans text-xs text-neutral-600 italic">
                  One-time $500 onboarding fee applies to Growth and Full System if no Launch build was purchased.
                </p>
                <p className="font-sans text-xs text-neutral-600 italic">
                  Minimum 30-day notice to cancel either retainer. No long-term contracts.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 text-center">
                <p className="font-sans text-body text-neutral-400">
                  Need a custom scope or enterprise engagement?{" "}
                  <a
                    href="#contact"
                    className="text-white underline decoration-lavender-grey decoration-2 underline-offset-4 transition-colors duration-300 hover:text-lavender-grey"
                  >
                    Let&apos;s talk specifics.
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-[#0d0d0d] text-white py-28 sm:py-36 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                <p className="font-sans text-label uppercase text-[#a0a0a0] tracking-[0.2em] mb-4">
                  The Difference
                </p>
                <h2 className="font-heading text-h1 font-semibold text-white">
                  Why serious brands choose ZiuR.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-sans text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 pr-8 font-semibold uppercase tracking-[0.14em] text-neutral-500 text-xs w-1/3">Category</th>
                      <th className="text-left py-4 px-6 font-semibold uppercase tracking-[0.14em] text-xs w-1/3">
                        <span className="text-lavender-grey">ZiuR Studio</span>
                      </th>
                      <th className="text-left py-4 px-6 font-semibold uppercase tracking-[0.14em] text-neutral-500 text-xs w-1/3">Generic Agency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {[
                      ["Niche focus", "High-ticket only", "Every business type"],
                      ["Strategy", "Built per client", "Recycled packages"],
                      ["Reporting", "Revenue-tied metrics", "Vanity metrics"],
                      ["Contract", "Month to month", "6–12 month lock-in"],
                      ["Communication", "Direct founder access", "Account manager rotation"],
                      ["Location pages", "Built into every plan", "Upsell"],
                    ].map(([category, ziur, generic], i) => (
                      <tr key={i} className="group transition-colors duration-200 hover:bg-white/[0.02]">
                        <td className="py-5 pr-8 font-semibold uppercase tracking-[0.1em] text-neutral-500 text-xs">{category}</td>
                        <td className="py-5 px-6">
                          <span className="flex items-center gap-3 text-white font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-lavender-grey shrink-0" aria-hidden />
                            {ziur}
                          </span>
                        </td>
                        <td className="py-5 px-6 text-neutral-500">{generic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-[#0a0a0a] text-white py-28 sm:py-36 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

              {/* Left: sticky heading */}
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <p className="font-sans text-label uppercase text-[#a0a0a0] tracking-[0.2em] mb-5">
                    FAQ
                  </p>
                  <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white leading-[1.08] tracking-tight">
                    Questions<br />we get<br />asked.
                  </h2>
                  <p className="font-sans text-body text-neutral-500 mt-6 max-w-xs">
                    If yours isn&apos;t here,{" "}
                    <a
                      href="#contact"
                      className="text-white underline decoration-lavender-grey decoration-2 underline-offset-4 transition-colors duration-300 hover:text-lavender-grey"
                    >
                      ask us directly.
                    </a>
                  </p>
                </div>
              </Reveal>

              {/* Right: FAQ items */}
              <div className="divide-y divide-white/10 border-t border-white/10">

                {/* Q1 — open by default */}
                <Reveal>
                  <details open className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        Do I need a big budget to work with you?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      Most of our clients start with a focused scope — one channel, one system — and scale from there. We work with businesses where one closed deal justifies the marketing investment, not businesses chasing volume on a shoestring. If your average client is worth $1,000+, we can make the numbers work.
                    </p>
                  </details>
                </Reveal>

                {/* Q2 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        How long before I see results?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      Ads can drive traffic in the first week. SEO takes 60–90 days to show movement. A properly built site starts converting from day one. We set realistic timelines in the first call so you know exactly what to expect and when.
                    </p>
                  </details>
                </Reveal>

                {/* Q3 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        I already tried an agency and it didn&apos;t work. Why would this be different?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      Most agencies sell packages. We build systems around your specific business, your market, and your customer. We don&apos;t run the same Google Ads campaign for a car rental that we run for a dentist. If your last agency didn&apos;t know your niche, that&apos;s the problem.
                    </p>
                  </details>
                </Reveal>

                {/* Q4 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        Do I have to sign a long-term contract?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      No annual contracts. We work on monthly retainers with a 30-day notice period. We keep clients by delivering results, not by locking them in.
                    </p>
                  </details>
                </Reveal>

                {/* Q5 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        What kind of businesses do you work with?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      High-ticket service businesses where one client is worth $1,000 or more. Exotic car rentals, aesthetic clinics, luxury contractors, premium hotels. If your service is premium and your digital presence isn&apos;t, that&apos;s exactly the gap we fix.
                    </p>
                  </details>
                </Reveal>

                {/* Q6 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        What does the free audit actually include?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      We review your website conversion rate, Google Ads structure (if you&apos;re running them), local SEO and GMB status, and your top 3 competitors&apos; digital strategy. You get a written breakdown with specific gaps and what fixing them would mean for your business. No pitch, no fluff.
                    </p>
                  </details>
                </Reveal>

                {/* Q7 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        Do you work with businesses that have no digital presence yet?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      Yes. We&apos;ve built from zero before. The advantage is we don&apos;t have to undo bad work first. We build the system correctly from the start.
                    </p>
                  </details>
                </Reveal>

                {/* Q8 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        How much does it cost?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      Depends entirely on scope. A standalone website starts at $1,500. Full growth systems (web, ads, SEO, content) start at $2,500/month. We quote after the audit because we don&apos;t believe in pricing before understanding the problem.
                    </p>
                  </details>
                </Reveal>

                {/* Q9 */}
                <Reveal>
                  <details className="group py-7">
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-heading text-lg sm:text-xl font-medium text-white group-open:text-white/90 transition-colors duration-300">
                        What happens after the free audit?
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 group-open:rotate-45 group-open:border-lavender-grey group-open:text-lavender-grey">
                        +
                      </span>
                    </summary>
                    <p className="font-sans text-body text-neutral-400 mt-4 leading-relaxed max-w-2xl">
                      You get the audit report within 48 hours. If there&apos;s a clear opportunity and you want to move forward, we put together a proposal. If not, you keep the audit and can act on it yourself. No pressure either way.
                    </p>
                  </details>
                </Reveal>

              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        {/*
        <section id="process" className="bg-ink text-paper py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-label font-sans uppercase text-accent mb-4">
                Process
              </p>
              <h2 className="font-heading text-h1 max-w-lg mb-16">
                A clear path from where you are to where you want to be.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 80}>
                  <p className="font-sans text-small text-accent mb-4">
                    {item.step}
                  </p>
                  <h3 className="font-heading text-h3 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-body text-paper/60">
                    {item.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-4xl px-6 py-28 text-center">
          <Reveal>
            <p className="text-label font-sans uppercase text-accent mb-4">
              Contact
            </p>
            <h2 className="font-heading text-h1 mb-6">
              Ready to build something worth its price?
            </h2>
            <p className="font-sans text-lead text-ink/60 max-w-xl mx-auto mb-12">
              Tell us about your brand and we&apos;ll reply within one business
              day with honest thoughts on where the opportunity is.
            </p>
            <a
              href="mailto:hello@ziur.studio"
              className="
                inline-block font-sans font-semibold text-sm uppercase tracking-widest
                px-10 py-4 rounded-full
                bg-ink text-paper
                transition-colors duration-300
                hover:bg-accent
              "
            >
              contact@ziurstudio.com
            </a>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-ink/50">
            © {new Date().getFullYear()} Ziur Studio. All rights reserved.
          </p>
          <p className="font-sans text-sm text-ink/50">
            Made for brands that mean business.
          </p>
        </div>
      </footer>
    </>
  );
}
