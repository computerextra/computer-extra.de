import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.tsx"
import { env } from "./env.ts"
import "./index.css"

const queryClient = new QueryClient()

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

const app = (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

const initializePostHog = async () => {
  const { default: posthog } = await import("posthog-js")

  posthog.init(env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN, {
    api_host: env.VITE_PUBLIC_POSTHOG_HOST,
    defaults: "2026-05-30",
    capture_performance: false,
    capture_pageview: "history_change",
  })
}

if ("requestIdleCallback" in window) {
  window.requestIdleCallback(() => void initializePostHog())
} else {
  globalThis.setTimeout(() => void initializePostHog(), 0)
}
