import { StaticImageData } from "next/image";

export interface Client {
  id: number;
  name: string;
  image: StaticImageData;
}