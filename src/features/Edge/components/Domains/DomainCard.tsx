import { ArrowRight } from "lucide-react";
import { Domain } from "../../types";

interface Props {
  item: Domain;
}

export default function DomainCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <article
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-blue-100
        transition-all
        duration-300
        group-hover:bg-blue-600
        "
      >
        <Icon
          size={28}
          className="
          text-blue-600
          transition-colors
          group-hover:text-white
          "
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

      <p className="mt-4 leading-7 text-slate-500">{item.description}</p>

      <div
        className="
        mt-6
        flex
        items-center
        gap-2
        font-medium
        text-blue-600
        "
      >
        Explore
        <ArrowRight
          size={18}
          className="
          transition-transform
          group-hover:translate-x-1
          "
        />
      </div>
    </article>
  );
}
