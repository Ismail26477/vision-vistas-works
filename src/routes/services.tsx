import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Sections";
import {
  deliverables,
  engagementFaqNote,
  engagementModels,
  processSteps,
  services,
  techStack,
} from "@/lib/site-data";
import pageBanner from "@/assets/banner-services.jpg";

const title = "Services | Web Engineering, CRM, AI Automation — D-Code Studio";
const description =
  "D-Code Studio services: custom web engineering, branding and UI/UX, performance marketing, SEO, AI workflows and automation, bespoke WhatsApp CRM development and analytics.";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState(0);
  const current = services[active]!;

  return (
    <>
      <PageHero
        image={pageBanner}
        eyebrow="Core Digital Capabilities"
        title="Full-stack digital capability under one roof"
        subtitle="From the first line of code to the last rupee of ad spend — nine capabilities designed to work together instead of across vendors."
        height="55vh"
      />


      {/* Tabs */}
      <Section>
        <SectionHeading
          eyebrow="Capability Scope"
          title="Choose a capability to explore"
          text="Every capability runs on the same delivery methodology: discovery, strategy, engineering, QA and continuous optimisation."
        />

        <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
          {services.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`btn-base w-full px-3 py-2.5 text-center text-xs leading-tight whitespace-normal sm:w-auto sm:px-5 sm:text-sm ${
                active === i ? "btn-primary" : "btn-ghost"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>


        <div className="mt-8 grid items-center gap-8 rounded-3xl border border-border bg-[var(--surface)] p-6 sm:p-9 lg:grid-cols-2">
          <div key={current.slug} className="animate-slide-in-right overflow-hidden rounded-2xl">
            <img
              src={current.image}
              alt={current.title}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Service</span>
            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">{current.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{current.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-base btn-primary mt-8">
              Discuss this service <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Workflow */}
      <Section className="bg-[var(--surface)]">
        <SectionHeading eyebrow="Production & Delivery Methodology" title="The same disciplined process on every engagement" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="surface-card flex h-full gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary font-display font-extrabold text-primary-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3x3 grid */}
      <Section>
        <SectionHeading eyebrow="All Capabilities" title="Nine ways we can help you grow" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article className="surface-card group flex h-full flex-col overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(i);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary"
                  >
                    Service details <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Engagement models */}
      <Section className="bg-[var(--surface)]">
        <SectionHeading
          eyebrow="How We Engage"
          title="Three ways to work with us"
          text={engagementFaqNote}
          center
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article
                className={`surface-card flex h-full flex-col p-7 ${
                  m.featured ? "border-primary/60 shadow-[var(--shadow-glow)]" : ""
                }`}
              >
                {m.featured ? (
                  <span className="mb-3 self-start rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                    Most popular
                  </span>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{m.best}</p>
                <h3 className="mt-2 text-xl font-extrabold">{m.name}</h3>
                <p className="mt-1 font-display text-sm font-bold text-primary">{m.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <Check size={17} className="mt-0.5 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-base btn-ghost mt-7 text-sm">
                  Talk to us <ArrowRight size={15} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Deliverables + stack */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Standard Inclusions"
              title="What ships with every engagement"
              text="No hidden line items — these are baked into the price of every project we take on."
            />
            <ul className="mt-8 grid gap-3">
              {deliverables.map((d, i) => (
                <Reveal key={d} delay={i * 50}>
                  <li className="flex items-start gap-3 rounded-2xl border border-border bg-[var(--surface)] p-4 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{d}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Technology Stack"
              title="The tools behind the builds"
              text="Chosen per project for maintainability and speed — never because it is trendy."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {techStack.map((t, i) => (
                <Reveal key={t} delay={i * 30}>
                  <span className="inline-flex rounded-full border border-border bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-foreground/90">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>


      <CTABanner
        image={pageBanner}
        eyebrow="Scope Your Project"
        title="Not sure which capability you need? Start with a free audit."
        text="Send us your current website, funnel or CRM setup. We'll return a prioritised list of what to fix first and what it will cost."
        primaryLabel="Request An Audit"
        secondaryLabel="View Our Work"
      />
    </>
  );
}
