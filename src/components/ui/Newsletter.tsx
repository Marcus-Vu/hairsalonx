"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Hier kun je later de API call toevoegen
      // Voor nu simuleren we een succesvolle inschrijving
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setMessage("🎉 Welkom! Je ontvangt nu exclusieve aanbiedingen en tips.");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 8000);
    } catch (error) {
      setStatus("error");
      setMessage("Er ging iets mis. Probeer het opnieuw.");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-charcoal to-background-dark" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-primary text-xs lg:text-sm font-bold tracking-widest uppercase mb-6">
            Exclusieve Voordelen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 lg:mb-8">
            Blijf op de hoogte
          </h2>
          <p className="text-white/80 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Ontvang <span className="text-primary font-semibold">exclusieve kortingen</span>, haartips van onze experts,
            en wees de eerste bij <span className="text-primary font-semibold">nieuwe behandelingen</span>
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">local_offer</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">10% Korting</h3>
            <p className="text-white/60 text-sm">Op je eerste afspraak na inschrijving</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Exclusieve Acties</h3>
            <p className="text-white/60 text-sm">VIP toegang tot seizoensakties</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">tips_and_updates</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Expert Tips</h3>
            <p className="text-white/60 text-sm">Maandelijkse haarverzorging tips</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                required
                disabled={status === "loading"}
                className="flex-1 px-6 py-4 bg-white/90 rounded-xl text-charcoal placeholder:text-taupe/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base lg:text-lg"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-primary text-charcoal rounded-xl font-bold tracking-wide text-sm lg:text-base hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Bezig...
                  </>
                ) : (
                  <>
                    Schrijf Je In
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Status Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-xl ${
                status === "success"
                  ? "bg-green-500/20 border border-green-500/30 text-green-200"
                  : "bg-red-500/20 border border-red-500/30 text-red-200"
              }`}
            >
              <p className="text-center font-medium">{message}</p>
            </motion.div>
          )}

          <p className="text-white/40 text-xs text-center mt-4">
            We respecteren je privacy. Uitschrijven kan altijd. Geen spam!
          </p>
        </motion.form>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

          <p className="text-white/60 text-sm lg:text-base mb-8">
            Volg ons voor dagelijkse inspiratie en transformaties
          </p>

          <div className="flex items-center justify-center gap-4 lg:gap-6">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={`https://instagram.com/${CONTACT.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              <div className="absolute inset-0 bg-black rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 bg-black rounded-2xl flex items-center justify-center shadow-xl">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </div>
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-white/40 text-sm mt-8"
          >
            <span className="text-primary font-semibold">@HairsalonX</span> - Meer dan 10.000 tevreden klanten
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
