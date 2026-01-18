"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    icon: string;
    href?: string;
}

export default function ServiceCard({
    title,
    description,
    image,
    icon,
    href = "/diensten",
}: ServiceCardProps) {
    return (
        <Link href={href} className="flex-none w-[260px] lg:w-auto snap-center group cursor-pointer">
            <motion.div
                className="relative aspect-[4/5] overflow-hidden bg-background-dark mb-5 border border-white/5"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    style={{ backgroundImage: `url('${image}')` }}
                />

                {/* Refined Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-primary mb-3 text-2xl">
                        {icon}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-serif font-light text-white tracking-wide">
                        {title}
                    </h3>
                </div>
            </motion.div>

            <p className="text-xs lg:text-sm text-taupe tracking-widest uppercase font-medium">
                {description}
            </p>
        </Link>
    );
}
