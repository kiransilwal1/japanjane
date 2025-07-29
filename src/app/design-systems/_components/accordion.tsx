"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-background-default-secondary rounded-200 border-1 border-border-default-default p-400">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <span className="body-strong">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-icon-default-default transform transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {expanded && (
        <div className="bg-background-default-secondary">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
