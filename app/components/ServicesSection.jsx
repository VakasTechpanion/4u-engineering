export default function ServicesSection() {
    const services = [
        { title: "Mechanical Design", desc: "Precision designs for industrial excellence." },
        { title: "Electrical Engineering", desc: "Reliable and safe electrical systems." },
        { title: "Automation", desc: "Smart solutions to optimize performance." },
    ];

    return (
        <section id="services" className="py-20 px-6 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((s, i) => (
                    <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}