"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={`fixed top - 0 left - 0 right - 0 z - 50 flex items - center justify - between px - 6 md: px - 16 py - 5 transition - colors duration - 500 ${scrolled
                    ? "bg-bg/90 backdrop-blur-md border-b border-line"
                    : "bg-transparent"
                } `}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Logo */}
            <span className="font-display font-semibold text-lg text-ink">
                Field <span className="text-terracotta">&</span> Table
            </span>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-8 font-body text-sm text-ink-soft">
                {["Spaces", "Menu", "Membership", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={item === "Spaces" ? "#spaces" : "#"}
                        className="hover:text-ink transition-colors duration-300"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <a
                href="#"
                className="px-5 py-2 rounded-full bg-terracotta text-bg text-sm font-medium hover:bg-ink transition-colors duration-300"
            >
                Book a Room
            </a>
        </motion.nav>
    );
}
