"use client";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent ✅");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="relative py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white"
        >
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <div className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-1/2">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4 text-gray-800"
                        >
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}