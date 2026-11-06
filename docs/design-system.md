# Design system foundation (Phase 0)

Status: **tokens defined, not yet consumed.** Phase 0 adds the foundation without
changing how the site looks. Components migrate to tokens in Phase 1.

Direction: cinematic, minimal, futuristic, editorial. Obsidian black, white and a
restrained electric blue. Typography and whitespace first; subtle motion; no
neon, no gratuitous 3D.

## Where tokens live

- Definitions: `app/globals.css` (section "Design tokens"), all prefixed `--ds-`.
- Tailwind mappings: `tailwind.config.ts` (`ds-*` keys, additive).
- Light is the default `:root`; dark is under `.dark` (applied by `next-themes`).
  There is no theme toggle yet, and existing components still hard-code dark colors,
  so do not enable light mode until components are migrated.

## Layers

1. **Primitives** (`--ds-obsidian-*`, `--ds-blue-*`, `--ds-paper`, `--ds-white`): raw values. Do not use directly in components.
2. **Semantic** (`--ds-color-*`): `bg`, `surface`, `surface-raised`, `text`, `text-muted`, `border`, `border-strong`, `accent`, `accent-solid`, `accent-contrast`, `focus-ring`. Components use these via Tailwind: `bg-ds-bg`, `text-ds-text-muted`, `border-ds-border`, `bg-ds-accent-solid text-ds-accent-contrast`.
3. **Component tokens**: added per component in later phases.

Naming note: Tailwind in this repo re-emits every theme color as `--<name>`, so the
Tailwind key `ds.bg` produces `--ds-bg: var(--ds-color-bg)`. The semantic variables
are therefore named `--ds-color-*` to avoid self-referential variables.

## Scales

| Group | Tokens |
|---|---|
| Type (fluid, about 1.25 ratio) | `--ds-text-xs` ... `--ds-text-3xl`, `--ds-text-display` |
| Font slots | `--ds-font-sans`, `--ds-font-display`, `--ds-font-mono` (system fallbacks now; real families chosen in Phase 1 with `next/font`) |
| Radii | `--ds-radius-sm/md/lg` (Tailwind `rounded-ds-*`) |
| Layering | `--ds-z-base/raised/nav/overlay/toast` (replaces ad hoc `z-[60]`, `z-[5000]`) |
| Motion | `--ds-duration-fast/base/slow` (120/200/400 ms), `--ds-ease-standard`, `--ds-ease-emphasized`; durations collapse to ~0 under `prefers-reduced-motion` |

A global rule disabling non-essential motion is deliberately **not** added in Phase 0
because it would change behavior for existing components; it lands with the Phase 1
motion pass.

## Contrast (WCAG 2.x, computed from the hex values)

AA requires 4.5:1 for body text, 3:1 for large text and UI component boundaries.

| Theme | Pair | Ratio | Result |
|---|---|---:|---|
| Dark | text `#F2F3F6` on bg `#07080A` | 18.06 | AAA |
| Dark | text on surface `#0B0C0F` | 17.63 | AAA |
| Dark | text on surface-raised `#101216` | 16.90 | AAA |
| Dark | text-muted `#B6BBC7` on bg | 10.42 | AAA |
| Dark | text-muted on surface | 10.17 | AAA |
| Dark | obsidian-300 `#8A91A0` on bg (decorative/disabled only) | 6.33 | AA |
| Dark | accent text `#6B9BFF` on bg | 7.40 | AAA |
| Dark | accent text on surface | 7.23 | AAA |
| Dark | white label on accent-solid `#2A62E6` | 5.27 | AA |
| Dark | white label on blue-500 `#3D7BFF` | 3.84 | **Fails AA for normal text: do not use for text-bearing buttons** |
| Dark | border-strong `#5B6270` vs bg | 3.27 | Meets 3:1 for control boundaries |
| Dark | border `#1E2127` vs bg | 1.24 | Decorative hairline only; not for control boundaries |
| Dark | focus ring `#6B9BFF` vs bg | 7.40 | Passes |
| Light | text `#0B0C0F` on bg `#FAFAFB` | 18.75 | AAA |
| Light | text-muted `#5B6270` on bg | 5.88 | AA |
| Light | accent text `#2A62E6` on bg | 5.05 | AA |
| Light | white label on accent-solid `#2A62E6` | 5.27 | AA |
| Light | border-strong `#5B6270` vs bg | 5.88 | Passes |
| Light | border `#B6BBC7` vs bg | 1.84 | Decorative hairline only |
| Light | focus ring `#2A62E6` vs bg | 5.05 | Passes |

Ratios were computed with the standard relative-luminance formula. They should be
re-verified automatically in CI when components start using the tokens.

## Legacy tokens (deprecated, still in use)

`black-100/200/300`, `white-100/200`, `blue-100`, `purple`, and the shadcn variables
(`--background`, `--foreground`, `--border`, ...) remain unchanged and keep the current
look. They will be replaced by `--ds-*` during the Phase 1 component migration and
should not be used for new work.

## Rules for new UI

- Use semantic tokens, never raw hex values or primitives.
- Text must meet the contrast table above; interactive boundaries need 3:1.
- Motion durations/easings come from tokens; honor `prefers-reduced-motion`.
- One accent color. No glows or neon.
