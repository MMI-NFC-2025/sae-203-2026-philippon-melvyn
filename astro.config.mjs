
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify({
    imageCDN: false, // Active l'optimisation d'images via Netlify Image Transform
    edge: true // Active le déploiement sur le réseau Edge de Netlify pour des performances optimales
  }),

    image: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "sae203.melvyn-philippon.fr"
        }
      ]
    }
  });