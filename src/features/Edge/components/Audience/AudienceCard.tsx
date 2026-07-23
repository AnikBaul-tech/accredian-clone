import { Audience } from "../../types";

interface Props {
  item: Audience;
}

export default function AudienceCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <article
      className="
      group
      flex
      gap-4
      rounded-2xl
      bg-white/10
      border
      border-white/10
      p-5
      backdrop-blur-sm
      transition-all
      duration-300
      hover:bg-white/20
      hover:-translate-y-1
      "
    >
      <div
        className="
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-white/15
        "
      >
        <Icon size={26} className="text-white" />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>

        <p className="mt-2 text-sm leading-6 text-blue-100">
          {item.description}
        </p>
      </div>
    </article>
  );
}
