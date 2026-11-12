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
- `src/assets/`: logo, hero image and icons (the hero is converted to responsive WebP at build time)
- `public/`: files served as-is (favicon)
- `netlify.toml`: Netlify build settings (`npm run build`, publishes `dist/`)
