# AGENTS.md — strongpasswordgenerator.dev

You are the Codex cloud agent implementing tasks for strongpasswordgenerator.dev,
a Next.js (App Router) + TypeScript password generator and content site.

## Project overview
- **Stack:** Next.js 15, TypeScript, React, PostCSS
- **Deploy:** Vercel (auto-deploys on merge to main)
- **Structure:**
  - `src/app/` — pages and layouts (App Router)
  - `src/app/components/` — shared React components
  - `src/posts/` — JSON blog post content
  - `public/` — static assets

## Rules for this project
- Do not modify `vercel.json`, `.github/`, `.agios/`, or any `*.env*` files
- Do not modify `public/sitemap.xml` or `public/robots.txt`
- Blog posts live in `src/posts/` as JSON files
- New pages go in `src/app/[page-name]/page.tsx`
- New components go in `src/app/components/`
- Run `npm run build` before opening a PR to catch type errors

## If the issue is ambiguous
Leave a comment on the issue explaining what is unclear. Do not open a PR with guesses.

## PR body must include
- `Closes #[issue number]`
- Summary of changes (2–5 sentences)
- Files changed
- Verification steps run
