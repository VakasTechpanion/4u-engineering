"use client";

export default function CareersSection() {
    return (
        <section
            id="careers"
            className="relative py-24 px-6"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_0%,rgba(79,140,255,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-[color:var(--color-foreground)] to-[color:var(--color-primary-2)] bg-clip-text text-transparent">
                    Careers 4U
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-[color:var(--color-muted)]">
                    “Join 4U. Grow with 4U. Innovate with 4U. Lead the Future with 4U.”
                </p>

                <p className="text-lg mb-4 text-[color:var(--color-muted)]">
                    Send your CV / Resume
                </p>

                <p className="text-lg font-semibold mb-8 text-[color:var(--color-foreground)]">
                    hr@4uengg.com
                </p>

                {/* Upload UI (no backend, UI only) */}
                <div className="max-w-md mx-auto border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-[var(--shadow-card)] text-left">
                    <label className="block mb-2 font-medium text-[color:var(--color-foreground)]">
                        Upload Resume
                    </label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[color:var(--color-foreground)] file:mr-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-[color:var(--color-primary)] file:to-[color:var(--color-primary-2)] file:px-4 file:py-2 file:font-semibold file:text-[color:var(--primary-ink)] hover:file:opacity-95 transition outline-none focus:shadow-[var(--ring)]"
                    />
                    <p className="text-sm text-[color:var(--color-subtle)] mt-2">
                        Accepted formats: PDF, DOC, DOCX
                    </p>
                </div>
            </div>
        </section>
    );
}
