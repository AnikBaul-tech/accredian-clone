import { CATStep } from "../types";

interface Props {
  step: CATStep;
}

export default function CATCard({ step }: Props) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center text-center">
      <div
        className="
        relative
        z-10
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full
        border-4
        border-white
        bg-blue-600
        shadow-xl
        "
      >
        <Icon size={40} className="text-white" />
      </div>

      <h3 className="mt-8 text-3xl font-bold">{step.title}</h3>

      <p className="mt-3 max-w-xs leading-7 text-slate-500">
        {step.description}
      </p>
    </div>
  );
}
