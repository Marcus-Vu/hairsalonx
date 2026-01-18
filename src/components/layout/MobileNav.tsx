"use client";

import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", icon: "home", label: "Home" },
        { href: "/diensten", icon: "spa", label: "Diensten" },
        { href: BOOKING_URL, icon: "calendar_month", label: "Boek", isBooking: true },
        { href: "/portfolio", icon: "photo_library", label: "Portfolio" },
        { href: "/contact", icon: "person", label: "Contact" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 pb-safe z-50 lg:hidden">
            <div className="flex justify-around items-center px-2 py-3 pb-6">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    if (item.isBooking) {
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative -top-8 bg-charcoal dark:bg-primary text-primary dark:text-charcoal rounded-full p-4 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                            >
                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            </Link>
                        );
                    }

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center gap-1 min-w-[64px] group"
                        >
                            <span
                                className={`material-symbols-outlined transition-colors ${isActive
                                        ? "text-charcoal dark:text-white"
                                        : "text-taupe group-hover:text-primary"
                                    }`}
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`text-[10px] font-medium transition-colors ${isActive
                                        ? "text-charcoal dark:text-white"
                                        : "text-taupe group-hover:text-primary"
                                    }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
