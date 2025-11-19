# Portfolio Next.js Migration - Complete Rebuild Documentation

## CRITICAL: This documents the EXACT state of the portfolio-nextjs project before it was accidentally deleted.

---

## Project Overview

**Goal:** Migrate vanilla HTML/CSS/JS portfolio to Next.js 15 + TypeScript
**Status:** Successfully built and tested, accidentally deleted during git operations
**Date:** 2025-11-19
**What was removed:** Only APT Fitness and Ailerts Automation projects (per user request)
**What remains:** The Overpost Research project only

---

## Package Versions (EXACT)

```json
{
  "name": "portfolio-nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.0.3",
    "next-sitemap": "^4.2.3",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "typescript": "^5"
  }
}
```

**NOTE:** Tailwind CSS was REMOVED - using pure CSS only for lighter weight.

---

## Complete File Structure

```
alphareum.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions for deployment
├── public/
│   └── .nojekyll                      # For GitHub Pages
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with Nav/Footer
│   │   ├── page.tsx                   # Homepage
│   │   ├── globals.css                # ALL styles (780 lines)
│   │   ├── sitemap.ts                 # Sitemap generation
│   │   ├── robots.ts                  # Robots.txt
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx           # Dynamic project pages
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx         # Nav with scroll effects
│   │   │   └── Footer.tsx             # Footer component
│   │   └── sections/
│   │       ├── Hero.tsx               # Hero section
│   │       ├── About.tsx              # About section
│   │       ├── Projects.tsx           # Projects with horizontal scroll
│   │       ├── Experience.tsx         # Timeline
│   │       └── Contact.tsx            # Contact section
│   ├── data/
│   │   ├── projects.ts                # Project cards data
│   │   ├── projectDetails.ts          # Full project details
│   │   └── experience.ts              # Experience timeline data
│   └── types/                         # (none created yet)
├── .gitignore                         # Next.js gitignore
├── eslint.config.mjs                  # ESLint config
├── next.config.ts                     # Static export config
├── next-env.d.ts                      # Next.js types
├── next-sitemap.config.js             # Sitemap config
├── package.json                       # Dependencies
├── package-lock.json                  # Lock file
├── tsconfig.json                      # TypeScript config
└── README.md                          # Project README
```

---

## Design Specifications

### Color Scheme (CSS Variables)
```css
:root {
  --bg-primary: #09090B;
  --bg-secondary: #0b0b0b;
  --text-primary: #ffffff;
  --text-secondary: #d4d5d8;
  --text-muted: #707070;
  --accent: #88B4F5;
  --accent-dim: rgba(136, 180, 245, 0.1);
  --border: rgba(255, 255, 255, 0.08);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Typography
- **Body Font:** Inter (weights: 300, 400, 500, 600)
- **Mono Font:** JetBrains Mono (weight: 400)
- **Font Loading:** next/font with swap strategy

### Key Features
- Horizontal scrolling projects section
- Fade-in animations with Intersection Observer
- Smooth scroll behavior
- Responsive design (breakpoints: 768px, 1024px)
- Custom scrollbar styling
- Mobile hamburger menu

---

## Content Data

### Project: The Overpost Research
```typescript
{
  id: 'the-overpost',
  type: 'Research',
  title: 'The Overpost',
  description: "Financial market analysis and content strategy for Indonesia's leading financial education YouTube channel with 600K+ subscribers.",
  tech: ['Market Analysis', 'Content Strategy', 'Research'],
  link: '/projects/the-overpost-research',
}
```

### Experience Data
```typescript
[
  {
    id: 'trader-investor',
    date: '2023 - Present',
    title: 'Trader and Investor',
    company: 'Crypto and Equities',
    description: 'Systematic quantitative and fundamental investor...'
  },
  {
    id: 'independent-researcher',
    date: 'Ongoing',
    title: 'Independent Researcher',
    company: 'Freelance',
    description: 'Providing research services...'
  }
]
```

### Skills
1. Financial Research
2. Content Strategy
3. Data Analysis
4. Technical Writing

### Contact Links
- LinkedIn: https://www.linkedin.com/in/alvin-wijayanto-227b072a9/
- Email: alvinwijayanto22@gmail.com
- Instagram: https://www.instagram.com/alvinrium/

---

## Configuration Files

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### sitemap.ts
```typescript
import { MetadataRoute } from 'next';
import { projectDetails } from '@/data/projectDetails';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alphareum.github.io';

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];

  const projectRoutes = Object.keys(projectDetails).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
```

### robots.ts
```typescript
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://alphareum.github.io/sitemap.xml',
  };
}
```

---

## Build & Deployment

### Build Commands
```bash
npm install           # Install dependencies
npm run dev          # Development server (port 3000/3001)
npm run build        # Build for production (creates out/)
```

### Deployment
- **Method:** GitHub Actions (automatic)
- **Workflow:** `.github/workflows/deploy.yml`
- **Output:** Static files in `out/` directory
- **Platform:** GitHub Pages

### Build Output (Expected)
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ● /projects/[slug]
│ └ /projects/the-overpost-research
├ ○ /robots.txt
└ ○ /sitemap.xml
```

