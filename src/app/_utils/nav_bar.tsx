"use client";

import { useState, useEffect } from "react";
import ThemeSwitcher from "@/core/components/theme_switcher";
import HamburgIcon from "@/core/components/hamburg-icon";
import Link from "../design-systems/_components/link";

// Define the sections that correspond to your page sections
const navSections = [
  { id: "hero", label: "Home" },
  { id: "openings", label: "Opening" },
  { id: "blog", label: "Blogs" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    // Observe all sections
    navSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navbar (adjust the -100 value based on your navbar height)
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="p-300 flex tablet:items-center justify-between tablet:justify-start
            tablet:p-800 mobile:p-400 border-b-1 border-border-default-default
            tablet:gap-x-600 sticky top-0 bg-background-default-default z-50"
    >
      <img
        src="/logo-full.png"
        alt="Logo"
        className="hidden tablet:block w-auto h-auto max-w-none max-h-none"
      />
      <div>
        <img
          src="/mobile-logo.png"
          alt="Logo"
          className="tablet:hidden w-auto h-auto max-w-none max-h-none"
        />
      </div>
      <div className="hidden tablet:flex w-full items-center justify-end gap-x-200">
        {navSections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="cursor-pointer"
          >
            <Link text={label} enabled={activeSection === id} />
          </button>
        ))}
      </div>
      <section className="flex space-x-200">
        <ThemeSwitcher />
        <HamburgIcon />
      </section>
    </div>
  );
}
