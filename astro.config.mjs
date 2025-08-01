import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yamatoosho.netlify.app',
  output: 'static',
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});