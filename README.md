# Nur Izzatul Natasha — Personal Profile

A single-page personal portfolio for Nur Izzatul Natasha, a Computer Science graduate from Sarawak, Malaysia, presenting her education, work experience, projects and skills across data & analytics, IoT & embedded systems, Android development and project management.

The design uses a soft, iOS-inspired glass aesthetic: translucent rounded cards, backdrop blur, lavender/olive blurred background shapes, pill-shaped controls and gentle fade-in and hover motion (reduced automatically for visitors who prefer less motion).

## Sections

Home (hero) · Expertise · About Me · My Journey · Education · Work Experience · Selected Projects · Skills · Let's Connect · Footer

## Tech

- TanStack Start + React 19 + TypeScript
- Tailwind CSS 4 (custom `glass`, `glass-strong`, `glass-hover` utilities in `src/styles.css`)
- lucide-react icons, Poppins via Google Fonts
- Deployed on Netlify; profile photo (when added) is served through the Netlify Image CDN

## Updating content

All text lives in **`src/data/profile.ts`**. Nothing there is invented — anything not yet known is marked:

- `links.email`, `links.linkedin`, `links.github` and each project's `repo` are `null`; their buttons show as disabled "to be added" until you fill them in.
- `PLACEHOLDER('...')` copy (bio, About Me, job responsibilities) renders in italic with a "Placeholder" tag — replace it with a plain string.
- `dates: null` shows "Dates to be added".
- Set `profile.photo` to e.g. `'/img/natasha.jpg'` (file in `public/img/`) to replace the abstract glass portrait.

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```
