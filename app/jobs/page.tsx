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

export default async function Home() {
  const jobs = findJobs();

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2 pt-32">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">Where You Can Join Us.</h2>
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
              <Input type="search" placeholder="Search jobs..." />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-3 gap-4 max-w-screen-2xl mx-auto p-4">
        {jobs.map((i, n) => (
          <JobPreview
            description={i.description}
            title={i.title}
            slug={i.slug}
            pay={i.pay}
            i={n}
            key={n}
          />
        ))}
      </section>
    </>
  );
}
