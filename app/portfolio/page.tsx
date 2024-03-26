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
// import markdownit from "markdown-it";
import * as fs from "fs";
import * as path from "path";
import YAML from "yaml";

import PortfolioPreview from "@/components/portfolio-preview";

export default async function Home() {
  const projectsPath = path.join(process.cwd(), "/data/portfolio");
  const projectNames = fs.readdirSync(projectsPath);

  const projects = projectNames.map((i) => {
    const projectPath = path.join(projectsPath, i);
    const projectRaw = fs.readFileSync(projectPath, "utf-8");
    const projectFrontmatter = projectRaw.slice(
      3,
      projectRaw.slice(3).indexOf("---") + 3
    );

    const projectStructured = YAML.parse(projectFrontmatter);

    return {
      name: projectStructured.title,
      slug: i.split(".")[0],
      website: projectStructured.website,
      description: projectStructured.description,
    };
  });

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2 pt-32">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">
              Businesses We&apos;ve Backed.
            </h2>
            <div className="w-full flex flex-row gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Focus Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Consumer</SelectItem>
                  <SelectItem value="dark">Platform</SelectItem>
                  <SelectItem value="system">Social Media</SelectItem>
                  <SelectItem value="system">Enterprise</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Defunct</SelectItem>
                  <SelectItem value="dark">In-Development</SelectItem>
                  <SelectItem value="system">Active</SelectItem>
                </SelectContent>
              </Select>
              <Input type="search" placeholder="Search portfolio..." />
              <Link href="/jobs">
                <Button>Portfolio Job Board</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-3 gap-4 max-w-screen-2xl mx-auto p-4">
        {projects.map((i, n) => (
          <PortfolioPreview
            description={i.description}
            website={i.website}
            name={i.name}
            slug={i.slug}
            i={n}
            key={n}
          />
        ))}
      </section>
    </>
  );
}
