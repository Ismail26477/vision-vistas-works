import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Target } from "lucide-react";
import storyImg from "@/assets/story.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Sections";
import { milestones, projects, stats, team } from "@/lib/site-data";
import pageBanner from "@/assets/banner-about.jpg";

const title = "About Nexvora Technologies | Our Story, Team & Journey";
const description =
  "Founded in Bengaluru in 2016, Nexvora is a 60-person IT solutions team delivering software, AI automation and growth marketing for Indian and global clients.";

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
        title="Nine years of building software India actually uses"
        subtitle="We started as two engineers in a rented Bengaluru desk. Today we're a 60-person team shipping products, platforms and campaigns for clients across five countries."
        height="65vh"
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={storyImg}
              alt="Nexvora founders planning a project at the whiteboard"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              From one client in Pune to 160+ projects delivered
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Nexvora began in 2016 when Arjun and Priya left large consulting firms with a simple frustration:
                Indian businesses were paying enterprise prices for work that never shipped on time.
              </p>
              <p>
                We built the opposite — small senior teams, weekly demos, fixed blueprints and honest reporting. That
                approach earned us referrals across retail, healthcare, logistics and fintech.
              </p>
              <p>
                Today we run four practices — engineering, AI automation, design and growth — under one roof, so
                strategy never gets lost in handovers.
              </p>
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
              title: "Make world-class technology affordable for Indian businesses",
              text: "We exist to give every ambitious company — a 12-store retailer or a Series B startup — access to the same engineering quality that global enterprises buy, at pricing and pace that fit the Indian market.",
            },
            {
              icon: Compass,
              label: "Vision",
              title: "Be India's most trusted digital delivery partner by 2030",
              text: "A thousand businesses running on systems we built, a team that grows careers rather than churns them, and a reputation where our clients' referrals remain our largest source of new work.",
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
        <SectionHeading eyebrow="Company Journey" title="Milestones that shaped Nexvora" center />
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
          eyebrow="Team Members"
          title="The people you'll actually work with"
          text="Founders stay involved in every account — no handover to a junior team after the pitch."
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

      <CTABanner />
    </>
  );
}
