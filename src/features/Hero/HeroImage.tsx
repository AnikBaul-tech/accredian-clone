import FloatingCard from "./FloatingCard";
import { floatingCards } from "./data";
import Image from "next/image";
import heroImage from "../../../public/images/hero_img_accredian.png";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      {/* Image Placeholder */}

      <div className="flex h-[520px] w-full max-w-md items-center justify-center rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-100 to-slate-100 shadow-xl">
        <Image src={heroImage} alt="Hero Image" />
      </div>

      {/* Top Card */}

      <div className="absolute top-8 -left-6 hidden lg:block">
        <FloatingCard
          value={floatingCards[0].value}
          label={floatingCards[0].label}
        />
      </div>

      {/* Bottom Card */}

      <div className="absolute bottom-8 -right-6 hidden lg:block">
        <FloatingCard
          value={floatingCards[1].value}
          label={floatingCards[1].label}
        />
      </div>
    </div>
  );
}
