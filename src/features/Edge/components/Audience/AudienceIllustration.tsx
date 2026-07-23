import Image from "next/image";

export default function AudienceIllustration() {
  return (
    <div className="relative mx-auto w-fit">
      <Image
        src="/images/audience/p1.png"
        alt="Audience"
        width={360}
        height={420}
        priority
      />
    </div>
  );
}
