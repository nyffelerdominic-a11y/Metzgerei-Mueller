import { cn } from "@/lib/utils";

/**
 * A circular "stamp" — text curled around a ring with a centerpiece.
 * Inspired by old butcher's wax seals and Swiss postage stamps.
 */
export function Stamp({
  topText = "Müller Metzgerei AG",
  bottomText = "Brüttisellen · ZH",
  centerLine1 = "Seit",
  centerLine2 = "1984",
  className,
  size = 200,
  tone = "red",
}: {
  topText?: string;
  bottomText?: string;
  centerLine1?: string;
  centerLine2?: string;
  className?: string;
  size?: number;
  tone?: "red" | "ink" | "cream" | "brass";
}) {
  const color =
    tone === "cream"
      ? "var(--color-paper)"
      : tone === "ink"
        ? "var(--color-ink)"
        : tone === "brass"
          ? "var(--color-brass)"
          : "var(--color-brand-red)";

  // Unique ids so multiple stamps can coexist
  const idTop = `stamp-top-${topText.length}-${size}`;
  const idBottom = `stamp-bot-${bottomText.length}-${size}`;

  const bgFill =
    tone === "cream"
      ? "var(--color-ink)"
      : tone === "brass"
        ? "var(--color-ink)"
        : "var(--color-paper)";

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={cn("select-none", className)}
      style={{ filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.18))" }}
      aria-hidden
    >
      <defs>
        <path id={idTop} d="M 30,100 A 70,70 0 0 1 170,100" fill="none" />
        <path id={idBottom} d="M 35,108 A 65,65 0 0 0 165,108" fill="none" />
      </defs>

      {/* Solid background disc — makes stamp readable on any photo */}
      <circle cx="100" cy="100" r="94" fill={bgFill} />

      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      {/* Inner thin ring */}
      <circle
        cx="100"
        cy="100"
        r="84"
        fill="none"
        stroke={color}
        strokeWidth="1.25"
      />

      {/* Top arc text */}
      <text
        fill={color}
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        <textPath href={`#${idTop}`} startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>

      {/* Bottom arc text */}
      <text
        fill={color}
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "11px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}
      >
        <textPath href={`#${idBottom}`} startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      {/* Center ornamental stars */}
      <g fill={color}>
        <text
          x="100"
          y="62"
          textAnchor="middle"
          style={{ fontSize: "10px" }}
        >
          ★
        </text>
        <text
          x="100"
          y="148"
          textAnchor="middle"
          style={{ fontSize: "10px" }}
        >
          ★
        </text>
      </g>

      {/* Center content */}
      <text
        x="100"
        y="92"
        textAnchor="middle"
        fill={color}
        style={{
          fontFamily: "var(--font-serif), serif",
          fontSize: "16px",
          fontStyle: "italic",
          fontWeight: 300,
        }}
      >
        {centerLine1}
      </text>
      <text
        x="100"
        y="124"
        textAnchor="middle"
        fill={color}
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        {centerLine2}
      </text>

      {/* Decorative side dashes */}
      <g stroke={color} strokeWidth="2.5" strokeLinecap="round">
        <line x1="22" y1="100" x2="32" y2="100" />
        <line x1="168" y1="100" x2="178" y2="100" />
      </g>
    </svg>
  );
}
