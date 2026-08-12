export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 268 96"
      role="img"
      aria-label="D-Code Studio"
      className={className}
      fill="none"
    >
      <text
        x="134"
        y="72"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="82"
        letterSpacing="-4"
        fill="currentColor"
      >
        DC
      </text>
      <rect x="0" y="46" width="62" height="1.6" fill="currentColor" />
      <rect x="206" y="46" width="62" height="1.6" fill="currentColor" />
      <text
        x="134"
        y="52"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="15"
        letterSpacing="2.6"
        fontWeight="600"
        fill="currentColor"
      >
        D-CODE STUDIO
      </text>
    </svg>
  );
}
