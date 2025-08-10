import Reviews from "@/app/design-systems/_components/reviews";
import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import SectionTitle from "./title-page";
import { SectionProp } from "./hero-section";

type WPReview = {
  id: number;
  acf: {
    title: string;
    review: string;
    reviewers_designation: string;
    reviewers_name: string;
    profile_image: string;
  };
};

export default async function ReviewSection({ id }: SectionProp) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL || "http://localhost"}/wp-json/wp/v2/reviews`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    console.error("Failed to fetch reviews");
    return null;
  }

  const reviews: WPReview[] = await res.json();

  return (
    <MaxWidthWrapper className="bg-background-default-default tablet:px-4000 py-1600 space-y-1200">
      <SectionTitle title="Reviews" subtitle="What our clients say about us." />
      <section
        id={id}
        className="flex flex-col tablet:flex-row tablet:overflow-x-auto tablet:whitespace-nowrap space-y-600 tablet:space-y-0 tablet:gap-600"
      >
        {reviews.map((review) => (
          <Reviews
            key={review.id}
            title={review.acf.title}
            body={review.acf.review}
            designation={review.acf.reviewers_designation}
            name={review.acf.reviewers_name}
            image={review.acf.profile_image}
          />
        ))}
      </section>
    </MaxWidthWrapper>
  );
}
