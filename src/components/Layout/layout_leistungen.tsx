import { type CSSProperties, lazy, useEffect, useEffectEvent, useLayoutEffect, useRef, useState, } from "react"
import { Outlet, useLocation } from "react-router"
import ScrollToTopButton from "@/components/misc/ScrollToTopButton.tsx"

const Navigation = lazy(() => import("@/components/Navigation"))
const LazyVideo = lazy(() => import("@/components/misc/lazy-video"))
const Footer = lazy(() => import("@/components/Footer"))

const getTitle = (path: string) => {
  const t = path.replaceAll("/", "")
  switch (t) {
    case "AGB":
      return "Allgemeine Geschäftsbedingungen"
    default:
      return t
  }
}

const getSubtitle = (title: string) => {
  switch (title) {
    case "Leistungen":
      return "Wir bieten Ihnen ein ganzes Spektrum an Dienstleistungen im Bereich der IT."
    case "Partner":
      return "Wir pflegen eine partnerschaftliche Zusammenarbeit mit unseren Partnern. Auf Vertrauen und Transparenz legen wir großen Wert - denn im Miteinander liegt unsere Stärke."
    case "Team":
      return "Wir schaffen ein flexibles Angebot für unsere Kunden - transparent, kreativ, persönlich."
    case "Jobs":
      return "Wir suchen derzeit Verstärkung für unser Team!"
    case "Fernwartung":
      return "mit einem Qualifizierten Mitarbeiter"
    case "Termin":
      return "Buchen Sie sich einen Telekom Beratungtermin"
    case "AGB":
      return "Der Firma Computer Extra GmbH, im Folgenden Verkäufer genannt."
    case "Fehler":
      return "Da hat etwas nicht funktioniert!"
    case "OEM":
      return "Internal Use Only"
    default:
      return ""
  }
}

export default function LeistungenLayout() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  const [style, setStyle] = useState<CSSProperties | undefined>(undefined)
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")

  const setHeight = useEffectEvent(() => {
    if (headerRef.current == null) return
    const height = headerRef.current.clientHeight
    setStyle({ height: `${height}px` })
  })

  useEffect(() => {
    if (headerRef?.current == null) return
    setHeight()
    window.addEventListener("resize", setHeight)

    return () => {
      window.removeEventListener("resize", setHeight)
    }
  }, [headerRef])

  useLayoutEffect(() => {
    const title = getTitle(location.pathname)
    const sub_title = getSubtitle(title)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTitle(title)
    setSubtitle(sub_title)
  }, [location])

  return (
    <div className={"flex min-h-screen flex-col"}>
      <div
        ref={headerRef}
        className={
          "flex h-fit min-h-[50vh] items-center justify-center overflow-hidden bg-blue-600/50"
        }
      >
        <LazyVideo
          src={"/videos/LeistungenBg.mp4"}
          playbackRate={1}
          style={style}
          className={
            "fixed -z-1 flex h-auto min-h-[50vh] w-auto max-w-screen min-w-full items-center justify-center backdrop-hue-rotate-90"
          }
        />

        <div className={"container mx-auto"}>
          <Navigation />
          <h1
            className={
              "mt-30 scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance text-slate-100 uppercase"
            }
          >
            {title}
          </h1>
          <h2 className="mt-5 scroll-m-20 pb-2 text-center text-2xl font-semibold tracking-tight text-slate-100">
            {subtitle}
          </h2>
        </div>
      </div>
      <main className={"z-0 grow bg-white pt-5"}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
