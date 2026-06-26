# Lyra — Ship faster, sleep better

The opinionated platform for modern SaaS teams. This is the marketing website / landing page, built with React + Vite.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, platform tabs, FAQ, CTA |
| `/features` | Full features breakdown by category |
| `/pricing` | Pricing with billing toggle (monthly/annual) and currency switcher (USD/EUR/INR) |
| `/docs` | Documentation index |
| `/about` | Company info and stats |
| `/changelog` | Release history |

## Tech stack

- **React 18** + **React Router v6**
- **Vite** for bundling
- **Lucide React** for icons
- Pure CSS (no UI framework) with CSS custom properties
- Google Fonts: [Inter](https://fonts.google.com/specimen/Inter) (body/UI) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (headers/code)

## Brand palette

| Name | Hex | Role |
|------|-----|------|
| Forsythia | `#FFC801` | Primary accent / CTA buttons |
| Deep Saffron | `#FF9932` | Secondary accent, hover states |
| Nocturnal Expedition | `#114C5A` | Primary dark / headings |
| Mystic Mint | `#D9E8E2` | Light tinted surfaces |
| Arctic Powder | `#F1F6F4` | Page background |
| Oceanic Noir | `#172B36` | Darkest shade / gradients |

## Getting started

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Works with Vercel, Netlify, GitHub Pages, or any static host. The `dist/` folder is the output.

For Vercel, set the framework to **Vite** and the output directory to `dist`.

> Add a `vercel.json` or `_redirects` (Netlify) to handle SPA routing:
>
> **Netlify** — create `public/_redirects` with: `/* /index.html 200`
>
> **Vercel** — already handled automatically.

### GitHub Pages

This project is pre-configured for GitHub Pages (relative asset paths via `base: './'` in `vite.config.js`, and `HashRouter` instead of `BrowserRouter` since Pages has no server-side rewrite support).

**Option A — automatic (recommended):** push to `main`. The included workflow at `.github/workflows/deploy.yml` builds and deploys automatically. In your repo settings, go to **Settings → Pages** and set the source to **GitHub Actions**.

**Option B — manual:**
```bash
npm install
npm run deploy
```
This builds the site and pushes `dist/` to a `gh-pages` branch via the `gh-pages` package. Then in **Settings → Pages**, set the source branch to `gh-pages`.

