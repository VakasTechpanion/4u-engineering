"use client";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(98,208,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      </div>

      <h2 className="text-center mb-12">
        <span className="text-4xl sm:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[color:var(--color-foreground)] to-[color:var(--color-primary-2)] bg-clip-text text-transparent">
        Services 4U
        </span>
      </h2>

      <div className="max-w-6xl mx-auto text-lg rounded-3xl border border-[color:var(--color-border)] bg-white/5 backdrop-blur-xl shadow-[var(--shadow-card)] overflow-hidden">
        <div className="p-6 sm:p-10 divide-y divide-white/10">

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Structural Steel Detailing
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Customized, clear, and accurate fabrication reports, shop drawings,
            and erection drawings — saving fabricators material, shop time, and
            effort while prioritizing safety.
          </p>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Main Steel Detailing
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Beams, Columns, Bracings, Rafters, Trusses.
          </p>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Miscellaneous Steel Detailing
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Stairs, Railings, Ladders.
          </p>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-3">
            Estimation & Material Take-Off
          </h3>
          <ul className="list-disc list-inside text-[color:var(--color-muted)] leading-relaxed space-y-1">
            <li>Advance Bill of Materials (ABM)</li>
            <li>Quantity Estimation</li>
            <li>Material Take-Off Reports (BOM)</li>
          </ul>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Connection Design & Engineering
          </h3>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Pre-Engineered Metal Buildings (PEMB) Detailing
          </h3>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Mechanical Design
          </h3>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Commercial & Public Infrastructure
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Residential, Offices, Schools, Colleges, Government Buildings,
            Hospitals, Airports, Bus & Metro Stations, Shopping Complexes,
            Convention Centers, Resorts, Hotels.
          </p>
        </div>

        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Industrial Structures
          </h3>
          <p className="text-[color:var(--color-muted)] leading-relaxed">
            Warehouses, Manufacturing Plants, Pipe Racks, Utility Structures.
          </p>
        </div>
        <div className="py-7">
          <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] mb-2">
            Complete Industrial & Structural Steel Solutions
          </h3>
          <p className="mb-4 text-[color:var(--color-muted)] leading-relaxed">
            20+ Years of Experience in delivering reliable, high-quality steel
            fabrication and structural solutions.
          </p>

          <ul className="text-[color:var(--color-muted)] leading-relaxed space-y-1 list-disc list-inside">
            <li>All Types of Steel Fabrication & Erection</li>
            <li>Commercial & Residential Building Structures</li>
            <li>Industrial Shed Fabrication</li>
            <li>Stair Railings (MS, SS & Designer)</li>
            <li>Gates, Grills & Compound Work</li>
            <li>Roofing Structures & Metal Sheds</li>
            <li>Structural Steel Work (Beams, Columns & Frames)</li>
            <li>
              IBR & Non-IBR Piping (Design, Fabrication, Erection & Maintenance)
            </li>
            <li>Reduction Gearbox Supply & Maintenance</li>
            <li>Custom Fabrication as per Drawing/Requirement</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}