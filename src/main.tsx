import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router"
import App from "./App.tsx"
import "./index.css"

const queryClient = new QueryClient()

// TODO: PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()
posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: "2025-05-24",
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </PostHogProvider>
  </StrictMode>
)
