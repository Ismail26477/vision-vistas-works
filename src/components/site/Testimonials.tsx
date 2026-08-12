import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
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
    const t = setInterval(() => setI((v) => (v >= maxIndex ? 0 : v + 1)), 4000);
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
            <div key={t.name + t.role} className="shrink-0 px-2" style={{ width: `${100 / perView}%` }}>
              <figure className="surface-card flex h-full flex-col p-6 sm:p-7">
                <Quote className="text-primary" size={26} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed sm:text-base">"{t.quote}"</blockquote>
                <figcaption className="mt-6 min-w-0 border-t border-border pt-4">
                  <p className="truncate font-display text-sm font-bold">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
