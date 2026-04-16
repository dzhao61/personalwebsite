import { education } from "@/data/content";
import PanelWrapper from "@/components/ui/PanelWrapper";

function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "3px 14px 3px 28px",
        backgroundColor: "#141414",
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
        color: "#888888",
        fontSize: "9px",
        letterSpacing: "0.12em",
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  );
}

export default function EducationPanel() {
  return (
    <PanelWrapper title="EDUCATION" subtitle={`${education.length} INSTITUTIONS`} noPad>

      {/* ── Column headers ────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 80px 1fr 150px 110px",
          gap: "0 10px",
          padding: "4px 14px",
          backgroundColor: "#1A1A00",
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        {["INSTITUTION", "DEGREE", "FIELD", "PERIOD", "LOCATION"].map((h) => (
          <span key={h} style={{ color: "#F39F41", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 700 }}>
            {h}
          </span>
        ))}
      </div>

      {education.map((edu, i) => (
        <div key={i} style={{ borderTop: i > 0 ? "2px solid #2A2A2A" : "none" }}>

          {/* Main summary row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px 80px 1fr 150px 110px",
              gap: "0 10px",
              padding: "7px 14px",
              backgroundColor: "#0A0800",
            }}
          >
            <span style={{ color: "#F39F41", fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>
              {edu.institution}
            </span>
            <span
              style={{
                color: "#AAAAAA",
                fontSize: "9px",
                border: "1px solid #444444",
                padding: "1px 4px",
                display: "inline-block",
                whiteSpace: "nowrap",
                height: "fit-content",
                letterSpacing: "0.04em",
              }}
            >
              {edu.degree}
            </span>
            <span style={{ color: "#CCCCCC", fontSize: "11px" }}>{edu.field}</span>
            <span style={{ color: "#888888", fontSize: "10px" }}>{edu.period}</span>
            <span style={{ color: "#888888", fontSize: "10px" }}>{edu.location}</span>
          </div>

          {/* GPA */}
          {edu.gpa && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "4px 14px 6px 28px",
                backgroundColor: "#000000",
              }}
            >
              <span style={{ color: "#888888", fontSize: "10px", minWidth: "30px" }}>GPA</span>
              <span style={{ color: "#4AF6C3", fontSize: "11px", fontWeight: 700 }}>{edu.gpa}</span>
            </div>
          )}

          {/* Research Thesis */}
          {edu.thesis && (
            <>
              <SubHeader>RESEARCH THESIS</SubHeader>
              <div style={{ display: "flex", gap: "10px", padding: "5px 14px 5px 28px", backgroundColor: "#000000" }}>
                <span style={{ color: "#555555", fontSize: "11px", flexShrink: 0 }}>▸</span>
                <span style={{ color: "#AAAAAA", fontSize: "11px", lineHeight: 1.6, fontStyle: "italic" }}>
                  &ldquo;{edu.thesis}&rdquo;
                </span>
              </div>
            </>
          )}

          {/* Relevant Coursework */}
          {edu.coursework && edu.coursework.length > 0 && (
            <>
              <SubHeader>RELEVANT COURSEWORK</SubHeader>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  padding: "6px 14px 8px 28px",
                  backgroundColor: "#000000",
                }}
              >
                {edu.coursework.map((c) => (
                  <span
                    key={c}
                    style={{
                      border: "1px solid #2A2A2A",
                      color: "#AAAAAA",
                      fontSize: "10px",
                      padding: "1px 6px",
                      backgroundColor: "#080808",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Extracurricular */}
          {edu.extracurricular && edu.extracurricular.length > 0 && (
            <>
              <SubHeader>EXTRACURRICULAR</SubHeader>
              <div style={{ paddingBottom: "6px", backgroundColor: "#000000" }}>
                {edu.extracurricular.map((e, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: "8px",
                      padding: "3px 14px 3px 28px",
                      borderBottom: j < edu.extracurricular!.length - 1 ? "1px solid #0A0A0A" : "none",
                    }}
                  >
                    <span style={{ color: "#555555", fontSize: "10px", flexShrink: 0 }}>▸</span>
                    <span style={{ color: "#AAAAAA", fontSize: "11px", lineHeight: 1.5 }}>{e}</span>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      ))}
    </PanelWrapper>
  );
}
