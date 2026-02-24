# SpeedPad Website — Architecture

## Overview

The SpeedPad marketing website is a statically-generated Next.js 16 application using the App Router pattern. It uses MUI (Material UI) for the component library and Emotion for CSS-in-JS styling. The site is designed for self-hosted deployment with zero cloud platform dependencies.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static generation) |
| UI Library | React 18 + TypeScript |
| Components | MUI (Material UI) v6 |
| Styling | Emotion (CSS-in-JS, MUI's default engine) |
| Build | Turbopack (Next.js bundler) |
| Deployment | Static output, self-hosted |

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout — wraps all pages with ThemeRegistry
│   ├── page.tsx            # / — Landing page (hero, features, comparison)
│   ├── features/page.tsx   # /features — Full feature list, 20 unique, comparison
│   ├── download/page.tsx   # /download — Releases, system reqs, install guide
│   ├── docs/page.tsx       # /docs — Documentation (shortcuts, CLI, lenses)
│   └── team/page.tsx       # /team — Company story, team members, principles
├── components/             # Shared React components
│   ├── Navbar.tsx          # Sticky navigation bar with logo + page links
│   └── Footer.tsx          # Site footer with branding
└── theme/                  # MUI theme configuration
    ├── theme.ts            # Dark theme definition (blue ant palette)
    └── ThemeRegistry.tsx   # Client-side ThemeProvider + CssBaseline wrapper
```

## Rendering Strategy

All pages are **statically generated** at build time (`○ Static` in Next.js output). There is no server-side rendering, no API routes, and no backend. The entire site is a collection of static HTML/CSS/JS files suitable for any web server.

## Theme Architecture

The site uses a custom MUI dark theme defined in `src/theme/theme.ts`:

- **Primary:** #2196F3 (Blue — "blue ants" brand)
- **Secondary:** #00BCD4 (Cyan — accent/gradient)
- **Background:** #0A1628 (deep navy) / #112240 (paper/cards)
- **Text:** #E2E8F0 (primary) / #94A3B8 (secondary)

`ThemeRegistry.tsx` is a client component (`"use client"`) that wraps the app with MUI's `ThemeProvider` and `CssBaseline`.

## Component Pattern

Each page is a self-contained client component (`"use client"`) that:
1. Imports `Navbar` and `Footer` from `src/components/`
2. Defines its own data arrays (features, comparisons, team members) as constants
3. Renders using MUI components (Box, Container, Typography, Grid, Table, Card, etc.)

No external data fetching. All content is embedded in the page components.

## Content Sources

Website content is derived from SpeedPad product documentation at `C:\AID\team1\gh-coop\sources\docs\`:

| Website Section | Source Document |
|----------------|----------------|
| Feature list | `FEATURES.md` |
| Keyboard shortcuts | `SHORTCUTS.md` |
| CLI reference | `cli-reference.md` |
| Release history | `CHANGELOG.md` |
| Getting started | `getting-started.md` |
| Lens plugins | `lenses.md` |

## Build & Deploy

```bash
npm run build     # Static generation via Turbopack
npm run start     # Serve production build on port 3000
```

Output goes to `.next/` directory. For pure static hosting, the generated HTML files can be served by nginx, Apache, or any static file server.
