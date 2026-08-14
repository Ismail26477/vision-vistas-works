import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import banner from "@/assets/banner.jpg";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  height = "52vh",
  image = banner,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  height?: string;
  image?: string;
}) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: height, paddingTop: "5rem" }}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.16 0.055 291 / 0.82) 0%, oklch(0.16 0.055 291 / 0.45) 55%, oklch(0.16 0.055 291 / 0.05) 100%)",
        }}
      />
      <div className="container-x relative z-10 pb-10 pt-8">
        <Reveal>
          <span className="eyebrow text-[0.65rem] sm:text-xs">{eyebrow}</span>
          <h1 className="mt-3 max-w-2xl text-2xl font-extrabold leading-[1.15] sm:text-3xl lg:text-4xl">{title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}


export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p> : null}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function CTABanner({
  eyebrow = "Connect With Us",
  title = "Let's build something your competitors will study.",
  text = "Book a free 30-minute consultation. We'll review your current setup and share a practical roadmap — no obligation, no jargon.",
  image = banner,
  primaryLabel = "Connect With Us",
  secondaryLabel = "See Our Work",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  image?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.16 0.055 291 / 0.92) 0%, oklch(0.16 0.055 291 / 0.7) 60%, oklch(0.16 0.055 291 / 0.25) 100%)",
        }}
      />
      <div className="container-x relative z-10">
        <Reveal className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-base btn-primary">
              {primaryLabel}
            </Link>
            <Link to="/portfolio" className="btn-base btn-ghost">
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

