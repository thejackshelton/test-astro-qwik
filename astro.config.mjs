import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  output: "server",
  adapter: netlify(),
});
