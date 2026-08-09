import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import banner from "@/assets/banner.jpg";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  height = "60vh",
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
      style={{ minHeight: height, paddingTop: "6rem" }}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-x relative z-10 pb-14 pt-10">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
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

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-x relative z-10">
        <Reveal className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <span className="eyebrow">Connect With Us</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's build something your competitors will study.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Book a free 30-minute consultation. We'll review your current setup and share a practical roadmap — no
              obligation, no jargon.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-base btn-primary">
              Connect With Us
            </Link>
            <Link to="/portfolio" className="btn-base btn-ghost">
              See Our Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
