import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  output: "server",
  adapter: cloudflare(),
});
