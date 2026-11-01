
export default function AboutSection() {
    return (
        <section
            id="about"
            className="w-full bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Heading */}
                <div className="mb-10 text-center sm:mb-12">
                    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Who We Are
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        About <span className="text-blue-700">4U</span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
                </div>

                {/* About Content */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-12">
                    <p className="text-left text-base leading-8 text-slate-600 sm:text-lg">
                        Welcome to the absolute forefront of creation, where
                        daring vision transforms into reality. We believe that
                        innovation is sparked by curiosity and driven by a
                        spirit that refuses to accept boundaries. Every
                        project we undertake is an opportunity to explore new
                        possibilities, discover groundbreaking solutions, and
                        contribute to shaping the world around us.
                    </p>

                    {/* Highlighted Quote */}
                    <blockquote className="my-8 border-l-4 border-blue-600 bg-blue-50 px-5 py-5 sm:px-7">
                        <p className="text-base font-medium italic leading-8 text-blue-900 sm:text-lg">
                            "The human foot is a masterpiece of engineering
                            and a work of art."
                        </p>
                        <span className="mt-3 block text-sm font-semibold text-blue-700">
                            — Leonardo da Vinci
                        </span>
                    </blockquote>

                    <p className="text-left text-base leading-8 text-slate-600 sm:text-lg">
                        We don’t just watch tomorrow happen; we actively
                        engineer, design, and build it. This is where passion
                        meets perseverance, turning ambitious ideas into
                        meaningful engineering solutions. Through creativity,
                        technical expertise, and a commitment to excellence,
                        we continuously explore new possibilities and redefine
                        what engineering can achieve.
                    </p>
                </div>
            </div>
        </section>
    );
}
