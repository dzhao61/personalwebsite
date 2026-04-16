import { projects } from "@/data/content";
import PanelWrapper from "@/components/ui/PanelWrapper";
import StatusBadge from "@/components/ui/StatusBadge";

export default function ProjectsPanel() {
  return (
    <PanelWrapper title="PROJECTS" subtitle={`${projects.length} TOTAL`} noPad>

      {/* Column headers */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "180px 1fr 200px 100px",
          backgroundColor: "#1A1A00",
          borderBottom: "1px solid #2A2A2A",
          padding: "3px 12px",
          gap: "0 12px",
        }}
      >
        {["PROJECT", "DESCRIPTION", "STACK", "STATUS"].map((h) => (
          <span
            key={h}
            style={{ color: "#F39F41", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 700 }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Project rows */}
      {projects.map((p, i) => (
        <div
          key={i}
          style={{
            backgroundColor: i % 2 === 0 ? "#000000" : "#050505",
            borderBottom: "1px solid #111111",
          }}
        >
          {/* Main row */}
          <div
            className="grid items-start"
            style={{
              gridTemplateColumns: "180px 1fr 200px 100px",
              padding: "6px 12px",
              gap: "0 12px",
            }}
          >
            <span style={{ color: "#F39F41", fontSize: "11px", fontWeight: 700 }}>{p.name}</span>
            <span style={{ color: "#AAAAAA", fontSize: "10px", lineHeight: 1.5 }}>{p.description}</span>
            <div className="flex flex-wrap gap-1">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    border: "1px solid #2A2A2A",
                    color: "#888888",
                    fontSize: "9px",
                    padding: "0 4px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1 items-start">
              <StatusBadge status={p.status} />
              <div className="flex gap-2 mt-1">
                {p.github && <ExternalLink href={p.github} label="Github" />}
                {p.demo   && <ExternalLink href={p.demo}   label="DEMO" />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </PanelWrapper>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#4AF6C3", fontSize: "11px", textDecoration: "underline", letterSpacing: "0.04em" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#F39F41")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#4AF6C3")}
    >
      {label} ↗
    </a>
  );
}
