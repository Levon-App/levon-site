# Levon Website

Landing page for [Levon](https://instagram.com/levonapp): rent instruments, gear and spaces near you.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Deployed on Netlify.

## Local development

Requires Node 22.

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Structure

- `src/pages/index.astro`: the landing page
- `src/components/`: header, footer and the Mailchimp waitlist form
- `src/layouts/Base.astro`: `<head>` tags, title and description
- `src/styles/global.css`: design tokens (colors, fonts, breakpoints) and the load animation
- `src/components/PickCluster.astro`: the animated guitar-pick hero
- `src/data/hero.ts`: hero photos and colors (see below)
- `src/assets/`: logo, hero photos, pick shape and icons (photos are converted to responsive WebP at build time)
- `public/`: files served as-is (favicon)
- `netlify.toml`: Netlify build settings (`npm run build`, publishes `dist/`)

## Changing the hero photos and colors

The four guitar picks are set in `src/data/hero.ts`.

- **Photo:** drop an image into `src/assets/hero/`, import it at the top of `hero.ts`, and set it as a pick's `photo`. Any size or color works; it's cropped to the pick shape and turned black and white. Use `focus` (for example `'center top'`) to choose what stays in frame.
- **Color:** set a pick's `color` to a brand color (`yellow-submarine`, `pink-cadillac`, `blue-suede-shoes`, `green-river`) or any CSS color. Brand colors are defined in `src/styles/global.css`.

The picks drop in one after another when the page loads and the "L" in each wipes up after it lands. Visitors who turn on reduced motion get the static cluster.
