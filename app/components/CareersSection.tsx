"use client";

import Reveal from "./Reveal";

export default function CareersSection() {
    return (
        <section
            id="careers"
            className="py-24 px-6 bg-white border-t border-[var(--line)]"
        >
            <Reveal className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-4 tracking-tight">
                    Careers 4U
                </h2>
                <div className="mx-auto mb-8 h-1 w-14 rounded-full bg-[var(--accent)]" aria-hidden="true" />

                <p className="text-lg leading-relaxed mb-6 text-[var(--steel)]">
                    “Join 4U. Grow with 4U. Innovate with 4U. Lead the Future with 4U.”
                </p>

                <p className="text-lg mb-4 text-[var(--steel)]">
                    Send your CV / Resume
                </p>

                <a
                    href="mailto:hr@4uengg.com"
                    className="inline-block text-lg font-semibold text-[var(--accent)] hover:text-[var(--navy)] transition-colors underline-offset-4 hover:underline"
                >
                    hr@4uengg.com
                </a>
            </Reveal>
        </section>
    );
}
