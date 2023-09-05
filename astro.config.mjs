import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 9001
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [vue()]
});