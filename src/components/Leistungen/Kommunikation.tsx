import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { Button } from "@/components/ui/button.tsx"
import { NavLink } from "react-router"

const Kommunikation = () => {
  return (
    <div>
      <GradientHeader>Business Kommunikation</GradientHeader>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <p className="order-last leading-7 not-first:mt-6 md:order-first">
          Entdecken Sie maßgeschneiderte Kommunikationslösungen für Ihr
          Unternehmen. Als zertifizierter Partner namhafter Hersteller wie{" "}
          <span className="font-semibold underline">Auerswald</span>,{" "}
          <span className="font-semibold underline">Bintec Elmeg</span> und{" "}
          <span className="font-semibold underline">Agfeo</span> bieten wir
          Ihnen erstklassige Beratung, schnelle installation und qualifizierten
          Service. Auf Kundenwunsch installieren wir die neue Telefonanlage
          lokal vor Ort oder in der Cloud. Kontaktieren Sie uns jetzt für eine{" "}
          <a className="text-blue-600 underline" href="/Kontakt">
            unverbindliche Beratung
          </a>
          .
        </p>

        <img
          src="https://bilder.computer-extra.de/data/Website/business.webp"
          alt=""
          className="order-first rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105 md:order-last"
          width={900}
        />
      </div>
      <GradientHeader>Mobilfunk</GradientHeader>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="order-last md:order-first">
          <p className={"leading-7 not-first:mt-6"}>
            Wir sind exklusiver Partner der Deutschen Telekom und bieten Ihnen
            neben den Tarifen aus dem Telekom Netz auch die Produkte von
            CONGSTAR an.
          </p>
          <p className={"leading-7 not-first:mt-6"}>
            Bei uns erhalten Sie alle Endgeräte der führenden Marken wie z.B.
            Apple, Samsung, Google, Sony, Xiaomi,
          </p>
        </div>
        <img
          src="https://bilder.computer-extra.de/data/Website/TelekomWand.webp"
          alt=""
          className="order-first rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105 md:order-last"
          width={900}
        />
      </div>
      <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight text-blue-700 first:mt-0">
        Was bieten wir Ihnen?
      </h2>
      <div className="cList">
        <ul className="grid grid-cols-1 items-center gap-10 leading-snug md:grid-cols-2 2xl:grid-cols-4">
          <li>
            <span>Einen persönlichen Ansprechpartner</span>
          </li>
          <li>
            <span>Kompetente Tarifberatung</span>
          </li>
          <li>
            <span>umfassende Analyse Ihres Bedarfs</span>
          </li>
          <li>
            <span>Kombination mit verschiedenen Produkten</span>
          </li>
          <li>
            <span>bestes Mobilfunknetz (mehrfach ausgezeichnet)</span>
          </li>
          <li>
            <span>umfangreiche Endgeräteauswahl</span>
          </li>
          <li>
            <span>umfangreiche Zubehörauswahl</span>
          </li>
          <li>
            <span>Garantie- & Reparaturabwicklung</span>
          </li>
        </ul>
      </div>
      <div className="my-16 grid">
        <Button asChild size={"xl"}>
          <NavLink to={"/Kontakt"}>Schreiben Sie uns</NavLink>
        </Button>
      </div>
    </div>
  )
}

export default Kommunikation
