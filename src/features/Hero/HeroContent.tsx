import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

import FeatureList from "./FeatureList";
import { heroContent } from "./data";

export default function HeroContent() {
  return (
    <div>
      <Badge>{heroContent.badge}</Badge>

      <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
        {heroContent.title.first}{" "}
        <span className="text-blue-600">{heroContent.title.highlight}</span>
        <br />
        {heroContent.title.second}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        {heroContent.description}
      </p>

      <FeatureList />

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>{heroContent.primaryButton}</Button>

        <Button variant="outline">{heroContent.secondaryButton}</Button>
      </div>
    </div>
  );
}
