// export default function ServicesSection() {
//     const services = [
//         { title: "Mechanical Design", desc: "Precision designs for industrial excellence." },
//         { title: "Electrical Engineering", desc: "Reliable and safe electrical systems." },
//         { title: "Automation", desc: "Smart solutions to optimize performance." },
//     ];

//     return (
//         <section id="services" className="py-20 px-6 bg-gray-100 text-center">
//             <h2 className="text-3xl font-bold text-blue-700 mb-8">4U Services</h2>
//             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {services.map((s, i) => (
//                     <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//                         <h3 className="text-xl font-semibold text-blue-600 mb-2">{s.title}</h3>
//                         <p className="text-gray-600">{s.desc}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
        4U Services
      </h2>

      <div className="max-w-6xl mx-auto space-y-10 text-blue-800 text-lg">
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

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Mechanical Design
          </h3>
        </div>
      </div>
    </section>
  );
}
