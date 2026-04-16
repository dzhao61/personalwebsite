interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noPad?: boolean;
}

export default function PanelWrapper({ title, subtitle, children, className = "", noPad = false }: Props) {
  return (
    <div
      className={`flex flex-col h-full ${className}`}
      style={{ fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace" }}
    >
      {/* Orange Bloomberg-style section header */}
      <div
        className="flex items-center justify-between px-3 shrink-0"
        style={{
          backgroundColor: "#F39F41",
          color: "#000000",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          height: "20px",
        }}
      >
        <span>{title}</span>
        {subtitle && (
          <span style={{ fontWeight: 400, fontSize: "10px" }}>{subtitle}</span>
        )}
      </div>

      {/* Content */}
      <div
        className={`flex-1 overflow-auto ${noPad ? "" : "px-3 py-2"}`}
        style={{ minHeight: 0, backgroundColor: "#000000" }}
      >
        {children}
      </div>
    </div>
  );
}
