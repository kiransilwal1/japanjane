"use client";
import { useTheme } from "@/app/_utils/theme_context";

interface IconSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  disabled?: boolean;
}

// IconSwitch component (you can move this to a separate file)
const IconSwitch: React.FC<IconSwitchProps> = ({
  isOn,
  onToggle,
  onIcon,
  offIcon,
  disabled = false,
}) => {
  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`
        relative inline-flex h-8 w-14 items-center justify-between rounded-full px-1 transition-all duration-300 ease-in-out 
        ${isOn ? "bg-background-default-secondary" : "bg-background-brand-default"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <span
        className={`
          absolute inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out
          ${isOn ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {isOn ? onIcon : offIcon}
      </span>
      <div
        className={`flex items-center transition-opacity duration-200 ${isOn ? "opacity-0" : "opacity-100"}`}
      >
        {offIcon}
      </div>
      <div
        className={`flex items-center transition-opacity duration-200 ${isOn ? "opacity-100" : "opacity-0"}`}
      >
        {onIcon}
      </div>
    </button>
  );
};

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  // Determine if dark mode is active
  const isDarkMode = theme === "dark";

  // Handle toggle between light and dark
  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  // Icon components
  const SunIcon = () => (
    <svg
      className="h-4 w-4 text-text-brand-on-brand"
      fill="bg-background-default-secondary"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );

  const MoonIcon = () => (
    <svg
      className="h-4 w-4 text-gray-600"
      fill="bg-background-brand-default"
      viewBox="0 0 20 20"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-[var(--color-text-default-default)]"></span>
      <IconSwitch
        isOn={isDarkMode}
        onToggle={handleToggle}
        onIcon={<MoonIcon />}
        offIcon={<SunIcon />}
      />
      <span className="text-sm text-[var(--color-text-default-secondary)]"></span>
    </div>
  );
}
