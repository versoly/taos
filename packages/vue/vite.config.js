import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "TAOS",
      formats: ["cjs", "esm", "iife"],
      fileName: (format) => {
        let jsExtension = ".cjs";

        if (format === "esm") {
          jsExtension = ".mjs";
        }

        if (format === "iife") {
          jsExtension = ".global.js";
        }
        return `index${jsExtension}`;
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
