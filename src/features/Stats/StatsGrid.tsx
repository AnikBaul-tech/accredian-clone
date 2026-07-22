import { statsData } from "./data";
import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div
      className="
      mt-16
      grid
      gap-8
      md:grid-cols-2
      xl:grid-cols-3
      "
    >
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          {...stat}
        />
      ))}
    </div>
  );
}