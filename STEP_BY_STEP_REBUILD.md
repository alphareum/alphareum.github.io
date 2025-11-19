# STEP-BY-STEP REBUILD COMMANDS

## EXACT COMMANDS TO RECREATE THE PROJECT

**CRITICAL:** Execute these commands IN ORDER. Do not skip any step.

---

## Step 1: Navigate to Repository Root

```bash
cd "c:\Users\alpha\OneDrive\Documents\GitHub\alphareum.github.io"
```

---

## Step 2: Initialize Next.js Project

```bash
echo n | npx create-next-app@latest . --typescript --no-tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --use-npm
```

**Expected output:** Success message showing Next.js 16.0.3 installed

---

## Step 3: Install Additional Dependencies

```bash
npm install next-sitemap
```

---

## Step 4: Remove Tailwind (If It Got Installed)

```bash
npm uninstall tailwindcss @tailwindcss/postcss 2>nul || echo "Tailwind not installed, skipping"
```

---

## Step 5: Remove Unwanted Template Files

```bash
rm -f public/next.svg public/vercel.svg public/file.svg public/globe.svg public/window.svg 2>nul || echo "Files already removed"
```

---

## Step 6: Create Directory Structure

```bash
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/data
mkdir -p src/app/projects/[slug]
mkdir -p public
mkdir -p .github/workflows
```

---

## Step 7: Create .nojekyll File

```bash
touch public/.nojekyll
```

---

## Step 8: Copy All Code Files

**IMPORTANT:** Open `ALL_CODE_FILES.md` and copy-paste each file's content into the corresponding path below.

### File Creation Order (MUST FOLLOW):

1. `next.config.ts` - Copy from ALL_CODE_FILES.md section #2
2. `tsconfig.json` - Copy from ALL_CODE_FILES.md section #3
3. `eslint.config.mjs` - Copy from ALL_CODE_FILES.md section #4
4. `next-sitemap.config.js` - Copy from ALL_CODE_FILES.md section #5
5. `.gitignore` - Copy from ALL_CODE_FILES.md section #6
6. `src/app/globals.css` - Copy from ALL_CODE_FILES.md section #7 (780 LINES - CRITICAL!)
7. `src/components/layout/Navigation.tsx` - Copy from section #13
8. `src/components/layout/Footer.tsx` - Copy from section #14
9. `src/components/sections/Hero.tsx` - Copy from section #15
10. `src/components/sections/About.tsx` - Copy from section #16
11. `src/components/sections/Projects.tsx` - Copy from section #17
12. `src/components/sections/Experience.tsx` - Copy from section #18
13. `src/components/sections/Contact.tsx` - Copy from section #19
14. `src/data/projects.ts` - Copy from section #20
15. `src/data/experience.ts` - Copy from section #21
16. `src/data/projectDetails.ts` - Copy from section #22
17. `src/app/layout.tsx` - Copy from section #8
18. `src/app/page.tsx` - Copy from section #9
19. `src/app/sitemap.ts` - Copy from section #10
20. `src/app/robots.ts` - Copy from section #11
21. `src/app/projects/[slug]/page.tsx` - Copy from section #12
22. `.github/workflows/deploy.yml` - Copy from section #23
23. `README.md` - Copy from section #25

---

## Step 9: Verify Package.json

Open `package.json` and make sure it matches section #1 from ALL_CODE_FILES.md exactly.

**Critical versions:**
- next: `16.0.3`
- react: `19.2.0`
- react-dom: `19.2.0`
- next-sitemap: `^4.2.3`

If not matching, replace the entire file with content from section #1.

---

## Step 10: Install Dependencies

```bash
npm install
```

**Expected output:** ~346 packages installed without errors

---

## Step 11: Test Build

```bash
npm run build
```

