
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection = "home" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full shrink-0 bg-white shadow-md">

      <div className="mx-auto flex h-[76px] max-w-[1920px] items-center justify-between gap-3 px-3 sm:h-[88px] sm:px-6 lg:px-8">

        {/* Logo and Company Name */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-4"
          aria-label="4U Engineering home"
        >
          <Image
            src="/Media.jpg"
            alt="4U Engineering Logo"
            width={64}
            height={64}
            className="h-11 w-11 rounded-md object-contain sm:h-16 sm:w-16"
            priority
          />

          <span className="whitespace-nowrap text-sm font-bold text-blue-600 sm:text-lg md:text-xl lg:text-2xl">
            4U Engineering Pvt. Ltd
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-2 lg:gap-5">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={id === "home" ? "/" : `/${id}`}
                  aria-current={
                    activeSection === id ? "page" : undefined
                  }
                  className={`block whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium transition-colors hover:text-blue-600 lg:px-2.5 lg:text-base ${
                    activeSection === id
                      ? "text-blue-700"
                      : "text-slate-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
          className="relative z-[60] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[6px] rounded-md transition hover:bg-slate-100 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
          open
            ? "visible max-h-96 border-t border-slate-100 opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col px-5 py-3">
            {sections.map(({ id, label }) => (
              <li key={id} className="border-b border-slate-100 last:border-0">
                <Link
                  href={id === "home" ? "/" : `/${id}`}
                  aria-current={
                    activeSection === id ? "page" : undefined
                  }
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                    activeSection === id
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  );
}
