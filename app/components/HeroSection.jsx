"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const slides = [
        { image: "/hero1.jpg", alt: "Engineering Innovation" },
        { image: "/hero2.jpg", alt: "Industrial Automation" },
        { image: "/hero3.jpg", alt: "Technology Solutions" },
    ];

    const [current, setCurrent] = useState(0);

    // Auto change slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Carousel */}
            <div className="absolute inset-0">
                <AnimatePresence>
                    <motion.div
                        key={slides[current].image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slides[current].image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
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
                    className="max-w-2xl mx-auto text-lg md:text-xl mb-6"
                >
                    Empowering the future through technology, creativity, and precision engineering.
                </motion.p>

                <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
                >
                    Explore Our Services
                </motion.a>
            </div>
        </section>
    );
}