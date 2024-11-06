import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Make sure your configuration is correct
  outDir: 'dist',
  integrations: [tailwind()]
});