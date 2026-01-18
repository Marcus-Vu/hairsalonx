"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES, SERVICE_IMAGES } from "@/lib/constants";

export default function DienstenPage() {
    const categories = [
        {
            ...SERVICES.knippenStyling,
            image: SERVICE_IMAGES.knippen,
            reverse: false,
        },
        {
            ...SERVICES.kleuren,
            image: SERVICE_IMAGES.kleuren,
            reverse: true,
        },
        {
            ...SERVICES.specialismen,
            image: SERVICE_IMAGES.styling,
            reverse: false,
        },
    ];

    return (
        <div className="relative min-h-screen flex flex-col pb-24 pt-20">
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-40 bg-background-light/90 backdrop-blur-md border-b border-primary/10 transition-colors duration-300">
                <div className="flex items-center p-4 pb-3 justify-between max-w-lg lg:max-w-5xl mx-auto w-full">
                    <Link
                        href="/"
                        className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                    >
                        <span className="material-symbols-outlined text-charcoal text-[24px]">
                            arrow_back
                        </span>
                    </Link>
                    <h1 className="text-charcoal text-lg lg:text-2xl font-serif font-bold leading-tight tracking-wide text-center flex-1 pr-10">
                        Onze Diensten
                    </h1>
                </div>
            </div>

            {/* Scrollable Content */}
            <main className="flex-1 w-full max-w-lg lg:max-w-5xl mx-auto flex flex-col gap-8 lg:gap-12 px-4 lg:px-8 py-6 lg:py-10">
                {/* Hero Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2 items-center text-center px-4"
                >
                    <span className="text-primary font-medium tracking-widest text-xs lg:text-sm uppercase">
                        Premium Care
                    </span>
                    <h2 className="text-charcoal font-display text-2xl lg:text-4xl font-medium leading-snug">
                        Ervaar de kunst van haarverzorging in Roermond.
                    </h2>
                    <div className="h-1 w-12 lg:w-16 bg-primary mt-4 rounded-full opacity-60" />
                </motion.div>

                {/* Service Categories */}
                {categories.map((category, categoryIndex) => (
                    <motion.section
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.1 }}
                        className="flex flex-col gap-0 bg-white rounded-2xl lg:rounded-3xl shadow-soft overflow-hidden group"
                    >
                        {/* Header Card */}
                        <div
                            className={`flex ${category.reverse ? "flex-row-reverse" : "flex-row"
                                } p-5 lg:p-8 gap-4 lg:gap-6 items-center bg-surface/50`}
                        >
                            <div
                                className={`flex flex-1 flex-col justify-center gap-1 lg:gap-2 ${category.reverse ? "text-right" : ""
                                    }`}
                            >
                                <h3 className="font-serif text-xl lg:text-3xl font-bold text-charcoal">
                                    {category.title}
                                </h3>
                                <p className="text-taupe text-sm lg:text-base font-light leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                            <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-xl overflow-hidden shadow-inner bg-primary/20">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${category.image}')` }}
                                />
                            </div>
                        </div>

                        {/* Service List */}
                        <div className="flex flex-col px-5 lg:px-8 pb-2 lg:pb-4">
                            {category.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex justify-between items-start py-4 lg:py-5 border-b border-primary/10 last:border-0"
                                >
                                    <div className="flex flex-col gap-1 pr-4">
                                        <span className="text-charcoal font-bold text-base lg:text-lg">
                                            {item.name}
                                        </span>
                                        <span className="text-taupe text-sm lg:text-base">{item.description}</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-0.5 shrink-0">
                                        <span className="font-serif font-medium text-charcoal text-base lg:text-lg">
                                            {item.price}
                                        </span>
                                        {item.duration && (
                                            <span className="text-xs lg:text-sm text-taupe/80">{item.duration}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                ))}

                {/* Extra Space */}
                <div className="h-8 lg:h-16" />
            </main>
        </div>
    );
}
