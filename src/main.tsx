import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import posthog from "posthog-js"
import { PostHogErrorBoundary, PostHogProvider } from "posthog-js/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.tsx"
import "./index.css"

const queryClient = new QueryClient()

// Initialize PostHog
posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  defaults: "2026-05-30",
})

createRoot(document.getElementById("root")!).render(
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
