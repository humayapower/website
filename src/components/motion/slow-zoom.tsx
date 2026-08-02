"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

/**
 * Slow ambient zoom for banner photography.
 *
 * Motivation (skill 5): gives an otherwise static page top a sense of depth.
 *
 * Three differences from the naive `repeat: Infinity` version:
 *  - Pauses when the banner scrolls out of view, so the compositor is not
 *    animating a transform for the entire session.
 *  - Collapses to a static image under prefers-reduced-motion. A slow
 *    infinite zoom is a motion-sickness trigger.
 *  - Scales down from 1.06 rather than up from 1.2, so the source image is
 *    never upscaled past its natural size.
 *
 * React re-renders: none. Motion writes the transform to the DOM outside the
 * render cycle, so this costs compositor frames only, and only while visible.
 */
export default function SlowZoom({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.1 });

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // Unmounting the animated variant is what actually stops the work. Toggling
  // `repeat` on a running infinite animation does not halt the current cycle,
  // so the compositor keeps ticking after the banner leaves the viewport.
  return (
    <div ref={ref} className={className}>
      {inView ? (
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="h-full w-full">{children}</div>
      )}
    </div>
  );
}
