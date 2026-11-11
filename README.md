# Levon Website

Landing page for [Levon](https://instagram.com/levonapp): rent instruments, gear and spaces near you.

Built on the Landkit 2 Bootstrap theme with Gulp, Dart Sass and HTML partials. Deployed on Netlify.

## Local development

Requires Node 22.

```sh
npm install
npm start        # dev server with live reload
npm run build    # production build to dist/
```

## Structure

- `src/index.html`: the landing page
- `src/partials/`: shared head, navbar, footer and scripts
- `src/assets/scss/`: theme styles (compiled to `src/assets/css/`)
- `netlify.toml`: Netlify build settings (`npm run build`, publishes `dist/`)
