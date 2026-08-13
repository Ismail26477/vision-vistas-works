import logo from "@/assets/dcode-logo-white.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logo.url} alt="D-Code Studio" className={`${className} object-contain`} />;
}
