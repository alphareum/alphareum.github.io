# Alvin's Portfolio - Next.js Migration

This is a modern Next.js 15 + TypeScript portfolio website, migrated from vanilla HTML/CSS/JS to a more maintainable and SEO-optimized React framework.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Static Site Generation (SSG)** for optimal performance
- **SEO Optimized** with meta tags, sitemap, and robots.txt
- **Fully Responsive** design
- **Zero Dependencies** for styling (pure CSS, no Tailwind)
- **GitHub Pages** ready deployment

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory ready for deployment.

## 🌐 Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Deployment Steps:

1. Push to the `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. Site is available at `https://alphareum.github.io`

## 📝 Content Management

### Adding a New Project

1. Add project data to `src/data/projectDetails.ts`
2. Add project card info to `src/data/projects.ts`
3. Build and deploy - the project page will be automatically generated

### Updating Content

- **Homepage sections**: Edit components in `src/components/sections/`
- **Experience**: Edit `src/data/experience.ts`
- **Contact links**: Edit `src/components/sections/Contact.tsx`

## 📄 License

© 2025 Alvin. All rights reserved.
