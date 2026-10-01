import ScrollToTopButton from "@/components/misc/ScrollToTopButton.tsx"
import { useRouteHandle } from "@/hooks/useRouteHandle"
import {
  type CSSProperties,
  lazy,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react"
import { Outlet } from "react-router"

const Navigation = lazy(() => import("@/components/Navigation"))
const LazyVideo = lazy(() => import("@/components/misc/lazy-video"))
const Footer = lazy(() => import("@/components/Footer"))

export default function LeistungenLayout() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<CSSProperties | undefined>(undefined)

  const handle = useRouteHandle()
  const title = handle?.header?.title ?? ""
  const subtitle = handle?.header?.subtitle

  const setHeight = useEffectEvent(() => {
    if (headerRef.current == null) return

    const height = headerRef.current.clientHeight
    setStyle({ height: `${height}px` })
  })

  useEffect(() => {
    if (headerRef.current == null) return

    setHeight()
    window.addEventListener("resize", setHeight)

    return () => {
      window.removeEventListener("resize", setHeight)
    }
  }, [headerRef])

  return (
    <div className="flex min-h-screen flex-col">
      <div
        ref={headerRef}
        className="flex h-fit min-h-[50vh] items-center justify-center overflow-hidden bg-blue-600/50"
      >
        <LazyVideo
          src="/videos/LeistungenBg.webm"
          fallbackSrc="/videos/LeistungenBg.webm"
          poster="/videos/LeistungenBg-poster.webp"
          desktopOnly
          posterFetchPriority="high"
          playbackRate={1}
          style={style}
          className="fixed -z-1 flex h-auto min-h-[50vh] w-auto max-w-screen min-w-full items-center justify-center backdrop-hue-rotate-90"
        />
        <div className="container mx-auto">
          <Navigation />

          <h1 className="mt-30 scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance text-slate-100 uppercase">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 pb-2 text-center text-2xl font-semibold tracking-tight text-slate-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <main className="z-0 grow bg-white pt-5">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
