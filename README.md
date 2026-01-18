# HairsalonX Website

> Premium website voor HairsalonX - een moderne kapsalon in Roermond, Nederland.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion voor subtiele micro-interacties
- **Responsive Design**: Mobile-first ontwerp met desktop optimalisaties
- **SEO Optimized**: Meta tags, Schema.org LocalBusiness markup
- **Form Validation**: React Hook Form met client-side validatie
- **Performance**: Lighthouse score >90, lazy loading, image optimization

## 📁 Project Structuur

```
src/
├── app/
│   ├── layout.tsx          # Root layout met nav/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── diensten/           # Services pagina
│   ├── over-ons/           # Over ons pagina
│   ├── portfolio/          # Portfolio gallerij
│   ├── contact/            # Contact + formulier
│   └── privacy/            # Privacy & voorwaarden
├── components/
│   ├── ui/                 # Herbruikbare UI componenten
│   ├── layout/             # Header, Footer, MobileNav
│   └── sections/           # Pagina secties
└── lib/
    └── constants.ts        # Content, services, prijzen
```

## 🛠️ Installatie

```bash
# Clone en navigeer naar project
cd hairsalonx

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📦 Dependencies

- `next` - React framework
- `framer-motion` - Animaties
- `react-hook-form` - Formulier handling

## 🎨 Brand Colors

| Kleur | Hex | Gebruik |
|-------|-----|---------|
| Primary | `#C9BDB1` | CTA buttons, accenten |
| Background | `#FAF9F6` | Pagina achtergrond |
| Charcoal | `#1C1C1C` | Tekst, donkere elementen |
| Taupe | `#8E8680` | Secundaire tekst |

## 🔗 Externe Integraties

- **Booking**: Alle "BOEK NU" buttons linken naar `https://hairsalonx.setmore.com`
- **Google Maps**: Embedded kaart op contact pagina
- **Google Fonts**: Manrope (display), Noto Serif (headers)

## 🚀 Deployment (Vercel)

```bash
# Build voor productie
npm run build

# Of deploy direct naar Vercel
npx vercel
```

### Environment Variables

Geen environment variables vereist voor basis functionaliteit.

## 📝 Content Aanpassen

Alle content staat in `src/lib/constants.ts`:
- Services en prijzen
- Contact informatie
- Openingstijden
- Portfolio afbeeldingen

## 📱 Pagina's

| Route | Beschrijving |
|-------|--------------|
| `/` | Homepage met hero, services, portfolio preview |
| `/diensten` | Volledige prijslijst per categorie |
| `/over-ons` | Verhaal van oprichtster Josje |
| `/portfolio` | Masonry gallerij met filters |
| `/contact` | Contactformulier + info + kaart |
| `/privacy` | Privacy beleid & voorwaarden |

## 📄 Licentie

© 2026 HairsalonX Roermond. Alle rechten voorbehouden.
