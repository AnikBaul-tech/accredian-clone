import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section
      id="home"
      className="pt-8 lg:pt-14"
    >
      <Container>

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-50 via-blue-50 to-white shadow-lg">

          {/* Decorative Blur */}

          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />

          <div className="relative grid items-center gap-16 px-8 py-12 lg:grid-cols-2 lg:px-16 lg:py-20">

            <HeroContent />

            <HeroImage />

          </div>

        </div>

      </Container>
    </Section>
  );
}