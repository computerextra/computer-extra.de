import useTitle from "@/hooks/useTitle"
import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { lazy } from "react"
import { Button } from "@/components/ui/button.tsx"
import { NavLink } from "react-router"

const Angebote = lazy(() => import("@/components/Startseite/Angebote"))
const Dienstleistungen = lazy(
  () => import("@/components/Startseite/Dienstleistungen")
)
const Partner = lazy(() => import("@/components/Startseite/Partner"))

export default function Startseite() {
  useTitle(undefined)
  return (
    <div className="container mx-auto">
      <section
        id={"Hero"}
        className={"mb-10 grid w-full gap-10 lg:grid-cols-2"}
      >
        <div>
          <GradientHeader>
            Wir bieten Ihnen ein ganzes Spektrum an Dienstleistungen im Bereich
            der IT.
          </GradientHeader>
          <p className="text-lg">
            Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
            die passenden Produkte und Services verfügbar. Privat-, Office- und
            Gaming-PCs werden direkt auf Ihre Bedürfnisse zugeschnitten. Die
            exklusive Partnerschaft mit der Telekom für Business- und
            Privattarife runden das Gesamtpaket ab. Webdesign und -entwicklung
            sowie das passende Hosting von Webseiten und Mails darf dabei nicht
            fehlen. Wenn doch einmal etwas schiefläuft, sind die kompetenten
            Techniker per Fernwartung schnell am Start und können viele Probleme
            in kürzester Zeit aus der Ferne lösen. Falls das Problem größer oder
            komplexer wird, fahren die Kollegen auch gerne vor Ort.
          </p>
        </div>
        <div className="hidden motion-safe:animate-bounce lg:grid xl:relative">
          <img
            src="https://bilder.computer-extra.de/data/Website/laden.webp"
            alt="Ein Blick in den Laden"
            className="top-10 left-0 z-20 block max-w-100 rounded-xl transition-all duration-300 ease-in-out hover:z-30 hover:scale-105 hover:ring xl:absolute"
            width={400}
          />
          <img
            src="https://bilder.computer-extra.de/data/Website/TelekomWand.webp"
            alt="Telekom Ecke"
            className="right-0 bottom-10 z-10 block max-w-100 rounded-xl transition-all duration-300 ease-in-out hover:z-30 hover:scale-105 hover:ring xl:absolute"
            width={400}
          />
        </div>
      </section>

      <section id={"Angebote"} className={"my-24 w-full"}>
        <GradientHeader>Angebote</GradientHeader>
        <Angebote />
      </section>

      <section id={"Dienstleistungen"} className={"my-24 w-full"}>
        <GradientHeader>Dienstleistungen</GradientHeader>
        <Dienstleistungen />
        <div className={"grid"}>
          <Button asChild size={"lg"}>
            <NavLink to={"/Leistungen"}>Alle Dienstleistungen ansehen</NavLink>
          </Button>
        </div>
      </section>

      <section id={"Partner"} className={"my-24 w-full"}>
        <GradientHeader>Partner</GradientHeader>
        <Partner />
        <div className={"grid"}>
          <Button asChild size={"lg"}>
            <NavLink to={"/Partner"}>Alle Partner ansehen</NavLink>
          </Button>
        </div>
      </section>

      <section
        id={"Kontakt"}
        className={
          "min-h-[20vh] w-full rounded-tl-3xl rounded-tr-3xl bg-linear-to-br from-purple-500 to-blue-600"
        }
      >
        <h2 className="pt-60 text-center text-6xl font-bold text-white">
          Kontaktieren Sie uns
        </h2>
        <p className="pt-10 text-center text-4xl font-semibold text-white">
          Erzählen Sie uns von Ihnen - gemeinsam machen wir den Unterschied
        </p>
        <div className="mx-auto grid min-h-[20vh] w-2/3 items-center">
          <Button asChild variant={"secondary"} size={"lg"}>
            <NavLink to="/Kontakt">Schreiben Sie uns</NavLink>
          </Button>
        </div>
      </section>
    </div>
  )
}
