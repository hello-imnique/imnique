import tailwind from "$fresh/plugins/tailwind.ts";
import { defineConfig } from "$fresh/server.ts";
import kv_oauth from "./plugins/kv_oauth/mod.ts";

export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [tailwind(), kv_oauth],
});
