import * as React from "react";
import Logo from "@/res/gdt.svg";
import Link from "next/link";
import Image from "next/image";

const Header = ({}) => (
  <header
    aria-label="Site Header"
    className="fixed bg-white/50 left-0 top-0 right-0 w-full shadow-sm print:hidden backdrop-blur"
  >
    <div className="mx-auto max-w-screen-lg p-2 flex flew-row gap-4">
      <div className="flex items-center justify-center">
        <Link className="m-0 p-0" href="/">
          <Image
            className="h-12 m-0 w-min rounded"
            src={Logo}
            alt="The Georgetown Disruptive Technologies Logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 lg:gap-10">
        <nav
          aria-label="Site Nav"
          className="w-min gap-4 text-sm font-medium flex md:gap-8"
        >
          <Link className="text-slate-950 no-underline" href="/about">
            About
          </Link>
          <Link className="text-slate-950 no-underline" href="/portfolio">
            Portfolio
          </Link>
          <Link className="text-slate-950 no-underline" href="/team">
            Team
          </Link>
          <Link className="text-slate-950 no-underline" href="/jobs">
            Careers
          </Link>
          {/* <Link className="text-slate-950 no-underline" href="/events">
            Events
          </Link> */}
          {/* <Link className="text-gray-500 no-underline" href="/contact">Contact</Link> */}
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
