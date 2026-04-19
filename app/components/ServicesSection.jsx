"use client";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
        Services 4U
      </h2>

      <div className="max-w-6xl mx-auto space-y-10 text-blue-800 text-lg bg-gray-50 p-10 rounded-2xl shadow-sm">

        {/* NEW INDUSTRIAL SERVICES BLOCK */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">
            Complete Industrial & Structural Steel Solutions
          </h3>
          <p className="mb-4 text-gray-700">
            20+ Years of Experience in delivering reliable, high-quality steel
            fabrication and structural solutions.
          </p>

          <ul className="list-disc list-inside space-y-1">
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

        {/* EXISTING SERVICES */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Structural Steel Detailing
          </h3>
          <p>
            Customized, clear, and accurate fabrication reports, shop drawings,
            and erection drawings — saving fabricators material, shop time, and
            effort while prioritizing safety.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Main Steel Detailing
          </h3>
          <p>
            Beams, Columns, Bracings, Rafters, Trusses.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Miscellaneous Steel Detailing
          </h3>
          <p>
            Stairs, Railings, Ladders.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Estimation & Material Take-Off
          </h3>
          <ul className="list-disc list-inside">
            <li>Advance Bill of Materials (ABM)</li>
            <li>Quantity Estimation</li>
            <li>Material Take-Off Reports (BOM)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Connection Design & Engineering
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Pre-Engineered Metal Buildings (PEMB) Detailing
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Mechanical Design
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Commercial & Public Infrastructure
          </h3>
          <p>
            Residential, Offices, Schools, Colleges, Government Buildings,
            Hospitals, Airports, Bus & Metro Stations, Shopping Complexes,
            Convention Centers, Resorts, Hotels.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Industrial Structures
          </h3>
          <p>
            Warehouses, Manufacturing Plants, Pipe Racks, Utility Structures.
          </p>
        </div>

      </div>
    </section>
  );
}