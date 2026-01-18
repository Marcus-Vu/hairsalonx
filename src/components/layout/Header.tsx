"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL, NAV_LINKS } from "@/lib/constants";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
                {/* Refined Backdrop with subtle gradient and blur */}
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/95 via-background-dark/60 to-transparent backdrop-blur-md pointer-events-none h-32 lg:h-28" />

                <div className="relative flex items-center justify-between px-6 py-6 lg:py-8 max-w-7xl mx-auto">
                    {/* Menu Button - More professional appearance */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-white/90 hover:text-primary transition-all p-2 rounded-full hover:bg-white/5 lg:hidden border border-white/10"
                        aria-label="Open menu"
                    >
                        <span className="material-symbols-outlined text-[26px]">menu</span>
                    </button>

                    {/* Desktop Navigation Left - Refined typography */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.slice(0, 2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/80 hover:text-primary transition-all font-medium tracking-[0.15em] text-[11px] uppercase relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Logo - Centered and scaled */}
                    <Link href="/" className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 group">
                        <div className="flex flex-col items-center">
                            <span className="text-primary font-serif tracking-[0.3em] text-xl lg:text-2xl font-light uppercase group-hover:drop-shadow-glow transition-all duration-500">
                                HairsalonX
                            </span>
                            <span className="hidden lg:block text-[8px] tracking-[0.5em] text-white/40 uppercase mt-1">
                                Haute Coiffure
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Right */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.slice(2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/80 hover:text-primary transition-all font-medium tracking-[0.15em] text-[11px] uppercase relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-background-dark px-7 py-3 rounded-none font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-background-dark transition-all duration-500 shadow-xl uppercase border border-primary/20"
                        >
                            BOEK NU
                        </Link>
                    </nav>

                    {/* Search / Contact Button (mobile) */}
                    <button
                        className="text-white/90 hover:text-primary transition-all p-2 rounded-full hover:bg-white/5 lg:hidden border border-white/10"
                        aria-label="Contact"
                    >
                        <span className="material-symbols-outlined text-[26px]">call</span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed left-0 top-0 h-full w-full max-w-sm bg-background-dark z-[70] p-10 flex flex-col justify-between"
                        >
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-8 right-8 p-2 text-white/50 hover:text-primary transition-colors border border-white/5 rounded-full"
                                aria-label="Close menu"
                            >
                                <span className="material-symbols-outlined text-[24px]">close</span>
                            </button>

                            <div className="mt-12 flex flex-col gap-8">
                                <div className="mb-10 text-center">
                                    <span className="text-primary font-serif tracking-[0.3em] text-2xl font-light uppercase">
                                        HairsalonX
                                    </span>
                                </div>

                                {NAV_LINKS.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-3xl font-serif text-white/90 hover:text-primary transition-all flex items-center justify-between group"
                                        >
                                            {link.label}
                                            <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mb-8"
                            >
                                <Link
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-primary text-background-dark px-8 py-5 rounded-none font-bold text-center tracking-[0.2em] text-xs uppercase hover:bg-white transition-all duration-300"
                                >
                                    AFSPRAAK MAKEN
                                </Link>
                                <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.2em] mt-8">
                                    Roermond, Nederland
                                </p>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Floating Mobile Booking Button - Bottom Right Corner */}
            <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-charcoal px-6 py-4 rounded-full font-bold text-sm tracking-wider hover:bg-primary-dark transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-105 flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                BOEK NU
            </Link>
        </>
    );
}
