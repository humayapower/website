"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Scroll-reveal leaf. Isolated as a Client Component so pages can stay
 * Server Components and export per-route metadata.
 *
 * Motivation (skill 5): sequences content into view as the reader arrives at
 * it. Collapses to static under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
