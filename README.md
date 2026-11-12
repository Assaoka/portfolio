<div align="center">

# 🌿 João Assaoka — Personal Website & Portfolio

**Generative AI Engineer & CS PhD Researcher at UNIFESP**

[![Website](https://img.shields.io/badge/Live_Site-assaoka.com-215a36?style=for-the-badge&logo=google-chrome&logoColor=white)](https://assaoka.com)
[![CI Status](https://img.shields.io/badge/CI-Passing-215a36?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/Assaoka/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-215a36?style=for-the-badge)](LICENSE)

<br />

<a href="https://assaoka.com">
  <img src="public/og-image.png" alt="João Assaoka Website Preview" width="100%" style="border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.12);" />
</a>


</div>

---

## 🌟 Overview

Official personal website and academic portfolio of **João Victor Assaoka Ribeiro**, showcasing research in parameter-efficient post-training, model merging, and real-world LLM operationalization.

### ✨ Key Features
- ⚡ **Extreme Performance**: Static Site Generation with **Astro v5**, shipping minimal, zero-bloat client-side JavaScript.
- 🎨 **Forest Green Design System**: Bespoke brand palette anchored around `#215a36` (`forest-700`), smooth typography, and persistent dark/light mode with zero Flash of Unstyled Content (FOUC).
- 🐍 **GitHub Snake Grid**: Interactive, live-rendered GitHub contribution snake in the footer that adapts seamlessly to theme changes.
- 📱 **Mobile-First & Fully Responsive**: Designed for all viewports from 320px mobile screens to ultrawide monitors, complete with CSS Safe Area Inset support.
- 📊 **Privacy-Focused Telemetry**: Built-in **PostHog** web analytics, active exclusively in cloud production environments.
- 🌐 **Rich Social Sharing**: Comprehensive OpenGraph tags, dynamic Twitter Cards, and canonical URLs for verified sharing on LinkedIn, X, and messaging platforms.

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | ![Astro](https://img.shields.io/badge/Astro_v5-%23BC52EE.svg?style=flat-square&logo=astro&logoColor=white) | Modern content-driven web framework with static generation |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first CSS engine with custom forest green design tokens |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white) | Strict end-to-end type safety |
| **Analytics** | ![PostHog](https://img.shields.io/badge/PostHog-%231D242B.svg?style=flat-square&logo=posthog&logoColor=white) | Cookieless, privacy-preserving telemetry |
| **Icons** | ![Lucide](https://img.shields.io/badge/Lucide_Icons-%23F56565.svg?style=flat-square&logo=feather&logoColor=white) | Accessible, lightweight SVG icon system |
| **Hosting & Edge** | ![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white) | Global Edge CDN with automated preview deployments |
| **DNS & Security** | ![Cloudflare](https://img.shields.io/badge/Cloudflare-%23F38020.svg?style=flat-square&logo=cloudflare&logoColor=white) | DNS flattening, CDN edge caching, and SSL management |
| **CI / Automation** | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-%232088FF.svg?style=flat-square&logo=github-actions&logoColor=white) | Automated type integrity checks (`astro check`) and build testing |

</div>

---

## 📁 Project Structure

The codebase is organized into cleanly separated presentation, data, and asset layers:

```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI pipeline (Typecheck + Build)
├── public/
│   ├── favicon.svg              # Official brand favicon
│   ├── og-image.png             # Social sharing preview card (1200x630)
│   └── vitae.pdf                # Downloadable academic CV
├── src/
│   ├── components/
│   │   ├── analytics/           # PostHog analytics (production guard)
│   │   ├── common/              # Universal components (ContentCard, BackToTop)
│   │   ├── home/                # Homepage sections (Hero, Education, Experience, Papers, Awards)
│   │   ├── icons/               # Custom vector icons (e.g., Hugging Face)
│   │   ├── Footer.astro         # Footer with GitHub Snake and social links
│   │   ├── Header.astro         # Fixed navigation header with ThemeToggle
│   │   └── ThemeToggle.astro    # Light/Dark mode toggle controller
│   ├── content/                 # Astro Content Layer collections (papers, projects, blog)
│   ├── data/                    # Single Source of Truth for portfolio content
│   │   ├── profile.ts           # Bio, legal name, keywords, social links, and nav items
│   │   ├── education.ts         # Academic trajectory (PhD, VIRS, Bachelor degrees)
│   │   ├── experience.ts        # Research and industry experience
│   │   ├── papers.ts            # Published papers with ACL & SBC OpenLib links
│   │   └── awards.ts            # Honors and academic distinctions
│   ├── layouts/
│   │   └── BaseLayout.astro     # Canonical HTML shell, SEO metadata, and theme script
│   ├── pages/
│   │   └── index.astro          # Main homepage route
│   ├── styles/
│   │   └── global.css           # Global tokens, theme definitions, and scroll behavior
│   └── types/
│       └── content.ts           # Shared TypeScript interfaces
├── astro.config.mjs             # Astro and Tailwind integration configuration
├── package.json                 # Project dependencies and script declarations
├── tailwind.config.mjs          # Tailwind theme configuration and font definitions
└── tsconfig.json                # Strict TypeScript compiler options
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js** `>= 20.0.0`
- **npm** (or **pnpm** / **bun**)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Assaoka/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server with instant Hot Module Replacement (HMR) |
| `npm run check` | Runs `@astrojs/check` to validate TypeScript types and Astro template integrity |
| `npm run build` | Compiles a production-ready static bundle inside the `dist/` directory |
| `npm run preview` | Locally serves the production build from `dist/` for verification |

---

## 🛡️ CI / Quality Assurance

Every Pull Request and push to `main` automatically runs our **GitHub Actions** CI workflow (`.github/workflows/ci.yml`), validating:
- ✅ **Type Integrity**: Strict `npm run check` across all Astro components and content schemas.
- ✅ **Static Build**: Full `npm run build` execution without errors.
- ✅ **Preview Deployments**: **Vercel** provides an isolated preview environment for every pull request before merging to production.

---

## 📬 Connect

<div align="center">

[![Google Scholar](https://img.shields.io/badge/Google_Scholar-4285F4?style=for-the-badge&logo=google-scholar&logoColor=white)](https://scholar.google.com/citations?user=4XKCFF4AAAAJ)
[![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/Assaoka)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Assaoka)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/assaoka)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joao.assaoka@unifesp.br)

</div>

---

<div align="center">
  <small>© 2026 João Assaoka. Built with Astro & Tailwind CSS.</small>
</div>
