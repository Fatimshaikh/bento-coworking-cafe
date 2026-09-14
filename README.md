# ☕ Field & Table — Coworking Café

A coworking café landing page built as a design showcase, exploring the **Bento Grid** layout style — modular boxes of varying sizes used to present a mix of different offerings at a glance, popularized by Apple and now common across modern SaaS and hospitality brands.

**[Live Demo](#)** · **[Repo](https://github.com/Fatimshaikh/bento-coworking-cafe)**

---

## ✨ Features

- **Modular bento grid** showcasing five distinct zones (work tables, coffee bar, meeting room, lounge, food) using deliberately varied card sizes — large anchor, tall strip, wide banner, small squares — locking together like a real bento box
- **Warm, modern color palette** (sage + terracotta) built for a "work, coffee, relax" hybrid space rather than a typical brown coffee-shop look
- **Scroll-aware navbar** — transparent over the hero, solidifies with a blur on scroll
- **Hover zoom + gradient overlay** on every grid card for a polished, tactile feel
- **Scroll-triggered staggered reveal** across the whole grid
- **Fully responsive** — grid reflows to a single column on mobile

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Sora (headings) · Inter (body) — via `next/font` |

## 📁 Project Structure

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── components/
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── BentoGrid.tsx
│ └── Footer.tsx
└── data/
└── spaces.ts


## 🚀 Getting Started

```bash
git clone https://github.com/Fatimshaikh/bento-coworking-cafe.git
cd bento-coworking-cafe
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🎯 Purpose

Part of a series of design-style showcase projects demonstrating the same core stack (Next.js, TypeScript, Tailwind, Framer Motion) applied to distinct visual identities — this one targeting the modern coworking-café / "third space" hospitality niche, where a clean modular layout signals a well-run, premium space.

## 📄 License

MIT — free to use as a learning reference.