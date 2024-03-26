import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Globe } from "lucide-react";

export default function PortfolioPreview({
  name,
  slug,
  i,
  description,
  website,
}: {
  name: string;
  slug: string;
  i: number;
  description: string;
  website: string;
}) {
  return (
    <>
      <Link className={`block w-full h-full`} href={`/portfolio/${slug}`}>
        <div className={`rounded shadow p-4 h-full bg-slate-800`}>
          <div className="w-full flex flex-row justify-between">
            <Image
              width="400"
              height="100"
              src={`/portfolio/${slug}.svg`}
              alt={name}
              loading="lazy"
              className="h-16 mb-16 object-right w-min"
            />
            <div className="flex flex-row">
              <Link
                href={website}
                className="text-slate-50 hover:text-slate-200 h-min w-min"
              >
                <Globe />
              </Link>
            </div>
          </div>
          <p className="text-md line-clamp-3 mb-2 text-slate-50">
            {description}
          </p>
          {/* <h3 className="text-lg font-bold text-slate-50">{name}</h3> */}
        </div>
      </Link>
    </>
  );
}
