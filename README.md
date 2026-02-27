# SpeedPad Website — IT Ant ehf

Marketing website for [SpeedPad](https://speedpad.itant.is), the 843KB Windows text editor that opens 100GB+ files, and [SpeedHexPad](https://speedpad.itant.is/hex-editor), the standalone hex editor.

**Live:** [icy-mushroom-0dbd70903.azurestaticapps.net](https://icy-mushroom-0dbd70903.azurestaticapps.net)

## Quick Start

```bash
# Clone the repository
git clone git@github.com:AntonSigur/AID-Speedpad-web.git
cd AID-Speedpad-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Production

```bash
npm run build     # Static export → out/ directory (36 pages)
```

The build produces a `out/` directory with static HTML/CSS/JS files. No Node.js server needed — serve with any static file server, nginx, Apache, or Azure Static Web Apps.

## Deployment

The site auto-deploys to **Azure Static Web Apps** via GitHub Actions on every push to `master`.

Pipeline: `npm ci` → `npm run build` → upload `out/` to Azure.

Workflow: `.github/workflows/azure-static-web-apps.yml`

## Tech Stack

- **Next.js 16** (App Router, static export)
- **React 18** with **TypeScript**
- **MUI (Material UI)** component library
- **Azure Static Web Apps** — CI/CD via GitHub Actions
- Zero external dependencies at runtime

## Site Structure (28 routes)

| Route | Page |
|-------|------|
| `/` | Landing — hero, proof bar, feature grid, comparison, trust cards |
| `/features` | 177+ features, 46 unique, 4-editor comparison table (incl. HexCompare, Severity Coloring) |
| `/download` | Centralized downloads, system requirements |
| `/hex-editor` | SpeedHexPad — standalone hex editor product page |
| `/docs` | Documentation, shortcuts, CLI reference, lens plugins |
| `/getting-started` | Quick start for SpeedPad + SpeedHexPad |
| `/multilog` | Multi-Log Time Travel feature deep dive |
| `/command-explorer` | 183 commands, role filtering, search |
| `/shortcuts` | 75+ keyboard shortcuts, filterable |
| `/incident-playbook` | 3 real-world scenarios with key sequences |
| `/how-it-works` | Architecture: memory-mapped I/O, piece table, rendering |
| `/screenshots` | Gallery with animated GIF |
| `/story` | 22-phase timeline, team stats, build story |
| `/team` | 8 team members with detail pages |
| `/team/[slug]` | Individual team member bios (8 slugs) |
| `/release-center` | Release history + milestones |
| `/changelog` | Visual version timeline v2.30.0 → v2.71.0 |
| `/use-cases` | DevOps, security, data analysis workflows |
| `/workflows` | Workflow packs for different roles |
| `/lenses` | 6 DLL-based lens plugins |
| `/benchmarks` | Performance benchmarks |
| `/testimonials` | User testimonials with JSON-LD |
| `/contributing` | Developer onboarding guide |
| `/av-faq` | Antivirus false positive FAQ |

## Key Files

```
src/
├── app/                        # 28 routes (App Router)
├── components/
│   ├── Navbar.tsx              # Sticky nav: 7 links + hamburger drawer
│   ├── Footer.tsx              # Footer with IT Ant branding
│   ├── StickyDownloadCTA.tsx   # Floating download button
│   ├── CookieConsent.tsx       # AI-made cookie consent popup
│   └── SkipToContent.tsx       # Accessibility skip link
├── lib/
│   └── product-config.ts       # Single source of truth: version, size, tests
└── theme/
    ├── theme.ts                # MUI dark theme (#0F2035 bg, #2196F3 primary)
    ├── ThemeRegistry.tsx       # Server-safe theme provider
    └── EmotionCacheProvider.tsx # SSR hydration fix
```

## Branding

- **Company:** IT Ant ehf
- **Products:** SpeedPad (blue #2196F3) + SpeedHexPad (green #4CAF50)
- **Theme:** Dark navy (#0F2035 bg, #162D50 paper, #2196F3 primary, #00BCD4 secondary)
- **Logo:** `public/itant-logo.svg` — black SVG, use CSS `filter: brightness(0) invert(1)` for white
- **Favicon:** `public/favicon.svg` — blue ant icon (browser tab only)
- **Tagline:** "We are ants 🐜"

## Current Stats

- SpeedPad v2.71.0 · 843KB · 673 tests · 46 unique features · 92 releases
- Website: 28 routes · 130+ commits · 36 pre-rendered pages

