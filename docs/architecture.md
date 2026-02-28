# SpeedPad Website — Architecture

## Overview

The SpeedPad marketing website is a statically-exported Next.js 16 application using the App Router. It uses MUI (Material UI) for components and Emotion for CSS-in-JS. The site deploys to Azure Static Web Apps via GitHub Actions — zero cloud platform lock-in.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, `output: "export"`) |
| UI Library | React 18 + TypeScript |
| Components | MUI (Material UI) v6 |
| Styling | Emotion (CSS-in-JS, MUI default) |
| Build | Turbopack (Next.js bundler) |
| Deployment | Azure Static Web Apps (GitHub Actions CI/CD) |
| Hosting | Static files in `out/` — no Node.js server needed |

## Directory Structure

```
src/
├── app/                        # 28 App Router routes
│   ├── layout.tsx              # Root — ThemeRegistry, CookieConsent, JSON-LD
│   ├── page.tsx                # / — Landing (hero, proof bar, features, comparison)
│   ├── features/               # /features — 177+ features, unique list, comparison
│   ├── download/               # /download — Centralized downloads from product-config
│   ├── hex-editor/             # /hex-editor — SpeedHexPad product page (green accent)
│   ├── docs/                   # /docs — Documentation, CLI, lenses, architecture
│   ├── getting-started/        # /getting-started — Quick start for both products
│   ├── team/                   # /team — 8 team members
│   │   └── [slug]/             # /team/:slug — Static params (generateStaticParams)
│   ├── story/                  # /story — 22-phase timeline + build stats
│   ├── command-explorer/       # /command-explorer — 183 commands with role filtering
│   ├── shortcuts/              # /shortcuts — 75+ shortcuts, filterable chips
│   ├── multilog/               # /multilog — Multi-Log Time Travel
│   ├── incident-playbook/      # /incident-playbook — 3 real-world scenarios
│   ├── how-it-works/           # /how-it-works — Architecture deep dive
│   ├── release-center/         # /release-center — Milestones + timeline
│   ├── changelog/              # /changelog — Visual version history
│   ├── workflows/              # /workflows — Role-based workflow packs
│   ├── lenses/                 # /lenses — 6 lens plugins
│   ├── use-cases/              # /use-cases — DevOps, security, data workflows
│   ├── benchmarks/             # /benchmarks — Performance data
│   ├── testimonials/           # /testimonials — User quotes + JSON-LD
│   ├── screenshots/            # /screenshots — Gallery + animated GIF
│   ├── contributing/           # /contributing — Developer onboarding
│   ├── av-faq/                 # /av-faq — Antivirus false positive FAQ
│   ├── robots.ts               # Robots.txt (force-static)
│   └── sitemap.ts              # Sitemap XML (force-static)
├── components/
│   ├── Navbar.tsx              # Sticky nav: 7 top links + chip-based drawer
│   ├── Footer.tsx              # Footer with IT Ant branding + stats
│   ├── CookieConsent.tsx       # AI-made site cookie consent overlay
│   ├── StickyDownloadCTA.tsx   # Floating download button
│   └── SkipToContent.tsx       # Accessibility skip link
├── lib/
│   └── product-config.ts       # Single source of truth (version, size, tests, URLs)
└── theme/
    ├── theme.ts                # MUI dark theme definition
    ├── ThemeRegistry.tsx       # Server-safe ThemeProvider wrapper
    └── EmotionCacheProvider.tsx # Emotion cache for SSR hydration fix
```

## Rendering Strategy

All pages are **statically generated** at build time via `output: "export"` in `next.config.ts`. The build produces 36 HTML files in the `out/` directory.

- **Static pages** (`○`): 27 content pages rendered once
- **SSG pages** (`●`): `/team/[slug]` uses `generateStaticParams()` returning 8 slugs
- **No SSR, no API routes, no middleware** — pure static output

Special files (`robots.ts`, `sitemap.ts`) require `export const dynamic = "force-static"` because they use `new Date()` which Next.js treats as dynamic by default.

## Theme Architecture

Custom MUI dark theme in `src/theme/theme.ts`:

| Token | Color | Usage |
|-------|-------|-------|
| Background | #0F2035 | Page background |
| Paper | #162D50 | Cards, panels |
| Primary | #2196F3 | Links, accents, SpeedPad brand |
| Secondary | #00BCD4 | Gradients, highlights |
| Text primary | #E2E8F0 | Body text |
| Text secondary | #94A3B8 | Muted text |

SpeedHexPad uses green accent (#4CAF50/#66BB6A) to differentiate.

`EmotionCacheProvider.tsx` provides a stable Emotion CSS cache key to prevent SSR hydration mismatches.

## Deployment Pipeline

```
Push to master → GitHub Actions → npm ci → npm run build → Upload out/ → Azure Static Web Apps
```

- Workflow: `.github/workflows/azure-static-web-apps.yml`
- Secret: `AZURE_STATIC_WEB_APPS_API_TOKEN_ICY_MUSHROOM_0DBD70903`
- `skip_app_build: true` (we build ourselves, Azure just hosts)
- `staticwebapp.config.json`: routing fallback, 404 override, security headers, cache headers

## Centralized Config

`src/lib/product-config.ts` is the single source of truth:

```ts
export const CURRENT_VERSION = "v2.73.0";
export const EXE_SIZE = "843KB";
export const TEST_COUNT = 1009;
export const UNIQUE_FEATURES = 55;
export const RELEASE_NUMBER = 94;
```

All download URLs, version strings, and stat references derive from this file.

## Content Sources

Content is derived from SpeedPad product docs (not invented):

| Website Section | Source |
|----------------|--------|
| Feature list | `FEATURES.md` |
| Keyboard shortcuts | `SHORTCUTS.md` |
| CLI reference | `cli-reference.md` |
| Release history | `CHANGELOG.md` |
| Getting started | `getting-started.md` |
| Lens plugins | `lenses.md` |
| Antivirus FAQ | `antivirus-faq.md` |
