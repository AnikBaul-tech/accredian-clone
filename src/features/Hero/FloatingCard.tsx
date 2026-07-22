interface FloatingCardProps {
  value: string;
  title: string;
}

export default function FloatingCard({
  value,
  title,
}: FloatingCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-xl border border-slate-100">

      <h3 className="text-3xl font-bold text-blue-600">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {title}
      </p>

    </div>
  );
}