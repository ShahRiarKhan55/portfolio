# Asset inventory (`public/`)

Generated during Phase 0. **Inventory only: no asset was deleted, renamed, compressed or moved.**

Method: a file is *referenced* if its `/name` path (or exact quoted name) appears in `app/`, `components/`, `data/`, `lib/`, `tailwind.config.ts`. Dynamic or external references (e.g. links in emails, other sites, social cards) would not be detected, so *unreferenced* means **candidate**, not confirmed unused.

Total: 52 files, 15,835.2 KB. Referenced: 23 files, 7,431.6 KB. Unreferenced candidates: 29 files, 8,403.7 KB.

## Unreferenced candidates (largest first)

| File | Size | Note |
|---|---:|---|
| `p3.svg` | 4,315.0 KB |  |
| `p4.svg` | 2,274.6 KB | Not referenced; origin unknown, needs owner review |
| `profile.svg` | 1,097.2 KB | Needs owner review |
| `p1.png` | 224.9 KB |  |
| `gsap.svg` | 151.8 KB |  |
| `Screenshot 2024-07-31 021035.png` | 94.8 KB | Content not identified; needs owner review (may be personal/confidential) |
| `EdusoftLogo(short).svg` | 79.5 KB |  |
| `logo.svg` | 44.4 KB |  |
| `fm.svg` | 25.0 KB |  |
| `confetti.gif` | 18.7 KB | Animation is loaded from data/confetti.json instead |
| `exp4.svg` | 15.3 KB |  |
| `cloudName.svg` | 10.7 KB |  |
| `dockerName.svg` | 8.7 KB |  |
| `hostName.svg` | 6.6 KB |  |
| `streamName.svg` | 5.2 KB |  |
| `cloud.svg` | 4.9 KB |  |
| `exp2.svg` | 4.9 KB |  |
| `insta.svg` | 4.2 KB |  |
| `three.svg` | 3.0 KB |  |
| `appName.svg` | 3.0 KB |  |
| `wha.svg` | 2.8 KB |  |
| `c.svg` | 2.7 KB |  |
| `stream.svg` | 1.3 KB |  |
| `dock.svg` | 1.1 KB |  |
| `s.svg` | 1.1 KB |  |
| `app.svg` | 0.7 KB |  |
| `vercel.svg` | 0.6 KB |  |
| `arrow.svg` | 0.5 KB |  |
| `host.svg` | 0.5 KB |  |

## Referenced files (largest first)

| File | Size |
|---|---:|
| `grid.svg` | 3,535.3 KB |
| `b1.svg` | 2,635.0 KB |
| `p1.svg` | 459.1 KB |
| `b5.svg` | 427.5 KB |
| `exp3.svg` | 131.5 KB |
| `p2.svg` | 84.6 KB |
| `bg.png` | 83.0 KB |
| `footer-grid.svg` | 13.6 KB |
| `Dr.-Hasan-Sarwar-240x300.jpg` | 10.1 KB |
| `Nahid-Hossain-240x300.jpg` | 8.2 KB |
| `exp1.svg` | 7.6 KB |
| `EdusoftLogo(short).png` | 6.8 KB |
| `logo.png` | 5.7 KB |
| `02-removebg-preview.png` | 5.0 KB |
| `git.svg` | 4.0 KB |
| `re.svg` | 3.3 KB |
| `ts.svg` | 2.4 KB |
| `b4.svg` | 2.3 KB |
| `next.svg` | 2.2 KB |
| `twit.svg` | 1.5 KB |
| `link.svg` | 1.1 KB |
| `tail.svg` | 0.9 KB |
| `facebook.svg` | 0.9 KB |

## Observations for Phase 1

- Several referenced SVGs are multi-megabyte (see the top of the referenced table) and are loaded through plain `<img>`; they are the main page-weight issue.
- Employer logos and faculty photos in this folder are subject to `docs/content-permissions.md`.
- Cleanup is a separate decision; nothing here is removed until it is reviewed.
