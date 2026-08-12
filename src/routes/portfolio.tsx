import { createFileRoute } from "@tanstack/react-router";
import { Expand, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Sections";
import { projects } from "@/lib/site-data";
import pageBanner from "@/assets/banner-portfolio.jpg";

const title = "Portfolio & Case Studies | D-Code Studio Nagpur";
const description =
  "Featured D-Code Studio case studies: GrabDeal CRM, Bright Reality International real estate platform, Gode Engineering industrial portal and more across 10+ industries.";


export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof projects)[number] | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        image={pageBanner}
        eyebrow="Featured Case Studies"
        title="Projects that moved real business numbers"
        subtitle="50+ projects delivered across 10+ industry verticals — filter by capability to see how we approach each type of problem."
        height="55vh"
      />

      <Section>
        <SectionHeading eyebrow="Project Gallery" title="Work by company and capability" />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`btn-base text-sm ${filter === c ? "btn-primary" : "btn-ghost"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <article className="surface-card group flex h-full flex-col overflow-hidden">
                <button
                  type="button"
                  onClick={() => setLightbox(p)}
                  className="relative block aspect-[16/10] w-full overflow-hidden"
                  aria-label={`Preview ${p.name}`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-background/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Expand size={26} className="text-primary" />
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {p.category}
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{p.clientCompany}</p>
                  <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{p.result}</p>
                  <button
                    type="button"
                    onClick={() => setLightbox(p)}
                    className="btn-base btn-ghost mt-5 self-start text-sm"
                  >
                    View Project
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.name}
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-[var(--surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={lightbox.image}
                alt={lightbox.name}
                width={1200}
                height={800}
                className="aspect-[16/10] w-full rounded-t-3xl object-cover"
              />
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/85 backdrop-blur transition-colors hover:text-primary"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                {lightbox.clientCompany} · {lightbox.category}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">{lightbox.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{lightbox.details}</p>
              <p className="mt-5 font-display text-lg font-bold text-primary">{lightbox.result}</p>
            </div>
          </div>
        </div>
      ) : null}

      <CTABanner
        image={pageBanner}
        eyebrow="Your Project Next"
        title="Every case study here started as a 30-minute conversation."
        text="Bring us the problem — lead leakage, slow site, manual follow-ups — and we'll show you what a fix looks like in practice."
        primaryLabel="Start Your Project"
        secondaryLabel="Browse More Work"
      />
    </>
  );
}
