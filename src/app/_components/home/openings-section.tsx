import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import JobCard from "./job-card";

const OpeningsSection = () => {
  return (
    <MaxWidthWrapper className="bg-background-default-default tablet:px-4000">
      <section className="py-1200">
        <div className="space-y-1200 flex-col">
          {/* title */}
          <div>
            <div className="heading-base">Openings</div>
            <div className="subheading-base">Current Openings</div>
          </div>

          {/* Job listing */}
          <div
            className="flex flex-col tablet:flex-row tablet:overflow-x-auto tablet:whitespace-nowrap
    space-y-600 tablet:space-y-0 tablet:gap-600
"
          >
            <JobCard
              className="w-full tablet:w-[440px] flex-shrink-0"
              title="Machine Operator"
              salary={"230,000"}
            ></JobCard>
            <JobCard
              className="w-full tablet:w-[440px] flex-shrink-0"
              title="Machine Operator: Supervisor"
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
