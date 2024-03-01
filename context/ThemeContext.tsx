"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create a theme context
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light"); // State to manage the current theme

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark"); // Save theme preference to localStorage
      document.documentElement.classList.add("dark"); // Add 'dark' class to the root element for dark theme
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light"); // Save theme preference to localStorage
      document.documentElement.classList.remove("dark"); // Remove 'dark' class from the root element for light theme
    }
  };

  // Initialises theme based on localStorage or system preference
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark"); // Add 'dark' class if the stored theme is dark
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark"); // Add 'dark' class if system preference is dark
    }
  }, []);

  // Provide theme context value to children components
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
