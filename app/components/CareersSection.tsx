"use client";

export default function CareersSection() {
    return (
        <section
            id="careers"
            className="py-20 px-6 bg-white border-t border-blue-100"
        >
            <div className="max-w-4xl mx-auto text-center text-blue-800">
                <h2 className="text-4xl font-bold mb-6">
                    Careers 4U
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                    “Join 4U. Grow with 4U. Innovate with 4U. Lead the Future with 4U.”
                </p>

                <p className="text-lg mb-4">
                    Send your CV / Resume
                </p>

                <p className="text-lg font-semibold mb-8">
                    hr@4uengg.com
                </p>

                {/* Upload UI (no backend, UI only) */}
                <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow">
                    <label className="block mb-2 font-medium text-left">
                        Upload Resume
                    </label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-left">
                        Accepted formats: PDF, DOC, DOCX
                    </p>
                </div>
            </div>
        </section>
    );
}
