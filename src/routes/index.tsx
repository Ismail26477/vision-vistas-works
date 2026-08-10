import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Headphones,
  IndianRupee,
  ShieldCheck,
  Users,
} from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, Section, SectionHeading } from "@/components/site/Sections";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { company, processSteps, projects, services, stats } from "@/lib/site-data";

const title = "Nexvora Technologies | IT Solutions, SaaS & AI Automation Company India";
const description =
  "Bengaluru-based IT solutions company delivering website development, SaaS products, AI automation, digital and performance marketing for Indian and global businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const whyUs = [
  { icon: IndianRupee, title: "India-first pricing", text: "Transparent, GST-compliant quotes with no hidden retainers or surprise change requests." },
  { icon: Clock, title: "On-time delivery", text: "94% of our sprints ship on the committed date, with weekly demos so nothing drifts." },
  { icon: ShieldCheck, title: "You own everything", text: "Source code, cloud accounts and data handed over in full at project close." },
  { icon: Users, title: "Senior teams only", text: "No trainee-swaps mid-project. The engineers in the pitch are the ones who build it." },
  { icon: Headphones, title: "IST support hours", text: "Real humans on call in your timezone, on WhatsApp and phone, not just ticket queues." },
  { icon: BadgeCheck, title: "Outcome reporting", text: "Every engagement is measured against revenue, leads or hours saved — never vanity metrics." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <HeroSlider />
        <div className="absolute inset-0 z-10" style={{ background: "var(--gradient-hero)" }} />

        <div className="container-x relative z-10 py-28">
          <Reveal>
            <span className="eyebrow">IT Solutions · Bengaluru, India</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.03] sm:text-6xl lg:text-7xl">
              We build the <span className="text-gradient">digital engine</span> behind India's ambitious brands.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Websites, SaaS platforms, AI automation and performance marketing — designed, engineered and grown by one
              accountable team. 160+ projects delivered since 2016.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-base btn-ghost">
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why Choose Us?"
          title="A delivery partner that behaves like your in-house team"
          text="Most agencies sell hours. We sell outcomes, and we structure every engagement so you can see progress every single week."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="surface-card h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-muted text-primary">
                  <w.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-[var(--surface)]">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything you need to launch, scale and grow online"
            text="Pick one capability or hand us the whole roadmap — the same team covers strategy, build and growth."
          />
          <Reveal>
            <Link to="/services" className="btn-base btn-ghost">
              View all services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <article className="surface-card group h-full overflow-hidden">
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
                <div className="p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section>
        <SectionHeading
          eyebrow="Projects & Companies"
          title="Work we've shipped for companies across India"
          text="A selection of engagements from retail, healthcare, logistics, ed-tech and fintech."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="surface-card group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{p.clientCompany}</p>
                  <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{p.result}</p>
                  <Link
                    to="/portfolio"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
                  >
                    Explore project <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-[var(--surface)]">
        <SectionHeading
          eyebrow="Our Process"
          title="How we take you from idea to measurable results"
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <span className="font-display text-4xl font-extrabold text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading eyebrow="Client Reviews" title="What our clients say" center />
        <Testimonials />
      </Section>

      {/* FAQ */}
      <Section className="bg-[var(--surface)]">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          text={`Still unsure? Call us on ${company.phone} and we'll answer straight away.`}
        />
        <Faq />
      </Section>

      <CTABanner />
    </>
  );
}
