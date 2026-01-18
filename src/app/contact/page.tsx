"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CONTACT, OPENING_HOURS } from "@/lib/constants";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="bg-background-light font-display text-charcoal antialiased overflow-x-hidden">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-neutral-200/50">
                <div className="flex items-center justify-between px-4 lg:px-8 h-14 lg:h-16 max-w-lg lg:max-w-5xl mx-auto w-full">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-10 h-10 -ml-2 text-charcoal rounded-full hover:bg-neutral-100 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[24px] lg:text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-lg lg:text-2xl font-bold tracking-tight">Contact</h1>
                    <div className="w-10 h-10" />
                </div>
            </div>

            {/* Main Content Container */}
            <main className="max-w-lg lg:max-w-5xl mx-auto w-full px-4 lg:px-8 pb-12 lg:pb-20 pt-6 lg:pt-10 space-y-6 lg:space-y-8">
                {/* Contact Info Card */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl lg:rounded-2xl shadow-sm p-6 lg:p-10"
                >
                    <h2 className="text-xl lg:text-3xl font-bold mb-6 lg:mb-8 text-charcoal">Contactgegevens</h2>
                    <div className="space-y-6 lg:space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-8">
                        {/* Address */}
                        <div className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-charcoal">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-taupe mb-0.5">Adres</p>
                                <p className="text-base text-charcoal font-medium leading-relaxed">
                                    {CONTACT.address}
                                    <br />
                                    {CONTACT.postalCode} {CONTACT.city}
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <a
                            href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                            className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-charcoal">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-taupe mb-0.5">Telefoon</p>
                                <p className="text-base text-charcoal font-medium">{CONTACT.phone}</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-charcoal">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-taupe mb-0.5">Email</p>
                                <p className="text-base text-charcoal font-medium break-all">
                                    {CONTACT.email}
                                </p>
                            </div>
                        </a>
                    </div>
                </motion.section>

                {/* Contact Form Card */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl lg:rounded-2xl shadow-sm p-6 lg:p-10"
                >
                    <h2 className="text-xl lg:text-3xl font-bold mb-2 text-charcoal">Stuur een bericht</h2>
                    <p className="text-sm lg:text-base text-taupe mb-6 lg:mb-8">
                        Wij reageren doorgaans binnen één werkdag.
                    </p>

                    {isSubmitted ? (
                        <div className="flex items-center justify-center p-8 bg-primary/10 rounded-lg">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">
                                    check_circle
                                </span>
                                <p className="font-bold text-charcoal">Bericht verzonden!</p>
                                <p className="text-sm text-taupe">We nemen snel contact op.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name Field */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-charcoal"
                                >
                                    Naam
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Uw volledige naam"
                                    className={`w-full rounded-lg border ${errors.name ? "border-red-500" : "border-neutral-200"
                                        } bg-neutral-50 text-charcoal px-4 py-3 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-neutral-400 transition-shadow outline-none`}
                                    {...register("name", { required: "Naam is verplicht" })}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs">{errors.name.message}</span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-charcoal"
                                >
                                    E-mailadres
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="uw@email.nl"
                                    className={`w-full rounded-lg border ${errors.email ? "border-red-500" : "border-neutral-200"
                                        } bg-neutral-50 text-charcoal px-4 py-3 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-neutral-400 transition-shadow outline-none`}
                                    {...register("email", {
                                        required: "E-mail is verplicht",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Ongeldig e-mailadres",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-charcoal"
                                >
                                    Bericht
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Waar kunnen we u mee helpen?"
                                    className={`w-full rounded-lg border ${errors.message ? "border-red-500" : "border-neutral-200"
                                        } bg-neutral-50 text-charcoal px-4 py-3 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-neutral-400 resize-none transition-shadow outline-none`}
                                    {...register("message", { required: "Bericht is verplicht" })}
                                />
                                {errors.message && (
                                    <span className="text-red-500 text-xs">{errors.message.message}</span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-base py-3.5 px-6 rounded-lg transition-colors shadow-sm active:scale-[0.98] transform duration-100 flex items-center justify-center gap-2"
                            >
                                <span>Verstuur bericht</span>
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </button>
                        </form>
                    )}
                </motion.section>

                {/* Map Card */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl lg:rounded-2xl shadow-sm p-1 overflow-hidden group cursor-pointer relative"
                >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-lg" />
                    <div className="absolute bottom-4 left-4 z-20">
                        <p className="text-white font-bold text-lg drop-shadow-md flex items-center gap-1">
                            <span className="material-symbols-outlined fill-current">map</span>
                            Open in Maps
                        </p>
                    </div>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${CONTACT.address}, ${CONTACT.postalCode} ${CONTACT.city}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-[16/9] w-full relative rounded-lg overflow-hidden bg-neutral-100"
                    >
                        <iframe
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                                `${CONTACT.address}, ${CONTACT.postalCode} ${CONTACT.city}`
                            )}&zoom=15`}
                            className="w-full h-full border-0 grayscale-[0.2] opacity-90 group-hover:scale-105 transition-transform duration-700"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </a>
                </motion.section>

                {/* Opening Hours Card */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl lg:rounded-2xl shadow-sm p-6 lg:p-10"
                >
                    <h2 className="text-xl lg:text-3xl font-bold mb-6 lg:mb-8 text-charcoal flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl lg:text-3xl">schedule</span>
                        Openingstijden
                    </h2>
                    <div className="space-y-3 lg:space-y-4 text-sm lg:text-base">
                        {OPENING_HOURS.map((item) => (
                            <div
                                key={item.day}
                                className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0"
                            >
                                <span className="font-medium text-taupe w-24">{item.day}</span>
                                <span
                                    className={`font-medium ${item.hours === "Gesloten" ? "font-semibold" : ""
                                        } text-charcoal`}
                                >
                                    {item.hours}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg flex gap-3 items-start">
                        <span className="material-symbols-outlined text-primary mt-0.5 text-lg">
                            info
                        </span>
                        <p className="text-xs text-charcoal leading-relaxed">
                            Tijdens feestdagen kunnen onze openingstijden afwijken. Bekijk onze
                            social media voor actuele updates.
                        </p>
                    </div>
                </motion.section>

                {/* Footer Branding */}
                <div className="text-center pb-8 pt-4 opacity-50">
                    <p className="text-xs text-taupe uppercase tracking-widest font-semibold">
                        HairsalonX Roermond
                    </p>
                </div>
            </main>
        </div>
    );
}
