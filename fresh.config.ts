import tailwind from "$fresh/plugins/tailwind.ts";
import { defineConfig } from "$fresh/server.ts";
import { LOCALHOST_PORT } from "./const.ts";
import kv_oauth from "./plugins/kv_oauth/mod.ts";

export default defineConfig({
  server: {
    port: LOCALHOST_PORT,
  },
  plugins: [tailwind(), kv_oauth],
});
