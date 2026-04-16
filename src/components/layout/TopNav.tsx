"use client";

import { useEffect } from "react";
export type PanelId = "bio" | "experience" | "projects" | "education" | "contact";

const NAV_ITEMS: { key: string; num: string; label: string; panel: PanelId }[] = [
  { key: "1", num: "1)", label: "Biography",       panel: "bio"        },
  { key: "2", num: "2)", label: "Work Experience", panel: "experience" },
  { key: "3", num: "3)", label: "Education",       panel: "education"  },
  { key: "4", num: "4)", label: "Projects",        panel: "projects"   },
  { key: "5", num: "5)", label: "Contact",         panel: "contact"    },
];

interface Props {
  active: PanelId;
  onChange: (panel: PanelId) => void;
}

export default function TopNav({ active, onChange }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) return;
      const item = NAV_ITEMS.find((n) => n.key === e.key);
      if (item) onChange(item.panel);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onChange]);

  return (
    <div
      className="shrink-0 flex items-stretch"
      style={{
        backgroundColor: "#050505",
        borderBottom: "1px solid #2A2A2A",
        height: "26px",
        fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.panel;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.panel)}
            className="flex items-center h-full cursor-pointer"
            style={{
              padding: "0 12px",
              backgroundColor: "transparent",
              color: isActive ? "#F39F41" : "#666666",
              fontSize: "10px",
              fontWeight: isActive ? 700 : 400,
              fontFamily: "inherit",
              /* outlined active: box on all sides */
              border: isActive ? "1px solid #F39F41" : "1px solid transparent",
              /* keep right divider for inactive tabs */
              borderRight: isActive ? "1px solid #F39F41" : "1px solid #1A1A1A",
              outline: "none",
              whiteSpace: "nowrap",
              /* pull top/bottom border inward so it floats inside the row */
              margin: "3px 0",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "#F39F41";
                e.currentTarget.style.backgroundColor = "#0F0C00";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "#666666";
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            <span style={{ color: isActive ? "#F39F41" : "#444444", marginRight: "4px", fontSize: "9px", opacity: 0.8 }}>
              {item.num}
            </span>
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
