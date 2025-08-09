import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import JobCard from "./job-card";
import SectionTitle from "./title-page";
import { SectionProp } from "./hero-section";

const OpeningsSection = ({ id }: SectionProp) => {
  return (
    <MaxWidthWrapper className="bg-background-default-default tablet:px-4000">
      <section className="py-1200" id={id}>
        <div className="space-y-1200 flex-col">
          {/* title */}
          <SectionTitle
            title="Openings"
            subtitle="Current Openings"
          ></SectionTitle>

          {/* Job listing */}
          <div
            className="flex flex-col tablet:flex-row tablet:overflow-x-auto tablet:whitespace-nowrap
    space-y-600 tablet:space-y-0 tablet:gap-600
"
          >
            <JobCard
              className="w-full tablet:w-[440px] flex-shrink-0"
              title="Machine Operator"
              description="Work as Machine operator for a Giga Factory"
              salary={"230,000"}
            ></JobCard>
            <JobCard
              className="w-full tablet:w-[440px] flex-shrink-0"
              title="Machine Operator: Supervisor"
              description="Work as Machine operator supervisor for a Giga Factory"
              salary={"270,000"}
              location="Tokyo"
            ></JobCard>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default OpeningsSection;
