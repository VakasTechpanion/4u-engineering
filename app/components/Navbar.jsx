"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-lg border-b border-[var(--line)] shadow-[0_4px_24px_rgba(11,31,58,0.06)] z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">

                {/* DESKTOP LOGO + NAME */}
                <div className="hidden md:flex items-center space-x-3">
                    <Image
                        src="/Media.jpg"
                        alt="4U Engineering Logo"
                        width={100}
                        height={100}
                        className="object-contain rounded-md ring-1 ring-[var(--line)]"
                        priority
                    />

                    <h1 className="text-2xl font-bold text-[var(--navy)] whitespace-nowrap tracking-tight">
                        4U Engineering Pvt. Ltd
                    </h1>
                </div>

                {/* MOBILE LOGO */}
                <div className="flex md:hidden justify-center w-full">
                    <Image
                        src="/Media.jpg"
                        alt="4U Engineering Logo"
                        width={70}
                        height={70}
                        className="object-contain rounded-md ring-1 ring-[var(--line)]"
                        priority
                    />
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex space-x-8 text-[var(--navy-soft)] font-medium">
                    <li>
                        <a href="#home" className="nav-link">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="nav-link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#services" className="nav-link">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#careers" className="nav-link">
                            Careers
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* HAMBURGER / X BUTTON */}
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-[var(--accent-soft)] transition-colors"
                    onClick={() => setOpen(!open)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-[var(--navy)] transition-all duration-300 ${open
                                ? "rotate-45 translate-y-1"
                                : "-translate-y-1"
                            }`}
                    />

                    <span
                        className={`block w-6 h-0.5 bg-[var(--navy)] transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    <span
                        className={`block w-6 h-0.5 bg-[var(--navy)] transition-all duration-300 ${open
                                ? "-rotate-45 -translate-y-1"
                                : "translate-y-1"
                            }`}
                    />
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="w-full bg-white/95 backdrop-blur-md border-t border-[var(--line)] shadow-md flex flex-col items-center py-6 space-y-6 text-[var(--navy)] font-medium">
                    <li>
                        <a href="#home" className="nav-link" onClick={() => setOpen(false)}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#services" className="nav-link" onClick={() => setOpen(false)}>
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="nav-link" onClick={() => setOpen(false)}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
