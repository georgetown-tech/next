import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Github, Globe, Instagram, Rss } from "lucide-react";

const icons = {
  "github.com": <Github size={18} />,
  "www.instagram.com": <Instagram size={18} />,
  "instagram.com": <Instagram size={18} />,
  "medium.com": <Rss size={18} />,
};

export default function Teammate({
  title,
  slug,
  i,
  description,
  short,
  socials,
}: {
  title: string;
  slug: string;
  i: number;
  description: string;
  short: string;
  socials: string[];
}) {
  return (
    <div className="h-full items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <a className="" href={`/team/${slug}`}>
        <Image
          width={512}
          height={512}
          className="rounded-lg sm:rounded-none sm:rounded-l-lg h-64 w-64 aspect-square object-cover"
          src={`/team/${slug}.jpeg`}
          alt="Bonnie Avatar"
        />
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href={`/team/${slug}`}>{title}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">
          CEO & Web Developer
        </span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {short}
        </p>
        <ul className="flex space-x-4 sm:mt-0">
          {socials?.map((i) => (
            <li key={i}>
              <Link
                href={i}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {
                  // @ts-ignore
                  icons[new URL(i).hostname] == undefined ? (
                    <Globe size={18} />
                  ) : (
                    // @ts-ignore
                    icons[new URL(i).hostname]
                  )
                }
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
