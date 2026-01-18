"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  BOOKING_URL,
  HERO_IMAGE,
  SERVICE_IMAGES,
  TRANSFORMATION_IMAGES,
  CONTACT,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[3rem] shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 lg:pb-24 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.15] mb-4 lg:mb-6 drop-shadow-sm"
          >
            Haar zoals je het <br />
            <span className="italic text-primary">nog niet kende</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-sm md:text-base lg:text-lg font-light tracking-wide mb-8 lg:mb-10"
          >
            Ervaar luxe en vakmanschap in hartje Roermond
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              href={BOOKING_URL}
              external
              size="lg"
              className="w-full max-w-[280px] lg:max-w-[320px]"
            >
              Maak Afspraak
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="mt-12 lg:mt-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 lg:mb-10">
          <h2 className="font-serif text-2xl lg:text-4xl text-charcoal">Onze Diensten</h2>
          <Link
            href="/diensten"
            className="text-xs lg:text-sm font-bold tracking-widest text-taupe uppercase hover:text-primary transition-colors"
          >
            Alles Zien
          </Link>
        </div>

        {/* Horizontal Scroll Container on Mobile, Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-4 lg:gap-6 pb-8 lg:pb-0 no-scrollbar snap-x snap-mandatory lg:snap-none">
          <ServiceCard
            title="Knippen"
            description="De perfecte snit"
            image={SERVICE_IMAGES.knippen}
            icon="content_cut"
          />
          <ServiceCard
            title="Kleuren"
            description="Natuurlijke tinten"
            image={SERVICE_IMAGES.kleuren}
            icon="palette"
          />
          <ServiceCard
            title="Styling"
            description="Voor elke gelegenheid"
            image={SERVICE_IMAGES.styling}
            icon="auto_fix_high"
          />
        </div>
      </section>

      {/* Portfolio / Transformations Section */}
      <section className="px-6 lg:px-12 py-8 lg:py-16 bg-white mx-4 lg:mx-12 max-w-7xl lg:mx-auto rounded-3xl shadow-soft">
        <div className="text-center mb-10 lg:mb-16">
          <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-primary uppercase block mb-2">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">Transformaties</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Grid Item 1 (Tall) */}
          <motion.div
            className="relative aspect-[3/5] rounded-xl overflow-hidden group portfolio-card"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 portfolio-image"
              style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[0]}')` }}
            />
          </motion.div>

          {/* Grid Item 2 (Stacked) */}
          <div className="space-y-4 lg:contents">
            <motion.div
              className="relative aspect-square lg:aspect-[3/5] rounded-xl overflow-hidden group portfolio-card"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 portfolio-image"
                style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[1]}')` }}
              />
            </motion.div>
            <motion.div
              className="relative aspect-[4/5] lg:aspect-[3/5] rounded-xl overflow-hidden group portfolio-card"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 portfolio-image"
                style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[2]}')` }}
              />
            </motion.div>
          </div>

          {/* Grid Item 3 (Tall) */}
          <motion.div
            className="relative aspect-[3/5] rounded-xl overflow-hidden group portfolio-card"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 portfolio-image"
              style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[3]}')` }}
            />
          </motion.div>

          {/* Grid Item 4 (Stacked with CTA) - Hidden on desktop */}
          <div className="space-y-4 -mt-16 lg:hidden">
            <motion.div
              className="relative aspect-[4/5] rounded-xl overflow-hidden group portfolio-card"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 portfolio-image"
                style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[4]}')` }}
              />
            </motion.div>
            <Link
              href="/portfolio"
              className="relative aspect-square rounded-xl overflow-hidden bg-primary flex items-center justify-center group hover:bg-primary-dark transition-colors"
            >
              <span className="text-charcoal font-serif text-lg italic text-center">
                Bekijk
                <br />
                meer
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <p className="text-sm lg:text-base text-taupe flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base lg:text-lg text-primary">
              verified
            </span>
            Volg ons @HairsalonX
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex justify-center mt-12">
          <Link
            href="/portfolio"
            className="bg-primary text-charcoal px-10 py-4 rounded-full font-bold text-base tracking-wider hover:bg-primary-dark transition-colors shadow-lg"
          >
            Bekijk Meer Portfolio
          </Link>
        </div>
      </section>

      {/* Location & Info Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background-dark text-background-light rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <span className="material-symbols-outlined text-4xl lg:text-5xl text-primary mb-4 relative z-10">
              location_on
            </span>
            <h3 className="font-serif text-xl lg:text-3xl mb-2 relative z-10">Bezoek Ons</h3>
            <p className="text-sm lg:text-base text-white/60 mb-6 lg:mb-8 font-light relative z-10">
              {CONTACT.address}, {CONTACT.postalCode}
              <br />
              {CONTACT.city}, {CONTACT.country}
            </p>

            <div className="w-full h-[1px] bg-white/10 mb-6 lg:mb-8 relative z-10" />

            <div className="flex justify-center gap-8 lg:gap-12 relative z-10">
              <a
                href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-charcoal transition-colors">
                  <span className="material-symbols-outlined text-sm lg:text-base">call</span>
                </div>
                <span className="text-xs lg:text-sm text-white/50 group-hover:text-primary transition-colors">
                  Bel
                </span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-charcoal transition-colors">
                  <span className="material-symbols-outlined text-sm lg:text-base">mail</span>
                </div>
                <span className="text-xs lg:text-sm text-white/50 group-hover:text-primary transition-colors">
                  Mail
                </span>
              </a>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                `${CONTACT.address}, ${CONTACT.postalCode} ${CONTACT.city}`
              )}&zoom=15`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
