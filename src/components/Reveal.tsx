"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before the animation starts once the element is in view */
  delay?: number;
  /** If true, the element animates in immediately on mount (use for above-the-fold hero content) */
  immediate?: boolean;
  /** Additional className to pass to the wrapper div */
  className?: string;
  /** Inline styles to pass to the wrapper div */
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  immediate = false,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    // Already visible (above-the-fold / immediate mode) — skip observer
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        // Start triggering slightly before the element enters the viewport
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.08,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={[
        // Base transition: 600ms ease-out as specified
        "transition-[opacity,transform] duration-[600ms] ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * SectionReveal — wraps an entire section's children list and applies
 * staggered Reveal animations with 100ms delay increments automatically.
 * Use this instead of manually setting delay={i * 100} on each child.
 */
interface SectionRevealProps {
  children: ReactNode[];
  /** Base delay before the first child animates (default 0) */
  baseDelay?: number;
  /** Per-child stagger increment in ms (default 100) */
  stagger?: number;
  className?: string;
}

export function SectionReveal({
  children,
  baseDelay = 0,
  stagger = 100,
  className = "",
}: SectionRevealProps) {
  return (
    <>
      {(Array.isArray(children) ? children : [children]).map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * stagger} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
