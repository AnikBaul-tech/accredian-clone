import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface USP {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Domain {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface Audience {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
