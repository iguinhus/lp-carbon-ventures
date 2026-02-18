import { SITE_COPY } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { IconLightbulb, IconRocket, IconChart } from "./icons";

const stepIcons = [
  <IconLightbulb key="understand" size={32} />,
  <IconRocket key="build" size={32} />,
  <IconChart key="decide" size={32} />,
];

export function HowItWorks() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terracotta/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-5xl relative">
        <AnimateOnScroll>
          <h2 className="text-display-lg mb-20 text-center font-bold text-carbon">
            {SITE_COPY.howItWorks.headline}
          </h2>
        </AnimateOnScroll>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connector line - now terracotta gradient */}
            <div className="absolute top-9 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-carbon via-terracotta/40 to-carbon" />

            {SITE_COPY.howItWorks.steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index * 150} className="relative flex-1">
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="pulse-ring relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-carbon text-white shadow-lg shadow-carbon/30">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>

                  {/* Custom illustration icon */}
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-terracotta illustration-float" style={{ animationDelay: `${index * 0.8}s` }}>
                    {stepIcons[index]}
                  </div>

                  {/* Title */}
                  <h3 className="text-display mt-4 text-xl font-bold text-carbon">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-[200px] text-base text-gray-500">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="relative space-y-12">
            {/* Vertical connector line */}
            <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-carbon via-terracotta/40 to-carbon" />

            {SITE_COPY.howItWorks.steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index * 100}>
                <div className="relative flex items-start gap-6">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-carbon text-white shadow-lg shadow-carbon/30">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-terracotta">
                      {stepIcons[index]}
                    </div>
                    <h3 className="text-display text-xl font-bold text-carbon">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
