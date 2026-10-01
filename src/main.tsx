import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import posthog from "posthog-js"
import { PostHogErrorBoundary, PostHogProvider } from "posthog-js/react"
import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.tsx"
import { env } from "./env.ts"
import "./index.css"

const queryClient = new QueryClient()

// Initialize PostHog
posthog.init(env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN, {
  api_host: env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: "2026-05-30",
})

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

hydrateRoot(
  root,
  <StrictMode>
    <PostHogProvider client={posthog}>
      <PostHogErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </PostHogErrorBoundary>
    </PostHogProvider>
  </StrictMode>
)
