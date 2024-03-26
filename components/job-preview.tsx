import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Globe } from "lucide-react";

export default function JobPreview({
  title,
  slug,
  i,
  description,
  pay,
}: {
  title: string;
  slug: string;
  i: number;
  description: string;
  pay: number;
}) {
  return (
    <>
      <Link className={`block w-full h-full`} href={`/jobs/${slug}`}>
        <div className={`rounded shadow p-4 h-full bg-slate-800`}>
          <span className="text-lg font-bold text-slate-50 flex flex-row gap-2">
            <h2>{title}</h2>•<p>${pay.toFixed(2)}/hr</p>
          </span>
          <p className="text-md line-clamp-3 mb-2 text-slate-50">
            {description}
          </p>
        </div>
      </Link>
    </>
  );
}
