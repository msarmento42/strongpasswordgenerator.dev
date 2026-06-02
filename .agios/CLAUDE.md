# CLAUDE.md — strongpasswordgenerator.dev (project-specific)

Extends global AGIOS CLAUDE.md in agios-control. Read that first.

## Project context
- **URL:** strongpasswordgenerator.dev
- **Type:** Content + tool site
- **Stack:** Next.js 15 App Router, TypeScript, PostCSS
- **Deploy:** Vercel

## What this site does
Password generator tool (homepage) with a blog for SEO content.
Primary value prop: fast, no-signup password generator.
Secondary: organic traffic via blog content.

## Key files
- `src/app/page.tsx` — homepage (generator lives here)
- `src/app/components/PassphraseGenerator.tsx` — core tool component
- `src/app/blog/` — blog listing and post pages
- `src/posts/` — JSON blog post data
- `public/sitemap.xml` — SEO sitemap (do not edit manually)

## Success metrics to track
- Organic sessions per week (Google Analytics / Vercel Analytics)
- Top keyword rankings
- Blog post count

## What Claude should prioritize for this project
1. SEO content improvements (blog posts, metadata, internal linking)
2. Generator UX improvements
3. Performance / Core Web Vitals
4. New tool pages that serve related queries

## Notes
- The site already has a sitemap and robots.txt — do not break these
- `vercel.json` is present — do not modify it
