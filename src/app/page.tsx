import { Hero } from "@/components/Hero";
import { Qualifier } from "@/components/Qualifier";
import { AntiPitch } from "@/components/AntiPitch";
import { HowItWorks } from "@/components/HowItWorks";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Qualifier />
      <AntiPitch />
      <HowItWorks />
      <CTAFinal />
      <Footer />
    </main>
  );
}
