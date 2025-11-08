"use client";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-2xl font-bold text-blue-600">4U Engineering</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600">About</a></li>
                    <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                    <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col space-y-1"
                    onClick={() => setOpen(!open)}
                >
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                </button>

                {/* Mobile Menu */}
                {open && (
                    <ul className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
                        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
                        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}