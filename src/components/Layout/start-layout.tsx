import { Footer } from "@/components/Footer.tsx"
import AnimatedText from "@/components/misc/AnimatedText"
import ScrollToTopButton from "@/components/misc/ScrollToTopButton"
import { Navigation } from "@/components/Navigation.tsx"
import { cn } from "@/lib/utils.ts"
import { useEffect, useRef } from "react"
import { NavLink, Outlet } from "react-router"

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

export default function StartLayout() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef?.current == null) return
    videoRef.current.playbackRate = 0.5
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navigation />
      </header>
      <main>
        <div className="overflow-x-hidden">
          <video
            src={"/videos/bg.mp4"}
            autoPlay={true}
            muted={true}
            ref={videoRef}
            loop={true}
            playsInline={true}
            className={
              "absolute top-0 right-0 left-0 z-10 min-h-screen min-w-full object-cover grayscale invert"
            }
          />
          <div className={"relative z-20 min-h-screen w-full bg-blue-600/50"}>
            <div
              className={
                "mx-2 flex min-h-[75vh] w-full flex-col justify-center ps-5 pe-5 lg:mx-0 lg:ps-[20%] lg:pe-0 lg:pt-[10vh]"
              }
            >
              <h1
                className={
                  "px-1ß max-w-fit rounded-xl py-0 pt-3 text-3xl font-bold text-slate-100 uppercase md:py-4 lg:text-5xl"
                }
              >
                <span className={"envision"}>Computer Extra</span> bietet&nbsp;
                <br className={"2xl:hidden"} />
                <AnimatedText
                  text={Words}
                  loop={true}
                  hideCursorWhileTyping={true}
                />
                <br />
                der Extraklasse.
              </h1>
              {Weihnachten.show && (
                <h2 className="mt-3 w-full max-w-fit rounded-xl border-blue-900/70 bg-red-800/70 px-10 text-xl font-semibold text-slate-100 md:mt-12 md:py-4 lg:w-[50%] lg:text-2xl">
                  Sehr geehrte Kund:innen, <br />
                  unser Geschäft ist am {Weihnachten.from}, {Weihnachten.till}{" "}
                  sowie am {Weihnachten.inventur} geschlossen. <br />
                  Ab dem {Weihnachten.firstDay} sind wir wieder wie gewohnt für
                  Sie da.
                </h2>
              )}
              <h2
                className={cn(
                  Weihnachten.show ? "md:mt-8" : "md:mt-20",
                  "mt-3 w-full max-w-fit rounded-xl bg-blue-900/70 px-10 text-xl font-semibold text-slate-100 md:py-4 lg:w-[50%] lg:text-2xl"
                )}
              >
                Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra
                hat die passenden Produkte und Services verfügbar. Privat-,
                Office- und Gaming-PCs werden direkt auf die Bedürfnisse der
                Kunden zugeschnitten. Die exklusive Partnerschaft mit der
                Telekom für Business- und Privattarife runden das Gesamtpaket
                ab.
              </h2>

              <h2 className="mt-3 w-full max-w-fit rounded-xl bg-blue-900/70 px-10 text-xl font-semibold text-slate-100 md:mt-20 md:py-4 lg:w-[50%] lg:text-2xl">
                Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra
                hat die passenden Produkte und Services verfügbar. Privat-,
                Office- und Gaming-PCs werden direkt auf die Bedürfnisse der
                Kunden zugeschnitten. Die exklusive Partnerschaft mit der
                Telekom für Business- und Privattarife runden das Gesamtpaket
                ab.
              </h2>
              <div className="mt-3 w-full max-w-fit rounded-xl bg-blue-900/70 px-10 text-xl font-bold text-slate-100 md:mt-20 md:py-4 lg:w-[50%] lg:text-2xl">
                <h3 className="uppercase">Öffnungszeiten</h3>
                <p>
                  Montag - Freitag: 09:00 - 18:00 | Samstag - Sonntag:
                  geschlossen
                </p>
              </div>
              <NavLink
                to="/Termin"
                className="mt-3 w-full max-w-fit rounded-xl bg-blue-900/70 px-10 text-xl font-bold text-slate-100 transition-all duration-100 ease-in-out hover:scale-105 hover:bg-blue-900 hover:underline focus:bg-blue-900 focus:underline md:mt-20 md:py-4 lg:w-[50%] lg:text-2xl"
              >
                Jetzt einen Telekom Beratungstermin buchen
              </NavLink>
            </div>
            <div className="overflow-hidden">
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  ></path>
                </defs>
                <g className="parallax">
                  <use
                    xmlnsXlink="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                  ></use>
                  <use
                    xmlnsXlink="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                  ></use>
                  <use
                    xmlnsXlink="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                  ></use>
                  <use xmlnsXlink="#gentle-wave" x="48" y="7" fill="#fff"></use>
                </g>
              </svg>
            </div>
          </div>
          <div className="w-full bg-white pt-5">
            <div className="mx-auto w-11/12 rounded-t-xl pt-10">
              <Outlet />
            </div>
          </div>
        </div>

        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  )
}
