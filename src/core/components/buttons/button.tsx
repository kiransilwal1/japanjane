import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?: "primary" | "neutral" | "accent";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  text?: string;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  className?: string;
};
const variantClasses = {
  primary:
    "bg-background-brand-default text-text-brand-on-brand hover:bg-background-brand-hover border-border-brand-secondary",
  neutral:
    "bg-background-neutral-tertiary text-text-default-default hover:bg-background-neutral-tertiary-hover border-border-neutral-secondary",
  accent:
    "bg-background-accent-tertiary text-brand-on-brand hover:bg-background-accent-tertiary-hover border-border-accent-default",
};
export const sizeClasses = {
  small: "p-200 body-medium rounded-200 border-1 w-fit",
  medium: "p-300 body-medium rounded-200 border-1 w-fit",
  large: "p-400 subheading-medium rounded-400 border-2 w-fit",
};
export const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  text,
  iconLeading,
  iconTrailing,
  className,
  ...params
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "space-x-200 transition-all flex items-center",
        variantClasses[variant],
        sizeClasses[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className,
      )}
      {...params}
      disabled={disabled}
    >
      {iconLeading && <span>{iconLeading}</span>}
      {text && <span>{text}</span>}
      {iconTrailing && <span>{iconTrailing}</span>}
    </button>
  );
};
