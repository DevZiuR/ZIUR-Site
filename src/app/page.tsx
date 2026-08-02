export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Label */}
      <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-accent mb-6">
        Ziur Studio
      </p>

      {/* Headline */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium text-ink leading-[1.08] max-w-3xl mb-8">
        Websites and marketing that turn premium brands into premium bookings.
      </h1>

      {/* Subtext */}
      <p className="font-sans text-lg sm:text-xl text-ink/60 max-w-xl mb-12 leading-relaxed">
        Web design, ads, SEO, and content for high-ticket brands that sell an
        experience, not a commodity.
      </p>

      {/* CTA Button */}
      <a
        href="#contact"
        className="
          inline-block font-sans font-semibold text-sm uppercase tracking-widest
          px-8 py-4 rounded-full
          bg-ink text-paper
          transition-colors duration-300
          hover:bg-accent
        "
      >
        Start a project
      </a>
    </main>
  );
}
