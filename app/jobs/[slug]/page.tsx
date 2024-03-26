import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import JobPreview from "@/components/job-preview";

import * as fs from "fs";
import * as path from "path";
import YAML from "yaml";
import { findJobs } from "@/lib/find";

export async function generateStaticParams() {
  const jobs = findJobs();

  return jobs.map((job) => {
    slug: job.slug;
  });
}

export default async function JobPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const projectPath = path.join(process.cwd(), "/data/jobs", `${slug}.md`);
  const projectRaw = fs.readFileSync(projectPath, "utf-8");
  const projectFrontmatter = projectRaw.slice(
    3,
    projectRaw.slice(3).indexOf("---") + 3
  );
  const projectStructured = YAML.parse(projectFrontmatter);

  return (
    <>
      <section className="py-32 w-full p-4 max-w-screen-lg mx-auto">
        <div className="flex flex-row gap-4">
          <h1 className="max-w-xl text-3xl font-black">
            {projectStructured.title}
          </h1>
          <Button variant="outline">Apply Now</Button>
        </div>
        <p className="max-w-xl text-xl mt-2">{projectStructured.description}</p>
        <h2 className="max-w-xl text-2xl font-black mt-8">Position History</h2>
      </section>
    </>
  );
}
