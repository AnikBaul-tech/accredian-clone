"use client";

import { useContext } from "react";
import { EnquiryContext } from "@/providers/EnquiryProvider";

export default function useEnquiry() {
  const context = useContext(EnquiryContext);

  if (!context) {
    throw new Error("useEnquiry must be used inside EnquiryProvider");
  }

  return context;
}
