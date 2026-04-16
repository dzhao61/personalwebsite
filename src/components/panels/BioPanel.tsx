import { bio } from "@/data/content";
import PanelWrapper from "@/components/ui/PanelWrapper";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      backgroundColor: "#1A1A00",
      color: "#F39F41",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.1em",
      padding: "4px 14px",
      borderTop: "1px solid #2A2A2A",
      borderBottom: "1px solid #2A2A2A",
      marginTop: "14px",
    }}>
      {children}
    </div>
  );
}

export default function BioPanel() {
  return (
    <PanelWrapper title="BIOGRAPHY" subtitle={`LOC: ${bio.location}`}>
      <div style={{ display: "flex", gap: "32px", height: "100%" }}>

        {/* ── Left: main content ─────────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Name */}
          <div style={{ marginBottom: "14px" }}>
            <div className="glow" style={{
              color: "#F39F41", fontSize: "20px", fontWeight: 700,
              letterSpacing: "0.04em", lineHeight: 1.2,
            }}>
              {bio.name}
              <span className="cursor-blink" style={{ marginLeft: "8px" }}>█</span>
            </div>
            <div style={{ color: "#888888", fontSize: "11px", marginTop: "4px" }}>
              {bio.title}
            </div>
          </div>

          <SectionHeader>PROFILE SUMMARY</SectionHeader>
          <p style={{
            color: "#CCCCCC",
            fontSize: "12px",
            lineHeight: 1.8,
            padding: "10px 14px",
            borderBottom: "1px solid #111111",
            margin: 0,
          }}>
            {bio.summary}
          </p>

          <SectionHeader>CONTACT DETAILS</SectionHeader>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2px" }}>
            <tbody>
              {[
                { label: "Email",    value: bio.email },
                { label: "Phone",    value: bio.phone ?? "" },
                { label: "GitHub",   value: "github.com/dzhao61" },
                { label: "LinkedIn", value: "linkedin.com/in/daniel-zhao-8b6b44199/" },
                { label: "Location", value: bio.location },
              ].map(({ label, value }) => (
                <tr key={label} style={{ borderBottom: "1px solid #111111" }}>
                  <td style={{ color: "#888888", fontSize: "11px", padding: "5px 14px", whiteSpace: "nowrap", width: "100px" }}>
                    {label}
                  </td>
                  <td style={{ color: "#CCCCCC", fontSize: "12px", padding: "5px 0" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* External links */}
          <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
            {[
              { label: "GITHUB ↗",   href: bio.github   },
              { label: "LINKEDIN ↗", href: bio.linkedin  },
              { label: "RESUME ↗",   href: bio.resume    },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  border: "1px solid #2A2A2A", color: "#4AF6C3",
                  fontSize: "11px", padding: "3px 10px", textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F39F41"; e.currentTarget.style.color = "#F39F41"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "#4AF6C3"; }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: stats sidebar ───────────────────────────────────── */}
        <div style={{ width: "190px", flexShrink: 0 }}>

          <SectionHeader>QUICK STATS</SectionHeader>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {bio.stats.map((s) => (
                <tr key={s.label} style={{ borderBottom: "1px solid #111111" }}>
                  <td style={{ color: "#888888", fontSize: "11px", padding: "6px 14px" }}>{s.label}</td>
                  <td style={{ color: "#F39F41", fontSize: "12px", fontWeight: 700, textAlign: "right", padding: "6px 14px 6px 0" }}>
                    {s.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "14px" }}>
            <SectionHeader>STATUS</SectionHeader>
            <div style={{
              border: "1px solid #4AF6C3", color: "#4AF6C3",
              fontSize: "11px", padding: "6px 14px",
              letterSpacing: "0.06em", marginTop: "6px", textAlign: "center",
            }}>
              ● STUDYING · OPEN TO ROLES
            </div>
          </div>

          <div style={{ marginTop: "14px" }}>
            <SectionHeader>LANGUAGES</SectionHeader>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  { lang: "English",  level: "Native",    color: "#4AF6C3" },
                  { lang: "Mandarin", level: "Proficient", color: "#AAAAAA" },
                ].map(({ lang, level, color }) => (
                  <tr key={lang} style={{ borderBottom: "1px solid #111111" }}>
                    <td style={{ color: "#888888", fontSize: "11px", padding: "5px 14px" }}>{lang}</td>
                    <td style={{ color, fontSize: "11px", textAlign: "right", padding: "5px 14px 5px 0" }}>{level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "14px" }}>
            <SectionHeader>INTERESTS</SectionHeader>
            <div style={{ padding: "8px 14px" }}>
              {["Hiking", "Mountaineering", "Golf", "Formula 1"].map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "2px 0" }}>
                  <span style={{ color: "#444444", fontSize: "11px" }}>▸</span>
                  <span style={{ color: "#CCCCCC", fontSize: "11px" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PanelWrapper>
  );
}
