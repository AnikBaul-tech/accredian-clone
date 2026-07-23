import Image from "next/image";
import { StaticImageData } from "next/image";

interface ClientLogoProps {
  image: StaticImageData;
  name: string;
}

export default function ClientLogo({
  image,
  name,
}: ClientLogoProps) {
  return (
    <div
      className="
      flex
      h-42
      w-48
      shrink-0
      items-center
      justify-center
      rounded-2xl
      transition-all
      duration-300
      grayscale
      opacity-70
      hover:scale-105
      hover:grayscale-0
      hover:opacity-100
      "
    >
      <Image
        src={image}
        alt={name}
        width={150}
        height={80}
        className="object-contain"
      />
    </div>
  );
}