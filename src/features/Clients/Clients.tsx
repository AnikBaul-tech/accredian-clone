import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import LogoMarquee from "./LogoMarquee";

export default function Clients() {
  return (
    <Section id="clients">
      <Container>
        <SectionHeading
          title="Our Proven Partnerships"
          highlight="Partnerships"
          subtitle="Successful collaborations with the industry's best."
        />

        <LogoMarquee />
      </Container>
    </Section>
  );
}
