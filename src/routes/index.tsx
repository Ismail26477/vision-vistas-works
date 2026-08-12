import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, Lightbulb, Target } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, Section, SectionHeading } from "@/components/site/Sections";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { company, coreValues, industries, processSteps, projects, services, stats } from "@/lib/site-data";

const title = "D-Code Studio | Web Engineering, AI Automation & Growth Marketing";
const description =
  "Nagpur-based digital transformation agency delivering custom web applications, branding, performance marketing, SEO, AI workflows and bespoke WhatsApp CRMs.";

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

const valueIcons = [Lightbulb, Target, Gauge];
const whyUs = coreValues.map((v, i) => ({ ...v, icon: valueIcons[i]! }));


function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <HeroSlider />
        <div className="absolute inset-0 z-10" style={{ background: "var(--gradient-hero)" }} />

        <div className="container-x relative z-20 py-24 sm:py-20">
          <Reveal>
            <span className="eyebrow text-[0.65rem] sm:text-xs">Digital Growth & Technology Solutions · Nagpur, India</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 max-w-3xl text-[1.75rem] font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl">
              We engineer the <span className="text-gradient">growth systems</span> behind ambitious brands.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              D-Code Studio builds custom web applications, AI automation workflows and high-performance acquisition
              engines designed to accelerate pipeline velocity and deliver measurable returns.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-primary text-sm">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-base btn-ghost text-sm">
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-xl font-extrabold text-primary sm:text-2xl">{s.value}</dt>
                  <dd className="mt-1 text-[0.7rem] text-muted-foreground sm:text-xs">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>


      {/* Core values */}
      <Section>
        <SectionHeading
          eyebrow="Core Agency Values"
          title="Technical design and strategic execution, never in isolation"
          text="Every engagement is structured around three principles that decide how we build, who we build for and how success is measured."
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

      {/* Industries */}
      <Section className="bg-[var(--surface)]">
        <SectionHeading
          eyebrow="Industries Served"
          title="Ten-plus verticals, each with its own playbook"
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 60}>
              <div className="surface-card h-full p-7">
                <h3 className="text-base font-bold uppercase tracking-widest text-primary">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>


      {/* Services */}
      <Section>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading
            eyebrow="Core Digital Capabilities"
            title="Everything you need to launch, scale and grow online"
            text="Pick one capability or hand us the whole roadmap — the same team covers engineering, branding, growth and automation."

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
      <Section className="bg-[var(--surface)]">
        <SectionHeading
          eyebrow="Featured Case Studies"
          title="Platforms that moved real business numbers"
          text="Custom CRMs, real estate lead engines and industrial portals — each measured on the outcome it produced."
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
      <Section>
        <SectionHeading
          eyebrow="Production & Delivery Methodology"
          title="Eight steps from discovery to continuous optimisation"
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
      <Section className="bg-[var(--surface)]">
        <SectionHeading eyebrow="Client Endorsements" title="What our clients say" center />
        <Testimonials />
      </Section>


      {/* FAQ */}
      <Section>

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
