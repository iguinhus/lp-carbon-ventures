import { SITE_COPY } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { IconAntiCode, IconAntiClock, IconAntiSparkle } from "./icons";

const icons = [
  <IconAntiCode key="code" size={40} />,
  <IconAntiClock key="clock" size={40} />,
  <IconAntiSparkle key="sparkle" size={40} />,
];

export function AntiPitch() {
  return (
    <section className="relative bg-surface-muted px-6 py-24 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Subtle decorative background shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-terracotta/[0.03] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-5xl relative">
        <AnimateOnScroll>
          <h2 className="text-display-lg mb-16 text-center font-bold text-carbon">
            {SITE_COPY.antiPitch.headline}
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {SITE_COPY.antiPitch.items.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div className="card-hover group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                {/* X badge */}
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-400 ring-4 ring-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>

                {/* Custom illustration icon */}
                <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-gray-100 p-3 text-gray-400 transition-colors group-hover:bg-terracotta group-hover:text-white">
                  {icons[index]}
                </div>

                {/* Text */}
                <p className="text-lg leading-relaxed text-carbon">
                  {item}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
