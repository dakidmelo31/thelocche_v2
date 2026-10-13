import { Hero } from "@/components/home/hero";
import { FeaturedStyles } from "@/components/home/featured-styles";
import { Experience } from "@/components/home/experience";
import { Process } from "@/components/home/process";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedStyles />
      <Experience />
      <Process />
      <CtaBanner />
    </>
  );
}
