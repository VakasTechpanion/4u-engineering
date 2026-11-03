
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "CAE & Engineering Simulation",
    image: "/01_CAE_and_Simulation.png",
    alt: "Finite Element Analysis and engineering simulation for structural performance evaluation.",
    description:
      "We provide advanced Computer-Aided Engineering (CAE) and simulation solutions to evaluate product performance, improve structural reliability, and optimize engineering designs. Our simulation-driven approach helps reduce development costs, minimize design failures, and enhance overall product efficiency.",
    features: [
      "Finite Element Modeling (FEM) & Meshing",
      "Structural & Dynamic Analysis",
      "Design Optimization & Value Engineering",
      "Stress, Strain & Deformation Analysis",
      "Engineering Performance Evaluation",
    ],
  },
  {
    id: 2,
    title: "Industrial Piping Design & Maintenance",
    image: "/02_Piping_Design_and_Maintenance.png",
    alt: "Industrial piping design, engineering, fabrication and maintenance services.",
    description:
      "We deliver comprehensive industrial piping design, engineering, installation, and maintenance solutions for industrial plants and processing facilities. Our services focus on ensuring safe operations, efficient fluid transportation, and long-term piping system reliability.",
    features: [
      "Industrial Piping Design & Layout",
      "3D Piping Modeling",
      "Piping Isometric Drawings",
      "Pipe Routing & Support Design",
      "Piping Fabrication & Installation",
      "Inspection, Repair & Maintenance",
    ],
  },
  {
    id: 3,
    title: "Heavy Vehicle Body Design & Maintenance",
    image: "/03_Heavy_Vehicle_Body_Maintenance.png",
    alt: "Heavy commercial vehicle body fabrication, repair and maintenance.",
    description:
      "We provide specialized maintenance, repair, and fabrication solutions for heavy commercial vehicle bodies. Our services help improve vehicle durability, structural strength, operational safety, and performance in demanding industrial environments.",
    features: [
      "Heavy Vehicle Body Repair",
      "Truck & Trailer Body Maintenance",
      "Structural Reinforcement",
      "Body Fabrication & Modification",
      "Chassis Inspection & Repair",
      "Welding & Structural Restoration",
    ],
  },
  {
    id: 4,
    title: "Industrial Boiler Maintenance & Engineering",
    image: "/04_Boiler_Design_and_Maintenance.png",
    alt: "Industrial boiler inspection, repair and preventive maintenance services.",
    description:
      "We offer industrial boiler maintenance, repair, inspection, and engineering support to ensure safe, efficient, and reliable boiler operations. Our solutions focus on minimizing downtime, improving equipment performance, and extending operational life.",
    features: [
      "Industrial Boiler Maintenance",
      "Boiler Inspection & Troubleshooting",
      "Boiler Component Repair",
      "Pressure Parts Maintenance",
      "Welding & Fabrication",
      "Shutdown & Preventive Maintenance",
    ],
  },
  {
    id: 5,
    title: "Structural Design & Steel Detailing",
    image: "/05_Structural_Design_and_Detailing.png",
    alt: "Industrial structural steel design, connection engineering and detailing.",
    description:
      "We provide complete structural engineering, steel design, and detailing solutions for industrial and commercial projects. Our team focuses on delivering safe, efficient, and cost-effective structural designs with accurate fabrication and erection drawings.",
    features: [
      "Structural Analysis & Design",
      "Steel Structural Detailing",
      "Connection Design",
      "Bolted & Welded Connection Design",
      "Fabrication & Shop Drawings",
      "Erection & Assembly Drawings",
    ],
  },
  {
    id: 6,
    title: "Pre-Engineered Building (PEB) Design & Detailing",
    image: "/06_PEB_Design_and_Detailing.png",
    alt: "Pre-engineered steel building design, structural detailing and engineering.",
    description:
      "We specialize in Pre-Engineered Building (PEB) design, engineering, and detailing solutions for industrial warehouses, factories, commercial buildings, and large-span structures. Our solutions focus on structural efficiency, optimized material usage, and faster construction.",
    features: [
      "PEB Structural Design",
      "Primary & Secondary Framing Design",
      "Steel Connection Design",
      "3D Modeling & Detailing",
      "Fabrication Drawings",
      "Erection Drawings",
      "Material Optimization",
    ],
  },
  {
    id: 7,
    title: "Heavy Industrial Gearbox Maintenance",
    image: "/07_Heavy_Gearbox_Maintenance.png",
    alt: "Heavy-duty industrial gearbox repair, servicing and maintenance.",
    description:
      "We provide maintenance, repair, inspection, and refurbishment services for heavy-duty industrial gearboxes and transmission systems. Our solutions help maintain mechanical efficiency, reduce equipment failures, and ensure reliable performance in demanding industrial applications.",
    features: [
      "Heavy Gearbox Maintenance",
      "Gearbox Inspection & Diagnosis",
      "Gear & Bearing Replacement",
      "Gearbox Repair & Overhauling",
      "Lubrication System Maintenance",
      "Alignment & Performance Testing",
    ],
  },
  {
    id: 8,
    title: "Sugar Plant Engineering & Maintenance",
    image: "/08_Sugar_Factory_Maintenance.png",
    alt: "Sugar factory industrial machinery maintenance and engineering services.",
    description:
      "We provide comprehensive engineering, maintenance, and repair solutions for sugar manufacturing plants. Our services support critical plant equipment, machinery, and structural systems to improve production efficiency, reduce downtime, and ensure smooth plant operations.",
    features: [
      "Sugar Mill Machinery Maintenance",
      "Roller Mill & Crusher Maintenance",
      "Industrial Equipment Repair",
      "Structural Fabrication & Repair",
      "Conveyor System Maintenance",
      "Plant Shutdown & Annual Maintenance",
      "Equipment Installation & Alignment",
    ],
  },
  {
    id: 9,
    title: "Structural Steel & PEB Fabrication and Installation",
    image: "/09_Structural_and_PEB_Fabrication_Installation.png",
    alt: "Structural steel and PEB fabrication, erection and installation.",
    description:
      "We offer end-to-end structural steel and Pre-Engineered Building (PEB) fabrication and installation services. From material preparation and precision fabrication to on-site erection and installation, we deliver quality-driven solutions that meet project specifications and industrial requirements.",
    features: [
      "Structural Steel Fabrication",
      "PEB Steel Fabrication",
      "Cutting, Drilling & Welding",
      "Steel Component Assembly",
      "On-Site Structural Erection",
      "PEB Installation",
      "Industrial Steel Installation",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-7 max-w-5xl text-center sm:mb-9">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Our <span className="text-sky-600">Services</span>
          </h1>

          <p className="mt-2 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
            At 4U Engineering Pvt. Ltd., we offer a diverse range of services
            designed to meet the complex needs of engineering, construction,
            manufacturing, and industrial sectors. With technical expertise,
            advanced engineering solutions, and skilled professionals, we
            deliver reliable, innovative, and customized solutions that drive
            project success.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {services.map((service) => (
            <article
              key={service.id}
              className="
                group flex h-full min-w-0 flex-col
                overflow-hidden rounded-xl
                border border-slate-200 bg-white
                shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-4">

                {/* Title */}
                <h2 className="mb-2 text-sm font-bold leading-snug text-slate-900 sm:text-base">
                  {service.title}
                </h2>

                {/* Full Description - No Line Clamp */}
                <p className="mb-3 text-xs leading-[1.7] text-slate-700 sm:text-[13px]">
                  {service.description}
                </p>

                {/* Key Services */}
                <div className="mb-4">
                  <h3 className="mb-2 text-xs font-semibold text-slate-900">
                    Key Services:
                  </h3>

                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                      >
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Know More - Always at Bottom */}
                <div className="mt-auto flex justify-end border-t border-slate-100 pt-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="
                      inline-flex items-center gap-1.5
                      text-xs font-semibold text-slate-800
                      transition-colors duration-200
                      hover:text-sky-600
                    "
                  >
                    Know More
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom Enquiry Section */}
        <div className="mt-10 rounded-xl bg-slate-900 px-5 py-8 text-center sm:mt-12 sm:px-8">

          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Need Professional Engineering Solutions?
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Connect with 4U Engineering Pvt. Ltd. for engineering design,
            simulation, industrial maintenance, structural detailing,
            fabrication, and installation services.
          </p>

          <Link
            href="/contact"
            className="
              mt-5 inline-flex items-center justify-center
              rounded-md bg-white px-6 py-3
              text-sm font-semibold text-slate-900
              transition-colors hover:bg-sky-100
            "
          >
            Contact Our Team
          </Link>

        </div>

      </div>
    </section>
  );
}
