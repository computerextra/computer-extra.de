import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig, loadEnv } from "vite"
import viteCompression from "vite-plugin-compression"
import { clientEnvSchema } from "./src/env-schema"

export default defineConfig(({ mode }) => {
  const loadedEnv = loadEnv(mode, process.cwd(), "")

  clientEnvSchema.parse({
    VITE_PUBLIC_POSTHOG_PROJECT_TOKEN:
      loadedEnv.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN,
    VITE_PUBLIC_POSTHOG_HOST: loadedEnv.VITE_PUBLIC_POSTHOG_HOST,
  })

  return {
    plugins: [react(), tailwindcss(), viteCompression()],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
  }
})