**Expected output:**
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ● /projects/[slug]
│ └ /projects/the-overpost-research
├ ○ /robots.txt
└ ○ /sitemap.xml
```

**If build fails:** Check error message and verify all files were created correctly.

---

## Step 12: Test Dev Server

```bash
npm run dev
```

**Expected output:** Server running on http://localhost:3000

Open browser and verify:
- Homepage loads
- All sections visible (Hero, About, Projects, Experience, Contact)
- Only 1 project card shows (The Overpost)
- Project detail page works: http://localhost:3000/projects/the-overpost-research

---

## Step 13: Verify Static Export

```bash
ls out/
```

**Expected files:**
- index.html
- robots.txt
- sitemap.xml (or sitemap-0.xml)
- projects/the-overpost-research/index.html
- _next/ folder with assets

---

## Step 14: Remove Old Portfolio Files (ONLY AFTER BUILD SUCCEEDS)

```bash
rm -f ailerts-automation.html apt-fitness.html backup.html index.html llm.txt sample.html script.js styles.css the-overpost-research.html
```

---

## Step 15: Stage Changes for Git

```bash
git add -A
git status
```

**Expected:** Many new files added, old HTML files deleted

---

## Step 16: Create Commit

```bash
git commit -m "$(cat <<'EOF'
Migrate portfolio from vanilla HTML to Next.js 15 + TypeScript

- Initialized Next.js 15 with TypeScript
- Removed Tailwind CSS (using pure CSS for lighter build)
- Created component-based architecture
- Implemented SEO optimization (sitemap, robots.txt, metadata)
- Configured static export for GitHub Pages deployment
- Removed duplicate projects (APT Fitness, Ailerts Automation)
- Preserved exact design and styling from original

Stack: Next.js 15, React 19, TypeScript 5
Build: Static export to out/ directory
Deployment: GitHub Actions → GitHub Pages

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

---

## VERIFICATION CHECKLIST

Before considering the rebuild complete, verify ALL of these:

- [ ] `npm run build` succeeds without errors
- [ ] Build generates exactly 7 pages (/, /projects/the-overpost-research, etc.)
- [ ] `npm run dev` starts without errors
- [ ] Homepage shows all 5 sections
- [ ] Only 1 project card visible (The Overpost)
- [ ] Project detail page loads correctly
- [ ] Navigation scroll effects work
- [ ] Horizontal project scrolling works
- [ ] Footer shows "© 2025 Alvin"
- [ ] No Next.js logo in bottom left (that's only in dev mode)
- [ ] No Tailwind CSS classes in any file
- [ ] globals.css is exactly 780 lines
- [ ] All TypeScript files compile without errors
- [ ] No console errors in browser
- [ ] Mobile responsive design works

---

## TROUBLESHOOTING

### Build fails with "export const dynamic" error
**Solution:** Make sure `sitemap.ts` and `robots.ts` both have:
```typescript
export const dynamic = 'force-static';
```

### Missing dependencies error
**Solution:** Run `npm install` again

### Port 3000 in use
**Solution:** Dev server will use 3001 automatically, or kill Node processes:
```bash
taskkill /F /IM node.exe
```

### Git commit fails
**Solution:** Line ending warnings are normal on Windows, commit will still work

### Wrong number of pages generated
**Solution:** Check `src/data/projectDetails.ts` - should only have `'the-overpost-research'` key

---

## SUCCESS CRITERIA

The rebuild is successful if:
1. ✅ Build completes without errors
2. ✅ Generates exactly 7 static pages
3. ✅ Dev server shows portfolio correctly
4. ✅ Only The Overpost project exists
5. ✅ Design matches original exactly
6. ✅ Git commit created successfully

---

## FINAL NOTES

- The "N" indicator in dev mode is NORMAL - it won't appear in production
- Line ending warnings (CRLF vs LF) are NORMAL on Windows
- Total rebuild time: ~10 minutes
- Context switching ready - all instructions self-contained

**Last updated:** 2025-11-19
**Created by:** Claude (Sonnet 4.5)
