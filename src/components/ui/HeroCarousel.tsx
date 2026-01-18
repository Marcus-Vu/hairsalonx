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
    <section className="relative h-[90vh] lg:h-screen w-full overflow-hidden">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with subtle Ken Burns effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
          />

          {/* Luxury Gradient Overlay - More nuanced and professional */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/40 to-background-dark/95" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
            className="w-full flex flex-col items-center"
          >
            {/* Elegant small label above title */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-primary text-[10px] lg:text-xs uppercase font-medium mb-6 lg:mb-8 block tracking-[0.4em]"
            >
              Exclusieve Haarverzorging
            </motion.span>

            <h1
              className="font-serif text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.1] mb-8 lg:mb-12 tracking-tight"
              dangerouslySetInnerHTML={{ __html: slides[currentIndex].title }}
            />

            <p className="text-white/70 text-sm md:text-base lg:text-xl font-light tracking-[0.05em] mb-10 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
              {slides[currentIndex].subtitle}
            </p>

            {slides[currentIndex].cta && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  href={slides[currentIndex].cta!.href}
                  external
                  className="!rounded-none !px-12 !py-5 !bg-primary !text-background-dark !font-bold !text-xs !tracking-[0.3em] !uppercase border border-primary/20 hover:!bg-white hover:!border-white transition-all duration-500 shadow-2xl"
                >
                  {slides[currentIndex].cta!.text}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators - Luxury minimalist style */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative h-8 w-4 flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`transition-all duration-700 ${index === currentIndex
                ? "h-full w-[1px] bg-primary"
                : "h-2 w-[1px] bg-white/20 group-hover:bg-white/50"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Side Numbers (Desktop only) */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 items-end">
        <span className="text-primary font-serif text-3xl font-light">0{currentIndex + 1}</span>
        <div className="w-12 h-px bg-primary/30" />
        <span className="text-white/20 font-serif text-sm">0{slides.length}</span>
      </div>
    </section>
  );
}
