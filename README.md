# Radha Enterprises — Premium Mukhwas & Digestive Products

A premium, animated frontend-only website built with React + TypeScript + Vite.

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v3
- Framer Motion (page/section animations)
- React Router v7
- Lucide React + React Icons (social icons)
- SwiperJS (testimonials carousel)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    common/      ProductArt (signature SVG art system), SectionHeading, Button, LoadingScreen
    layout/      Navbar, Footer, FloatingWhatsApp, Layout
    home/        All homepage sections (Hero, Categories, BestSellers, WhyChooseUs, OurJourney,
                 GalleryTeaser, Testimonials, FAQ, ContactCTA)
    product/     ProductCard, QuickViewModal
  data/          products.ts, categories.ts, types.ts — all catalogue content lives here
  pages/         HomePage, ProductsPage, CategoryPage, ProductDetailPage, AboutPage,
                 GalleryPage, ContactPage
```

## Important Notes — Read Before Going Live

1. **Product imagery is placeholder art, not real photography.** Every product/category
   uses a generated SVG "foil-stamp" illustration (see `src/components/common/ProductArt.tsx`)
   styled in gold-foil/paper-texture to *suggest* premium packaging. These were used because
   real product photography wasn't available. Swap in actual product photos before launch —
   the cleanest approach is to add an `image` field to each `Product` in `src/data/products.ts`
   pointing to a real photo, then update `ProductCard.tsx`, `ProductDetailPage.tsx`, etc. to
   render an `<img>` when present and fall back to `ProductArt` otherwise.

2. **Product names, descriptions, and the catalogue are placeholders.** 24 sample products
   across all 10 categories were written to demonstrate every UI pattern (badges, pack sizes,
   ingredients, benefits). Replace with your real catalogue in `src/data/products.ts`.

3. **This is frontend-only, as requested.** No backend, database, auth, or CMS. The contact
   form, newsletter signup, and WhatsApp links are wired to demonstrate UX but don't persist
   data anywhere — the contact form just shows a success state locally.

4. **WhatsApp number and contact details are placeholders** (`910000000000`,
   `hello@radhaenterprises.in`, etc.) — search the codebase for these and replace with real
   contact info.

5. **"Download Catalogue" button** in the navbar and hero is currently a placeholder href (`#`).
   Wire it to your actual PDF catalogue file once ready.

## Pages
- `/` — Home (hero, categories, best sellers, why choose us, journey, gallery teaser, testimonials, FAQ, contact CTA)
- `/products` — Full catalogue with search + category filter sidebar
- `/products/category/:slug` — Category banner + filtered grid
- `/products/:slug` — Product detail page with gallery, ingredients, benefits, related products
- `/about` — Company story, mission/vision, founder note, operations
- `/gallery` — Filterable masonry gallery with lightbox
- `/contact` — Contact form, business info, map placeholder
