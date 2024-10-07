import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createVuetify } from "vuetify";

export default defineConfig({
  base: "/Vue-vuetify-heroes/",
  plugins: [vue(), createVuetify()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
