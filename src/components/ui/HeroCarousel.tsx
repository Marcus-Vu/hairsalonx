"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    href: string;
  };
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[3rem] shadow-2xl">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
          />

          {/* Dark Overlay - Stronger for better text readability */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 lg:pb-24 text-center max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.15] mb-4 lg:mb-6 drop-shadow-sm"
              dangerouslySetInnerHTML={{ __html: slides[currentIndex].title }}
            />

            <p className="text-white/90 text-sm md:text-base lg:text-lg font-light tracking-wide mb-8 lg:mb-10">
              {slides[currentIndex].subtitle}
            </p>

            {slides[currentIndex].cta && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  href={slides[currentIndex].cta!.href}
                  external
                  size="lg"
                  className="w-full max-w-[280px] lg:max-w-[320px] shadow-2xl hover:shadow-primary/50 bg-primary hover:bg-primary-dark text-charcoal font-bold text-base lg:text-lg"
                >
                  {slides[currentIndex].cta!.text}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-primary"
                  : "w-2 bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
          className="h-full bg-primary"
        />
      </div>
    </section>
  );
}
