import Image from "next/image";
import { SITE_COPY, CALENDAR_LINK } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { CarbonAtom } from "./icons";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center overflow-hidden"
      style={{
        backgroundColor: "#1A1A1A",
        backgroundImage: [
          "radial-gradient(ellipse at 20% 30%, rgba(217, 119, 87, 0.12) 0%, transparent 50%)",
          "radial-gradient(ellipse at 80% 70%, rgba(217, 119, 87, 0.08) 0%, transparent 50%)",
          "linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 50%, #1A1A1A 100%)",
        ].join(", "),
      }}
    >
      {/* Carbon Atom - background illustration, visible on dark bg */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[600px] md:w-[50vw] opacity-[0.18] text-terracotta pointer-events-none">
        <CarbonAtom className="w-full h-full" size="100%" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimateOnScroll>
          <Image
            src="/carbon-logo.png"
            alt="Carbon Ventures"
            width={300}
            height={100}
            className="mx-auto mb-10 brightness-0 invert opacity-90"
            priority
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h1 className="text-display-xl max-w-4xl font-bold tracking-tight text-white uppercase">
            {SITE_COPY.hero.headline}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-400 md:text-2xl">
            {SITE_COPY.hero.subheadline}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={350}>
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group mt-12 inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-carbon shadow-2xl transition-all duration-300 hover:bg-gray-100 hover:shadow-white/25 hover:-translate-y-0.5"
          >
            {SITE_COPY.hero.cta}
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>

      {/* Decorative gradient orbs - terracotta on dark */}
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-terracotta/15 opacity-60 blur-3xl animate-float-slow" />
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-terracotta/10 opacity-40 blur-3xl animate-float-medium" />
    </section>
  );
}
