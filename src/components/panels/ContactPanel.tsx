import { bio } from "@/data/content";
import PanelWrapper from "@/components/ui/PanelWrapper";

const CHANNELS = [
  { label: "EMAIL",    display: bio.email,               href: `mailto:${bio.email}`, note: "Preferred — responds within 24h" },
  { label: "GITHUB",   display: "github.com/dzhao61",    href: bio.github,            note: "Code, projects & contributions"   },
  { label: "LINKEDIN", display: "linkedin.com/in/daniel-zhao", href: bio.linkedin,   note: "Professional profile & history"   },
  { label: "RESUME",   display: "Download PDF",          href: bio.resume,            note: "Full CV with detailed experience" },
];

export default function ContactPanel() {
  return (
    <PanelWrapper title="CONTACT" subtitle="GET IN TOUCH" noPad>

      {/* Status banner */}
      <div
        style={{
          backgroundColor: "#001A12",
          borderBottom: "1px solid #4AF6C3",
          padding: "6px 12px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ color: "#4AF6C3", fontSize: "14px" }}>●</span>
        <div>
          <div style={{ color: "#4AF6C3", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}>
            CURRENTLY STUDYING · OPEN TO OPPORTUNITIES
          </div>
          <div style={{ color: "#888888", fontSize: "10px" }}>
            M.CS @ University of Sydney · Graduating Dec 2026 · Open to internships &amp; grad roles
          </div>
        </div>
      </div>

      {/* Column headers */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "90px 230px 1fr",
          backgroundColor: "#1A1A00",
          borderBottom: "1px solid #2A2A2A",
          padding: "3px 12px",
          gap: "0 12px",
        }}
      >
        {["CHANNEL", "ADDRESS / LINK", "NOTES"].map((h) => (
          <span
            key={h}
            style={{ color: "#F39F41", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 700 }}
          >
            {h}
          </span>
        ))}
      </div>

      {CHANNELS.map((ch, i) => (
        <a
          key={i}
          href={ch.href}
          target={ch.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="grid items-center"
          style={{
            gridTemplateColumns: "90px 230px 1fr",
            padding: "6px 12px",
            gap: "0 12px",
            backgroundColor: i % 2 === 0 ? "#000000" : "#050505",
            borderBottom: "1px solid #111111",
            textDecoration: "none",
            display: "grid",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A1200")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#000000" : "#050505")}
        >
          <span style={{ color: "#888888", fontSize: "10px", letterSpacing: "0.05em" }}>{ch.label}</span>
          <span style={{ color: "#F39F41", fontSize: "11px" }}>{ch.display} ↗</span>
          <span style={{ color: "#888888", fontSize: "10px" }}>{ch.note}</span>
        </a>
      ))}

      {/* Interests block */}
      <div
        style={{
          backgroundColor: "#1A1A00",
          borderBottom: "1px solid #2A2A2A",
          borderTop: "1px solid #2A2A2A",
          padding: "3px 12px",
          color: "#F39F41",
          fontSize: "9px",
          letterSpacing: "0.1em",
          fontWeight: 700,
          marginTop: "16px",
        }}
      >
        INTERESTS
      </div>
      <div
        style={{
          padding: "6px 12px",
          color: "#AAAAAA",
          fontSize: "11px",
          borderBottom: "1px solid #111111",
        }}
      >
        Hiking &nbsp;·&nbsp; Mountaineering &nbsp;·&nbsp; Golf &nbsp;·&nbsp; Formula 1
      </div>

    </PanelWrapper>
  );
}
