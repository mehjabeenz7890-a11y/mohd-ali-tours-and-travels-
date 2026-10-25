# MOHD ALI TOURS & TRAVELS — Website

A React + Vite site built to the brand brief: Navy (#0B1F3A) + Orange (#F59E0B)
theme, hero section, services, visa services, popular destinations, tour
packages, gallery, animated stats, enquiry form, and a floating WhatsApp
button using the number **+91 63056 16909**.

## 1. Add your real assets

This build ships with graceful placeholders so the site never breaks with a
missing file, but you'll want to drop in the real assets before going live —
see `public/images/README.txt` for the exact filenames expected:

- `public/images/ma-logo.jpg` — official logo (navbar, footer, favicon)
- `public/images/mohd-ali-hero.jpg` — homepage hero image
- `public/images/gallery/gallery-1.jpg` … `gallery-6.jpg` — gallery photos

## 2. Install and run

```bash
npm install
npm run dev
```

The site runs at **http://localhost:5173/**.

## 3. How the enquiry form works

The enquiry form no longer calls a backend API. On submit, it validates
Name and Phone, builds a formatted message from every field, and opens
WhatsApp (`https://wa.me/916305616909?text=...`) in a new tab with that
message pre-filled — the customer still has to hit Send inside WhatsApp
themselves, nothing is sent automatically. If the browser blocks the
popup, the form shows a message asking them to allow popups or use the
"WhatsApp Us" button instead.

## 4. Change the WhatsApp number later

Edit the one constant in `src/data/siteConfig.js` (`WHATSAPP_INTL` /
`WHATSAPP_DISPLAY`) — every button, link and footer reference reads from
there, so there's nowhere else to update.

## Project structure

```
src/
  components/   Navbar, Hero, About, Services, VisaServices,
                Destinations, TourPackages, Gallery, Stats,
                Contact (enquiry form), Footer, WhatsAppButton
  context/      EnquiryContext.jsx — carries a clicked destination/service
                into the enquiry form and scrolls to it
  data/         siteConfig.js (WhatsApp/company constants),
                destinations.js, content.js (services, visa, stats, packages)
  hooks/        useReveal.jsx (scroll-in animations),
                useCountUp.jsx (animated stat counters)
  pages/        Home.jsx
  App.jsx, main.jsx, index.css
```

All animations respect `prefers-reduced-motion`. All hooks/context files
that contain JSX use the `.jsx` extension (avoiding the classic Vite
"JSX syntax extension is not currently enabled" error).

## What's a placeholder vs. real

- Tour package descriptions and stats (10+ years, 1000+ travellers, etc.)
  are clearly editable placeholders — edit `src/data/content.js` once you
  have confirmed numbers. Nothing is presented as a verified company claim.
- No visa processing times, approval guarantees, or government claims are
  included anywhere.

## Note on this build

This project was generated fresh (no existing MOHD ALI TOURS & TRAVELS
codebase, Prisma schema, or backend was available to inspect/modify in this
session), so there's no pre-existing `useAuth.js`, authentication, or
Prisma/API layer to preserve here. If you have that existing project, share
its files and the enquiry form, backend routes, and auth code can be wired
into this frontend (or this frontend's components merged into your existing
app) without starting over.
