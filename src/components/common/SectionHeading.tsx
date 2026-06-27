import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`font-body text-xs sm:text-sm uppercase tracking-[0.25em] mb-3 ${
            light ? "text-gold-pale" : "text-gold-muted"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      <div className={`paan-divider mt-5 ${align === "center" ? "" : "justify-start"}`}>
        <span className="text-gold text-lg">❀</span>
      </div>
      {description && (
        <p className={`mt-5 text-sm sm:text-base leading-relaxed ${light ? "text-cream/70" : "text-ink/65"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
