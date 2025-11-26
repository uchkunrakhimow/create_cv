import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src/main.jsx", dest: "build/pbxrealtime" },
        { src: "src/index.css", dest: "build/pbxrealtime" },
      ],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 3200,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js", // xavfsizroq
        assetFileNames: "assets/[name].css", // xavfsizroq
      },
    },
  },
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
