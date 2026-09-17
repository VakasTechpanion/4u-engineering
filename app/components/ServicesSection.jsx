"use client";

import Reveal from "./Reveal";

const services = [
  {
    title: "Structural Steel Detailing",
    body: (
      <p>
        Customized, clear, and accurate fabrication reports, shop drawings,
        and erection drawings — saving fabricators material, shop time, and
        effort while prioritizing safety.
      </p>
    ),
  },
  {
    title: "Main Steel Detailing",
    body: <p>Beams, Columns, Bracings, Rafters, Trusses.</p>,
  },
  {
    title: "Miscellaneous Steel Detailing",
    body: <p>Stairs, Railings, Ladders.</p>,
  },
  {
    title: "Estimation & Material Take-Off",
    body: (
      <ul className="list-disc list-inside space-y-1">
        <li>Advance Bill of Materials (ABM)</li>
        <li>Quantity Estimation</li>
        <li>Material Take-Off Reports (BOM)</li>
      </ul>
    ),
  },
  {
    title: "Connection Design & Engineering",
    body: null,
  },
  {
    title: "Pre-Engineered Metal Buildings (PEMB) Detailing",
    body: null,
  },
  {
    title: "Mechanical Design",
    body: null,
  },
  {
    title: "Commercial & Public Infrastructure",
    body: (
      <p>
        Residential, Offices, Schools, Colleges, Government Buildings,
        Hospitals, Airports, Bus & Metro Stations, Shopping Complexes,
        Convention Centers, Resorts, Hotels.
      </p>
    ),
  },
  {
    title: "Industrial Structures",
    body: (
      <p>
        Warehouses, Manufacturing Plants, Pipe Racks, Utility Structures.
      </p>
    ),
  },
  {
    title: "Piping & Mechanical Services",
    body: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          IBR & Non-IBR Piping (Design, Fabrication, Erection & Maintenance)
        </li>
        <li>
          Specialisation in sugar factories and oil refinery maintenance
        </li>
        <li>
          Reduction Gearbox Supply & Maintenance
        </li>
      </ul>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />

      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] text-center mb-4 tracking-tight">
          Services 4U
        </h2>
        <div className="mx-auto mb-14 h-1 w-14 rounded-full bg-[var(--accent)]" aria-hidden="true" />
      </Reveal>

      <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Reveal key={service.title}>
            <div className="service-panel h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm text-[var(--steel)] text-lg">
              <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                {service.title}
              </h3>
              {service.body}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
