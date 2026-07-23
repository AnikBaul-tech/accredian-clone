import SectionHeading from "@/components/common/SectionHeading";

import AudienceCard from "./AudienceCard";
import AudienceIllustration from "./AudienceIllustration";

import { audienceData } from "../../data";

export default function Audience() {
  return (
    <section>
      <SectionHeading
        title="Who Should Join?"
        highlight="Strategic Skill Enhancement"
        subtitle="Programs designed for professionals across every stage of their career."
      />

      <div
        className="
        mt-16
        overflow-hidden
        rounded-[2rem]
        bg-gradient-to-r
        from-blue-700
        via-blue-600
        to-sky-500
        p-8

        lg:p-12
        "
      >
        <div
          className="
          grid
          items-center
          gap-14

          lg:grid-cols-2
          "
        >
          {/* LEFT */}

          <div>
            <h2 className="text-4xl font-bold text-white">
              Build Skills
              <br />
              That Matter.
            </h2>

            <p className="mt-5 max-w-lg text-blue-100 leading-8">
              Whether you're just beginning your career, leading enterprise
              teams or transitioning into technology, our programs are designed
              to help you grow with confidence.
            </p>

            <div className="mt-10">
              <AudienceIllustration />
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid gap-5">
            {audienceData.map((item) => (
              <AudienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
