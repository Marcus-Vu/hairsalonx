"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    external?: boolean;
    fullWidth?: boolean;
    icon?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    external = false,
    fullWidth = false,
    icon,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative overflow-hidden rounded-full font-bold tracking-[0.1em] uppercase transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary:
            "bg-primary text-charcoal hover:bg-primary-dark shadow-lg shadow-primary/20 active:scale-95",
        secondary:
            "bg-charcoal text-white hover:bg-charcoal/90 shadow-lg shadow-black/20 active:scale-95",
        outline:
            "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-charcoal active:scale-95",
    };

    const sizes = {
        sm: "px-5 py-2 text-xs",
        md: "px-8 py-4 text-sm",
        lg: "px-10 py-5 text-base",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""
        } ${className}`;

    const content = (
        <>
            <span className="relative z-10">{children}</span>
            {icon && (
                <span className="material-symbols-outlined text-[20px] relative z-10">
                    {icon}
                </span>
            )}
            {/* Hover overlay */}
            <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
            />
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={combinedClassName}
            >
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            className={combinedClassName}
            whileTap={{ scale: 0.95 }}
            {...(props as any)}
        >
            {content}
        </motion.button>
    );
}
