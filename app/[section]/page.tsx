
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import SiteShell from "../components/SiteShell";
import ServicesSection from "../components/ServicesSection";

const sectionIds = ["about", "services", "careers", "contact"] as const;

export function generateStaticParams() {
  return sectionIds.map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  const activeSection = sectionIds.find(
    (item) => item === section
  );

  if (!activeSection) {
    notFound();
  }

  return (
    <SiteShell activeSection={activeSection}>
      <Navbar activeSection={activeSection} />

      {/* Scrollable page without visible scrollbar */}
      <main className="hide-scrollbar min-h-0 flex-1 overflow-x-hidden overflow-y-auto bg-white">

        {activeSection === "about" && <AboutPage />}

        {activeSection === "services" && <ServicesSection />}

        {activeSection === "careers" && <CareersPage />}

        {activeSection === "contact" && <ContactPage />}

      </main>
    </SiteShell>
  );
}

/* =========================
   ABOUT PAGE
========================= */

function AboutPage() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-10 text-center">

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 sm:text-sm">
        About 4U
      </p>

      <h1 className="mb-5 text-3xl font-bold text-blue-950 sm:text-5xl">
        Engineering with purpose.
      </h1>

      <p className="max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-lg">
        4U Engineering is transforming steel detailing and engineering
        services through advanced technology, engineering expertise,
        and innovative solutions.
      </p>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-lg">
        Seamless services, swift responses, trusted communication,
        and true value for your time and investment—powered by a team
        of young talent and seasoned professionals.
      </p>

    </section>
  );
}

/* =========================
   CAREERS PAGE
========================= */

function CareersPage() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-10 text-center">

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 sm:text-sm">
        Careers 4U
      </p>

      <h1 className="mb-4 text-3xl font-bold text-blue-950 sm:text-5xl">
        Grow with 4U.
      </h1>

      <p className="mb-6 max-w-2xl text-sm text-slate-700 sm:text-lg">
        Join 4U. Grow with 4U. Innovate with 4U. Lead the future with 4U.
      </p>

      <p className="text-sm text-slate-600">
        Send your CV / Resume
      </p>

      <a
        href="mailto:hr@4uengg.com"
        className="mt-2 text-lg font-semibold text-blue-700 transition hover:text-blue-900 sm:text-xl"
      >
        hr@4uengg.com
      </a>

    </section>
  );
}

/* =========================
   CONTACT PAGE
========================= */

function ContactPage() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-10 text-center">

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 sm:text-sm">
        Contact 4U
      </p>

      <h1 className="mb-4 text-3xl font-bold text-blue-950 sm:text-5xl">
        Let’s build something together.
      </h1>

      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-lg">
        Reach out for project enquiries, discussions, or partnerships.
        Our team will respond quickly and reliably.
      </p>

      <a
        href="tel:+12144431002"
        className="rounded-lg bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 sm:text-base"
      >
        Call +1 214 443 1002
      </a>

    </section>
  );
}
