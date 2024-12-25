import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import kv_oauth from "./plugins/kv_oauth/mod.ts";

export default defineConfig({
  plugins: [tailwind(), kv_oauth],
});
