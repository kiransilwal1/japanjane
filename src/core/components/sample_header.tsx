import ThemeSwitcher from "./theme_switcher";

export default function SampleHeader() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-[var(--color-text)]">
              My App
            </h1>
          </div>

          <nav className="flex items-center space-x-4">
            <a
              href="#"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>

            {/* Full theme switcher with dropdown */}
            <ThemeSwitcher />

            {/* Or use simple toggle button */}
            {/* <SimpleThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
