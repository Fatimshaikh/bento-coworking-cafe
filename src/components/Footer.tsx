
"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-line py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Footer Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="font-display font-semibold text-2xl text-ink">
                        Field <span className="text-terracotta">&</span> Table
                    </h3>

                    <p className="text-ink-soft text-sm mt-2">
                        Open daily 7am – 9pm · Meeting rooms bookable online
                    </p>
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    className="flex gap-6 text-sm text-ink-soft"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {["Instagram", "Membership", "Contact"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="hover:text-terracotta transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-line text-xs text-ink-soft">
                © {new Date().getFullYear()} Field & Table. Built with Next.js,
                TypeScript, Tailwind & Framer Motion.
            </div>
        </footer>
    );
}
