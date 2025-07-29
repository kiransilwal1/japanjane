import { cn } from "@/lib/util";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto px-400 tablet:px-4000 max-w-screen",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
