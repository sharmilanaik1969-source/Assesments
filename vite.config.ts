import { defineConfig } from "vite";

/**
 * Minimal Vite config (safe default)
 * - Works for plain HTML/JS projects and most simple Vite setups.
 * - If you use React/Vue/Svelte, tell me and I'll provide the plugin version.
 */
export default defineConfig({
  root: process.cwd(),
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false
  },
  server: {
    port: 5173,
    open: false
  }
});
