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
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 mt-16 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Our History</h1>
            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              Over {new Date().getFullYear() - 2017} Years in the Making.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              There were sparks of innovation before us.
            </h2>
            <p className="mb-4">
              Established in 1965 with a vision for excellence,
              Georgetown&apos;s computer science program evolved into a hub of
              creativity and cutting-edge exploration. From its early days of
              laying the foundations of computational theory to today&apos;s
              forefront of artificial intelligence and cybersecurity, the
              department has been a driving force in shaping the digital
              landscape.
            </p>
            <p className="">
              This served as the foundation of Disruptive Tech as we were driven
              by the school&apos;s constant drive for perfection and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width={800}
              height={600}
              className="w-full rounded-lg"
              src="/stock/seal-glass.jpg"
              alt="office content 1"
            />
            <Image
              width={800}
              height={600}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/stock/priest.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width={800}
              height={600}
              className="w-full rounded-lg"
              src="/stock/jack.jpg"
              alt="office content 1"
            />
            <Image
              width={800}
              height={600}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/stock/dahlgren.jpg"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We officially got our start in 2017.
            </h2>
            <p className="mb-4">
              Founded on the idea that every Georgetown Student needs a computer
              science education, Disruptive Tech became the first tech club on
              campus. Our membership quickly grew and by 2022, our quinquennial,
              we had well over 150 registered members.
            </p>
            <p>
              During this time, we focused on providing workshops to help
              students apply to computer science jobs.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We Moved to the Business School.
            </h2>
            <p className="mb-4">
              In fall of 2023, our ambitions grew too big for the college club
              board. So, we began to search for different options that matched
              our ambitions as a student organization. The best option came
              quick, when Patricia Grant graciously welcomed Disruptive Tech
              into the Robert E. McDonough School of Business.
            </p>
            <p className="">
              With this move into the Business School, Disruptive Tech began
              focusing more on computer science education through business
              practice.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width={600}
              height={800}
              className="w-full rounded-lg"
              src="/stock/msb_outside.jpg"
              alt="office content 1"
            />
            <Image
              width={600}
              height={800}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/stock/msb_inside.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
