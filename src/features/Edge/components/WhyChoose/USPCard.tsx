import { USP } from "../../types";

interface USPCardProps {
  item: USP;
}

export default function USPCard({ item }: USPCardProps) {
  const Icon = item.icon;

  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
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
        transition-transform
        duration-300
        group-hover:rotate-6
        "
      >
        <Icon className="text-blue-600" size={28} />
      </div>

      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {item.description}
      </p>
    </div>
  );
}
