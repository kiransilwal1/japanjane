import DescriptionText from "../description-text";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  variant?: "vertical" | "horizontal";
  description?: string;
  title: string;
  leadingComponent?: ReactNode;
  className?: string;
  buttonText?: string;
};

const variantClasses = {
  horizontal: "flex space-x-600",
  vertical: "flex flex-col space-y-600",
};

const Card = ({
  variant = "horizontal",
  description,
  title,
  leadingComponent,
  className = "",
  buttonText,
}: CardProps) => {
  const baseClasses =
    "items-start justify-start border-1 border-border-default-default bg-background-default-default rounded-200 p-600";
  const finalClassName = twMerge(
    variantClasses[variant],
    baseClasses,
    className,
  );

  return (
    <div className={finalClassName}>
      {leadingComponent && (
        <div className=" flex-col justify-start">{leadingComponent}</div>
      )}
      <DescriptionText
        title={title}
        content={description}
        buttonText={buttonText}
      />
    </div>
  );
};

export default Card;
