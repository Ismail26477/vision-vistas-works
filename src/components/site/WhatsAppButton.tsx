import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";

export function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi D-Code Studio, I'd like to discuss a project.",
  )}`;


  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="animate-float fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-[oklch(0.15_0.02_150)] shadow-[var(--shadow-soft)] transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} />
    </a>
  );
}
