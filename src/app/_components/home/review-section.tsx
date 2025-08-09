import Reviews from "@/app/design-systems/_components/reviews";
import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import SectionTitle from "./title-page";
import { SectionProp } from "./hero-section";

export default function ReviewSection({ id }: SectionProp) {
  return (
    <MaxWidthWrapper className="bg-background-default-default tablet:px-4000 py-1600 space-y-1200">
      <SectionTitle
        title="Reviews"
        subtitle="What our clients say about us."
      ></SectionTitle>
      <section
        id={id}
        className="flex flex-col tablet:flex-row tablet:overflow-x-auto tablet:whitespace-nowrap
    space-y-600 tablet:space-y-0 tablet:gap-600"
      >
        <Reviews
          title="Smooth Process Experience"
          body="The team made the process of going to Japan clear and stress-free. They handled paperwork efficiently, kept me informed at every step, and provided helpful guidance about living abroad. I felt supported from start to finish."
          designation="Manager, Marriot Japan"
          name="Ramesh Silwal"
          image="/job-japan.png"
        ></Reviews>
      </section>
    </MaxWidthWrapper>
  );
}
