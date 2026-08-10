import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },

      { threshold: 0.12 },
    );
    io.observe(el);

    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        setShown(true);
        io.disconnect();
      }
    };
    const t1 = window.setTimeout(check, 60);
    const t2 = window.setTimeout(check, 400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${shown ? "reveal-shown" : "reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
