import { Button } from "@/core/components/buttons/button";

const DescriptionText = () => {
  return (
    <div className="w-full grid grid-rows-[auto_1fr] gap-y-400">
      <p className="flex items-start heading-large self-start text-text-default-secondary">
        Title
      </p>
      <p className="body-medium text-text-default-secondary">
        Body text for whatever you’d like to say. Add main takeaway points,
        quotes, anecdotes, or even a very very short story.{" "}
      </p>
      <Button variant="neutral" size="medium" text="Button"></Button>
    </div>
  );
};

export default DescriptionText;
