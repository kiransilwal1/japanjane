import { twMerge } from "tailwind-merge";

type SalaryDisplayProps = {
  amount: string;
  currency?: "¥" | "$" | "€" | "£";
  frequency?: "mo" | "yr" | "hr" | "day";
  className?: string;
  showCurrency?: boolean;
  showFrequency?: boolean;
};

const SalaryDisplay = ({
  amount,
  currency = "¥",
  frequency = "mo",
  className,
  showCurrency = true,
  showFrequency = true,
}: SalaryDisplayProps) => {
  // Format number with commas

  const baseClasses =
    "items-baseline text-text-default-default px-3 py-1.5 rounded-md font-medium";

  return (
    <div className={twMerge(baseClasses, className)}>
      {showCurrency && (
        <span className="title-page-medium mr-0.5 font-normal">{currency}</span>
      )}
      <span className="title-page-small">{amount}</span>
      {showFrequency && (
        <span className="text-sm ml-1 font-normal opacity-80">
          /{frequency}
        </span>
      )}
    </div>
  );
};

export default SalaryDisplay;
