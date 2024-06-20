import cloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: cloudflare()
  },
  preprocess: vitePreprocess()
};
export default config;