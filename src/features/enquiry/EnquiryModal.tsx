"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import EnquiryForm from "./EnquiryForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/60
        p-3
        backdrop-blur-[2px]
        sm:p-6
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="
          grid
          max-h-[95vh]
          w-full
          max-w-5xl
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl

          lg:grid-cols-[1fr_1fr]
        "
      >
        {/* Desktop Image */}

        <div
          className="
            relative
            hidden
            min-h-[650px]
            bg-[url('/images/enquireButton.png')]
            bg-cover
            bg-center
            lg:block
          "
        >
          <div className="absolute inset-0 bg-slate-900/10" />
        </div>

        {/* Form side */}

        <div className="relative max-h-[95vh] overflow-y-auto p-6 sm:p-8 lg:p-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="
              absolute
              right-5
              top-5
              rounded-full
              p-2
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
            "
          >
            <X size={26} />
          </button>

          <h2
            id="enquiry-title"
            className="mb-7 pr-12 text-3xl font-bold text-slate-950"
          >
            Enquire Now
          </h2>

          <EnquiryForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
