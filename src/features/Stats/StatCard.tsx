import Counter from "./Counter";

interface StatCardProps {
  value: number;
  suffix: string;
  title: string;
  description: string;
}

export default function StatCard({
  value,
  suffix,
  title,
  description,
}: StatCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      text-center
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div
        className="
        inline-flex
        rounded-full
        bg-blue-100
        px-8
        py-3
        text-4xl
        font-bold
        text-blue-600
        "
      >
        <Counter
          value={value}
          suffix={suffix}
        />
      </div>

      <h3 className="mt-8 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}