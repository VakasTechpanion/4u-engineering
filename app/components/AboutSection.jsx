import Reveal from "./Reveal";

export default function AboutSection() {
    return (
        <section
            style={{ marginTop: "100px" }}
            id="about"
            className="relative py-24 px-6 blueprint-grid overflow-hidden"
        >
            <div className="absolute inset-0 navy-wash pointer-events-none" />

            <Reveal className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
                <div className="mb-4 h-1 w-14 rounded-full bg-[var(--accent)]" aria-hidden="true" />

                <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-8 tracking-tight">
                    About 4U
                </h2>

                <p className="max-w-5xl text-[var(--steel)] text-lg leading-relaxed mb-4">
                    4U Engineering is transforming Steel Detailing & Engineering services
                    through Generative AI, APIs, and Advanced Technology.
                </p>

                <p className="max-w-5xl text-[var(--steel)] text-lg leading-relaxed">
                    Seamless Services, Swift Responses, Trusted Communication, True Value
                    for Your Time & Investment, Powered by a Team of Young Talent and
                    Seasoned Professionals.
                </p>
            </Reveal>
        </section>
    );
}
