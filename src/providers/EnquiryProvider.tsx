"use client";

import { createContext, ReactNode, useState } from "react";

import EnquiryModal from "@/features/enquiry/EnquiryModal";

interface EnquiryContextType {
  openEnquiry: () => void;
  closeEnquiry: () => void;
}

export const EnquiryContext = createContext<EnquiryContextType | null>(null);

interface Props {
  children: ReactNode;
}

export default function EnquiryProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = () => {
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider
      value={{
        openEnquiry,
        closeEnquiry,
      }}
    >
      {children}

      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} />
    </EnquiryContext.Provider>
  );
}
