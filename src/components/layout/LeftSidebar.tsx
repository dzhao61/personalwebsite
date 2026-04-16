"use client";

import { useEffect } from "react";
import { bio } from "@/data/content";

export type PanelId = "bio" | "experience" | "projects" | "skills" | "education" | "contact";

interface NavItem {
  key: string;
  num: string;
  label: string;
  panel: PanelId;
}

const NAV_ITEMS: NavItem[] = [
  { key: "1", num: "1)", label: "Biography",          panel: "bio"        },
  { key: "2", num: "2)", label: "Work Experience",    panel: "experience" },
  { key: "3", num: "3)", label: "Education",          panel: "education"  },
  { key: "4", num: "4)", label: "Projects",           panel: "projects"   },
  { key: "5", num: "5)", label: "Skills",             panel: "skills"     },
  { key: "6", num: "6)", label: "Contact",            panel: "contact"    },
];

interface Props {
  active: PanelId;
  onChange: (panel: PanelId) => void;
}

export default function LeftSidebar({ active, onChange }: Props) {
  // Keyboard navigation: 1–6 keys
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement) return;
      const item = NAV_ITEMS.find((n) => n.key === e.key);
      if (item) onChange(item.panel);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onChange]);

  const mono: React.CSSProperties = {
    fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
  };

  return (
    <div
      className="flex flex-col shrink-0 h-full overflow-y-auto"
      style={{
        width: "170px",
        borderRight: "1px solid #2A2A2A",
        backgroundColor: "#000000",
        ...mono,
      }}
    >
      {/* Security identity block */}
      <div
        className="px-2 py-2 border-b"
        style={{ borderColor: "#2A2A2A", backgroundColor: "#080808" }}
      >
        <div style={{ color: "#F39F41", fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>
          {bio.name}
        </div>
        <div style={{ color: "#888888", fontSize: "10px" }}>&lt;PORTFOLIO&gt;</div>
        <div style={{ color: "#AAAAAA", fontSize: "10px", marginTop: "4px" }}>
          {bio.title.split("  |  ").map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>
      </div>

      {/* Navigation items */}
      <div className="flex flex-col">
        {/* Section header */}
        <div
          className="px-2 py-1"
          style={{
            backgroundColor: "#1A1A1A",
            color: "#888888",
            fontSize: "9px",
            letterSpacing: "0.1em",
            borderBottom: "1px solid #2A2A2A",
          }}
        >
          SECTIONS
        </div>

        {NAV_ITEMS.map((item) => {
          const isActive = active === item.panel;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.panel)}
              className="flex items-center gap-1 w-full text-left border-b cursor-pointer"
              style={{
                borderColor: "#1A1A1A",
                backgroundColor: isActive ? "#F39F41" : "transparent",
                color: isActive ? "#000000" : "#CCCCCC",
                padding: "4px 8px",
                fontSize: "11px",
                fontFamily: "inherit",
                fontWeight: isActive ? 700 : 400,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "#1A1200";
                  e.currentTarget.style.color = "#F39F41";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#CCCCCC";
                }
              }}
            >
              <span
                style={{
                  color: isActive ? "#000000" : "#555555",
                  minWidth: "18px",
                  fontSize: "10px",
                }}
              >
                {item.num}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Quick links */}
      <div className="flex flex-col mt-auto">
        <div
          className="px-2 py-1 border-t border-b"
          style={{
            borderColor: "#2A2A2A",
            backgroundColor: "#1A1A1A",
            color: "#888888",
            fontSize: "9px",
            letterSpacing: "0.1em",
          }}
        >
          LINKS
        </div>
        {[
          { label: "GitHub",   href: bio.github   },
          { label: "LinkedIn", href: bio.linkedin  },
          { label: "Resume",   href: bio.resume    },
          { label: "Email",    href: `mailto:${bio.email}` },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="px-3 py-1 border-b block"
            style={{
              borderColor: "#1A1A1A",
              color: "#4AF6C3",
              fontSize: "10px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F39F41")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4AF6C3")}
          >
            ↗ {link.label}
          </a>
        ))}

        {/* Keyboard hint */}
        <div
          className="px-2 py-2"
          style={{ color: "#333333", fontSize: "9px", lineHeight: 1.6 }}
        >
          PRESS 1–6 TO NAVIGATE
        </div>
      </div>
    </div>
  );
}
