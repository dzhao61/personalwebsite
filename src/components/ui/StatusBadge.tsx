import type { ProjectStatus } from "@/data/content";

const CONFIG: Record<ProjectStatus, { color: string; dot: string; label: string }> = {
  LIVE:     { color: "#4AF6C3", dot: "●", label: "LIVE"     },
  WIP:      { color: "#F39F41", dot: "●", label: "WIP"      },
  ARCHIVED: { color: "#AAAAAA", dot: "○", label: "ARCHIVED" },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const cfg = CONFIG[status];
  return (
    <span
      className="inline-flex items-center gap-1 text-xs px-2 py-0.5 border"
      style={{
        borderColor: cfg.color,
        color: cfg.color,
        fontSize: "10px",
        fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
        letterSpacing: "0.05em",
      }}
    >
      <span style={{ fontSize: "8px" }}>{cfg.dot}</span>
      {cfg.label}
    </span>
  );
}
