"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
      setMessage("Bedankt voor je inschrijving!");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
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
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-background-light">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 lg:mb-6">
            Let's get in touch
          </h2>
          <p className="text-taupe text-sm md:text-base lg:text-lg font-light mb-8 lg:mb-12 max-w-2xl mx-auto">
            Sign up for our newsletter and be the first to know about news, exclusive events and more!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className="flex-1 px-6 py-4 rounded-full border border-taupe/30 bg-white text-charcoal placeholder:text-taupe/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-charcoal text-white rounded-full font-semibold tracking-wider uppercase text-sm hover:bg-charcoal/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
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
                  Loading...
                </span>
              ) : (
                "Subscribe Now"
              )}
            </button>
          </div>

          {/* Status Message */}
          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-sm ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </motion.p>
          )}
        </motion.form>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <p className="text-xs tracking-widest uppercase text-taupe/60 mb-6">Follow us</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-taupe/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all group"
            >
              <span className="material-symbols-outlined text-lg">photo_camera</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-taupe/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all group"
            >
              <span className="material-symbols-outlined text-lg">thumb_up</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-taupe/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all group"
            >
              <span className="material-symbols-outlined text-lg">music_note</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
