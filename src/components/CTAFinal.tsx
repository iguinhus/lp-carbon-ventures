import { SITE_COPY, CALENDAR_LINK } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { CarbonAtom } from "./icons";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden mesh-gradient-dark px-6 py-32">
      {/* Decorative elements with floating animation - terracotta */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-terracotta/10 blur-3xl animate-float-medium" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-terracotta/10 blur-3xl animate-float-slow" />

      {/* Carbon Atom - subtle background decoration */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[20vw] max-w-[250px] opacity-[0.05] text-terracotta-light pointer-events-none">
        <CarbonAtom className="w-full h-full" size="100%" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimateOnScroll>
          <h2 className="text-display-xl font-bold text-white">
            {SITE_COPY.ctaFinal.headline}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <p className="mt-6 text-xl text-gray-400">
            {SITE_COPY.ctaFinal.subtitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-carbon shadow-2xl transition-all duration-300 hover:bg-gray-100 hover:shadow-white/25 hover:-translate-y-0.5"
          >
            {SITE_COPY.ctaFinal.cta}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
