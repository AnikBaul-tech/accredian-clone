"use client";

import { ChevronDown } from "lucide-react";

interface Props {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, open, onClick }: Props) {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          py-6
          text-left
        "
      >
        <h3 className="text-xl font-semibold">{question}</h3>

        <ChevronDown className={`transition cursor-pointer ${open ? "rotate-180" : ""}`} />
      </button>

      {open && <p className="pb-6 text-slate-500 leading-7">{answer}</p>}
    </div>
  );
}
