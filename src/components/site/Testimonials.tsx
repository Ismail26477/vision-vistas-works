import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % total), 6000);
    return () => clearInterval(t);
  }, [paused, total]);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-[var(--surface)]">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {testimonials.map((t) => (
            <figure key={t.name} className="w-full shrink-0 p-7 sm:p-12">
              <Quote className="text-primary" size={34} />
              <blockquote className="mt-5 text-lg leading-relaxed sm:text-xl">"{t.quote}"</blockquote>
              <div className="mt-7 flex min-w-0 items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <figcaption className="min-w-0">
                  <p className="truncate font-display font-bold">{t.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
                <div className="ml-auto flex shrink-0 gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className={s < t.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                    />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => setI((v) => (v - 1 + total) % total)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === i ? "w-7 bg-primary" : "w-2.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => setI((v) => (v + 1) % total)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
