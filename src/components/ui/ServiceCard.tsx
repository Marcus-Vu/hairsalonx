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
        <Link href={href} className="flex-none w-[200px] lg:w-auto snap-center group cursor-pointer">
            <motion.div
                className="relative aspect-[3/4] overflow-hidden rounded-xl lg:rounded-2xl bg-surface mb-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 service-image"
                    style={{ backgroundImage: `url('${image}')` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                    <span className="material-symbols-outlined text-white mb-1 text-2xl lg:text-3xl">
                        {icon}
                    </span>
                </div>
            </motion.div>

            <h3 className="text-lg lg:text-xl font-serif font-medium text-charcoal dark:text-white">
                {title}
            </h3>
            <p className="text-sm lg:text-base text-taupe">{description}</p>
        </Link>
    );
}
