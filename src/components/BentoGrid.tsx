"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { spaces } from "@/data/spaces";

const sizeClasses: Record<string, string> = {
    large: "md:col-span-4 md:row-span-2 aspect-[4/5] md:aspect-auto",
    wide: "md:col-span-4 aspect-[16/10]",
    tall: "md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-auto",
    small: "md:col-span-3 aspect-square",
};

export default function BentoGrid() {
    return (
        <section id="spaces" className="max-w-6xl mx-auto px-6 md:px-16 py-16">
            <motion.h2
                className="font-display font-semibold text-3xl md:text-4xl text-ink mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                A space for every mode
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {spaces.map((space, i) => (
                    <motion.div
                        key={space.id}
                        className={`group relative overflow-hidden rounded-3xl card-shadow cursor-pointer ${sizeClasses[space.size]}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                        <Image
                            src={space.image}
                            alt={space.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="font-display font-semibold text-xl text-bg">
                                {space.title}
                            </h3>
                            <p className="text-bg/80 text-sm mt-1 leading-snug max-w-[85%]">
                                {space.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}