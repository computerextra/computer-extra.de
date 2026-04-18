import { usePostHog } from "posthog-js/react"
import { lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"

const RootLayout = lazy(() => import("@/components/Layout/root-layout"))
const LeistungLayout = lazy(
  () => import("@/components/Layout/layout_leistungen")
)
const StartLayout = lazy(() => import("@/components/Layout/layout"))

const NotFound = lazy(() => import("@/Pages/404"))
const AGB = lazy(() => import("@/Pages/AGB"))
const Datenschutz = lazy(() => import("@/Pages/Datenschutz"))
const Erfolg = lazy(() => import("@/Pages/Erfolg"))
const Fehler = lazy(() => import("@/Pages/Fehler"))
const Fernwartung = lazy(() => import("@/Pages/Fernwartung"))
const Impressum = lazy(() => import("@/Pages/Impressum"))
const Jobs = lazy(() => import("@/Pages/Jobs"))
const Kontakt = lazy(() => import("@/Pages/Kontakt"))
const Leistungen = lazy(() => import("@/Pages/Leistunen"))
const Oem = lazy(() => import("@/Pages/OEM"))
const Partner = lazy(() => import("@/Pages/Partner"))
const Startseite = lazy(() => import("@/Pages/Start"))
const Team = lazy(() => import("@/Pages/Team"))
const Termin = lazy(() => import("@/Pages/Termin"))

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
        <Route element={<LeistungLayout />}>
          <Route path={"Leistungen"} element={<Leistungen />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path={"AGB"} element={<AGB />} />
          <Route path={"Datenschutz"} element={<Datenschutz />} />
          <Route path={"Erfolg"} element={<Erfolg />} />
          <Route path={"Fehler"} element={<Fehler />} />
          <Route path={"Fernwartung"} element={<Fernwartung />} />
          <Route path={"Impressum"} element={<Impressum />} />
          <Route path={"Jobs"} element={<Jobs />} />
          <Route path={"Kontakt"} element={<Kontakt />} />
          <Route path={"OEM"} element={<Oem />} />
          <Route path={"Partner"} element={<Partner />} />
          <Route path={"Team"} element={<Team />} />
          <Route path={"Termin"} element={<Termin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
