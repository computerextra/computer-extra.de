import { appRoutes } from "@/routes"
import { usePostHog } from "posthog-js/react"
import { useEffect } from "react"
import { useLocation, useRoutes } from "react-router"

function PostHogPageView() {
  const location = useLocation()
  const posthog = usePostHog()

  useEffect(() => {
    posthog.capture("$pageview", { $current_url: window.location.href })
  }, [location, posthog])

  return null
}

export function App() {
  const routes = useRoutes(appRoutes)
  return (
    <>
      <PostHogPageView />
      {routes}
    </>
  )
}

export default App
