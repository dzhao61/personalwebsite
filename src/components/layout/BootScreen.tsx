"use client";

import { useState, useEffect } from "react";

interface Line {
  text: string;
  color?: string;
  bold?: boolean;
  ok?: boolean;   // renders a green [ OK ] suffix
}

const LINES: Line[] = [
  { text: "SIGNAL DESK TERMINAL  v12.4.1", color: "#F39F41", bold: true },
  { text: "─────────────────────────────────────────────────────", color: "#2A2A2A" },
  { text: "" },
  { text: "▸ INITIALISING TERMINAL................", color: "#888888", ok: true },
  { text: "▸ LOADING MARKET DATA FEEDS............", color: "#888888", ok: true },
  { text: "▸ ESTABLISHING SECURE CONNECTION.......", color: "#888888", ok: true },
  { text: "▸ AUTHENTICATING SESSION...............", color: "#888888", ok: true },
  { text: "" },
  { text: "WELCOME  DANIEL ZHAO  <PORTFOLIO>", color: "#F39F41", bold: true },
];

// total ~1.5s for lines, then 0.5s fade = ~2s
const LINE_INTERVAL_MS = 200;
const FADE_AFTER_MS    = 400; // pause after last line before fade
const FADE_DURATION_MS = 800;

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(0);
  const [leaving, setLeaving] = useState(false);

  // Reveal lines one by one
  useEffect(() => {
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), LINE_INTERVAL_MS);
    return () => clearTimeout(t);
  }, [visible]);

  // After all lines shown, pause then fade out
  useEffect(() => {
    if (visible < LINES.length) return;
    const t = setTimeout(() => setLeaving(true), FADE_AFTER_MS);
    return () => clearTimeout(t);
  }, [visible]);

  // After fade, call onDone
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(onDone, FADE_DURATION_MS);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  // Skip on keypress or click
  useEffect(() => {
    function skip() {
      setLeaving(true);
    }
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000000",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
        opacity: leaving ? 0 : 1,
        transition: `opacity ${FADE_DURATION_MS}ms ease`,
        cursor: "default",
      }}
    >
      {/* CRT scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "520px", padding: "0 20px", position: "relative" }}>
        {LINES.slice(0, visible).map((line, i) => (
          <div
            key={i}
            style={{
              color: line.color ?? "#888888",
              fontSize: "13px",
              fontWeight: line.bold ? 700 : 400,
              lineHeight: "1.9",
              minHeight: "1.9em",
              whiteSpace: "pre",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>{line.text}</span>
            {line.ok && (
              <span style={{ color: "#4AF6C3", fontWeight: 700 }}>[ OK ]</span>
            )}
          </div>
        ))}

        {/* Blinking cursor on last line */}
        {visible >= LINES.length && (
          <div
            style={{
              color: "#F39F41",
              fontSize: "13px",
              lineHeight: "1.9",
              marginTop: "4px",
            }}
          >
            <span className="cursor-blink">█</span>
          </div>
        )}
      </div>
    </div>
  );
}
