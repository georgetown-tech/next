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

import PortfolioPreview from "@/components/portfolio-preview";
import Teammate from "@/components/teammate";
import { findTeam } from "@/lib/find";

export default async function Home() {
  const teammates = findTeam();

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2 pt-32">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">Who We Stand Behind.</h2>
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
                  <SelectItem value="light">Memoriam</SelectItem>
                  <SelectItem value="dark">In-Development</SelectItem>
                  <SelectItem value="system">Active</SelectItem>
                </SelectContent>
              </Select>
              <Input type="search" placeholder="Search teammates..." />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-2xl mx-auto p-4">
        {teammates.map((i, n) => (
          <Teammate {...i} i={n} key={n} />
        ))}
      </section>
    </>
  );
}
