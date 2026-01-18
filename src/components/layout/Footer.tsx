"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="relative flex flex-col w-full bg-background-dark overflow-hidden rounded-t-[2rem]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="px-6 pt-12 pb-8 flex flex-col items-center">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-2 mb-10">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 mb-2">
                        <span className="font-serif text-2xl text-primary italic">X</span>
                    </div>
                    <h2 className="font-serif text-xl tracking-wide text-brand-cream">HairsalonX</h2>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/80">Roermond</p>
                </div>

                {/* Navigation Links */}
                <nav className="w-full flex flex-col items-center gap-5 mb-10 md:flex-row md:justify-center md:gap-10">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium text-brand-cream/80 hover:text-primary transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Newsletter */}
                <div className="w-full max-w-xs mb-10">
                    <label className="block text-center font-serif italic text-lg text-brand-cream mb-4">
                        Stay in Style
                    </label>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full h-12 pl-4 pr-12 rounded-lg bg-white/5 border border-brand-cream/5 focus:border-primary focus:ring-0 text-sm text-brand-cream placeholder-brand-cream/30 transition-all duration-300 shadow-sm outline-none"
                        />
                        <button className="absolute right-1 top-1 h-10 w-10 flex items-center justify-center rounded-md bg-primary text-charcoal hover:bg-brand-cream transition-colors duration-300">
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6 mb-10">
                    <a
                        href="#"
                        className="p-3 rounded-full border border-brand-cream/10 hover:border-primary/50 hover:bg-primary/10 group transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <span className="material-symbols-outlined text-brand-cream group-hover:text-primary text-[20px]">
                            photo_camera
                        </span>
                    </a>
                    <a
                        href="#"
                        className="p-3 rounded-full border border-brand-cream/10 hover:border-primary/50 hover:bg-primary/10 group transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <span className="material-symbols-outlined text-brand-cream group-hover:text-primary text-[20px]">
                            thumb_up
                        </span>
                    </a>
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="p-3 rounded-full border border-brand-cream/10 hover:border-primary/50 hover:bg-primary/10 group transition-all duration-300"
                        aria-label="Email"
                    >
                        <span className="material-symbols-outlined text-brand-cream group-hover:text-primary text-[20px]">
                            mail
                        </span>
                    </a>
                </div>

                {/* Contact Info & Legal */}
                <div className="w-full flex flex-col items-center gap-6 border-t border-brand-cream/10 pt-8 text-center">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-brand-cream/60">
                            {CONTACT.address}, {CONTACT.postalCode} {CONTACT.city}
                        </p>
                        <a
                            href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                            className="text-sm text-brand-cream font-medium hover:text-primary transition-colors"
                        >
                            {CONTACT.phone}
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-brand-cream/40">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-brand-cream/20 self-center" />
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Algemene Voorwaarden
                        </Link>
                    </div>

                    <p className="text-[10px] uppercase tracking-widest text-brand-cream/20 mt-2">
                        © {new Date().getFullYear()} HairsalonX
                    </p>
                </div>

                <div className="h-6 w-full" />
            </div>
        </footer>
    );
}
