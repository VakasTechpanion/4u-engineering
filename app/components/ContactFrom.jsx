"use client";
import React from "react";

export default function ContactForm() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Contact 4U</h2>
                    <p className="text-lg mb-4">
                        Reach out for projects, partnerships, or inquiries.
                    </p>
                    <p className="text-lg font-semibold">
                        sales@4uengg.com
                    </p>
                </div>

                {/* RIGHT FORM */}
                <form className="bg-white p-8 rounded-2xl shadow-xl text-gray-800 space-y-4 w-full">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        required
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <button className="w-full bg-blue-700 text-white py-3 rounded-lg">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}