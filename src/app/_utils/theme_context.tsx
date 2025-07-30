"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  actualTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(true);

  // Function to get system preference
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  // Function to resolve the actual theme
  const resolveTheme = (currentTheme: Theme): "light" | "dark" => {
    if (currentTheme === "system") {
      return getSystemTheme();
    }
    return currentTheme;
  };

  // Initialize theme and actual theme immediately
  useEffect(() => {
    const initializeTheme = () => {
      // Get saved theme from localStorage
      const savedTheme = localStorage.getItem("theme") as Theme;
      let initialTheme: Theme = "system";

      if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
        initialTheme = savedTheme;
      }

      // Resolve the actual theme immediately
      const resolved = resolveTheme(initialTheme);

      // Set both theme and actualTheme
      setTheme(initialTheme);
      setActualTheme(resolved);

      // Apply theme to document immediately
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(resolved);

      setIsLoading(false);
    };

    initializeTheme();
  }, []);

  // Update actual theme when theme changes (after initialization)
  useEffect(() => {
    if (isLoading) return;

    const resolved = resolveTheme(theme);
    setActualTheme(resolved);

    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, isLoading]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const newActualTheme = getSystemTheme();
        setActualTheme(newActualTheme);

        // Apply theme to document
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newActualTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
