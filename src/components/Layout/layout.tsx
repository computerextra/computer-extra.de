import { NavLink, Outlet } from "react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { cn } from "@/lib/utils.ts"
import {
  type CSSProperties,
  lazy,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react"
import { CircleArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button.tsx"
import Waves from "@/components/Layout/waves"
import ScrollToTopButton from "@/components/misc/ScrollToTopButton.tsx"

const Navigation = lazy(() => import("@/components/Navigation"))
const AnimatedText = lazy(() => import("@/components/misc/AnimatedText"))
const LazyVideo = lazy(() => import("@/components/misc/lazy-video"))
const Footer = lazy(() => import("@/components/Footer"))

const Weihnachten = {
  show: false,
  from: "24.12.2025",
  till: "31.12.2025",
  inventur: "02.01.2026",
  firstDay: "05.01.2026",
}

const Words = [
  "Hardware",
  "Software",
  "Netzwerktechnik",
  "Telekommunikation",
  "Webdesign",
  "Webhosting",
]

const getDay = () => {
  const today = new Date().getDay()

  switch (today) {
    case 1:
      return "Montag"
    case 2:
      return "Dienstag"
    case 3:
      return "Mittwoch"
    case 4:
      return "Donnerstag"
    case 5:
      return "Freitag"
    case 6:
      return "Samstag"
    case 7:
      return "Sonntag"
    default:
      return "FEHLER"
  }
}

const isWorkingHour = () => {
  const now = new Date()
  return now.getDay() <= 5 && now.getHours() >= 9 && now.getHours() < 18
}

const Layout = () => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<CSSProperties | undefined>(undefined)

  const isOpen = isWorkingHour()
  const day = getDay()

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

  return (
    <div className={"flex min-h-screen flex-col"}>
      <div
        ref={headerRef}
        className={"h-fit min-h-[50vh] overflow-hidden bg-blue-600/50"}
      >
        <LazyVideo
          src={"/videos/bg.mp4"}
          playbackRate={0.3}
          style={style}
          className={
            "fixed -z-1 flex h-auto min-h-[50vh] w-auto max-w-screen min-w-full items-center justify-center backdrop-hue-rotate-90"
          }
        />
        <div className={"container mx-auto"}>
          <Navigation />
          <h1
            className={
              "mt-30 scroll-m-20 text-4xl font-bold tracking-tight text-balance text-slate-100"
            }
          >
            <span className={"envision"}>Computer Extra</span> bietet&nbsp;
            <br className={"md:hidden"} />
            <AnimatedText
              text={Words}
              loop={true}
              hideCursorWhileTyping={true}
            />
            <br />
            der Extraklasse.
          </h1>
          <div className={"my-5 grid grid-cols-1 gap-5 lg:grid-cols-2"}>
            {Weihnachten.show && (
              <Card
                className={"text-md bg-red-800/80 text-slate-100 lg:col-span-2"}
              >
                <CardHeader>
                  <CardTitle className={"text-xl"}>Kundeninformation</CardTitle>
                </CardHeader>
                <CardContent>
                  Sehr geehrte Kund:innen, <br />
                  unser Geschäft ist am {Weihnachten.from}, {Weihnachten.till}{" "}
                  sowie am {Weihnachten.inventur} geschlossen. <br />
                  Ab dem {Weihnachten.firstDay} sind wir wieder wie gewohnt für
                  Sie da.
                </CardContent>
              </Card>
            )}
            <Card
              className={cn(
                "text-md bg-blue-900/80 text-slate-100 lg:col-span-2"
              )}
            >
              <CardContent>
                Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra
                hat die passenden Produkte und Services verfügbar. Privat-,
                Office- und Gaming-PCs werden direkt auf die Bedürfnisse der
                Kunden zugeschnitten. Die exklusive Partnerschaft mit der
                Telekom für Business- und Privattarife runden das Gesamtpaket
                ab.
              </CardContent>
            </Card>

            <Card className={"text-md bg-blue-900/80 text-slate-100"}>
              <CardHeader>
                <CardTitle className={"text-xl"}>Öffnungszeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={"grid grid-cols-2"}>
                  <span className={"flex items-baseline gap-1"}>
                    <CircleArrowRight
                      className={cn(
                        "size-3.5",
                        isOpen
                          ? "animate-pulse text-green-600"
                          : "text-red-600",
                        day == "Montag" ? "block" : "hidden"
                      )}
                    />
                    Montag
                  </span>
                  <span>09:00 - 18:00</span>
                  <span className={"flex items-baseline gap-1"}>
                    <CircleArrowRight
                      className={cn(
                        "size-3.5",
                        isOpen
                          ? "animate-pulse text-green-600"
                          : "text-red-600",
                        day == "Dienstag" ? "block" : "hidden"
                      )}
                    />
                    Dienstag
                  </span>
                  <span>09:00 - 18:00</span>
                  <span className={"flex items-baseline gap-1"}>
                    <CircleArrowRight
                      className={cn(
                        "size-3.5",
                        isOpen
                          ? "animate-pulse text-green-600"
                          : "text-red-600",
                        day == "Mittwoch" ? "block" : "hidden"
                      )}
                    />
                    Mittwoch
                  </span>
                  <span>09:00 - 18:00</span>
                  <span className={"flex items-baseline gap-1"}>
                    <CircleArrowRight
                      className={cn(
                        "size-3.5",
                        isOpen
                          ? "animate-pulse text-green-600"
                          : "text-red-600",
                        day == "Donnerstag" ? "block" : "hidden"
                      )}
                    />
                    Donnerstag
                  </span>
                  <span>09:00 - 18:00</span>
                  <span className={"flex items-baseline gap-1"}>
                    <CircleArrowRight
                      className={cn(
                        "size-3.5",
                        isOpen
                          ? "animate-pulse text-green-600"
                          : "text-red-600",
                        day == "Freitag" ? "block" : "hidden"
                      )}
                    />
                    Freitag
                  </span>
                  <span>09:00 - 18:00</span>
                  <span className={"flex items-baseline gap-1"}>
                    <CircleArrowRight
                      className={cn(
                        "size-3.5",
                        "text-red-600",
                        day == "Samstag" || day == "Sonntag"
                          ? "block"
                          : "hidden"
                      )}
                    />
                    Samstag - Sonntag
                  </span>
                  <span>geschlossen</span>
                </div>
              </CardContent>
            </Card>

            <Card className={"text-md bg-blue-900/80 text-slate-100"}>
              <CardHeader>
                <CardTitle className={"text-xl"}>Telekom Beratung</CardTitle>
                <CardDescription className={"text-slate-200"}>
                  Jetzt Beratungstermin sichern – einfach & unverbindlich
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7 not-first:mt-6">
                  Sie möchten den passenden Telekom Telefon- oder Mobilfunktarif
                  finden, aber sich nicht durch unzählige Optionen kämpfen? Wir
                  helfen Ihnen dabei – persönlich und unkompliziert.
                </p>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Schnell. Einfach. Individuell.
                </h3>

                <Button
                  asChild
                  variant={"outline"}
                  size={"lg"}
                  className={"mt-2 max-w-full text-slate-900"}
                >
                  <NavLink to={"/Termin"}>
                    <span className={"hidden md:block"}>
                      👉 Jetzt Termin online buchen und bestens informiert
                      entscheiden!
                    </span>
                    <span className={"md:hidden"}>Termin buchen</span>
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <Waves />
      </div>

      <main className={"z-0 grow bg-white pt-5"}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Layout
