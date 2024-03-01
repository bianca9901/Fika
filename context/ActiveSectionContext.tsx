"use client";

import type { SectionName } from "@/lib/types";
import { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode; // Children elements that will be wrapped by the ActiveSectionContextProvider
};

// Shape of the active section context
type ActiveSectionContextType = {
  activeSection: SectionName; // Represents the currently active section
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // Function to set the active section
  timeOfLastClick: number; // Stores the timestamp of the last click event
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>; // Function to set the timestamp of the last click event
};

// Creates an ActiveSection context
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// ActiveSectionContextProvider component responsible for managing the active section state
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("HOME"); // State to hold the active section
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // State to hold the timestamp of the last click event

  // Provide active section context value to children components
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Custom hook to access the active section context within components
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  // Throw an error if the hook is used outside of an ActiveSectionContextProvider
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
