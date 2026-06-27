import { useMemo } from "react";

type ArtType =
  | "leaf"
  | "seed"
  | "drop"
  | "spiral"
  | "grain"
  | "berry"
  | "candy"
  | "nut"
  | "mix"
  | "roast";

interface ProductArtProps {
  type: ArtType;
  seed?: number;
  className?: string;
}

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GOLD = "#D4AF37";
const GOLD_PALE = "#E8CC7F";
const MAROON = "#7A1F1F";
const CREAM = "#FFFDF8";
const INK = "#1F1F1F";

export default function ProductArt({ type, seed = 1, className = "" }: ProductArtProps) {
  const rand = useMemo(() => mulberry32(seed * 1117 + 31), [seed]);
  const gradId = `pkg-${type}-${seed}`;
  const foilId = `foil-${type}-${seed}`;
  const grainId = `grain-${type}-${seed}`;
  const rotate = 6 + Math.floor(rand() * 10);
  const label = type === "candy" ? "FESTIVE" : type === "leaf" ? "HERITAGE" : type === "seed" ? "FRESH" : "CRAFTED";
  const dotPositions = useMemo(
    () =>
      Array.from({ length: 16 }, () => ({
        x: 30 + rand() * 160,
        y: 24 + rand() * 172,
        r: 0.8 + rand() * 1.8,
      })),
    [rand]
  );

  return (
    <svg viewBox="0 0 220 220" className={className} role="img" aria-label="Premium product packaging illustration">
      <defs>
        <linearGradient id={gradId} x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="50%" stopColor="#F8EBC6" />
          <stop offset="100%" stopColor="#E9CF92" />
        </linearGradient>
        <linearGradient id={foilId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD_PALE} />
          <stop offset="50%" stopColor={GOLD} />
          <stop offset="100%" stopColor="#B8862B" />
        </linearGradient>
        <filter id={grainId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={seed} result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
        </filter>
      </defs>

      <rect x="24" y="24" width="172" height="172" rx="36" fill={`url(#${gradId})`} />
      <rect x="24" y="24" width="172" height="172" rx="36" fill="none" stroke={`url(#${foilId})`} strokeWidth="2.4" />
      <rect x="38" y="38" width="144" height="144" rx="26" fill={CREAM} opacity="0.96" />
      <rect x="38" y="38" width="144" height="144" rx="26" fill={`url(#${grainId})`} opacity="0.3" />
      <rect x="48" y="48" width="124" height="30" rx="15" fill={`url(#${foilId})`} />
      <path d="M48 63H172" stroke="#FFF8DC" strokeOpacity="0.55" strokeWidth="1.2" />
      <text x="110" y="67" textAnchor="middle" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="700" letterSpacing="2" fill={INK}>
        {label}
      </text>

      {dotPositions.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={MAROON} opacity="0.05" />
      ))}

      <g transform={`translate(110 118) rotate(${rotate})`}>
        {renderMotif(type, foilId)}
      </g>

      <circle cx="158" cy="72" r="20" fill={`url(#${foilId})`} opacity="0.95" />
      <circle cx="158" cy="72" r="20" fill="none" stroke={CREAM} strokeWidth="1" opacity="0.55" />
      <path d="M152 67c3-5 6-9 9-12 2 4 5 8 8 12-4 2-8 3-10 7-2-4-6-6-7-7z" fill={CREAM} opacity="0.9" />
      <rect x="34" y="32" width="152" height="156" rx="34" fill="none" stroke={GOLD} strokeOpacity="0.22" strokeWidth="2" />
    </svg>
  );
}

function renderMotif(type: ArtType, foilId: string) {
  const foil = `url(#${foilId})`;
  switch (type) {
    case "leaf":
      return (
        <g>
          <path d="M-10 -38c24 4 34 24 40 44-14 0-28-10-40-20-12 10-26 20-40 20 6-20 16-40 40-44z" fill={foil} opacity="0.9" />
          <path d="M0 -40v48" stroke={CREAM} strokeWidth="2.6" strokeLinecap="round" opacity="0.8" />
          <path d="M-6 -24C10 -16 18 2 18 16" stroke={MAROON} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        </g>
      );
    case "seed":
      return (
        <g>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const cx = Math.cos(angle) * 34;
            const cy = Math.sin(angle) * 34;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="11"
                ry="4.8"
                fill={foil}
                transform={`rotate(${(angle * 180) / Math.PI} ${cx} ${cy})`}
                opacity="0.85"
              />
            );
          })}
          <circle cx="0" cy="0" r="12" fill={MAROON} opacity="0.72" />
        </g>
      );
    case "drop":
      return <path d="M0 -44c16 24 24 40 24 56a24 24 0 1 1-48 0c0-16 8-32 24-56z" fill={foil} opacity="0.9" />;
    case "spiral":
      return (
        <path
          d="M0 0 m0 -44 a44 44 0 1 1 -31 75.3 a31 31 0 1 1 22 -53 a19 19 0 1 1 -13.4 32.3"
          stroke={foil}
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
      );
    case "grain":
      return (
        <g>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const dist = 20 + (i % 3) * 10;
            return <circle key={i} cx={Math.cos(angle) * dist} cy={Math.sin(angle) * dist} r={3 + (i % 3)} fill={foil} opacity="0.8" />;
          })}
        </g>
      );
    case "berry":
      return (
        <g>
          {[[-24, -10], [24, -10], [0, 20]].map(([dx, dy], i) => (
            <circle key={i} cx={dx} cy={dy} r="20" fill={foil} opacity="0.8" />
          ))}
        </g>
      );
    case "candy":
      return (
        <g>
          <rect x="-30" y="-12" width="60" height="28" rx="12" fill={foil} opacity="0.9" />
          <path d="M-30 2L-50 -12L-50 16Z" fill={foil} opacity="0.86" />
          <path d="M30 2L50 -12L50 16Z" fill={foil} opacity="0.86" />
        </g>
      );
    case "nut":
      return (
        <g>
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const cx = Math.cos(angle) * 29;
            const cy = Math.sin(angle) * 29;
            return <rect key={i} x={cx - 8} y={cy - 14} width="16" height="28" rx="8" fill={foil} opacity="0.8" />;
          })}
        </g>
      );
    case "mix":
      return (
        <g>
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const dist = 18 + (i % 3) * 11;
            return <circle key={i} cx={Math.cos(angle) * dist} cy={Math.sin(angle) * dist} r={3 + (i % 3)} fill={foil} opacity="0.8" />;
          })}
        </g>
      );
    case "roast":
      return (
        <g>
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const cx = Math.cos(angle) * 31;
            const cy = Math.sin(angle) * 31;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="11"
                ry="6"
                fill={foil}
                opacity="0.8"
                transform={`rotate(${(angle * 180) / Math.PI + 90} ${cx} ${cy})`}
              />
            );
          })}
        </g>
      );
    default:
      return null;
  }
}
