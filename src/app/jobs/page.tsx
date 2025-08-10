// app/jobs/page.tsx (or wherever your jobs route is)

import React from "react";

type Job = {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf?: {
    salary?: string;
    location?: string;
    description?: string;
    image?: number; // attachment ID
  };
};

async function fetchJobs(): Promise<Job[]> {
  const res = await fetch("http://localhost:8000/wp-json/wp/v2/jobs", {
    cache: "no-store", // disable cache during development, or use 'force-cache' in prod
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

export default async function JobsPage() {
  const jobs = await fetchJobs();

  return (
    <main>
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: job.content.rendered }} />
            {job.acf && (
              <div>
                <p>Salary: {job.acf.salary}</p>
                <p>Location: {job.acf.location}</p>
                <p>Description: {job.acf.description}</p>
                {/* You can later fetch image URL by job.acf.image */}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
