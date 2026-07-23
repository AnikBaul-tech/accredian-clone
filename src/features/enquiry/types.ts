export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
}
