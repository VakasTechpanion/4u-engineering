"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />
            <div className="relative container mx-auto flex items-center justify-between px-6 py-3">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/logo.jpg"
                        alt="4U Engineering Logo"
                        width={130}
                        height={130}
                        className="object-contain rounded-md ring-1 ring-white/10"
                        priority
                    />
                    <h1 className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] whitespace-nowrap truncate max-w-[180px] sm:max-w-none">
                        4U Engineering Pvt. Ltd
                    </h1>
                </div>

                <ul className="hidden md:flex space-x-8 text-[color:var(--color-muted)] font-medium">
                    <li><a href="#home" className="hover:text-[color:var(--color-foreground)] transition">Home</a></li>
                    <li><a href="#about" className="hover:text-[color:var(--color-foreground)] transition">About</a></li>
                    <li><a href="#services" className="hover:text-[color:var(--color-foreground)] transition">Services</a></li>
                    <li><a href="#careers" className="hover:text-[color:var(--color-foreground)] transition">Careers</a></li>
                    <li><a href="#contact" className="hover:text-[color:var(--color-foreground)] transition">Contact</a></li>
                </ul>

                <button
                    className="md:hidden flex flex-col space-y-1"
                    onClick={() => setOpen(!open)}
                >
                    <span className={`w-6 h-0.5 bg-white/80 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-white/80 transition ${open ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-white/80 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>

            {open && (
                <div className="absolute top-[64px] left-0 w-full md:hidden">
                    <div className="mx-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[var(--shadow-card)] overflow-hidden">
                        <ul className="flex flex-col items-center py-6 space-y-4 text-[color:var(--color-foreground)] font-medium">
                            <li><a href="#home" className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-2)] transition" onClick={() => setOpen(false)}>Home</a></li>
                            <li><a href="#about" className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-2)] transition" onClick={() => setOpen(false)}>About</a></li>
                            <li><a href="#services" className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-2)] transition" onClick={() => setOpen(false)}>Services</a></li>
                            <li><a href="#projects" className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-2)] transition" onClick={() => setOpen(false)}>Projects</a></li>
                            <li><a href="#contact" className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-2)] transition" onClick={() => setOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}