# COMPLETE CODE - EVERY FILE

## THIS FILE CONTAINS EVERY SINGLE LINE OF CODE FOR THE NEXT.JS PROJECT

Copy-paste each section EXACTLY as shown.

---

## 1. package.json

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

---

## 2. next.config.ts

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

---

## 3. tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 4. eslint.config.mjs

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
```

---

## 5. next-sitemap.config.js

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://alphareum.github.io',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
```

---

## 6. .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/

# Claude
.claude/
```

---

## 7. src/app/globals.css (780 LINES - CRITICAL)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 2px;
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 4rem;
  background: linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%);
  transition: var(--transition);
}

nav.scrolled {
  padding: 1.5rem 4rem;
  background: rgba(9, 9, 11, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);
}

.logo:hover {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--text-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  position: relative;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.hero-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.1s forwards;
}

.hero-title span {
  font-weight: 500;
  color: var(--accent);
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.2s forwards;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.3s forwards;
}

.btn {
  padding: 0.875rem 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0;
  transition: var(--transition);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.02em;
}

.btn-primary {
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
}

.btn-primary:hover {
  background: transparent;
  color: var(--text-primary);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--text-primary);
}

/* Section Styles */
.section {
  padding: 8rem 4rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 4rem;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.skills-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-item {
  padding: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.skill-item:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.skill-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.skill-name {
  font-size: 1rem;
  color: var(--text-primary);
}

/* Projects Section - Horizontal Scroll */
.projects {
  background: var(--bg-secondary);
}

.projects-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2rem;
}

.projects-track {
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
}

.project-card {
  flex: 0 0 400px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  padding: 2rem;
  transition: var(--transition);
  cursor: pointer;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.project-type {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: var(--accent-dim);
  color: var(--accent);
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
}

.project-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.project-link:hover {
  color: var(--accent);
  gap: 1rem;
}

/* Experience Section */
.experience {
  padding: 8rem 4rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
}

.timeline-date {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.timeline-company {
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Contact Section */
.contact {
  padding: 8rem 4rem;
}

.contact-content {
  max-width: 800px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
}

.contact-link {
  font-size: 2rem;
  font-weight: 300;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.contact-link:hover {
  color: var(--accent);
  gap: 2rem;
}

/* Footer */
footer {
  padding: 2rem 4rem;
  text-align: center;
  border-top: 1px solid var(--border);
}

.footer-text {
  color: var(--text-muted);
  font-size: 0.875rem;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

/* Project Detail Pages */
.project-hero {
  padding: 12rem 4rem 6rem;
  border-bottom: 1px solid var(--border);
}

.project-header h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.project-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.project-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
}

.meta-item {
  padding: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
}

.meta-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.meta-value {
  font-size: 1rem;
  color: var(--text-primary);
}

.external-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 2rem;
  transition: var(--transition);
}

.external-link:hover {
  gap: 1rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 4rem;
  align-items: start;
}

.content-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.content-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.responsibilities {
  display: grid;
  gap: 3rem;
}

.responsibility {
  display: grid;
  grid-template-columns: 60px 200px 1fr;
  gap: 2rem;
  align-items: start;
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.responsibility:hover {
  border-color: var(--accent);
}

.responsibility-number {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--accent);
}

.responsibility-title {
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-primary);
}

.responsibility-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.feature-card:hover {
  border-color: var(--accent);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  padding: 0.25rem 0.75rem;
  background: var(--accent-dim);
  color: var(--accent);
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
}

.outcomes-list {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.outcomes-list li {
  padding-left: 2rem;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
}

.outcomes-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* Responsive Design */
@media (max-width: 1024px) {
  nav {
    padding: 1.5rem 2rem;
  }

  nav.scrolled {
    padding: 1rem 2rem;
  }

  .hero {
    padding: 0 2rem;
  }

  .section {
    padding: 6rem 2rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact {
    padding: 6rem 2rem;
  }

  .experience {
    padding: 6rem 2rem;
  }

  footer {
    padding: 2rem;
  }

  .project-hero {
    padding: 10rem 2rem 4rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .responsibility {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero-cta {
    flex-direction: column;
  }

  .skills-list {
    grid-template-columns: 1fr;
  }

  .project-card {
    flex: 0 0 300px;
  }

  .contact-link {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .project-meta-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 8. src/app/layout.tsx

```typescript
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alvin | Professional Researcher",
  description: "Professional researcher specializing in financial markets and technology. Building analytical solutions that bridge technical gaps into practical applications.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 9. src/app/page.tsx

