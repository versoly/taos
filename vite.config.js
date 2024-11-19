import { resolve } from "path";
import { name } from "./package.json";

const getPackageName = () => {
  return (name.includes("@") ? name.split("/")[1] : name).replace(".", "-");
};

const NAME = "taos";

const fileName = {
  es: `${getPackageName()}.mjs`,
  cjs: `${getPackageName()}.cjs`,
  iife: `${getPackageName()}.js`,
};

const config = {
  build: {
    target: ["chrome58", "firefox57", "safari11", "edge79"],
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: NAME,
      formats: ["es", "cjs", "iife"],
      fileName: (format) => fileName[format],
    },
  },
  server: {
    port: 3002,
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
};

export default config;
