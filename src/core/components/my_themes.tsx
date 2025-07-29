import ThemeSwitcher from "./theme_switcher";

export default function DesignSystems() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-[var(--color-text)]">
              My Design System
            </h1>
          </div>

          {/* Full theme switcher with dropdown */}
          <ThemeSwitcher />

          {/* Or use simple toggle button */}
          {/* <SimpleThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
