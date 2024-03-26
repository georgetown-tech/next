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

import Image from "next/image";

import JobPreview from "@/components/job-preview";

import * as fs from "fs";
import * as path from "path";
import YAML from "yaml";
import { Globe, Magnet } from "lucide-react";

export default async function JobPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const projectPath = path.join(process.cwd(), "/data/portfolio", `${slug}.md`);
  const projectRaw = fs.readFileSync(projectPath, "utf-8");
  const projectFrontmatter = projectRaw.slice(
    3,
    projectRaw.slice(3).indexOf("---") + 3
  );
  const projectStructured = YAML.parse(projectFrontmatter);

  return (
    <>
      <section className="py-32 w-full p-4 max-w-screen-lg mx-auto">
        <div className="w-full flex flex-col items-center bg-active rounded-xl mb-8 text-slate-50 p-4">
          <div className="w-full flex flex-row gap-2 justify-end">
            <Link href={`/portfolio/${slug}`}>
              <Magnet size={22} />
            </Link>
            {projectStructured.website ? (
              <Link href={projectStructured.website}>
                <Globe size={22} />
              </Link>
            ) : (
              <></>
            )}
          </div>
          <h1 className="max-w-xl text-3xl font-black">
            <span className="sr-only">{projectStructured.title}</span>
            <Image
              width={500}
              height={300}
              className="h-32 w-min"
              src={`/portfolio/${slug}.svg`}
              alt={projectStructured.title}
            />
          </h1>
          <span className="text-xl font-bold">
            {projectStructured.start} –{" "}
            {projectStructured.end == undefined
              ? "current"
              : projectStructured.end}
          </span>
        </div>
        <p className="text-xl mt-2">{projectStructured.description}</p>
        <h2 className="max-w-xl text-2xl font-black mt-8">
          Positions at {projectStructured.title}
        </h2>
        <div className="w-full grid grid-cols-4">{}</div>
      </section>
    </>
  );
}
