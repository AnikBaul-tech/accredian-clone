import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import EnquiryProvider from "@/providers/EnquiryProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Accredian",
  description: "Enterprise Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}
