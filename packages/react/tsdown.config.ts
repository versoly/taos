import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.js"],
  platform: "neutral",
  dts: true,
});
