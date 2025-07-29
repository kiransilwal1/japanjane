"use client";

import { Button } from "@/core/components/buttons/button";
import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import DesignSystems from "@/core/components/my_themes";
import Accordion from "./accordion";

export default function ButtonSystems() {
  const sizes = ["large", "medium", "small"] as const;
  const variants = ["primary", "accent", "neutral"] as const;

  return (
    <MaxWidthWrapper className="space-y-4">
      {sizes.map((size, index) => (
        <Accordion title={size.toUpperCase()} key={index}>
          <div key={size} className="space-y-4">
            {/* Table header */}

            {/* Table body */}
            {variants.map((variant) => (
              <div key={variant} className="gap-4 items-center">
                <div className="capitalize text-sm font-medium">{variant}</div>
                <Button text="Button" variant={variant} size={size} />
                <Button text="Button" variant={variant} size={size} disabled />
              </div>
            ))}
          </div>
        </Accordion>
      ))}
    </MaxWidthWrapper>
  );
}
