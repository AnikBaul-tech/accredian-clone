import SectionHeading from "@/components/common/SectionHeading";

import DomainCard from "./DomainCard";
import { domainData } from "../../data";

export default function Domains() {
  return (
    <section>
      <SectionHeading
        title="Our Domain Expertise"
        highlight="Domain Expertise"
        subtitle="Specialized learning programs across today's most impactful business domains."
      />

      <div
        className="
        mt-14
        grid
        gap-8

        md:grid-cols-2

        xl:grid-cols-3
        "
      >
        {domainData.map((item) => (
          <DomainCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
