import { usePostHog } from "posthog-js/react"
import { lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"
import { RootLayout, StartLayout } from "./Layout"

const Startseite = lazy(() => import("@/Pages/Page"))
const NotFound = lazy(() => import("@/Pages/404"))

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
      <Routes>
        <Route element={<StartLayout />}>
          <Route index element={<Startseite />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
