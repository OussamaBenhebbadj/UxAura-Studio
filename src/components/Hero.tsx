
import { ArrowRightIcon } from "./icons/BrandIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--color-black)] pt-20 pb-12 md:pt-28"
    >
      <div className="mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-2 lg:gap-10"> 
        <div className="max-w-xl px-16">
          <h1 className="font-display text-4xl leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
            <span className="text-[var(--color-primary)]">Designing</span>{" "}
            <span className="text-[var(--color-light)]">
              Digital Experiences That Matter
            </span>
            <span className="text-[var(--color-secondary)]">.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--color-light)]/70 sm:text-lg">
            UXaura helps businesses and institutions create modern,
            intuitive, and high-performing interfaces.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-8 py-4 font-display text-sm text-white shadow-lg shadow-[var(--color-primary)]/25 transition-transform hover:scale-[1.03]"
            >
              Our Projects
            </a>

            <a
              href="#contact"
              aria-label="En savoir plus"
              className="group flex items-center gap-3 rounded-full border-2 border-[var(--color-primary)] px-6 py-4 font-display text-sm text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative w-full flex items-start justify-center lg:justify-end lg:-mt-10 xl:-mt-32">
          <img 
            src="/hero.png" 
            alt="Bannière UXaura" 
            className="w-full max-w-md hidden lg:flex lg:max-w-full h-auto object-top object-contain" 
          />
        </div>
      </div>
    </section>
  );
}
