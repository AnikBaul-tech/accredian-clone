import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import WhyChoose from "./components/WhyChoose/WhyChoose";
import Domains from "./components/Domains/Domains";
import Courses from "./components/Courses/Courses";
import Audience from "./components/Audience/Audience";

export default function Edge() {
  return (
    <Section id="edge">
      <Container>
        <SectionHeading
          title="The Accredian Edge"
          highlight="Accredian Edge"
          subtitle="Everything you need to build high-performing teams."
        />

        <div className="mt-24">
          <WhyChoose />
        </div>

        <div className="mt-32">
          <Domains />
        </div>

        <div className="mt-32">
          <Courses />
        </div>

        <div className="mt-32">
          <Audience />
        </div>
      </Container>
    </Section>
  );
}
