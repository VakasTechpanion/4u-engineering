"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center px-4"
        >
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold mb-4"
            >
                Engineering Innovation & Excellence
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-2xl text-lg md:text-xl mb-6"
            >
                Empowering the future through technology, creativity, and precision engineering.
            </motion.p>

            <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
            >
                Explore Our Services
            </motion.a>
        </section>
    );
}