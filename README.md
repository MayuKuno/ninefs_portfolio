# Ninefs Portfolio

Mayu Kuno's personal portfolio site.

## Tech stack
- [Astro](https://astro.build/) (static site, no server/database)
- Sass (SCSS) for styling
- TypeScript

## Development
```
npm install
npm run dev
```
Runs at http://localhost:4321.

## Build
```
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Content
Work entries, experience, and certifications are plain typed data files under `src/data/`:
- `works.ts`
- `experience.ts`
- `certifications.ts`

Images live under `public/images/`.

## Deployment
Deployed as a static site on [Vercel](https://vercel.com/). Vercel auto-detects the Astro build (`astro build` → `dist/`), no extra config needed.

## Author
**Mayu Kuno**
- [GitHub](https://github.com/MayuKuno)
