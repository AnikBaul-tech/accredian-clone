import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Course } from "../../types";

interface Props {
  item: Course;
}

export default function CourseCard({ item }: Props) {
  return (
    <article
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-black/10
          to-transparent
          "
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold">{item.title}</h3>

        <p className="mt-4 text-slate-500">{item.description}</p>

        <button
          className="
          mt-6
          flex
          items-center
          gap-2
          text-blue-600
          font-semibold
          "
        >
          Explore
          <ArrowRight
            className="
            transition-transform
            group-hover:translate-x-1
            "
            size={18}
          />
        </button>
      </div>
    </article>
  );
}
