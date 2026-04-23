export default function AboutSection() {
    return (
        <section style={{ marginTop: '20px' }}
            id="about"
            className="relative pt-28 sm:pt-32 pb-20 px-6"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_-10%,rgba(79,140,255,0.28),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_10%_20%,rgba(98,208,255,0.16),transparent_55%)]" />
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[var(--shadow-card)] px-6 sm:px-10 py-12 sm:py-14 text-center">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[color:var(--color-foreground)] to-[color:var(--color-primary-2)] bg-clip-text text-transparent mb-6">
                        About 4U
                    </h2>

                    <p className="max-w-5xl mx-auto text-[color:var(--color-muted)] text-lg leading-relaxed mb-4">
                        4U Engineering is transforming Steel Detailing & Engineering services
                        through Generative AI, APIs, and Advanced Technology.
                    </p>

                    <p className="max-w-5xl mx-auto text-[color:var(--color-muted)] text-lg leading-relaxed">
                        Seamless Services, Swift Responses, Trusted Communication, True Value
                        for Your Time & Investment, Powered by a Team of Young Talent and
                        Seasoned Professionals.
                    </p>
                </div>
            </div>
        </section>
    );
}
