"use client";

import "./clients.css";

import ClientLogo from "./ClientLogo";
import { clients } from "./data";

export default function LogoMarquee() {
  const logos = [...clients, ...clients];

  return (
    <div className="marquee mt-16">
      <div className="marquee-track gap-16">
        {logos.map((client, index) => (
          <ClientLogo key={`${client.id}-${index}`} {...client} />
        ))}
      </div>
    </div>
  );
}
