"use client";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo / Brand Name */}
                <h1 className="text-2xl font-bold text-blue-600">4U Engineering</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
                    <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col space-y-1"
                    onClick={() => setOpen(!open)}
                >
                    <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden text-black font-medium">
                    <li>
                        <a
                            href="#home"
                            className="text-black hover:text-blue-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-black hover:text-blue-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="text-black hover:text-blue-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-black hover:text-blue-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-black hover:text-blue-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}