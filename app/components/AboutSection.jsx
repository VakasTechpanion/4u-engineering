export default function AboutSection() {
    return (
        <section style={{ marginTop: '100px' }}
            id="about"
            className="py-24 px-6 bg-white flex flex-col items-center text-center max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
                About 4U
            </h2>

            <p className="max-w-5xl text-blue-800 text-lg leading-relaxed mb-4">
                4U Engineering is transforming Steel Detailing & Engineering services
                through Generative AI, APIs, and Advanced Technology.
            </p>

            <p className="max-w-5xl text-blue-800 text-lg leading-relaxed">
                Seamless Services, Swift Responses, Trusted Communication, True Value
                for Your Time & Investment, Powered by a Team of Young Talent and
                Seasoned Professionals.
            </p>
        </section>
    );
}
