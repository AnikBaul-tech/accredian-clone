import Container from "@/components/common/Container";
import Logo from "@/components/layout/Logo";

import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="bg-white pt-14 pb-6">
      <Container>
        {/* ================= TOP ================= */}

        <div
          className="
            flex
            flex-col
            gap-10
            border-b
            border-slate-300
            pb-8

            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          {/* Logo + Socials */}

          <div>
            <Logo />

            <div className="mt-6">
              <FooterSocials />
            </div>
          </div>

          {/* CTA */}

          <div className="md:text-center">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-blue-600
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-lg
              "
            >
              Contact Us
            </a>

            <p className="mt-2 text-sm text-slate-700">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* ================= MIDDLE ================= */}

        <div
          className="
            grid
            gap-10
            border-b
            border-slate-300
            py-8

            md:grid-cols-2
          "
        >
          <FooterLinks />

          {/* Contact */}

          <div>
            <h3 className="mb-4 text-xl font-bold text-slate-950">
              Contact Us
            </h3>

            <div className="space-y-3 text-[16px] leading-7 text-slate-700">
              <p>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="
                    text-blue-600
                    transition-colors
                    hover:text-blue-700
                  "
                >
                  enterprise@accredian.com
                </a>
              </p>

              <p className="max-w-xl">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="pt-5 text-center">
          <p className="text-sm text-slate-600 md:text-base">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
