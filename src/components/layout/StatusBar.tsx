"use client";

import { useEffect, useState } from "react";
import { bio } from "@/data/content";
import type { PanelId } from "@/components/layout/TopNav";

const PANEL_LABELS: Record<PanelId, string> = {
  bio:        "1) Biography",
  experience: "2) Work Experience",
  education:  "3) Education",
  projects:   "4) Projects",
  contact:    "5) Contact",
};

const ACTIONS = [
  { num: "91)", label: "GitHub",   href: bio.github                },
  { num: "92)", label: "LinkedIn", href: bio.linkedin              },
  { num: "93)", label: "Resume",   href: bio.resume                },
  { num: "94)", label: "Email",    href: `mailto:${bio.email}`     },
];

interface Props {
  activePanel: PanelId;
}

export default function StatusBar({ activePanel }: Props) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).toUpperCase()
      );
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const mono: React.CSSProperties = {
    fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
  };

  return (
    <div className="shrink-0" style={mono}>

      {/* ── Row 1: action bar ──────────────────────────────────────────── */}
      <div
        className="flex items-stretch justify-between"
        style={{
          backgroundColor: "#000000",
          borderBottom: "1px solid #1A1A1A",
          height: "20px",
          fontSize: "10px",
        }}
      >
        {/* Left: HELP + hint */}
        <div className="flex items-center gap-2 px-2">
          <span style={{ backgroundColor: "#CC0000", color: "#FFFFFF", padding: "0 4px", fontSize: "10px" }}>
            HELP
          </span>
          <span style={{ color: "#555555" }}>
            &lt;Menu&gt; to Return &nbsp;·&nbsp; &lt;1–5&gt;&lt;Go&gt; to Navigate
          </span>
        </div>

        {/* Right: numbered action buttons + branding */}
        <div className="flex items-stretch">
          {ACTIONS.map((action) => (
            <a
              key={action.num}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center px-3"
              style={{
                borderLeft: "1px solid #1A1A1A",
                color: "#F39F41",
                fontSize: "10px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                gap: "3px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A1200")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <span style={{ color: "#888888", fontSize: "9px" }}>{action.num}</span>
              {" "}{action.label} ↗
            </a>
          ))}
          {/* Branding block */}
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#F39F41",
              color: "#000000",
              fontWeight: 700,
              fontSize: "10px",
              borderLeft: "1px solid #A06010",
              whiteSpace: "nowrap",
            }}
          >
            Personal Portfolio
          </div>
        </div>
      </div>

      {/* ── Row 2: identity bar ────────────────────────────────────────── */}
      <div
        className="flex items-stretch justify-between"
        style={{
          backgroundColor: "#080808",
          borderBottom: "1px solid #2A2A2A",
          height: "22px",
          fontSize: "11px",
        }}
      >
        {/* Left: name + active panel */}
        <div className="flex items-center">
          <span
            className="flex items-center px-3 font-bold"
            style={{ color: "#F39F41", borderRight: "1px solid #2A2A2A", height: "100%" }}
          >
            {bio.name} &lt;PORTFOLIO&gt;
          </span>
          <span
            className="flex items-center px-3"
            style={{ color: "#AAAAAA", fontSize: "10px" }}
          >
            {PANEL_LABELS[activePanel]}
          </span>
        </div>

        {/* Right: date + time + location + status */}
        <div
          className="flex items-center gap-4 px-3"
          style={{ color: "#666666", fontSize: "10px", borderLeft: "1px solid #2A2A2A" }}
        >
          <span>{date}</span>
          <span style={{ color: "#888888" }}>{time}</span>
          <span>{bio.location}</span>
          <span style={{ color: "#4AF6C3" }}>● STUDYING</span>
        </div>
      </div>

    </div>
  );
}
