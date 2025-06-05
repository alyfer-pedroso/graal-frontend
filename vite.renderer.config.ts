import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["electron", "react-router-dom"],
    },
  },
  base: "./",
  envPrefix: "VITE_",
  envDir: "./",
});
