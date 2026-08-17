"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ServiceItem {
  number: string;
  title: string;
  copy: string;
  items: string[];
}

interface ServicesAccordionProps {
  services: ServiceItem[];
}

type Breakpoint = "mobile" | "tablet" | "desktop";

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

interface RowProps {
  service: ServiceItem;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isLast: boolean;
}

function ServiceRow({ service, open, onMouseEnter, onMouseLeave, onClick, isLast }: RowProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
    });
    ro.observe(el);
    setContentHeight(el.scrollHeight);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        position: "relative",
        cursor: "pointer",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        borderBottom: isLast ? "1px solid rgba(255,255,255,0.10)" : "none",
        overflow: "hidden",
        transition: "background 0.35s ease",
        background: open ? "rgba(233,232,228,0.04)" : "transparent",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: open ? "100%" : "0%",
          background: "rgba(255,255,255,0.30)",
          transition: open
            ? "width 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s"
            : "width 0.35s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 0",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: open ? "rgba(233,232,228,0.85)" : "rgba(160,160,160,0.65)",
            flexShrink: 0,
            minWidth: "2.8rem",
            transition: "color 0.35s ease",
          }}
        >
          {service.number}
        </span>

        <h3
          style={{
            flex: 1,
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(1.55rem, 3.4vw, 3rem)",
            fontWeight: 600,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: open ? "rgb(233,232,228)" : "rgb(255,255,255)",
            margin: 0,
            transition: "color 0.35s ease",
          }}
        >
          {service.title}
        </h3>

        <span
          aria-hidden
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: open ? "1px solid rgba(233,232,228,0.45)" : "1px solid rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.35s ease",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line
              x1="1" y1="6" x2="11" y2="6"
              stroke={open ? "rgb(233,232,228)" : "rgba(255,255,255,0.65)"}
              strokeWidth="1.25"
              strokeLinecap="round"
              style={{ transition: "stroke 0.35s ease" }}
            />
            <line
              x1="6" y1="1" x2="6" y2="11"
              stroke={open ? "rgb(233,232,228)" : "rgba(255,255,255,0.65)"}
              strokeWidth="1.25"
              strokeLinecap="round"
              style={{
                opacity: open ? 0 : 1,
                transition: "opacity 0.3s ease, stroke 0.35s ease",
              }}
            />
          </svg>
        </span>
      </div>

      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? contentHeight + "px" : "0px",
          transition: open
            ? "max-height 0.55s cubic-bezier(0.16,1,0.3,1)"
            : "max-height 0.38s cubic-bezier(0.4,0,1,1)",
        }}
      >
        <div ref={contentRef}>
          <div
            style={{
              paddingBottom: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0px)" : "translateY(8px)",
              transition: open
                ? "opacity 0.45s ease 0.12s, transform 0.45s ease 0.12s"
                : "opacity 0.18s ease, transform 0.18s ease",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "0.88rem",
                color: "rgba(160,160,160,0.9)",
                lineHeight: 1.65,
                maxWidth: "540px",
                margin: 0,
              }}
            >
              {service.copy}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {service.items.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(233,232,228,0.65)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesAccordion({ services }: ServicesAccordionProps) {
  const bp = useBreakpoint();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpenIndex(null);
  }, [bp]);

  const handleMouseEnter = useCallback(
    (i: number) => {
      if (bp === "desktop") setOpenIndex(i);
    },
    [bp]
  );

  const handleMouseLeave = useCallback(() => {
    if (bp === "desktop") setOpenIndex(null);
  }, [bp]);

  const handleClick = useCallback(
    (i: number) => {
      if (bp === "tablet") {
        setOpenIndex((prev) => (prev === i ? null : i));
      }
    },
    [bp]
  );

  const isOpen = (i: number): boolean => {
    if (bp === "mobile") return true;
    return openIndex === i;
  };

  return (
    <div style={{ width: "100%" }}>
      {services.map((service, i) => (
        <ServiceRow
          key={service.number}
          service={service}
          open={isOpen(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
          isLast={i === services.length - 1}
        />
      ))}
    </div>
  );
}