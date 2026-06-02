# HETHEN LIVE — Official Website

Sri Lanka's Premier Live Entertainment Company website built with **React + Vite**.

---

## Quick Start

```bash
cd hethen-live
npm install
npm run dev
```
Open http://localhost:5173

## Build for Production
```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css        — Sticky navigation bar
│   ├── Hero.jsx / .css          — Full-screen hero
│   ├── EventsSection.jsx / .css — Event cards grid
│   ├── ShowsSection.jsx / .css  — Musical/Beach/Fight features
│   ├── GallerySection.jsx / .css— Photo gallery
│   ├── AboutSection.jsx / .css  — Company story
│   ├── ContactSection.jsx / .css— Contact form
│   └── Footer.jsx / .css
└── styles/globals.css           — Design tokens & fonts
```

---

## Adding Your Images & Videos

Every section has a clearly labelled placeholder div. Replace them with:

```jsx
<img src="/images/your-photo.jpg" alt="..." />
// or
<video src="/videos/your-clip.mp4" autoPlay muted loop />
```

Place image/video files in the `public/` folder.

---

## Design Tokens (globals.css)
- **Fonts**: Cinzel Decorative, Bebas Neue, Syne, Space Mono, Playfair Display
- **Gold**: #c9a84c | **Crimson**: #c0392b | **Cyan**: #00e5ff
- **Background**: #040408 deep dark

## Deployment
Upload `/dist` (after build) to Netlify, Vercel, or cPanel.

---
Made for HETHEN LIVE · Sri Lanka
