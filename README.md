# Adib — portfolio

Personal portfolio of K. M. Shahriar Alam Adib. It is being evolved into a
broader engineering, research and technology archive; see `docs/`.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS ·
framer-motion · Sentry · Vercel Analytics.

## Getting started

Requires Node.js 22.18 or newer.

```bash
npm ci
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run typecheck` | `tsc --noEmit` (build errors are never suppressed) |
| `npm run lint` | `next lint` |
| `npm test` | Data-integrity tests (Node's built-in `node:test`) |

CI (`.github/workflows/ci.yml`) runs typecheck, lint, tests and build on every push.

## Configuration

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SENTRY_DSN` | No | Overrides the built-in Sentry DSN |
| `SENTRY_AUTH_TOKEN` | No | Enables source-map upload during builds; never commit it |

## Content

Current content lives in `data/index.ts`. `docs/content-permissions.md` lists
material that needs permission or verification before it is promoted, and
`docs/asset-inventory.md` lists unreferenced files in `public/`.
`docs/design-system.md` documents the design tokens.

## Deployment

Work happens on feature branches and is reviewed through Vercel Preview
deployments. Production deployments are made only with explicit approval.
