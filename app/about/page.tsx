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

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What is GDT?
            </h2>
            <p className="mb-4">
              Better than asking &quot;what is GDT?&quot;, you should ask,
              &quot;who is GDT?&quot;&mdash; we are where innovation meets a
              nothing-can-stop-us attitude. We come from diverse backgrounds and
              places, different economic situations, and views on the world.
              These views make us different, and these views make us stronger.
            </p>
            <p>
              And more than anything, we want to give back to the community. Our
              motto is &quot;lie down forever, lie down&quot; and we embody that
              each day in the work we do for humanity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Our innovation started with Georgetown but has expanded since.
            </h2>
            <p className="mb-4 font-light">
              Officially speaking, Disruptive Tech got its start in 2017 when it
              became a club under the Student Advisory Council. But, its roots
              can be traced back much further into Georgetown&apos;s past with
              organizations like Mu Alpha Alpha Phi Omega and the Society of the
              59th Minute.
            </p>
            <p className="mb-4 font-light">
              Our history continues to this day but remains an important part of
              who we are as an organization. We value the traditions and lessons
              that our past has taught us but continue to move forward each day.
            </p>
            <a
              href="/about/history"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              More about our history
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
