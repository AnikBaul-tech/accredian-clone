interface FloatingCardProps {
  value: string;
  label?: string;
}

export default function FloatingCard({
  value,
  label,
}: FloatingCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-xl">
      <p className="text-2xl font-bold text-blue-600">
        {value}
      </p>

      {label && (
        <p className="mt-1 text-sm text-slate-500">
          {label}
        </p>
      )}
    </div>
  );
}