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

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Contact Information
            </h2>
            <p className="mb-4">
              To contact Disruptive Tech, please reach out via email by
              contacting:{" "}
              <a
                className="underline hover:no-underline"
                href="mailto:disruptivetech@georgetown.edu"
              >
                disruptivetech@georgetown.edu
              </a>
              . If you need a more instant means of communication: you can call
              our CEO, William McGonagle, with{" "}
              <a
                className="underline hover:no-underline"
                href="tel:+1203-913-5737"
              >
                +1 (203) 913-5737
              </a>
              .
            </p>
            <p>
              If you have a physical item that you would like to send Disruptive
              Tech, you can send it to the following address.
            </p>
            <span className="mt-8 block">
              Georgetown Disruptive Technologies <br />
              3700 O St NW <br />
              Washington DC, 20057
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width="600"
              height="800"
              className="w-full rounded-lg"
              src="/stock/healy-students.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/stock/red-square.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
