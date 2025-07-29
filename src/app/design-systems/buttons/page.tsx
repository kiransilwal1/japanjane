"use client";

import { Button } from "@/core/components/buttons/button";
import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import DesignSystems from "@/core/components/my_themes";

export default function ButtonSystems() {
  const sizes = ["large", "medium", "small"] as const;
  const variants = ["primary", "accent", "neutral"] as const;

  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background-default-default p-8 space-y-12">
        <DesignSystems />

        {sizes.map((size) => (
          <div key={size} className="space-y-4">
            <h2 className="text-2xl font-semibold capitalize">
              {size} Buttons
            </h2>

            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 font-medium text-sm text-text-subtle">
              <div>Variant</div>
              <div>Enabled</div>
              <div>Disabled</div>
            </div>

            {/* Table body */}
            {variants.map((variant) => (
              <div
                key={variant}
                className="grid grid-cols-3 gap-4 items-center py-1"
              >
                <div className="capitalize text-sm font-medium">{variant}</div>
                <Button text="Click Me" variant={variant} size={size} />
                <Button
                  text="Click Me"
                  variant={variant}
                  size={size}
                  disabled
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
