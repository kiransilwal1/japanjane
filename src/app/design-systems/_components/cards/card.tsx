import { InfoIcon } from "lucide-react";
import DescriptionText from "../description-text";
import { ReactNode } from "react";

type CardProps = {
  variant?: "vertical" | "horizontal";
  description?: string;
  title: string;
  leadingComponent?: ReactNode;
};

const variantClasses = {
  horizontal: "flex space-x-600",
  vertical: "flex-col space-y-600",
};

const Card = ({
  variant = "horizontal",
  description,
  title,
  leadingComponent,
}: CardProps) => {
  return (
    <div
      className={`w-[440px] ${variantClasses[variant]} items-start justify-start border-1 border-border-default-default bg-background-default-default rounded-200 p-600 `}
    >
      {leadingComponent && (
        <div className="flex-col justify-start">{leadingComponent}</div>
      )}
      <DescriptionText></DescriptionText>
    </div>
  );
};

export default Card;
