import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 640px)");
    const update = () => setPerView(mq.matches ? 3 : mqMd.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    mqMd.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
    };
  }, []);
  return perView;
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const perView = usePerView();
  const total = testimonials.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    setI((v) => Math.min(v, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v >= maxIndex ? 0 : v + 1)), 4500);
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${i * (100 / perView)}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="shrink-0 px-2"
              style={{ width: `${100 / perView}%` }}
            >
              <figure className="surface-card flex h-full flex-col p-6 sm:p-7">
                <Quote className="text-primary" size={30} />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed">"{t.quote}"</blockquote>
                <div className="mt-6 flex min-w-0 items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <figcaption className="min-w-0">
                    <p className="truncate font-display text-sm font-bold">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </div>
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className={s < t.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                    />
                  ))}
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => setI((v) => (v <= 0 ? maxIndex : v - 1))}
          className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to review set ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 rounded-full transition-all ${idx === i ? "w-7 bg-primary" : "w-2.5 bg-border"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => setI((v) => (v >= maxIndex ? 0 : v + 1))}
          className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
