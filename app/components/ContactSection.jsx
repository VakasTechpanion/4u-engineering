"use client";

import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 blueprint-grid relative overflow-hidden">
      <div className="absolute inset-0 navy-wash pointer-events-none" />

      <Reveal className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] text-center mb-4 tracking-tight">
          Contact 4U
        </h2>
        <div className="mx-auto mb-10 h-1 w-14 rounded-full bg-[var(--accent)]" aria-hidden="true" />

        <div className="rounded-2xl border border-[var(--line)] bg-white/90 backdrop-blur-sm p-8 md:p-10 text-[var(--steel)] text-lg space-y-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)]">
          <p>
            Reach out to us for enquiries, project discussions, or partnerships —
            our team will respond quickly and reliably.
          </p>

          <p>
            Send us your project documents at the email below, and our expert
            estimator will provide reliable pricing with fast, efficient
            scheduling.
          </p>
          <p className="pt-2 border-t border-[var(--line)]">
            <strong className="text-[var(--navy)]">Phone:</strong>{" "}
            <a
              href="tel:+12144431002"
              className="font-semibold text-[var(--accent)] hover:underline transition"
            >
              +1 214 443 1002
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
