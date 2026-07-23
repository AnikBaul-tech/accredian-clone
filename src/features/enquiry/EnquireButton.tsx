"use client";

import { ComponentProps } from "react";

import Button from "@/components/common/Button";
import useEnquiry from "@/hooks/useEnquiry";

type EnquireButtonProps = Omit<ComponentProps<typeof Button>, "onClick">;

export default function EnquireButton({
  children = "Enquire Now",
  variant = "primary",
  ...props
}: EnquireButtonProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <Button variant={variant} onClick={openEnquiry} {...props}>
      {children}
    </Button>
  );
}
