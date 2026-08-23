# Arsak Technologies — Website

Production-ready enterprise marketing website built with React 18, Vite 5, Tailwind CSS 3, Framer Motion, and Lucide React.

## Run Locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Architecture & Directory Structure

```
arsak-technologies/
├── index.html                  # SEO, OpenGraph, Favicon & Preconnected Google Fonts
├── package.json                # Project dependencies & build scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme & plugin setup
├── postcss.config.js           # PostCSS autoprefixer setup
├── public/
│   ├── logo.png                # Brand vector logo
│   └── hero-ai.png             # Optimized static hero artwork
└── src/
    ├── main.jsx                # React DOM entry point
    ├── index.css               # Global styling, smooth scroll & a11y focus rings
    ├── App.jsx                 # Application root & modal controller
    ├── data/
    │   └── siteData.js         # Centralized navigation, content & metadata
    └── components/
        ├── Nav.jsx             # Accessible navbar with mobile drawer
        ├── ContactModal.jsx    # Enterprise blueprint & lead capture modal
        ├── Footer.jsx          # Site footer with dynamic copyright & links
        ├── common/             # Reusable UI primitives (Reveal, FlowLine, Eyebrow, etc.)
        └── sections/           # Modular section components (Hero, Solutions, Demo, etc.)
```

