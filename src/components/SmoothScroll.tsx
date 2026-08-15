"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // NOTE: In Lenis, `lerp` and `duration` are mutually exclusive.
    // When `lerp` is set, it takes over and `duration` is ignored.
    // Use ONLY lerp for the heavy inertia feel — lower = heavier/slower.
    const lenis = new Lenis({
      lerp: 0.035,          // Very slow inertia — syrupy, weighted glide
      smoothWheel: true,
      wheelMultiplier: 0.75, // Each scroll tick travels less — deliberate
      // NOTE: Windows often enables prefers-reduced-motion system-wide,
      // which silently disables Lenis when set to true. Force it active.
      respectReducedMotion: false,
    });

    console.log("[Lenis] initialized", lenis);

    // Manual rAF loop — full control over the animation tick
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
