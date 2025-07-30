import { twMerge } from "tailwind-merge";
import Tags from "../tags";
import { MapPin, Wallet, X } from "lucide-react";
import { Button } from "@/core/components/buttons/button";
import SalaryDisplay from "./salary-display";
import { WhatsAppButton } from "./whatsapp-button";

type JobCardProps = {
  variant?: "vertical" | "horizontal";
  description?: string;
  title: string;
  salary?: string;
  location?: string;
  instructionTitle?: string;
  instructionDescription?: string;
  className?: string;
};

const variantClasses = {
  horizontal: "flex space-x-600",
  vertical: "flex flex-col space-y-600",
};

const JobCards = ({
  variant = "horizontal",
  description,
  title,
  salary,
  location,
  instructionTitle,
  instructionDescription,
  className = "",
}: JobCardProps) => {
  const baseClasses =
    "items-start justify-start border-1 border-border-default-default bg-background-default-default rounded-200 p-600";
  const finalClassName = twMerge(
    variantClasses[variant],
    baseClasses,
    className,
  );

  return (
    <div className={`${finalClassName} flex-col gap-y-1600`}>
      <div className="max-w-screen">
        <img src="/job-japan.png" alt="Logo" />
      </div>
      <section className="space-y-600 w-full">
        <div className="space-y-400 flex-col text-wrap">
          <div className="heading-base">{title}</div>
          <div className="space-y-200">
            <Tags
              text="Salary"
              variant="secondary"
              intent="positive"
              className="m-0"
              trailingIcon={
                <Wallet className="text-text-default-default"></Wallet>
              }
            ></Tags>
            <SalaryDisplay
              amount={salary ?? ""}
              className="m-0 p-0"
            ></SalaryDisplay>
            <Button
              text={location ?? "Osaka"}
              variant="neutral"
              size="small"
              className="m-0 p-100"
              iconLeading={<MapPin className="h-400 w-400"></MapPin>}
            ></Button>
          </div>
        </div>
        <p
          className="body-large text-wrap break-words overflow-wrap-anywhere
                    text-text-default-secondary"
        >
          Work as a Line supervisor. Overlook all operational tasks.{" "}
        </p>
        <WhatsAppButton phoneNumber="+819082900547">
          <Button
            text="Apply Now"
            variant="accent"
            className="w-full
            flex items-center justify-center"
          ></Button>
        </WhatsAppButton>
      </section>
    </div>
  );
};

export default JobCards;
