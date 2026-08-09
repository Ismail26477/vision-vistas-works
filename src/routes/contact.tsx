import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Sections";
import { company } from "@/lib/site-data";

const title = "Contact Nexvora Technologies | Bengaluru IT Solutions Company";
const description =
  "Talk to Nexvora about your website, SaaS, AI automation or marketing project. Call +91 98765 43210, email hello@nexvora.in or visit our Bengaluru office.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact;
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you're building"
        subtitle="Share a few details and a senior consultant — not a sales bot — will reply within one business day."
        height="55vh"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Reveal>
            <form onSubmit={onSubmit} className="surface-card p-6 sm:p-9">
              <h2 className="text-2xl font-extrabold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">All fields marked * are required.</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block font-semibold">Name *</span>
                  <input required name="name" className={field} placeholder="Your full name" />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-semibold">Email *</span>
                  <input required type="email" name="email" className={field} placeholder="you@company.com" />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-semibold">Phone *</span>
                  <input required name="phone" className={field} placeholder="+91 00000 00000" />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-semibold">Subject *</span>
                  <input required name="subject" className={field} placeholder="Website / SaaS / AI / Marketing" />
                </label>
              </div>

              <label className="mt-4 block text-sm">
                <span className="mb-2 block font-semibold">Message *</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={`${field} resize-y`}
                  placeholder="Tell us about your goals, timeline and budget range."
                />
              </label>

              <button type="submit" className="btn-base btn-primary mt-6 w-full sm:w-auto">
                Submit <Send size={17} />
              </button>

              {sent ? (
                <p className="mt-4 rounded-xl border border-primary/40 bg-muted px-4 py-3 text-sm text-primary">
                  Thank you — your enquiry has been noted. We'll get back to you within one business day.
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold">Contact details</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <Phone size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${company.email}`} className="break-all text-muted-foreground hover:text-primary">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-semibold">Office address</p>
                    <p className="text-muted-foreground">{company.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-semibold">Business hours</p>
                    <p className="text-muted-foreground">{company.hours}</p>
                  </div>
                </li>
              </ul>

              <p className="mt-8 text-sm font-semibold">Follow us</p>
              <div className="mt-3 flex gap-2">
                {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Social profile"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Reveal>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Find our office</h2>
          <p className="mt-2 text-sm text-muted-foreground">Prestige Tech Park, Outer Ring Road, Bengaluru.</p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Nexvora Technologies office location on Google Maps"
              src="https://www.google.com/maps?q=Prestige%20Tech%20Park%20Outer%20Ring%20Road%20Bengaluru&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[420px]"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
