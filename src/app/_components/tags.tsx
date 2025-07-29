import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

type TagsProps = {
  variant?: "primary" | "secondary" | "glass";
  text: string;
  className?: string;
  intent?: "brand" | "danger" | "positive" | "warning" | "neutral";
  trailingIcon?: ReactNode;
};

const variantClasses = {
  primary: {
    brand:
      "bg-background-brand-default text-text-brand-on-brand hover:bg-background-brand-hover",
    danger:
      "bg-background-danger-default text-text-danger-on-danger hover:bg-background-danger-hover",
    positive:
      "bg-background-positive-default text-text-positive-on-positive hover:bg-background-positive-hover",
    warning:
      "bg-background-warning-default text-text-warning-on-warning hover:bg-background-warning-hover",
    neutral:
      "bg-background-neutral-default text-text-neutral-on-neutral hover:bg-background-neutral-hover",
  },
  secondary: {
    brand:
      "bg-background-brand-tertiary text-text-brand-on-tertiary hover:bg-background-brand-tertiary-hover",
    danger:
      "bg-background-danger-tertiary text-text-danger-on-tertiary hover:bg-background-danger-tertiary-hover",
    positive:
      "bg-background-positive-tertiary text-text-positive-on-positive hover:bg-background-positive-tertiary-hover",
    warning:
      "bg-background-warning-tertiary text-text-warning-on-tertiary hover:bg-background-warning-tertiary-hover",
    neutral:
      "bg-background-neutral-tertiary text-text-neutral-on-tertiary hover:bg-background-neutral-tertiary-hover",
  },
  glass: {
    brand:
      "bg-background-glass-brand text-text-brand-on-brand hover:bg-background-brand-default",
    danger:
      "bg-background-glass-danger text-text-danger-on-danger hover:bg-background-danger-default",
    positive:
      "bg-background-glass-positive text-text-positive-on-positive hover:bg-background-positive-default",
    warning:
      "bg-background-glass-warning text-text-warning-on-warning hover:bg-background-warning-default",
    neutral:
      "bg-background-glass-neutral text-text-neutral-on-neutral hover:bg-background-neutral-default",
  },
} as const;

const Tags = ({
  variant = "primary",
  text,
  className,
  intent = "positive",
  trailingIcon,
}: TagsProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-x-2 border border-border-default-default rounded-200 px-3 py-1.5 text-sm font-medium transition-colors";

  const variantClassName = variantClasses[variant][intent];

  const finalClassName = twMerge(baseClasses, variantClassName, className);

  return (
    <div className={finalClassName}>
      <span className="whitespace-nowrap body-base text-text-default-default">
        {text}
      </span>
      {trailingIcon && (
        <span className="inline-flex items-center justify-center flex-shrink-0 h-400 w-400">
          {trailingIcon}
        </span>
      )}
    </div>
  );
};

export default Tags;
