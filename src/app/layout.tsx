import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import { SITE_NAME, SITE_DESCRIPTION, CONTACT } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Kapsalon Roermond`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "kapsalon",
    "Roermond",
    "kapper",
    "krullen",
    "extensions",
    "balayage",
    "kleuren",
    "HairsalonX",
    "haarsalon",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "https://hairsalonx.nl",
    siteName: SITE_NAME,
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    // Schema.org LocalBusiness markup
    "schema:type": "HairSalon",
    "schema:name": SITE_NAME,
    "schema:address": `${CONTACT.address}, ${CONTACT.postalCode} ${CONTACT.city}, ${CONTACT.country}`,
    "schema:telephone": CONTACT.phone,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${manrope.variable} ${notoSerif.variable}`}>
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              address: {
                "@type": "PostalAddress",
                streetAddress: CONTACT.address,
                postalCode: CONTACT.postalCode,
                addressLocality: CONTACT.city,
                addressCountry: "NL",
              },
              telephone: CONTACT.phone,
              email: CONTACT.email,
              url: "https://hairsalonx.nl",
              openingHours: [
                "Tu-Fr 09:00-18:00",
                "Th 09:00-21:00",
                "Sa 09:00-16:00",
              ],
            }),
          }}
        />
      </head>
      <body className="font-display antialiased bg-background-light text-charcoal selection:bg-primary/30">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
