"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

import { faqData } from "./data";

import FAQItem from "./components/FAQItem";
import CategoryTabs from "./components/CategoryTabs";

export default function FAQ() {
  const [category, setCategory] = useState("course");
  const [open, setOpen] = useState<number | null>(1);

  const filtered = useMemo(() => {
    return faqData.filter((item) => item.category === category);
  }, [category]);

  return (
    <Section id="faq">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          highlight="Questions"
        />

        <div className="mt-12">
          <CategoryTabs
            active={category}
            onChange={(value) => {
              setCategory(value);
              setOpen(null);
            }}
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {filtered.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              open={open === faq.id}
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button>Enquire Now</Button>
        </div>
      </Container>
    </Section>
  );
}
