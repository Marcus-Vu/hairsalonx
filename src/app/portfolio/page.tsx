"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("Alles");
    const filters = ["Alles", "Kleuring", "Krullen", "Styling", "Bridal"];

    const filteredImages =
        activeFilter === "Alles"
            ? PORTFOLIO_IMAGES
            : PORTFOLIO_IMAGES.filter((img) => img.category === activeFilter);

    return (
        <div className="relative flex min-h-screen w-full flex-col max-w-md lg:max-w-6xl mx-auto shadow-2xl overflow-hidden bg-background-light">
            {/* Top Navigation */}
            <header className="sticky top-0 z-30 flex items-center justify-between px-5 lg:px-8 py-4 lg:py-6 bg-background-light/90 backdrop-blur-md transition-all duration-300">
                <Link
                    href="/"
                    className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-neutral-100 text-charcoal transition-colors"
                >
                    <span className="material-symbols-outlined text-[24px] lg:text-[28px]">arrow_back</span>
                </Link>
                <h1 className="text-2xl lg:text-4xl font-serif font-bold tracking-tight text-charcoal absolute left-1/2 -translate-x-1/2">
                    Portfolio
                </h1>
                <button className="flex items-center justify-center p-2 -mr-2 rounded-full hover:bg-neutral-100 text-charcoal transition-colors lg:hidden">
                    <span className="material-symbols-outlined text-[24px]">search</span>
                </button>
                <div className="hidden lg:block w-10" />
            </header>

            {/* Filter Chips */}
            <div className="sticky top-[72px] lg:top-[88px] z-20 bg-background-light/95 backdrop-blur-sm pb-2 pt-1 border-b border-neutral-100">
                <div className="flex gap-3 lg:gap-4 px-5 lg:px-8 overflow-x-auto lg:justify-center no-scrollbar py-2">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`flex shrink-0 items-center justify-center h-9 lg:h-11 px-5 lg:px-7 rounded-lg font-medium text-sm lg:text-base transition-all active:scale-95 ${activeFilter === filter
                                    ? "bg-primary text-charcoal font-semibold shadow-sm"
                                    : "bg-neutral-100 text-taupe hover:bg-neutral-200"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Masonry Grid */}
            <main className="flex-1 w-full p-4 lg:p-8 pb-24 lg:pb-32">
                <div className="masonry-grid lg:!columns-3 xl:!columns-4">
                    {filteredImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="break-inside-avoid mb-4 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-xl bg-neutral-200">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                                {item.tag && (
                                    <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                                        {item.tag}
                                    </div>
                                )}
                            </div>
                            <div className="mt-2 pl-1">
                                <h3 className="text-charcoal font-serif font-medium text-base leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-taupe text-xs mt-0.5">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Loading indicator */}
                <div className="w-full flex justify-center py-6">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0.1s]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0.2s]" />
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 z-40 w-full max-w-md lg:max-w-6xl bg-background-light/95 backdrop-blur-md border-t border-neutral-100 pb-safe pt-2 lg:hidden">
                <div className="flex items-end justify-between px-6 pb-4">
                    <Link
                        href="/"
                        className="flex flex-col items-center justify-end gap-1 text-taupe hover:text-charcoal transition-colors group"
                    >
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-[24px]">
                            home
                        </span>
                        <span className="text-[10px] font-medium tracking-wide">Home</span>
                    </Link>
                    <div className="flex flex-col items-center justify-end gap-1 text-charcoal relative">
                        <div className="absolute -top-10 bg-primary/10 p-3 rounded-full blur-xl" />
                        <span className="material-symbols-outlined text-charcoal relative z-10 text-[24px]">
                            grid_view
                        </span>
                        <span className="text-[10px] font-bold tracking-wide relative z-10">
                            Portfolio
                        </span>
                        <span className="absolute -bottom-2 w-1 h-1 bg-charcoal rounded-full" />
                    </div>
                    <Link
                        href="/diensten"
                        className="flex flex-col items-center justify-end gap-1 text-taupe hover:text-charcoal transition-colors group"
                    >
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-[24px]">
                            calendar_month
                        </span>
                        <span className="text-[10px] font-medium tracking-wide">Afspraak</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="flex flex-col items-center justify-end gap-1 text-taupe hover:text-charcoal transition-colors group"
                    >
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-[24px]">
                            person
                        </span>
                        <span className="text-[10px] font-medium tracking-wide">Contact</span>
                    </Link>
                </div>
            </nav>

            {/* Safe area spacer */}
            <div className="h-[80px]" />
        </div>
    );
}
