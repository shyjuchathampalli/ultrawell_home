"use client";

import { createContext, useContext, useState } from "react";

type PanelType = "enquire" | "refer" | null;

const PanelContext = createContext<any>(null);

export function PanelProvider({ children }: { children: React.ReactNode }) {
  const [panel, setPanel] = useState<PanelType>(null);

  return (
    <PanelContext.Provider value={{ panel, setPanel }}>
      {children}
    </PanelContext.Provider>
  );
}

export function usePanel() {
  return useContext(PanelContext);
}