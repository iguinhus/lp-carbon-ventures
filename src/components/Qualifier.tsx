import { SITE_COPY } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Qualifier() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-300 to-gray-300" />

      <AnimateOnScroll>
        <h2 className="max-w-3xl text-3xl font-bold leading-snug text-carbon md:text-4xl lg:text-5xl">
          {SITE_COPY.qualifier.headline}
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <p className="mt-6 text-xl text-gray-500 md:text-2xl">
          {SITE_COPY.qualifier.subheadline}
        </p>
      </AnimateOnScroll>

      {/* Decorative elements */}
      <AnimateOnScroll delay={200}>
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-carbon" />
          <span className="h-px w-12 bg-gray-300" />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
