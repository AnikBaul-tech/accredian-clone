import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div
      className={cn(
        "mb-14",
        center ? "text-center" : "text-left"
      )}
    >
      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
        {parts[0]}

        {highlight && (
          <span className="text-blue-600">
            {highlight}
          </span>
        )}

        {parts[1]}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}