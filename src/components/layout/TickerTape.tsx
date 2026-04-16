import { tickerItems } from "@/data/content";

export default function TickerTape() {
  // Duplicate items so the marquee loops seamlessly
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="shrink-0 overflow-hidden border-t"
      style={{
        borderColor: "#2A2A2A",
        backgroundColor: "#050505",
        height: "24px",
        fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
        fontSize: "11px",
      }}
    >
      <div className="ticker-track flex items-center h-full">
        {items.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              style={{ color: "#F39F41", padding: "0 16px", whiteSpace: "nowrap" }}
            >
              ◆ {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
