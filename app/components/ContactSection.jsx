"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_90%_0%,rgba(98,208,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      </div>

      <h2 className="text-center mb-10">
        <span className="text-4xl sm:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[color:var(--color-foreground)] to-[color:var(--color-primary-2)] bg-clip-text text-transparent">
          Contact 4U
        </span>
      </h2>

      <div className="max-w-4xl mx-auto text-lg space-y-6 text-[color:var(--color-muted)] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[var(--shadow-card)] p-6 sm:p-10">
        <p>
          Reach out to us for inquiries, project discussions, or partnerships —
          our team will respond quickly and reliably.
        </p>

        <p>
          Send us your project documents at the email below, and our expert
          estimator will provide reliable pricing with fast, efficient
          scheduling.
        </p>
        <p>
          <strong>Email:</strong> sales@4uengg.com <br />
          <strong>Phone:</strong> +1 214 831 2401
        </p>
        <p>
          Or simply fill out our quick contact form and we’ll get back to you
          without delay.
        </p>
      </div>
    </section>
  );
}
