import { skills } from "@/data/content";
import PanelWrapper from "@/components/ui/PanelWrapper";

const CATEGORIES: { label: string; items: string[]; color?: string }[] = [
  { label: "LANGUAGES",           items: skills.languages  },
  { label: "FRAMEWORKS & LIBS",   items: skills.frameworks },
  { label: "TOOLS",               items: skills.tools      },
  { label: "VALUATION & MODELLING", items: skills.valuation, color: "#AA88FF" },
  { label: "DEAL EXECUTION",      items: skills.dealwork,  color: "#AA88FF" },
  { label: "DOMAIN",              items: skills.domain,    color: "#AA88FF" },
];

export default function SkillsPanel() {
  const total = Object.values(skills).flat().length;

  return (
    <PanelWrapper title="SKILLS & TECHNOLOGIES" subtitle={`${total} ITEMS`} noPad>
      {CATEGORIES.map(({ label, items, color }, ci) => (
        <div key={label}>
          {/* Category header */}
          <div
            style={{
              backgroundColor: color ? "#100A1A" : "#1A1A00",
              color: color ?? "#F39F41",
              fontSize: "9px",
              letterSpacing: "0.1em",
              fontWeight: 700,
              padding: "3px 12px",
              borderBottom: "1px solid #2A2A2A",
              borderTop: ci > 0 ? "1px solid #2A2A2A" : "none",
            }}
          >
            {label}
          </div>

          {/* 2-column item rows */}
          {chunk(items, 2).map((pair, ri) => (
            <div
              key={ri}
              style={{
                display: "flex",
                borderBottom: "1px solid #0F0F0F",
                backgroundColor: ri % 2 === 0 ? "#000000" : "#030303",
              }}
            >
              {pair.map((item, col) => (
                <div
                  key={item}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px 12px",
                    borderRight: col === 0 ? "1px solid #111111" : "none",
                    cursor: "default",
                    transition: "background-color 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = color ? "#1A0A2A" : "#1A1200";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "";
                  }}
                >
                  <span style={{ color: color ? "#5A3A7A" : "#333333", fontSize: "9px" }}>▸</span>
                  <span style={{ color: "#CCCCCC", fontSize: "11px" }}>{item}</span>
                </div>
              ))}
              {pair.length < 2 && <div style={{ flex: 1 }} />}
            </div>
          ))}
        </div>
      ))}

      <div
        style={{
          color: "#555555",
          fontSize: "9px",
          padding: "5px 12px",
          borderTop: "1px solid #111111",
          letterSpacing: "0.06em",
        }}
      >
        ORANGE HEADERS = TECHNICAL SKILLS &nbsp;·&nbsp; PURPLE HEADERS = FINANCE & DOMAIN SKILLS
      </div>
    </PanelWrapper>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
}
