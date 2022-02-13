import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry:
        "./condensedinlinepanel/static/condensedinlinepanel/src/condensedinlinepanel.tsx",
      name: "CondensedInlinePanel",
      fileName: (format) => `condensedinlinepanel.${format}.js`,
      formats: ["iife"],
    },
    outDir: "condensedinlinepanel/static/condensedinlinepanel/dist",
    rollupOptions: {
      // Dependencies NOT included in the bundle (already provided by wagtail)
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react()],
});
