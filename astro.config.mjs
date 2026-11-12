// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nostalgic-nobel-a2d059.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
