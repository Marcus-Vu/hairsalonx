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
            <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
                {/* Backdrop with blur for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm pointer-events-none h-32 lg:h-24" />

                <div className="relative flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-white hover:text-primary transition-colors p-2 rounded-full active:bg-white/10 lg:hidden"
                        aria-label="Open menu"
                    >
                        <span className="material-symbols-outlined text-[28px]">menu</span>
                    </button>

                    {/* Desktop Navigation - Split Layout */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.slice(0, 2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/90 hover:text-primary transition-colors font-medium tracking-wide text-sm uppercase"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Logo - Desktop centered, Mobile text */}
                    <Link href="/" className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <Image
                            src="/images/logo.png"
                            alt="HairsalonX Logo"
                            width={120}
                            height={120}
                            className="hidden lg:block h-16 w-auto"
                            priority
                        />
                        <div className="lg:hidden text-white font-serif tracking-widest text-lg font-medium uppercase">
                            HairsalonX
                        </div>
                    </Link>

                    {/* Desktop Navigation Right */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.slice(2).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/90 hover:text-primary transition-colors font-medium tracking-wide text-sm uppercase"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-charcoal px-6 py-3 rounded-full font-bold text-sm tracking-wider hover:bg-primary-dark transition-colors shadow-lg"
                        >
                            BOEK NU
                        </Link>
                    </nav>

                    {/* Search Button (mobile) */}
                    <button
                        className="text-white hover:text-primary transition-colors p-2 rounded-full active:bg-white/10 lg:hidden"
                        aria-label="Search"
                    >
                        <span className="material-symbols-outlined text-[28px]">search</span>
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
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-80 bg-background-light dark:bg-background-dark z-[70] p-8"
                        >
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6 p-2 text-charcoal dark:text-white"
                                aria-label="Close menu"
                            >
                                <span className="material-symbols-outlined text-[28px]">close</span>
                            </button>

                            <div className="mt-16 flex flex-col gap-6">
                                {NAV_LINKS.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl font-serif text-charcoal dark:text-white hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8"
                                >
                                    <Link
                                        href={BOOKING_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-primary text-charcoal px-8 py-4 rounded-full font-bold text-center tracking-wider hover:bg-primary-dark transition-colors"
                                    >
                                        BOEK NU
                                    </Link>
                                </motion.div>
                            </div>
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
