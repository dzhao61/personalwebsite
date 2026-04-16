"use client";

import { useState } from "react";
import StatusBar from "@/components/layout/StatusBar";
import TopNav, { type PanelId } from "@/components/layout/TopNav";
import TickerTape from "@/components/layout/TickerTape";
import BioPanel from "@/components/panels/BioPanel";
import ExperiencePanel from "@/components/panels/ExperiencePanel";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import EducationPanel from "@/components/panels/EducationPanel";
import ContactPanel from "@/components/panels/ContactPanel";

const PANELS: Record<PanelId, React.ComponentType> = {
  bio:        BioPanel,
  experience: ExperiencePanel,
  projects:   ProjectsPanel,
  education:  EducationPanel,
  contact:    ContactPanel,
};

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelId>("bio");
  const ActivePanel = PANELS[activePanel];

  return (
    <div
      className="flex flex-col h-full"
      style={{
        backgroundColor: "#000000",
        fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
      }}
    >
      {/* Top status bars */}
      <StatusBar activePanel={activePanel} />
      <TopNav active={activePanel} onChange={setActivePanel} />

      {/* Main content */}
      <main className="flex-1 overflow-auto" style={{ minHeight: 0 }}>
        <ActivePanel />
      </main>

      {/* Bottom ticker tape */}
      <TickerTape />
    </div>
  );
}
