import { defineConfig } from 'astro/config';
import vercel from '@vercel/analytics'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
