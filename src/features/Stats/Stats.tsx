import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import StatsGrid from "./StatsGrid";

export default function Stats() {
  return (
    <Section id="stats">
      <Container>
        <SectionHeading
          title="Our Track Record"
          highlight="Track Record"
          subtitle="The numbers behind our success."
        />

        <StatsGrid />
      </Container>
    </Section>
  );
}
