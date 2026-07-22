import { CheckCircle2 } from "lucide-react";
import { heroFeatures } from "./data";

export default function FeatureList() {
  return (
    <div className="mt-8 flex flex-wrap gap-6">
      {heroFeatures.map((feature) => (
        <div key={feature.id} className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-green-500" />

          <span className="font-medium text-slate-700">{feature.title}</span>
        </div>
      ))}
    </div>
  );
}
