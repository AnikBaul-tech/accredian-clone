import {
  Lightbulb,
  Users,
  Cog,
  Globe,
  TrendingUp,
  Package,
  Brain,
  BarChart3,
  GraduationCap,
  Briefcase,
  MonitorCheck,
} from "lucide-react";
import industry from "../../../public/images/edge-courses/industry.png";
import level from "../../../public/images/edge-courses/level.png";
import program from "../../../public/images/edge-courses/program.png";
import topic from "../../../public/images/edge-courses/topic.png";

import { Audience, Course, Domain, USP } from "./types";

/* ---------- WHY CHOOSE ---------- */

export const whyChooseData: USP[] = [
  {
    id: 1,
    title: "Tailored Solutions",
    description: "Customized learning aligned with organizational goals.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Industry leaders delivering practical knowledge.",
    icon: Users,
  },
  {
    id: 3,
    title: "Innovative Framework",
    description: "Application-driven learning methodologies.",
    icon: Cog,
  },
  {
    id: 4,
    title: "Advanced Technology",
    description: "Modern LMS and digital learning experiences.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Diverse Offerings",
    description: "Courses across industries and skill levels.",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "Proven Impact",
    description: "Trusted by enterprises for measurable ROI.",
    icon: BarChart3,
  },
];

/* ---------- DOMAINS ---------- */

export const domainData: Domain[] = [
  {
    id: 1,
    title: "Product Innovation",
    description: "Design thinking and product strategy for modern businesses.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Gen AI Mastery",
    description: "Hands-on AI learning with enterprise use cases.",
    icon: Brain,
  },
  {
    id: 3,
    title: "Leadership Elevation",
    description: "Build high-impact leaders for growing organizations.",
    icon: Users,
  },
  {
    id: 4,
    title: "Tech & Data",
    description: "Cloud, Data Engineering and Digital Transformation.",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Operations Excellence",
    description: "Process optimization and operational efficiency.",
    icon: Cog,
  },
  {
    id: 6,
    title: "Digital Enterprise",
    description: "Digital-first enterprise learning ecosystem.",
    icon: Globe,
  },
];

/* ---------- COURSES ---------- */

export const courseData: Course[] = [
  {
    id: 1,
    title: "Program Specific",
    description: "Certificate, Executive & PG Programs",
    image: program,
  },
  {
    id: 2,
    title: "Industry Specific",
    description: "Healthcare, Finance, Retail & Manufacturing",
    image: industry,
  },
  {
    id: 3,
    title: "Topic Specific",
    description: "AI, ML, Cybersecurity & Cloud",
    image: topic,
  },
  {
    id: 4,
    title: "Level Specific",
    description: "Freshers, Mid-level & Senior Leaders",
    image: level,
  },
];

/* ---------- AUDIENCE ---------- */

export const audienceData: Audience[] = [
  {
    id: 1,
    title: "Tech Professionals",
    description: "Enhance technical expertise through practical learning.",
    icon: MonitorCheck,
  },
  {
    id: 2,
    title: "Non-Tech Professionals",
    description: "Upskill for today's digital workplace.",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Emerging Professionals",
    description: "Accelerate career growth with modern skills.",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Senior Professionals",
    description: "Strengthen leadership and strategic thinking.",
    icon: Users,
  },
];
