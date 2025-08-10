import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import JobCard from "./job-card";
import SectionTitle from "./title-page";
import { SectionProp } from "./hero-section";

type Job = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    salary: string;
    job_title: string;
    location: string;
    job_description: string;
    image: string;
  };
};

async function fetchJobs(): Promise<Job[]> {
  const res = await fetch(
    `${process.env.WORDPRESS_URL || "http://localhost"}/wp-json/wp/v2/jobs`,
    {
      cache: "no-store", // disable cache for dev, remove in prod
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return res.json();
}

const OpeningsSection = async ({ id }: SectionProp) => {
  const jobs = await fetchJobs();

  return (
    <MaxWidthWrapper className="bg-background-default-default tablet:px-4000">
      <section className="py-1200" id={id}>
        <div className="space-y-1200 flex-col">
          <SectionTitle title="Openings" subtitle="Current Openings" />
          <div
            className="flex flex-col tablet:flex-row tablet:overflow-x-auto tablet:whitespace-nowrap
    space-y-600 tablet:space-y-0 tablet:gap-600"
          >
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                className="w-full tablet:w-[440px] flex-shrink-0"
                title={job.acf.job_title || job.title.rendered}
                description={job.acf.job_description || job.content.rendered}
                salary={job.acf.salary}
                location={job.acf.location}
                image={job.acf.image}
              />
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default OpeningsSection;
