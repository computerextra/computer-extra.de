import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
