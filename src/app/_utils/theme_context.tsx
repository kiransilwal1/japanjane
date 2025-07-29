"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "system" | "light" | "dark" | "high-contrast";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark" | "high-contrast";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<
    "light" | "dark" | "high-contrast"
  >("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (
      savedTheme &&
      ["system", "light", "dark", "high-contrast"].includes(savedTheme)
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("theme-light", "theme-dark", "theme-high-contrast");

    let newResolvedTheme: "light" | "dark" | "high-contrast";

    if (theme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      newResolvedTheme = systemPrefersDark ? "dark" : "light";
    } else if (theme === "high-contrast") {
      root.classList.add("theme-high-contrast");
      newResolvedTheme = "high-contrast";
    } else {
      root.classList.add(`theme-${theme}`);
      newResolvedTheme = theme as "light" | "dark";
    }

    setResolvedTheme(newResolvedTheme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const systemPrefersDark = mediaQuery.matches;
      setResolvedTheme(systemPrefersDark ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
