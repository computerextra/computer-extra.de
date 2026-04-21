import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { Button } from "@/components/ui/button.tsx"
import { NavLink } from "react-router"

const Netzwerke = () => {
  return (
    <div>
      <GradientHeader>Netzwerke</GradientHeader>
      <p className="leading-7 text-blue-700 not-first:mt-6">
        Die Zukunft der Vernetzung!
      </p>
      <p className="leading-7 not-first:mt-6">
        In der heutigen Zeit sind effiziente IT-Strukturen ein entscheidender
        Faktor für Erfolg. Deshalb orientieren sich unsere Konzepte an Ihren
        Bedürfnissen von morgen. Als erfahrener Dienstleister bieten wir
        umfassende Lösungen im Bereich der modernen Datentechnik, um eine
        optimale Vernetzung von Anlagen und Systemen in Unternehmen zu schaffen.
      </p>
      <p className="leading-7 text-blue-700 not-first:mt-6">
        Das können wir für Sie tun:
      </p>
      <div className="cList my-7">
        <ul className="grid grid-cols-1 items-center gap-10 leading-snug md:grid-cols-2 2xl:grid-cols-3">
          <li>
            <span>Consulting & Konzept</span>
          </li>
          <li>
            <span>Projektierung & Planung</span>
          </li>
          <li>
            <span>Installation & Projektabwicklung</span>
          </li>
          <li>
            <span>Dokumentation</span>
          </li>
          <li>
            <span>Service, Wartung & Instandhaltung</span>
          </li>
          <li>
            <span>Update & Performance-Optimierung</span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <p className="leading-7 not-first:mt-6">
          In modernen Netzwerken werden große Datenmengen ausgetauscht. Hohe
          Bandbreiten verlangen eine stabile und zukunftssichere
          Netzwerk-Infrastruktur. Dabei ist die fachgerechte Installation und
          höchste Qualität aller Komponenten unerlässlich. Deshalb erarbeiten
          wir auf Basis der kundenspezifischen Anforderungen und des gewünschten
          Einsatzzwecks ein abgestimmtes Konzept mit dem Einsatz passender
          Technologie und besonderem Augenmerk auf die zukünftige
          Erweiterbarkeit. Unser Anspruch ist es, immer auf dem neuesten Stand
          der Technik zu sein, um optimale Lösungen zu bieten.
        </p>
        <img
          src="https://bilder.computer-extra.de/data/Website/network.webp"
          alt="G Data Logo"
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="my-16 grid">
        <Button asChild size={"xl"}>
          <NavLink to={"/Kontakt"}>Schreiben Sie uns</NavLink>
        </Button>
      </div>
    </div>
  )
}

export default Netzwerke
