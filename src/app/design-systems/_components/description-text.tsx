import { Button } from "@/core/components/buttons/button";

const DescriptionText = ({
  title,
  content,
  buttonText,
}: {
  title: string;
  content?: string;
  buttonText?: string;
}) => {
  return (
    <div className="grid gap-y-400 text-wrap">
      <p className="flex items-start heading-large self-start text-text-default-secondary">
        {title}
      </p>
      <p className="body-medium text-text-default-secondary">{content}</p>
      <Button variant="neutral" size="medium" text={buttonText}></Button>
    </div>
  );
};

export default DescriptionText;
