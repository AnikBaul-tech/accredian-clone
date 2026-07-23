"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import EnquireButton from "@/features/enquiry/EnquireButton";
import Container from "@/components/common/Container";
import Logo from "./Logo";
import { navLinks } from "@/constants/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <Container>

        <nav className="flex h-20 items-center justify-between">

          <Logo />

          {/* Desktop */}

          <div className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

          </div>

          <div className="hidden lg:block">
            <EnquireButton />
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>

      </Container>

      {isOpen && (

        <div className="border-t bg-white lg:hidden">

          <Container>

            <div className="flex flex-col py-6">

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}

              <Button className="mt-4">
                Enquire Now
              </Button>

            </div>

          </Container>

        </div>

      )}
    </header>
  );
}