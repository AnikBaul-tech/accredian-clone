import { footerLinks } from "./footerData";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-slate-950">Accredian</h3>

      <ul className="space-y-3">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                text-[16px]
                text-slate-700
                transition-colors
                hover:text-blue-600
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
