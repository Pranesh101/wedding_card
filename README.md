# Pranesh & Nivethitha – Wedding Reception

A single-page React invitation inspired by your save-the-date card (navy arch, blush florals) and scroll-style sites like [Naveen & Dharshini](https://naveen-dharshini.vercel.app/).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build & deploy (Vercel)

1. Push this folder to GitHub (or use [Cursor Share](https://cursor.com)).
2. Import the repo on [vercel.com](https://vercel.com) → Framework preset: **Vite**.
3. Deploy. No environment variables required.

## Optional: use your card PNG

Place your invitation artwork at `public/images/wedding-card.png` and swap the CSS hero for an `<img>` if you prefer the exact print design on the first screen.

## Customize

- Copy and dates: `src/App.tsx`
- Colors and layout: `src/App.css`
- Google Maps link: `MAPS_URL` in `src/App.tsx`
