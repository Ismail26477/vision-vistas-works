import { useEffect, useState } from "react";
import hero1 from "@/assets/hero.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";

const slides = [
  { src: hero1, alt: "D-Code Studio engineering team collaborating in the Nagpur studio" },
  { src: hero2, alt: "Developers writing code on multiple monitors at night" },
  { src: hero3, alt: "Performance marketing team reviewing campaign dashboards" },
  { src: hero4, alt: "AI automation engineer working beside live data visualisations" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1600}
            height={1008}
            loading={idx === 0 ? "eager" : "lazy"}
            className="h-full w-full shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
