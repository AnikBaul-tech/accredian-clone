import SectionHeading from "@/components/common/SectionHeading";
import CourseCard from "./CourseCard";
import { courseData } from "../../data";

export default function Courses() {
  return (
    <section>
      <SectionHeading
        title="Tailored Course Segmentation"
        highlight="Course Segmentation"
        subtitle="Programs organized by industry, role and learning objectives."
      />

      <div
        className="
        mt-14
        grid
        gap-8

        lg:grid-cols-2

        xl:grid-cols-4
        "
      >
        {courseData.map((course) => (
          <CourseCard key={course.id} item={course} />
        ))}
      </div>
    </section>
  );
}
