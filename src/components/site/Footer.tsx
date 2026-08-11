import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)]">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-12 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {company.name} is a full-service digital transformation and web engineering agency in Nagpur, delivering
            bespoke technical architectures, AI-driven automation and high-performance acquisition engines.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">{company.website}</p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Linkedin, href: company.linkedin, label: "LinkedIn" },
              { Icon: Instagram, href: company.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio / Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-primary">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="container-x text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
