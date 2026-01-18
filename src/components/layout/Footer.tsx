"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT, NAV_LINKS, OPENING_HOURS, BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-background-dark to-charcoal overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start gap-4 mb-6"
            >
              <div className="w-16 h-16 rounded-2xl border-2 border-primary/30 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
                <span className="font-serif text-3xl text-primary italic font-bold">X</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl tracking-wide text-white mb-1">HairsalonX</h2>
                <p className="text-sm tracking-[0.3em] uppercase text-primary/80">Roermond</p>
              </div>
            </motion.div>
            <p className="text-white/60 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Specialist in krullen, kleuren & extensions. Ervaar luxe en vakmanschap in hartje Roermond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Menu</h3>
            <nav className="flex flex-col items-center md:items-start gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-primary transition-colors duration-300 text-sm group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Openingstijden</h3>
            <div className="space-y-2 w-full max-w-xs">
              {OPENING_HOURS.map((day) => (
                <div
                  key={day.day}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-white/60">{day.day}</span>
                  <span className={day.hours === "Gesloten" ? "text-white/40" : "text-primary"}>
                    {day.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h3>
            <div className="space-y-4 w-full">
              <a
                href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">call</span>
                </div>
                <span className="text-sm">{CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">mail</span>
                </div>
                <span className="text-sm">{CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                </div>
                <div className="text-sm">
                  <p>{CONTACT.address}</p>
                  <p>{CONTACT.postalCode} {CONTACT.city}</p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-charcoal rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                Boek Nu
              </motion.a>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/60 text-sm">Volg ons voor dagelijkse inspiratie</p>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href={`https://instagram.com/${CONTACT.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/hairsalonx"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.tiktok.com/@hairsalonx"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-black rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} HairsalonX. Alle rechten voorbehouden.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
