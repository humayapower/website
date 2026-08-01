"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

/** Never changes, so useSyncExternalStore only distinguishes server vs client. */
const subscribeNoop = () => () => {};

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
 *
 * Fails visible on purpose. The server renders plain content, and the
 * animated variant is only swapped in after mount, so a JS failure or a
 * missed intersection callback can never leave a section blank. An earlier
 * version rendered `initial={{ opacity: 0 }}` on the server and relied on
 * `whileInView` to reveal it, which left tall sections invisible when the
 * viewport threshold was not satisfied on first pass.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();
  // false during SSR and the first client render, true thereafter.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  if (!mounted || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
