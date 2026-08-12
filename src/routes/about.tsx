import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Target } from "lucide-react";
import storyImg from "@/assets/story.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Sections";
import { milestones, projects, stats, team } from "@/lib/site-data";
import pageBanner from "@/assets/banner-about.jpg";

const title = "About D-Code Studio | Nagpur Digital Transformation Agency";
const description =
  "D-Code Studio is a full-service digital transformation and web engineering agency in Nagpur, Maharashtra — 50+ projects, 35+ enterprise clients, 98% client retention.";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        image={pageBanner}
        eyebrow="About Us"
        title="A technology partner built for measurable growth"
        subtitle="D-Code Studio operates as a full-service digital transformation and web engineering agency based in Nagpur, Maharashtra — partnering with high-growth startups, regional enterprises and commercial brands."
        height="65vh"
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={storyImg}
              alt="The D-Code Studio team planning a client architecture at the whiteboard"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Executive Summary & Leadership</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Bespoke architectures, AI automation and acquisition engines
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                We deliver bespoke technical architectures, AI-driven automation workflows and high-performance
                acquisition engines for organisations that measure marketing in pipeline, not impressions.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-foreground">
                "In today's competitive landscape, technical design and strategic execution cannot exist in isolation.
                At D-Code Studio, we build custom applications and automated growth systems designed specifically to
                accelerate revenue pipeline velocity and deliver measurable returns."
              </blockquote>
              <p className="font-semibold text-foreground">— Derick, Founder & Growth Strategist</p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-extrabold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-[var(--surface)]">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Mission",
              title: "Build technology that converts, not just launches",
              text: "We design custom technical architectures tailored directly to organisational goals, operational workflows and end-user needs — then hold every build accountable to lead velocity, conversion rate and acquisition cost.",
            },
            {
              icon: Compass,
              label: "Vision",
              title: "The growth engineering partner for India's ambitious brands",
              text: "High-performance web frameworks, custom AI interfaces and scalable marketing stacks under one roof, so startups, regional enterprises and commercial brands never have to stitch four vendors together again.",
            },

          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div className="surface-card h-full p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-muted text-primary">
                  <c.icon size={22} />
                </span>
                <span className="eyebrow mt-5 block">{c.label}</span>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Journey */}
      <Section>
        <SectionHeading eyebrow="Evolution & Expansion Roadmap" title="Four phases of building D-Code Studio" center />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 60}>
                <div
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background ${
                      i % 2 === 0 ? "md:-right-1.5 md:left-auto" : "md:-left-1.5"
                    }`}
                  />
                  <div className="surface-card p-6">
                    <span className="font-display text-sm font-extrabold text-primary">{m.year}</span>
                    <h3 className="mt-1 text-lg font-bold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-[var(--surface)]">
        <SectionHeading
          eyebrow="Leadership & Practices"
          title="The people you'll actually work with"
          text="The founder stays involved in every account — no handover to a junior team after the pitch."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="surface-card group h-full overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="text-sm font-semibold text-primary">{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects completed */}
      <Section>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading eyebrow="Projects Completed" title="A snapshot of recent delivery" />
          <Reveal>
            <Link to="/portfolio" className="btn-base btn-ghost">
              Full portfolio <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link to="/portfolio" className="surface-card group block h-full overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{p.clientCompany}</p>
                  <h3 className="mt-1.5 text-base font-bold">{p.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner
        image={pageBanner}
        eyebrow="Work With Our Team"
        title="Nine years of engineering. One partner for your next build."
        text="Meet the team behind 50+ launches. Tell us your goal and we'll map the architecture, timeline and budget in a single call."
        primaryLabel="Talk To The Team"
        secondaryLabel="See Case Studies"
      />
    </>
  );
}
