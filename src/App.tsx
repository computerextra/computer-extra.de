import { usePostHog } from "posthog-js/react"
import { useEffect } from "react"
import { useLocation } from "react-router"
import AppRoutes from "./AppRoutes"

function PostHogPageView() {
  const location = useLocation()
  const posthog = usePostHog()

  useEffect(() => {
    posthog.capture("$pageview", { $current_url: window.location.href })
  }, [location, posthog])

  return null
}

export function App() {
  return (
    <>
      <PostHogPageView />
      <AppRoutes />
    </>
  )
}

export default App
