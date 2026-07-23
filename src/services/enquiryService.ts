import { EnquiryFormData, EnquiryResponse } from "@/features/enquiry/types";

export async function submitEnquiry(
  data: EnquiryFormData,
): Promise<EnquiryResponse> {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit enquiry.");
  }

  return result;
}
