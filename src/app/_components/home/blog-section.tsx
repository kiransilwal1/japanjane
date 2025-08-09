import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import SectionTitle from "./title-page";
import Card from "@/app/design-systems/_components/cards/card";
import { SectionProp } from "./hero-section";

const title = "Working and Living in Japan";
const content =
  "Japan offers unique opportunities for Nepali workers, from stable jobs to rich cultural experiences. This guide covers what to expect when working and living in Japan — from workplace culture and daily life to essential tips for a smooth transition.";

const title2 = "Crowds in Tokyo and Job Opportunities for Foreign Workers";
const content2 =
  "Tokyo is famous for its bustling streets, especially during rush hours when stations like Shinjuku and Shibuya come alive with people from all walks of life. While the crowds can be overwhelming at first, they are also a sign of the city’s vibrant economy. For foreign workers, Tokyo offers opportunities in industries such as hospitality, manufacturing, caregiving, and IT. With proper preparation and understanding of workplace culture, newcomers can find rewarding jobs and experience the energy of one of the world’s busiest cities";

export function BlogSection({ id }: SectionProp) {
  return (
    <MaxWidthWrapper className="bg-background-default-secondary tablet:px-4000 py-1600">
      <div className="flex-col space-y-1200">
        <SectionTitle
          title="Blogs"
          subtitle="Life style in Japan"
        ></SectionTitle>
        <section
          id={id}
          className="flex flex-col tablet:flex-row tablet:overflow-x-auto tablet:whitespace-nowrap
    space-y-600 tablet:space-y-0 tablet:gap-600"
        >
          <Card
            className="max-w-screen tablet:w-[600px]"
            title={title}
            description={content}
            variant="vertical"
            buttonText="Read More"
            leadingComponent={
              <div className="max-w-screen">
                <img src="/tokyo-night.jpg" alt="Logo" />
              </div>
            }
          ></Card>
          <Card
            className="max-w-screen tablet:w-[600px]"
            title={title2}
            description={content2}
            variant="vertical"
            buttonText="Read More"
            leadingComponent={
              <div className="max-w-screen">
                <img src="/tokyo-crowd.webp" alt="Logo" />
              </div>
            }
          ></Card>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
