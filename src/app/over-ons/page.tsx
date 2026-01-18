"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FOUNDER_IMAGE } from "@/lib/constants";

export default function OverOnsPage() {
    const specializations = [
        { icon: "temp_preferences_custom", label: "Krullen (CG)" },
        { icon: "content_cut", label: "Extensions" },
        { icon: "palette", label: "Kleurcorrectie" },
        { icon: "diamond", label: "Bruidsstyling" },
    ];

    const galleryImages = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYoX7vC9Mtc6_LVMszDIyLGW0r_nphEOXNEj1uMLERF_pGqTHI_PU2LbWBDzLducIznnCcLgDFRGggJFkoNRsEeKNoeVsARCWyZJOEDGjzyHPI3vxRK1xPZj785WTeakhmwQptWXkXG0YwFZ9kU15UE8KVghfxt9x7QkkPD_Gje3GB0feTlRTPZo1PLMgUpE9RtPAoo-YuQJo9FaDLQtVhs8A7pUlacN5HJSqogsusZ_Yx2FhhYqxcAJJYUx2Ji41DM3odLkPEDA8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAB08UFulkkY3vLkS-s1TjxJ1SwR5ktLFSr8Eom895BiQU3pcuqOAH4vy_6ho8GWnBPCEUpiJm1V2hYiXJYuwD5sKqGewLNWv3gUujy2BXtDhfD26td5shUxP-NhUryt_Jw3-XX-4QxD8wIh2JzJOjRmJ9jsDURtvDI12AXiwNglgX-2_2ipDXY_90xfiNJr4ndcJSCPCmDqhFPyr_CLqXQuVD9jWzaaKFV8J3nD4q5vRN4ni1ib0eI3ptbQfbHEtnqBzkaSozkzGM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBd6PEXpq1Xu1PS3gduXELe7p54QVW9QxIleOopT7Ix3VdJioPJc6yeV3E-nTNuffz-0UhInofJ_4gmiDTUb03J0LtWnUrJYim4suG1EkOctBsppMxgjjU8zc6vWqG3z7C7K7hcZxoatWzLhbG6mYuNfDsUN0JDFBzHaRnDv7v2kQ8YlBIsJzZPNFtosy2Cz3bcDbk26BQcqGnE0XjzmsgV3WeOj4T2Ax3_5uGpsUUFcSXNaRZUPMXXZ6seHQPtVPgpgxNyx3jTZ6Q",
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col mx-auto max-w-md lg:max-w-4xl bg-background-light shadow-2xl overflow-hidden pb-32">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-light/80 max-w-md lg:max-w-4xl mx-auto">
                <div className="flex items-center justify-between px-4 py-3">
                    <Link
                        href="/"
                        className="flex items-center justify-center size-10 rounded-full bg-white/50 hover:bg-black/5 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </Link>
                    <div className="flex items-center gap-1">
                        <span className="font-serif text-lg font-bold tracking-tight">HairsalonX</span>
                    </div>
                    <div className="size-10" />
                </div>
            </header>

            {/* Hero Image */}
            <div className="relative w-full h-[55vh] lg:h-[65vh] rounded-b-[3rem] lg:rounded-b-[4rem] overflow-hidden shadow-sm mt-14">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${FOUNDER_IMAGE}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-black/10" />
                <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 px-6 text-center">
                    <span className="inline-block px-4 py-1.5 mb-3 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase bg-white/95 backdrop-blur-sm rounded-full text-primary shadow-sm border border-primary/20">
                        Est. 2018 Roermond
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <main className="relative px-6 lg:px-12 -mt-6 z-10 flex flex-col gap-8 lg:gap-12">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-background-light pt-6 rounded-t-[2rem]"
                >
                    <h1 className="font-serif text-4xl lg:text-6xl leading-tight font-medium text-center text-charcoal mb-2">
                        Het Verhaal <br />
                        <span className="italic text-taupe-dark">van Josje</span>
                    </h1>
                    <div className="h-[2px] w-12 lg:w-16 bg-primary mx-auto mt-4" />
                </motion.div>

                {/* Story Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="prose prose-lg lg:prose-xl mx-auto max-w-3xl"
                >
                    <p className="text-base lg:text-lg leading-relaxed opacity-90 first-letter:text-5xl lg:first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
                        Mijn reis begon hier in het hart van Roermond, gedreven door een simpele
                        maar krachtige passie voor pure schoonheid. Ik wilde geen doorsnee
                        kapsalon creëren, maar een toevluchtsoord waar vakmanschap en Brabantse
                        gezelligheid naadloos in elkaar overvloeien.
                    </p>
                </motion.div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative py-6 lg:py-10 px-4 lg:px-8 max-w-3xl mx-auto"
                >
                    <span className="material-symbols-outlined absolute top-0 left-0 text-primary/40 text-6xl lg:text-7xl rotate-180 -translate-y-2 -translate-x-2">
                        format_quote
                    </span>
                    <blockquote className="font-serif text-2xl lg:text-3xl italic text-center leading-snug px-4 text-charcoal">
                        &ldquo;Het gaat niet alleen om het haar, het gaat om het zelfvertrouwen
                        dat je mee naar huis neemt.&rdquo;
                    </blockquote>
                    <span className="material-symbols-outlined absolute bottom-0 right-0 text-primary/40 text-6xl lg:text-7xl -translate-y-2 translate-x-2">
                        format_quote
                    </span>
                </motion.div>

                {/* Specializations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4 max-w-3xl mx-auto"
                >
                    <h3 className="font-serif text-xl lg:text-3xl font-bold">Mijn Specialisaties</h3>
                    <p className="text-base lg:text-lg leading-relaxed text-taupe">
                        Door de jaren heen heb ik mij gespecialiseerd in de kunst van de
                        natuurlijke krul en high-end extensions. Iedere behandeling is maatwerk,
                        afgestemd op jouw unieke gezichtsvorm en persoonlijkheid.
                    </p>
                    <div className="flex flex-wrap gap-2 lg:gap-3 pt-2">
                        {specializations.map((spec) => (
                            <div
                                key={spec.label}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/20 rounded-full shadow-sm hover:border-primary transition-colors cursor-default"
                            >
                                <span className="material-symbols-outlined text-taupe-dark text-[18px]">
                                    {spec.icon}
                                </span>
                                <span className="text-sm font-medium">{spec.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Personal Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6 pb-8 max-w-3xl mx-auto"
                >
                    <p className="text-base lg:text-lg leading-relaxed text-taupe">
                        Bij HairsalonX ben je geen nummer. We nemen de tijd. De koffie staat
                        altijd klaar en we luisteren écht naar wat jij wilt. Dat is mijn belofte
                        aan jou.
                    </p>
                    <div className="flex flex-col items-center justify-center pt-4">
                        <p className="text-[10px] lg:text-xs uppercase tracking-[0.3em] text-taupe mb-4">
                            Met liefde,
                        </p>
                        <div className="font-serif text-4xl lg:text-5xl text-charcoal italic -rotate-3">
                            Josje
                        </div>
                        <p className="text-[10px] lg:text-xs font-serif italic text-taupe mt-4 tracking-widest">
                            Founder, HairsalonX
                        </p>
                    </div>
                </motion.div>

                {/* Gallery */}
                <div className="flex lg:grid lg:grid-cols-3 gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pb-12 -mx-6 lg:mx-0 px-6 lg:px-0 snap-x lg:snap-none max-w-3xl mx-auto">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="shrink-0 lg:shrink w-40 lg:w-auto aspect-[3/4] rounded-2xl overflow-hidden snap-center lg:snap-none"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${img}')` }}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
