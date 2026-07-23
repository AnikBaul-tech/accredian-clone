import { Lightbulb, Cog, Wrench } from "lucide-react";
import { CATStep } from "./types";

export const catSteps: CATStep[] = [
  {
    id: 1,
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: Cog,
  },
  {
    id: 3,
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: Wrench,
  },
];
