"use client";
import React from "react";

export default function ContactForm() {
    return (
        <section className="relative py-24 text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_0%,rgba(79,140,255,0.40),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_110%_10%,rgba(98,208,255,0.22),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,26,46,0.2),rgba(15,26,46,0.85))]" />
            </div>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white to-[color:var(--color-primary-2)] bg-clip-text text-transparent">
                        Contact 4U
                    </h2>
                    <p className="text-lg mb-4 text-white/80">
                        Reach out for projects, partnerships, or inquiries.
                    </p>
                    <p className="text-lg font-semibold text-white/90">
                        sales@4uengg.com / +1 214 831 2401
                    </p>
                </div>

                {/* RIGHT FORM */}
                <form className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-[var(--shadow-card)] text-[color:var(--color-foreground)] space-y-4 w-full">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder:text-white/50 outline-none focus:shadow-[var(--ring)] focus:border-white/20"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder:text-white/50 outline-none focus:shadow-[var(--ring)] focus:border-white/20"
                    />

                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 placeholder:text-white/50 outline-none focus:shadow-[var(--ring)] focus:border-white/20"
                    />

                    <button className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-2)] text-[color:var(--primary-ink)] shadow-[0_18px_55px_rgba(0,0,0,0.35)] hover:opacity-95 transition">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}