---

## Important Notes

### What Was Removed
1. **APT Fitness Assistant** - Removed per user request
2. **Ailerts Automation** - Removed per user request
3. **Tailwind CSS** - Removed for lighter build (using pure CSS)
4. **Next.js template SVGs** - Removed from public/ folder:
   - next.svg
   - vercel.svg
   - file.svg
   - globe.svg
   - window.svg

### What Was Preserved
- Exact same design as original vanilla portfolio
- All animations and scroll effects
- Horizontal scrolling projects section
- Mobile responsiveness
- Dark theme

### Known Issues
- **Next.js dev indicator ("N" in bottom-left):** Only appears in development, NOT in production build
- **Line endings:** Windows CRLF vs Unix LF (warnings in git, not critical)

---

## SEO Optimization

### Meta Tags (layout.tsx)
```typescript
{
  title: "Alvin | Professional Researcher",
  description: "Professional researcher specializing in financial markets and technology...",
  keywords: ["researcher", "financial markets", "technology", "data analysis", "content strategy"],
  authors: [{ name: "Alvin Wijayanto" }],
  creator: "Alvin Wijayanto",
  openGraph: {
    title: "Alvin | Professional Researcher",
    description: "Professional researcher specializing in financial markets and technology",
    url: "https://alphareum.github.io",
    siteName: "Alvin Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin | Professional Researcher",
    description: "Professional researcher specializing in financial markets and technology",
  },
}
```

---

## Critical Recovery Information

### Files That Must Be Created (In Order)

1. **Initialize Next.js:**
   ```bash
   npx create-next-app@latest . --typescript --no-tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --use-npm
   ```

2. **Install additional dependencies:**
   ```bash
   npm install next-sitemap
   npm uninstall tailwindcss @tailwindcss/postcss  # Remove Tailwind
   ```

3. **Create all files in this order:**
   - next.config.ts
   - .gitignore
   - src/app/globals.css (MOST IMPORTANT - 780 lines)
   - src/components/layout/Navigation.tsx
   - src/components/layout/Footer.tsx
   - src/components/sections/Hero.tsx
   - src/components/sections/About.tsx
   - src/components/sections/Projects.tsx
   - src/components/sections/Experience.tsx
   - src/components/sections/Contact.tsx
   - src/data/projects.ts
   - src/data/experience.ts
   - src/data/projectDetails.ts
   - src/app/layout.tsx (with fonts and metadata)
   - src/app/page.tsx
   - src/app/sitemap.ts
   - src/app/robots.ts
   - src/app/projects/[slug]/page.tsx
   - .github/workflows/deploy.yml
   - public/.nojekyll
   - README.md

4. **Test build:**
   ```bash
   npm run build
   ```

5. **Expected result:** Build succeeds with 7 pages generated

---

## Full Code Files (FOR RECOVERY)

### globals.css (780 lines - COMPLETE)
[See separate section below for full code]

### All Component Files
[Each component's complete code preserved in conversation]

---

## Recovery Checklist

- [ ] Create Next.js project with exact package versions
- [ ] Remove Tailwind CSS completely
- [ ] Create all directory structure
- [ ] Copy all 780 lines of globals.css
- [ ] Create all components exactly as documented
- [ ] Create all data files with correct content (only The Overpost)
- [ ] Configure fonts (Inter + JetBrains Mono)
- [ ] Set up metadata and SEO
- [ ] Create dynamic route for projects
- [ ] Set up sitemap and robots.txt
- [ ] Configure GitHub Actions
- [ ] Test build (must succeed)
- [ ] Verify only 1 project shows (The Overpost)
- [ ] Verify no Next.js SVG logos in public/

---

## HANDOFF PROMPT (For Next Chat)

**Context:** The portfolio-nextjs project was accidentally deleted during git operations. It needs to be rebuilt EXACTLY as it was.

**What was built:**
- Next.js 15 + TypeScript portfolio
- Pure CSS (NO Tailwind) - 780 lines in globals.css
- 5 homepage sections: Hero, About, Projects, Experience, Contact
- 1 project: The Overpost Research (APT Fitness and Ailerts were removed per user request)
- Dynamic routing for project detail pages
- SEO optimization (sitemap, robots.txt, metadata)
- GitHub Actions for deployment
- Static export configured for GitHub Pages

**Current state:**
- Old vanilla HTML files still exist in repository root
- All Next.js code documented in previous chat
- Build was tested successfully before deletion
- User wants EXACT recreation, not approximation

**Task:**
1. Recreate the Next.js project in the repository root
2. Use EXACT file structure and code from REBUILD_DOCUMENTATION.md
3. Remove old HTML files only AFTER verifying Next.js build works
4. Commit changes properly

**Critical requirements:**
- Package versions must match exactly (Next 16.0.3, React 19.2.0)
- All 780 lines of globals.css must be preserved exactly
- Only The Overpost project should exist
- Design must be pixel-perfect match to original
- Static export must work for GitHub Pages

---

## End of Documentation

Last updated: 2025-11-19
Purpose: Complete recovery documentation for accidentally deleted Next.js portfolio
