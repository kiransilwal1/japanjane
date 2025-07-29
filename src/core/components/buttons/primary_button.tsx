"use client";

import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  leadingIcon,
  trailingIcon,
  ...rest
}) => {
  return (
    <button
      className="flex items-center gap-2 bg-[var(--color-background-brand-default)] hover:bg-[var(--color-background-brand-hover)] text-[var(--color-text-neutral-on-neutral)] px-4 py-2 rounded-lg transition-colors border border-[var(--color-background-accent-default)]"
      {...rest}
    >
      {leadingIcon && <span>{leadingIcon}</span>}
      <span>{text}</span>
      {trailingIcon && <span>{trailingIcon}</span>}
    </button>
  );
};
