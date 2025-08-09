import StarRating from "./ratings";
import UserDetails from "./user-details";

export type ReviewProps = {
  title: string;
  body: string;
  name: string;
  designation: string;
  image: string;
  rating?: number; // Made optional with default
};

export default function Reviews({
  title,
  body,
  name,
  designation,
  image,
  rating = 4.5,
}: ReviewProps) {
  return (
    <div className="p-600 space-y-600 shadow-lg border border-border-default-default rounded-md flex flex-col overflow-hidden max-w-screen tablet:w-[400px]">
      <div className="shrink-0">
        <StarRating rating={rating} />
      </div>

      <div className="flex-1 min-h-0 overflow-hidden space-y-200">
        <p className="heading-base truncate">{title}</p>
        <p className="body-medium text-sm leading-5 h-24">{body}</p>
      </div>

      <div className="shrink-0">
        <UserDetails name={name} designation={designation} imageSrc={image} />
      </div>
    </div>
  );
}
