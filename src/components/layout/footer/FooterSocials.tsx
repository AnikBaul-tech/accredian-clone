import { socialLinks } from "./footerData";

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="
            text-slate-600
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:text-blue-600
          "
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
}
