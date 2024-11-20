import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
