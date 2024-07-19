import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    cssCodeSplit: true,
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react(), chunkSplitPlugin()],
});
