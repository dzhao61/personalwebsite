import { experience, type ExperienceType } from "@/data/content";
import PanelWrapper from "@/components/ui/PanelWrapper";

const TYPE_COLOR: Record<ExperienceType, string> = {
  FULLTIME: "#4AF6C3",
  INTERN:   "#F39F41",
  RESEARCH: "#AA88FF",
  CONTRACT: "#FF433D",
};

function SubHeader({ children, color, bg }: { children: React.ReactNode; color: string; bg: string }) {
  return (
    <div
      style={{
        padding: "3px 14px 3px 28px",
        backgroundColor: bg,
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
        color,
        fontSize: "9px",
        letterSpacing: "0.12em",
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  );
}

export default function ExperiencePanel() {
  return (
    <PanelWrapper title="WORK EXPERIENCE" subtitle={`${experience.length} ROLES`} noPad>

      {/* ── Column headers ──────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "190px 1fr 140px 100px 72px",
          gap: "0 10px",
          padding: "4px 14px",
          backgroundColor: "#1A1A00",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        {["ORGANIZATION", "ROLE", "PERIOD", "LOCATION", "TYPE"].map((h) => (
          <span key={h} style={{ color: "#F39F41", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 700 }}>
            {h}
          </span>
        ))}
      </div>

      {/* ── Rows ────────────────────────────────────────────────────────── */}
      {experience.map((exp, i) => (
        <div
          key={i}
          style={{ borderTop: i > 0 ? "2px solid #2A2A2A" : "none" }}
        >
          {/* Main summary row — amber tint anchors the entry visually */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "190px 1fr 140px 100px 72px",
              gap: "0 10px",
              padding: "7px 14px",
              backgroundColor: "#0A0800",
            }}
          >
            <span style={{ color: "#F39F41", fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>
              {exp.company}
            </span>
            <div>
              <div style={{ color: "#CCCCCC", fontSize: "11px" }}>{exp.role}</div>
              {exp.sector && (
                <div style={{ color: "#555555", fontSize: "9px", marginTop: "2px", letterSpacing: "0.03em" }}>
                  {exp.sector}
                </div>
              )}
            </div>
            <span style={{ color: "#888888", fontSize: "10px" }}>{exp.period}</span>
            <span style={{ color: "#888888", fontSize: "10px" }}>{exp.location}</span>
            <span
              style={{
                color: TYPE_COLOR[exp.type],
                fontSize: "9px",
                border: `1px solid ${TYPE_COLOR[exp.type]}`,
                padding: "1px 4px",
                letterSpacing: "0.04em",
                display: "inline-block",
                height: "fit-content",
              }}
            >
              {exp.type}
            </span>
          </div>

          {/* Transaction sub-table */}
          {exp.transactions && exp.transactions.length > 0 && (
            <div>
              <SubHeader color="#888888" bg="#141414">SELECT TRANSACTION EXPERIENCE</SubHeader>
              {exp.transactions.map((tx, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: "8px",
                    padding: "3px 14px 3px 28px",
                    backgroundColor: j % 2 === 0 ? "#000000" : "#040400",
                    borderBottom: j < exp.transactions!.length - 1 ? "1px solid #0F0F0F" : "none",
                  }}
                >
                  <span style={{ color: "#F39F41", fontSize: "10px", flexShrink: 0 }}>◆</span>
                  <span style={{ color: "#AAAAAA", fontSize: "11px", lineHeight: 1.5 }}>{tx}</span>
                </div>
              ))}
            </div>
          )}

          {/* Responsibility bullets */}
          {exp.bullets.length > 0 && (
            <div>
              <SubHeader color="#888888" bg="#141414">RESPONSIBILITIES</SubHeader>
              {exp.bullets.map((b, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: "8px",
                    padding: "3px 14px 3px 28px",
                    backgroundColor: j % 2 === 0 ? "#000000" : "#030303",
                    borderBottom: j < exp.bullets.length - 1 ? "1px solid #0A0A0A" : "none",
                  }}
                >
                  <span style={{ color: "#555555", fontSize: "10px", flexShrink: 0 }}>▸</span>
                  <span style={{ color: "#AAAAAA", fontSize: "11px", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </PanelWrapper>
  );
}
