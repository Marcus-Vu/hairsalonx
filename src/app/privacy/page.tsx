"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
    const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

    const privacySections = [
        {
            icon: "person",
            title: "1. Persoonsgegevens",
            content: `Wij verzamelen gegevens die nodig zijn voor het maken van een afspraak en het bieden van de beste haarverzorging. Dit omvat:
      
• Naam en contactgegevens (e-mail, telefoonnummer)
• Afspraakgeschiedenis en voorkeuren (bijv. kleurformules)
• Geboortedatum (voor verjaardagsacties)

Deze gegevens worden veilig opgeslagen en zijn alleen toegankelijk voor geautoriseerd personeel van HairsalonX.`,
        },
        {
            icon: "target",
            title: "2. Doeleinden",
            content:
                "Wij gebruiken uw gegevens uitsluitend om onze dienstverlening uit te voeren. Dit betekent het bevestigen van afspraken, het versturen van herinneringen en het personaliseren van uw behandeling in onze salon in Roermond.",
        },
        {
            icon: "cookie",
            title: "3. Cookies",
            content:
                "Onze website maakt gebruik van functionele cookies om uw boekingservaring soepel te laten verlopen. Daarnaast gebruiken wij analytische cookies om onze website te verbeteren.",
        },
        {
            icon: "gavel",
            title: "4. Uw Rechten",
            content:
                "U heeft te allen tijde het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op of kom langs in de salon. Wij verwerken verzoeken binnen 30 dagen conform de AVG richtlijnen.",
        },
    ];

    return (
        <div className="bg-background-light text-charcoal font-display antialiased">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-gray-200/50">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-charcoal"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            arrow_back_ios_new
                        </span>
                    </Link>
                    <h1 className="font-serif font-bold text-lg text-charcoal tracking-tight">
                        Juridisch & Privacy
                    </h1>
                    <div className="w-10" />
                </div>
            </header>

            <main className="relative pt-20 pb-32 px-4 max-w-lg mx-auto w-full min-h-screen">
                {/* Tab Navigation */}
                <nav className="mb-8">
                    <div className="flex p-1 bg-gray-200/50 rounded-xl">
                        <button
                            onClick={() => setActiveTab("privacy")}
                            className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === "privacy"
                                    ? "bg-primary text-charcoal shadow-sm"
                                    : "text-taupe hover:text-charcoal"
                                }`}
                        >
                            Privacybeleid
                        </button>
                        <button
                            onClick={() => setActiveTab("terms")}
                            className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === "terms"
                                    ? "bg-primary text-charcoal shadow-sm"
                                    : "text-taupe hover:text-charcoal"
                                }`}
                        >
                            Voorwaarden
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide uppercase text-charcoal bg-primary/20 rounded-full border border-primary/30">
                        HairsalonX Roermond
                    </span>
                    <h2 className="font-serif text-4xl font-bold text-charcoal leading-[1.1] mb-2">
                        {activeTab === "privacy" ? "Uw Privacy" : "Voorwaarden"}
                    </h2>
                    <p className="text-taupe text-sm font-medium mb-4">
                        Laatst bijgewerkt: 17 januari 2026
                    </p>
                    <div className="prose">
                        <p className="text-base leading-relaxed text-taupe">
                            {activeTab === "privacy"
                                ? "Bij HairsalonX hechten we veel waarde aan het vertrouwen dat u in ons stelt. In dit beleid leggen we helder uit hoe we in onze salon in Roermond en online omgaan met uw persoonlijke gegevens."
                                : "Deze algemene voorwaarden zijn van toepassing op alle diensten van HairsalonX in Roermond. Door een afspraak te maken, gaat u akkoord met deze voorwaarden."}
                        </p>
                    </div>
                </motion.section>

                {/* Accordion Sections */}
                <div className="space-y-4">
                    {privacySections.map((section, index) => (
                        <motion.details
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-5 cursor-pointer select-none list-none">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-charcoal group-open:bg-primary group-open:text-charcoal transition-colors duration-300">
                                        <span className="material-symbols-outlined">{section.icon}</span>
                                    </div>
                                    <h3 className="font-serif text-lg font-semibold text-charcoal">
                                        {section.title}
                                    </h3>
                                </div>
                                <span className="material-symbols-outlined text-taupe transition-transform duration-300 group-open:rotate-180">
                                    expand_more
                                </span>
                            </summary>
                            <div className="px-5 pb-6 pt-0 text-taupe leading-relaxed text-sm whitespace-pre-line">
                                {section.content}
                            </div>
                        </motion.details>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-40">
                    <div className="max-w-lg mx-auto flex gap-3">
                        <Link
                            href="/contact"
                            className="flex-1 bg-white border border-gray-200 text-charcoal font-semibold py-3.5 px-6 rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[20px]">mail</span>
                            <span>Contact</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex-[2] bg-primary text-charcoal font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                        >
                            <span>Akkoord & Doorgaan</span>
                            <span className="material-symbols-outlined text-[20px]">check</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
