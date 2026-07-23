import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import CATCard from "./components/CATCard";

import { catSteps } from "./data";

export default function CAT() {
  return (
    <Section id="cat">
      <Container>
        <SectionHeading
          title="The CAT Framework"
          highlight="CAT Framework"
          subtitle="Our proven approach to learning excellence."
        />

        <div
          className="
          relative
          mt-20
          grid
          gap-16

          lg:grid-cols-3
          "
        >
          {catSteps.map((step) => (
            <CATCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
