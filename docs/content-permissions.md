# Content permissions and verification register

Purpose: list existing material that needs the owner's confirmation **before it is
promoted, republished in a new design, or removed**. Nothing here has been
changed, published or removed in Phase 0, and no permission is assumed.
Status values: `unconfirmed` (default), `confirmed` (owner to fill in, with how/when).

| # | Item | Where it lives | What is needed | Status |
|---|---|---|---|---|
| 1 | Recommendation quote and name/title of **Hasan Sarwar, PhD** | `data/index.ts` (`testimonials[0]`) | Written consent to display the quote, name and titles; confirmation the text is verbatim and current | unconfirmed |
| 2 | Photo of Hasan Sarwar | `public/Dr.-Hasan-Sarwar-240x300.jpg` | Consent to display; source/licence of the image | unconfirmed |
| 3 | Recommendation quote and name/title of **Nahid Hossain** | `data/index.ts` (`testimonials[1]`) | Same as #1 | unconfirmed |
| 4 | Photo of Nahid Hossain | `public/Nahid-Hossain-240x300.jpg` | Same as #2 | unconfirmed |
| 5 | **Engineer Hut** logo | `public/02-removebg-preview.png` (`companies[0]`) | Permission to display the logo; confirm it is the employer's current logo | unconfirmed |
| 6 | **Vromon Buzz** logo | `public/logo.png` (`companies[1]`) | Same as #5 | unconfirmed |
| 7 | **EduSoft Consultants Ltd.** logo | `public/EdusoftLogo(short).png` (`companies[2]`) | Same as #5. Also: this company appears in the logo strip but has **no matching entry** in `workExperience`; the relationship and dates are not in the repository | unconfirmed |
| 8 | Work experience entries (Engineer Hut, Sep 2023 - Feb 2024; Vromon Buzz, Oct 2023 - Apr 2024) | `data/index.ts` (`workExperience`) | Owner to confirm titles, dates and descriptions are accurate and publishable | unconfirmed |
| 9 | Certifications: CISCO CCNA; "Cyber Security and Ethical Hacking Fundamentals" (UIU) | `data/index.ts` (`gridItems[3]`) | Issuer, issue date, credential ID/URL, and confirmation each is complete (not in progress) | unconfirmed |
| 10 | "Currently building ... ReelAI (React Native)" | `data/index.ts` (`gridItems[4]`) | Confirm the project is current and may be described publicly | unconfirmed |
| 11 | QuillQuest Forum / QuillQuest Chat project descriptions and live links | `data/index.ts` (`projects`) | Confirm descriptions; confirm any collaborators or institutional ownership that should be credited | unconfirmed |
| 12 | Public email address | `components/Footer.tsx` | Owner asked to keep as-is until confirmed. Confirm the address to publish | unconfirmed |
| 13 | Social links (GitHub, LinkedIn, Facebook) | `data/index.ts` (`socialMedia`) | Confirm which should appear; they will become configurable in a later phase | unconfirmed |
| 14 | `Screenshot 2024-07-31 021035.png` | `public/` (unreferenced) | Identify the content; it may be private. Do not publish until reviewed | unconfirmed |
| 15 | Third-party/template artwork and effects (spotlight, pin, moving-border, canvas-reveal components and similar SVGs) | `components/ui/`, `public/` | The components follow the open-source Aceternity UI patterns; licence terms of any copied code/artwork should be checked if they are kept | unverified |
| 16 | Research facts: degrees, dates, affiliations, advisors, publications and their status | not in repository | Provide and verify before anything is added. Placeholders only until then; nothing will be invented | pending from owner |

## Rules applied by the project

- Existing material stays in the repository; this register does not remove anything.
- No attribution, consent or credential is invented. Fill the `Status` column with how and when permission was obtained.
- Items marked `unconfirmed` must be resolved (confirmed, replaced, or removed by the owner) before they appear in the redesigned public site.
