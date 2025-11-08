"use client";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-12 pb-6 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {/* About Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">4U Engineering</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Building innovative engineering solutions with precision, creativity,
                        and sustainability. Turning ideas into impactful realities.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-blue-100">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#services" className="hover:text-white">Services</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Contact / Social */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
                    <ul className="space-y-2 text-blue-100">
                        <li>📍 Mumbai, India</li>
                        <li>📞 +91 98765 43210</li>
                        <li>📧 contact@4uengineering.com</li>
                    </ul>

                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><Facebook /></a>
                        <a href="#" className="hover:text-white"><Instagram /></a>
                        <a href="#" className="hover:text-white"><Linkedin /></a>
                        <a href="#" className="hover:text-white"><Mail /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-600 mt-10 pt-4 text-center text-blue-200 text-sm">
                © {new Date().getFullYear()} 4U Engineering. All Rights Reserved.
            </div>
        </footer>
    );
}