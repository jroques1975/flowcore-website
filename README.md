# FlowCore Systems — Marketing Website

Marketing website for **FlowCore Systems** (www.flowcoresystemsai.com).

Built with React + Vite + Tailwind CSS.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| Language | JavaScript (JSX) |

---

## Project Structure

```
flowcore-website/
├── public/
│   └── images/
│       ├── flowcore-logo-dark.png     ← FlowCore logo for dark backgrounds
│       ├── flowcore-logo-light.png    ← FlowCore logo for light backgrounds
│       ├── ledgerflow-logo-dark.png   ← LedgerFlowAI logo for dark backgrounds
│       └── ledgerflow-logo-light.png  ← LedgerFlowAI logo for light backgrounds
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← Sticky navbar with scroll effect + mobile menu
│   │   ├── Footer.jsx         ← Site footer with nav links
│   │   ├── ProductCard.jsx    ← Reusable product card component
│   │   ├── FeatureSection.jsx ← Feature grid section
│   │   └── CTASection.jsx     ← Reusable call-to-action banner
│   ├── pages/
│   │   ├── Home.jsx           ← Hero, products preview, pillars, CTA
│   │   ├── Products.jsx       ← Full product detail pages
│   │   ├── About.jsx          ← Mission, values, who we build for
│   │   └── Contact.jsx        ← Contact form with success state
│   ├── App.jsx                ← Router setup + layout
│   ├── main.jsx               ← Entry point
│   └── index.css              ← Tailwind base + custom utilities
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, products overview, why FlowCore, CTA |
| `/products` | Products | LedgerFlowAI + Task Intelligence detail sections |
| `/about` | About | Mission, philosophy, who we build for |
| `/contact` | Contact | Contact form |

---

## Design System

- **Background:** Deep navy (`#050e1e`)
- **Primary accent:** Indigo (`#6366f1`) → Violet (`#8b5cf6`) gradient
- **Typography:** Inter (Google Fonts)
- **Cards:** `glass-card` utility — semi-transparent with subtle border
- **Logo rendering:** `mix-blend-mode: screen` blends logo dark backgrounds seamlessly onto the dark theme

---

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Production Build

```bash
npm run build
```

Output goes to `dist/`.

---

## Logo Usage

| Logo file | Use when |
|---|---|
| `flowcore-logo-dark.png` | Dark backgrounds (navbar, footer, dark sections) |
| `flowcore-logo-light.png` | Light backgrounds (if any light sections are added) |
| `ledgerflow-logo-dark.png` | Dark backgrounds — LedgerFlowAI product sections |
| `ledgerflow-logo-light.png` | Light backgrounds — LedgerFlowAI product sections |

Logo source files live in `/Users/javierroques/AppDevelopment/media/`.

---

## GitHub

Repository: https://github.com/jroques1975/flowcore-website
