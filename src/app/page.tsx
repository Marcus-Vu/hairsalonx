"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import HeroCarousel from "@/components/ui/HeroCarousel";
import Newsletter from "@/components/ui/Newsletter";
import {
  BOOKING_URL,
  HERO_IMAGE,
  SERVICE_IMAGES,
  TRANSFORMATION_IMAGES,
  CONTACT,
} from "@/lib/constants";

const heroSlides = [
  {
    image: HERO_IMAGE,
    title: "Haar zoals je het <br /><span class='italic text-primary'>nog niet kende</span>",
    subtitle: "Ervaar luxe en vakmanschap in hartje Roermond",
    cta: {
      text: "Maak Afspraak",
      href: BOOKING_URL,
    },
  },
  {
    image: SERVICE_IMAGES.knippen,
    title: "De Perfecte <br /><span class='italic text-primary'>Knipbeurt</span>",
    subtitle: "Precisie en stijl voor elke look",
    cta: {
      text: "Onze Diensten",
      href: "/diensten",
    },
  },
  {
    image: SERVICE_IMAGES.kleuren,
    title: "Kleur die <br /><span class='italic text-primary'>Jou Laat Stralen</span>",
    subtitle: "Van balayage tot volledige transformaties",
    cta: {
      text: "Bekijk Portfolio",
      href: "/portfolio",
    },
  },
];

export default function HomePage() {
  return (
    <div className="pb-24">
      {/* Hero Carousel Section */}
      <HeroCarousel slides={heroSlides} autoPlayInterval={5000} />

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
      <section className="px-6 lg:px-12 py-20 lg:py-32 bg-white max-w-7xl mx-auto rounded-none">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] lg:text-xs font-bold tracking-[0.4em] text-primary uppercase block mb-6">
              Vakmanschap
            </span>
            <h2 className="font-serif text-4xl lg:text-7xl text-charcoal leading-tight">Onze Transformaties</h2>
          </div>
          <Link
            href="/portfolio"
            className="text-[10px] lg:text-xs font-bold tracking-[0.3em] text-taupe uppercase hover:text-primary transition-all pb-1 border-b border-taupe/20 group flex items-center gap-4"
          >
            Bekijk Volledig Portfolio
            <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Grid Layout - More curated and dynamic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Large Image */}
          <motion.div
            className="lg:col-span-7 relative aspect-[4/5] lg:aspect-[3/2] overflow-hidden group cursor-pointer"
            whileHover={{ scale: 0.99 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[0]}')` }}
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
          </motion.div>

          {/* Secondary Verticals */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            <motion.div
              className="relative aspect-[3/4] lg:aspect-[16/9] overflow-hidden group cursor-pointer"
              whileHover={{ scale: 0.99 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[1]}')` }}
              />
            </motion.div>
            <motion.div
              className="relative aspect-[3/4] lg:aspect-[16/9] overflow-hidden group cursor-pointer"
              whileHover={{ scale: 0.99 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${TRANSFORMATION_IMAGES[2]}')` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Info Section - Luxury Dark Theme */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 bg-background-dark overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase block mb-8">
                Contact & Locatie
              </span>
              <h2 className="font-serif text-4xl lg:text-6xl text-white mb-10 leading-tight">Kom langs in onze salon</h2>

              <div className="space-y-12">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4">Adres</p>
                  <p className="text-white text-lg lg:text-xl font-light">
                    {CONTACT.address}<br />
                    {CONTACT.postalCode} {CONTACT.city}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4">Telefoon</p>
                    <a href={`tel:${CONTACT.phone}`} className="text-white text-lg hover:text-primary transition-colors">{CONTACT.phone}</a>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-white text-lg hover:text-primary transition-colors">{CONTACT.email}</a>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={BOOKING_URL}
                    className="inline-block bg-white text-background-dark px-12 py-5 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-all duration-500"
                  >
                    Direct Boeken
                  </Link>
                </div>
              </div>
            </div>

            {/* Map - Integration as a design element */}
            <div className="lg:col-span-7 aspect-square lg:aspect-video relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border border-white/10">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                  `${CONTACT.address}, ${CONTACT.postalCode} ${CONTACT.city}`
                )}&zoom=15&style=feature:all|element:all|saturation:-100|lightness:-20`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
