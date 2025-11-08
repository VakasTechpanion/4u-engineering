export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Projects</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[1, 2, 3].map((p) => (
                    <div key={p} className="bg-gray-100 rounded-lg shadow p-4">
                        <img
                            src={`/images/project${p}.jpg`}
                            alt={`Project ${p}`}
                            className="rounded-md mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-lg font-semibold">Project {p}</h3>
                        <p className="text-gray-600">Innovative engineering solution {p}.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}