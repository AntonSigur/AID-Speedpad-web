# SpeedPad Website — IT Ant ehf

Marketing website for [SpeedPad](https://itant.is), the 787KB Windows text editor that opens 100GB+ files.

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
npm run build     # Creates optimized static build in .next/
npm run start     # Serves the production build locally
```

For static export (self-hosted deployment):

```bash
npx next build    # Generates static pages
```

The build output in `.next/` can be served by any static file server or Node.js server.

## Tech Stack

- **Next.js 16** (App Router)
- **React 18** with **TypeScript**
- **MUI (Material UI)** component library
- **Self-hosted** — no Vercel dependency

## Site Pages

| Route | Page |
|-------|------|
| `/` | Landing page — hero, feature grid, comparison table |
| `/features` | 140+ features, 20 unique features, 4-editor comparison |
| `/download` | Release downloads, system requirements, changelog |
| `/docs` | Getting started, shortcuts, CLI reference, lens plugins |
| `/team` | IT Ant ehf story, team members, principles |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with MUI ThemeRegistry
│   ├── page.tsx            # Landing page
│   ├── features/page.tsx   # Features page
│   ├── download/page.tsx   # Download page
│   ├── docs/page.tsx       # Documentation page
│   └── team/page.tsx       # Team page
├── components/
│   ├── Navbar.tsx          # Shared navigation bar
│   └── Footer.tsx          # Shared footer
└── theme/
    ├── theme.ts            # MUI dark theme (blue ant colors)
    └── ThemeRegistry.tsx   # Client-side theme provider
```

## Branding

- **Company:** IT Ant ehf
- **Theme:** Dark mode, blue ant colors (#2196F3 primary, #00BCD4 secondary)
- **Logo:** `public/itant-logo.svg`
- **Tagline:** "We are ants 🐜"

