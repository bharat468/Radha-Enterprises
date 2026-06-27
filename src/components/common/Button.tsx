import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  target?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  className = "",
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 font-body";

  const variants: Record<string, string> = {
    primary: "bg-maroon-gradient text-cream shadow-gold hover:shadow-luxury-lg hover:scale-[1.03]",
    outline: "border-2 border-gold text-maroon hover:bg-gold/10 hover:scale-[1.03]",
    ghost: "text-maroon hover:text-maroon-light underline-offset-4 hover:underline",
  };

  const Comp = href ? motion.a : motion.button;
  const props = href ? { href, target } : { onClick, type: "button" as const };

  return (
    <Comp
      {...(props as object)}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </Comp>
  );
}
