import CenterCircle from "./CenterCircle";
import USPCard from "./USPCard";

import { whyChooseData } from "../../data";

export default function WhyChoose() {
  return (
    <section>
      <div className="text-center">
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Why Choose Us
        </p>

        <h2 className="mt-3 text-4xl font-bold">Our Strategic Edge</h2>

        <p className="mt-4 text-slate-500">
          Six pillars that make our enterprise learning experience unique.
        </p>
      </div>

      {/* Mobile */}

      <div className="mt-14 grid gap-6 lg:hidden">
        <CenterCircle />

        {whyChooseData.map((item) => (
          <USPCard key={item.id} item={item} />
        ))}
      </div>

      {/* Desktop */}

      <div className="mt-20 hidden lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
        <div className="space-y-8">
          <USPCard item={whyChooseData[0]} />

          <USPCard item={whyChooseData[1]} />

          <USPCard item={whyChooseData[2]} />
        </div>

        <CenterCircle />

        <div className="space-y-8">
          <USPCard item={whyChooseData[3]} />

          <USPCard item={whyChooseData[4]} />

          <USPCard item={whyChooseData[5]} />
        </div>
      </div>
    </section>
  );
}
