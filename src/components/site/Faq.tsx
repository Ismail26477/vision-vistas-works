import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-[var(--surface)]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="min-w-0 flex-1 font-display text-base font-bold sm:text-lg">{f.q}</span>
              <Plus
                size={20}
                className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            <div
              className="grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7 sm:text-base">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
