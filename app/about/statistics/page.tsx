"use client";

import Link from "next/link";
import Image from "next/image";
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Home() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const memberCount = 162;

  const heHimCount = Math.ceil(memberCount * 0.48);
  const sheHerCount = Math.floor(memberCount * 0.5);
  const theyThemCount = Math.floor(memberCount * 0.02);

  const msbCount = Math.floor(memberCount * 0.20248117) + 10;
  const sfsCount = Math.floor(memberCount * 0.249593856) - 10;
  const collegeCount = Math.floor(memberCount * 0.526510117) - 5;
  const healthCount = Math.floor(memberCount * 0.0169841973) + 3;
  const nursingCount = Math.ceil(memberCount * 0.00443066017) + 2;

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 mt-16 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Some Statistics
            </h1>
            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              About the people who make us who we are.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We beat the norm with Gender Representation.
            </h2>
            <p className="mb-4">
              With over{" "}
              {(
                (100 * sheHerCount) /
                (heHimCount + sheHerCount + theyThemCount)
              ).toFixed(2)}
              % female representation at Disruptive Tech, we beat the rest of
              the tech industry (26.7%) by{" "}
              {(
                (100 * sheHerCount) /
                  (heHimCount + sheHerCount + theyThemCount) -
                26.7
              ).toFixed(2)}
              %. We still have a ways to go when it comes to transgender and
              non-gender conforming representation, which stands at{" "}
              {(
                (100 * theyThemCount) /
                (heHimCount + sheHerCount + theyThemCount)
              ).toFixed(2)}
              %. Compared to the industry standard of 3.34%, we have{" "}
              {(
                3.34 -
                (100 * theyThemCount) /
                  (heHimCount + sheHerCount + theyThemCount)
              ).toFixed(2)}
              % to make up.
            </p>
            <p className="">
              Disruptive Tech will always strive to be the most inclusive and
              welcoming place for our members as they make us who we are.
            </p>
          </div>
          <div className="">
            <Doughnut
              data={{
                labels: ["he/him", "she/her", "they/them"],
                datasets: [
                  {
                    label: "# Members that Self Identified",
                    data: [heHimCount, sheHerCount, theyThemCount],
                    backgroundColor: [
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                    ],
                    borderColor: [
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 99, 132, 1)",
                      "rgba(255, 206, 86, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="">
            <Doughnut
              data={{
                labels: ["MSB", "SFS", "College", "Health", "Nursing"],
                datasets: [
                  {
                    label: "# Members that Self Identified",
                    data: [
                      msbCount,
                      sfsCount,
                      collegeCount,
                      healthCount,
                      nursingCount,
                    ],
                    backgroundColor: [
                      "rgba(58, 134, 255, 0.2)",
                      "rgba(255, 190, 11, 0.2)",
                      "rgba(251, 86, 7, 0.2)",
                      "rgba(255, 0, 110, 0.2)",
                      "rgba(131, 56, 236, 0.2)",
                    ],
                    borderColor: [
                      "rgba(58, 134, 255, 1)",
                      "rgba(255, 190, 11, 1)",
                      "rgba(251, 86, 7, 1)",
                      "rgba(255, 0, 110, 1)",
                      "rgba(131, 56, 236, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our School Representation closely matches Georgetown.
            </h2>
            <p className="mb-4">
              We have over {memberCount} undergraduate members as of{" "}
              {new Date().getFullYear()}. The interests of these members range
              from neurobiology, to government, to poetry, but all share a
              common interest in how technology will shape and mold the world of
              tomorrow.
            </p>
            <p>
              Because of these various interests, we try to keep Disruptive Tech
              multifaceted with a strong focus on letting members steer the
              direction of the student organization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
