"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative px-6 md:px-16 pt-40 pb-20 max-w-6xl mx-auto">
            <motion.span
                className="text-sage text-sm tracking-widest uppercase font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Field & Table
            </motion.span>

            <motion.h1
                className="font-display font-semibold text-5xl md:text-7xl text-ink leading-[1.05] mt-4 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Work. Coffee. Meet.
                <span className="text-terracotta"> Repeat.</span>
            </motion.h1>

            <motion.p
                className="text-ink-soft text-lg mt-6 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                A café built for people who actually get things done — fast wifi,
                real espresso, bookable meeting rooms, and a couch when you need
                to think slower.
            </motion.p>

            <motion.div
                className="flex gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <a
                    href="#spaces"
                    className="px-7 py-3 rounded-full bg-ink text-bg font-medium text-sm hover:bg-terracotta transition-colors duration-300"
                >
                    Explore the Space
                </a>

                <a
                    href="#"
                    className="px-7 py-3 rounded-full border border-line text-ink font-medium text-sm hover:border-ink transition-colors duration-300"
                >
                    Book a Meeting Room
                </a>
            </motion.div>
        </section>
    );
}