```typescript
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
```

---

## 10. src/app/sitemap.ts

```typescript
import { MetadataRoute } from 'next';
import { projectDetails } from '@/data/projectDetails';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alphareum.github.io';

  // Homepage
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];

  // Project pages
  const projectRoutes = Object.keys(projectDetails).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
```

---

## 11. src/app/robots.ts

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

## 12. src/app/projects/[slug]/page.tsx

```typescript
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectDetails } from '@/data/projectDetails';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all project pages
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Alvin`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Alvin`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-meta-grid">
              <div className="meta-item">
                <p className="meta-label">Duration</p>
                <p className="meta-value">{project.meta.duration}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Client</p>
                <p className="meta-value">{project.meta.client}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Field</p>
                <p className="meta-value">{project.meta.field}</p>
              </div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link">
                Visit Website →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{project.overview.title}</h2>
          <div className="content-grid fade-in">
            <div>
              <p className="content-label">Overview</p>
            </div>
            <div className="content-text">
              {project.overview.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      {project.responsibilities && project.responsibilities.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Key Responsibilities</h2>
            <div className="responsibilities fade-in">
              {project.responsibilities.map((resp) => (
                <div key={resp.number} className="responsibility">
                  <p className="responsibility-number">{resp.number}</p>
                  <h3 className="responsibility-title">{resp.title}</h3>
                  <p className="responsibility-description">{resp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              {slug === 'the-overpost-research' ? 'Research Approaches' : 'Key Features'}
            </h2>
            <div className="features-grid fade-in">
              {project.keyFeatures.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-tags">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="feature-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Key Outcomes</h2>
            <ul className="outcomes-list fade-in">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Back to Home Link */}
      <section className="section">
        <div className="container">
          <Link href="/#projects" className="external-link">
            ← Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
```

---

## 13. src/components/layout/Navigation.tsx

```typescript
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar scroll effect
      setScrolled(window.scrollY > 50);

      // Handle active nav link
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''} id="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          Alvin
        </Link>
        <ul className="nav-links">
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
```

---

## 14. src/components/layout/Footer.tsx

```typescript
export default function Footer() {
  return (
    <footer>
      <p className="footer-text">© 2025 Alvin. All rights reserved.</p>
    </footer>
  );
}
```

---

## 15. src/components/sections/Hero.tsx

```typescript
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">Professional Researcher</p>
        <h1 className="hero-title">
          I'm <span>Alvin</span>.<br />
          Research. Analyze. Create.
        </h1>
        <p className="hero-description">
          Building analytical solutions that bridge technical gaps into practical applications for financial markets and technology.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

## 16. src/components/sections/About.tsx

```typescript
export default function About() {
  const skills = [
    { id: '01', name: 'Financial Research' },
    { id: '02', name: 'Content Strategy' },
    { id: '03', name: 'Data Analysis' },
    { id: '04', name: 'Technical Writing' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Introduction</p>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              I'm a professional researcher with a detail-oriented and analytical mindset. My experience spans research, content strategy, and workflow optimization across financial markets and technology sectors.
            </p>
            <p>
              My expertise ranges from conducting comprehensive data research to writing professional reports and bridging technical gaps into practical applications. I specialize in making complex financial and technical concepts accessible and actionable.
            </p>
          </div>
          <div className="skills fade-in">
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <p className="skill-label">{skill.id}</p>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 17. src/components/sections/Projects.tsx

```typescript
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        <div className="projects-scroll">
          <div className="projects-track">
            {projects.map((project) => (
              <Link key={project.id} href={project.link} className="project-card fade-in">
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="project-link">View Project →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 18. src/components/sections/Experience.tsx

```typescript
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline fade-in">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <p className="timeline-date">{exp.date}</p>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 19. src/components/sections/Contact.tsx

```typescript
export default function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alvin-wijayanto-227b072a9/',
    },
    {
      name: 'Email',
      url: 'mailto:alvinwijayanto22@gmail.com',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alvinrium/',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Interested in collaboration or have questions about my research? I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <span>{link.name}</span> ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 20. src/data/projects.ts

```typescript
export interface Project {
  id: string;
  type: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'the-overpost',
    type: 'Research',
    title: 'The Overpost',
    description: "Financial market analysis and content strategy for Indonesia's leading financial education YouTube channel with 600K+ subscribers.",
    tech: ['Market Analysis', 'Content Strategy', 'Research'],
    link: '/projects/the-overpost-research',
  },
];
```

---

## 21. src/data/experience.ts

```typescript
export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'trader-investor',
    date: '2023 - Present',
    title: 'Trader and Investor',
    company: 'Crypto and Equities',
    description: 'Systematic quantitative and fundamental investor since 2023. Experienced in trading and investing across various asset classes including cryptocurrencies, equities, and derivatives. Skilled in market analysis, risk management, and portfolio optimization.',
  },
  {
    id: 'independent-researcher',
    date: 'Ongoing',
    title: 'Independent Researcher',
    company: 'Freelance',
    description: 'Providing research services, data analysis, and technical writing for various clients. Specializing in financial markets, technology trends, and business intelligence.',
  },
];
```

---

## 22. src/data/projectDetails.ts

```typescript
export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  meta: {
    duration: string;
    client: string;
    field: string;
  };
  link?: string;
  overview: {
    title: string;
    content: string[];
  };
  responsibilities?: {
    number: string;
    title: string;
    description: string;
  }[];
  keyFeatures?: {
    title: string;
    description: string;
    tags: string[];
  }[];
  outcomes?: string[];
}

