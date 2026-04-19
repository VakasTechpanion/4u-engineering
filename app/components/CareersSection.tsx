"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function CareersSection() {
    const [state, handleSubmit] = useForm("xaqajloq");
    const [file, setFile] = useState<File | null>(null);

    if (state.succeeded) {
        return (
            <section className="py-20 text-center text-blue-800">
                <h2 className="text-3xl font-bold">Thank you! ✅</h2>
                <p>Your resume has been submitted.</p>
            </section>
        );
    }

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

                {/* IMPORTANT: form wrapper */}
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow"
                >
                    <label className="block mb-2 font-medium text-left">
                        Upload Resume
                    </label>

                    <input
                        type="file"
                        name="file"   // REQUIRED for Formspree
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                            setFile(e.target.files?.[0] || null)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                    />

                    {file && (
                        <p className="text-sm text-green-600 mt-2 text-left">
                            Selected: {file.name}
                        </p>
                    )}

                    <ValidationError
                        prefix="File"
                        field="file"
                        errors={state.errors}
                    />

                    <p className="text-sm text-gray-500 mt-2 text-left">
                        Accepted formats: PDF, DOC, DOCX
                    </p>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                    >
                        {state.submitting ? "Sending..." : "Submit Resume"}
                    </button>
                </form>
            </div>
        </section>
    );
}