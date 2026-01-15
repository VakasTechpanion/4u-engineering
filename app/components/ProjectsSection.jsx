// "use client";
// import Image from "next/image";

// export default function ProjectsSection() {
//   // ✅ Correctly matched projects (titles, descriptions, and images)
//   const projects = [
//     {
//       title: "Smart Bridge Monitoring System",
//       desc: "An IoT-based project to detect vibration and cracks in bridges using sensors and microcontrollers.",
//       image: "/project1.jpg", // 🖼️ image of industrial pipes and sensors
//     },
//     {
//       title: "Solar Power Automation",
//       desc: "A renewable energy solution that automates power switching using solar panels and IoT modules.",
//       image: "/project2.jpg", // 🖼️ building with solar panels
//     },
//     {
//       title: "Automated Hydraulic Arm",
//       desc: "A robotic arm designed for industrial precision and remote-controlled operations.",
//       image: "/project3.jpg", // 🖼️ robotic system with circuits or CAD model
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-white text-center">
//       <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Projects</h2>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 overflow-hidden"
//           >
//             {/* Image */}
//             <div className="relative w-full h-56">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 priority
//               />
//             </div>

//             {/* Text Content */}
//             <div className="p-5 text-left">
//               <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-700 text-sm md:text-base">
//                 {project.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
        Our Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-10 text-blue-800 text-lg">
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
      </div>
    </section>
  );
}
