import { Button } from "@/components/ui/button.tsx"
import { lazy } from "react"

const Datenrettung = lazy(() => import("@/components/Leistungen/Datenrettung"))
const Kommunikation = lazy(
  () => import("@/components/Leistungen/Kommunikation")
)
const Konfiguration = lazy(() => import("@/components/Leistungen/Konfigration"))
const Netzwerke = lazy(() => import("@/components/Leistungen/Netzwerke"))
const Security = lazy(() => import("@/components/Leistungen/Security"))
const Webdesign = lazy(() => import("@/components/Leistungen/Webdesign"))

const Leistungen = () => {
  return (
    <div className={"container mx-auto"}>
      <title>Computer Extra GmbH | Leistungen</title>
      <section>
        <p className="leading-7 not-first:mt-6">
          Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
          die passenden Produkte und Services verfügbar. Privat-, Office- und
          Gaming-PCs werden direkt auf Ihre Bedürfnisse zugeschnitten. Die
          exklusive Partnerschaft mit der Telekom für Business- und Privattarife
          runden das Gesamtpaket ab. Webdesign und -entwicklung sowie das
          passende Hosting von Webseiten und Mails darf dabei nicht fehlen. Wenn
          doch einmal etwas schiefläuft, sind die kompetenten Techniker per
          Fernwartung schnell am Start und können viele Probleme in kürzester
          Zeit aus der Ferne lösen. Falls das Problem größer oder komplexer
          wird, fahren die Kollegen auch gerne vor Ort.
        </p>
      </section>
      <section className={"mt-8 grid grid-cols-2 gap-8"}>
        <Button
          size={"xl"}
          onClick={() => {
            const elem = document.querySelector("#webdesign")
            elem?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Webdesign & Hosting
        </Button>
        <Button
          size={"xl"}
          onClick={() => {
            const elem = document.querySelector("#config")
            elem?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          PC Konfigurationen
        </Button>
        <Button
          size={"xl"}
          onClick={() => {
            const elem = document.querySelector("#communication")
            elem?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Kommunikation
        </Button>
        <Button
          size={"xl"}
          onClick={() => {
            const elem = document.querySelector("#security")
            elem?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          IT Security
        </Button>
        <Button
          size={"xl"}
          onClick={() => {
            const elem = document.querySelector("#network")
            elem?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Netzwerke
        </Button>
        <Button
          size={"xl"}
          onClick={() => {
            const elem = document.querySelector("#data-retention")
            elem?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Datenrettung
        </Button>
      </section>

      <section id={"webdesign"} className={"mt-8"}>
        <Webdesign />
      </section>

      <section id={"config"} className={"mt-8"}>
        <Konfiguration />
      </section>

      <section id={"communication"} className={"mt-8"}>
        <Kommunikation />
      </section>

      <section id={"security"} className={"mt-8"}>
        <Security />
      </section>

      <section id={"network"} className={"mt-8"}>
        <Netzwerke />
      </section>

      <section id={"data-retention"} className={"mt-8"}>
        <Datenrettung />
      </section>
    </div>
  )
}

export default Leistungen
