// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify({
    imageCDN: false,
  }),

  image: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8090"
      },
      {
        protocol: "http",
        hostname: "0.0.0.0",
        port: "8090"
      }
    ]
  }
});