export const projectDetails: { [key: string]: ProjectDetail } = {
  'the-overpost-research': {
    slug: 'the-overpost-research',
    title: 'The Overpost Research',
    description: "Financial market analysis and content strategy for Indonesia's leading financial education YouTube channel with 600K+ subscribers.",
    meta: {
      duration: '2024 - Present',
      client: 'The Overpost YouTube Channel',
      field: 'Financial Literacy',
    },
    link: 'https://www.youtube.com/@theoverpost',
    overview: {
      title: 'Role Overview',
      content: [
        "As a Researcher and Scriptwriter at The Overpost, I conduct comprehensive financial market analysis and develop content strategies for video production. My role encompasses both quantitative and qualitative research approaches, ensuring accurate and accessible financial information for Indonesia's growing audience seeking financial literacy.",
        "Beyond research, I contribute to content strategizing, channel management, and the overall mission of making complex financial topics understandable for the Indonesian market. This involves analyzing market trends, evaluating investment opportunities, and translating technical concepts into engaging educational content.",
      ],
    },
    responsibilities: [
      {
        number: '01',
        title: 'Market Research',
        description: 'Comprehensive analysis of financial markets including cryptocurrency, stocks, commodities, and business trends with data from multiple sources.',
      },
      {
        number: '02',
        title: 'Content Strategy',
        description: 'Developing engaging scripts that translate complex financial concepts into accessible content aligned with channel goals and audience needs.',
      },
      {
        number: '03',
        title: 'Channel Management',
        description: 'Contributing to overall channel strategy, content planning, and optimization efforts to maintain leadership in financial education.',
      },
    ],
    keyFeatures: [
      {
        title: 'Quantitative Research',
        description: 'Data-driven analysis using statistical methods, market indicators, and financial metrics for topics requiring numerical precision and measurable insights.',
        tags: ['US Stocks', 'Gold Markets', 'Market Performance', 'Price Analysis'],
      },
      {
        title: 'Qualitative Research',
        description: 'In-depth analysis of market sentiment, business strategies, and industry dynamics for comprehensive understanding of complex financial topics.',
        tags: ['Bitcoin Ecosystem', 'Business Analysis', 'Industry Insights', 'Market Sentiment'],
      },
    ],
  },
};
```

---

## 23. .github/workflows/deploy.yml

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build with Next.js
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 24. public/.nojekyll

This is an EMPTY file. Just create it with:
```bash
touch public/.nojekyll
```

---

## 25. README.md

```markdown
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
```

---

# END OF ALL CODE FILES

Every line of code needed to rebuild the project is in this file.
Copy-paste each section into the corresponding file.
