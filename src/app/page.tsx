"use client";

import { useState, useEffect, useCallback } from "react";
import StatusBar from "@/components/layout/StatusBar";
import TopNav, { type PanelId } from "@/components/layout/TopNav";
import TickerTape from "@/components/layout/TickerTape";
import BootScreen from "@/components/layout/BootScreen";
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
  // Start as true (show boot) — flip to false if already seen this session
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) setShowBoot(false);
  }, []);

  const handleBootDone = useCallback(() => {
    sessionStorage.setItem("booted", "1");
    setShowBoot(false);
  }, []);

  const ActivePanel = PANELS[activePanel];

  return (
    <>
      {showBoot && <BootScreen onDone={handleBootDone} />}

      <div
        className="flex flex-col h-full"
        style={{
          backgroundColor: "#000000",
          fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
        }}
      >
        <StatusBar activePanel={activePanel} />
        <TopNav active={activePanel} onChange={setActivePanel} />

        <main className="flex-1 overflow-auto" style={{ minHeight: 0 }}>
          <ActivePanel />
        </main>

        <TickerTape />
      </div>
    </>
  );
}
