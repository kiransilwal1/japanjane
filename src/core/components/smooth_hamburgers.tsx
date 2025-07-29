"use client";

type HamburgerIconProps = {
  isOpen: boolean;
  size: number;
  onClick: () => void;
};

export const HamburgerIcon2 = ({
  isOpen,
  size = 24,
  onClick,
}: HamburgerIconProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md transition-colors duration-200 hover:bg-background-default-secondary"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <span
          className={`absolute left-0 block h-0.5 transition-all duration-300 ease-in-out bg-background-brand-default ${
            isOpen
              ? "top-1/2 w-full rotate-45 -translate-y-px"
              : "top-1/4 w-full rotate-0"
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 block h-0.5 transition-all duration-300 ease-in-out bg-background-brand-default ${
            isOpen ? "w-0 opacity-0" : "w-full opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 block h-0.5 transition-all duration-300 ease-in-out bg-background-brand-default ${
            isOpen
              ? "top-1/2 w-full -rotate-45 -translate-y-px"
              : "top-3/4 w-full rotate-0"
          }`}
        />
      </div>
    </button>
  );
};
