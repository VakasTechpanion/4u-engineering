"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">

                {/* LEFT (Desktop only text) */}
                <div className="hidden md:flex items-center space-x-3">
                    <Image
                        src="/Media.jpg"
                        alt="4U Engineering Logo"
                        width={130}
                        height={130}
                        className="object-contain rounded-md"
                        priority
                    />
                    <h1 className="text-2xl font-bold text-blue-600 whitespace-nowrap">
                        4U Engineering Pvt. Ltd
                    </h1>
                </div>

                {/* CENTER LOGO (Mobile only) */}
                <div className="flex md:hidden justify-center w-full">
                    <Image
                        src="/Media.jpg"
                        alt="4U Engineering Logo"
                        width={100}
                        height={100}
                        className="object-contain rounded-md"
                        priority
                    />
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
                    <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
                    <li><a href="#careers" className="hover:text-blue-600 transition">Careers</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>

                {/* HAMBURGER */}
                <button
                    className="md:hidden absolute right-6 flex flex-col space-y-1"
                    onClick={() => setOpen(!open)}
                >
                    <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <ul className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden text-black font-medium">
                    <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
                    <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
}