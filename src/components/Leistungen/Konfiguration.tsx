import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import { NavLink } from "react-router"

const Konfiguration = () => {
  return (
    <div>
      <GradientHeader>PC- & Notebook-Konfigurationen</GradientHeader>
      <p className="leading-7 font-semibold text-blue-700 not-first:mt-6">
        Wir konfigurieren Desktop-PCs und Notebooks passend zu Ihren
        Anforderungen. Ob Gaming, Office, mobiles Arbeiten oder
        Videobearbeitung: Wir beraten herstellerunabhängig und stimmen Leistung,
        Ausstattung und Budget gezielt auf Ihren Einsatz ab.
      </p>

      <p className="leading-7 not-first:mt-6">
        Desktop-PCs bauen wir aus individuell ausgewählten Komponenten. Bei
        Notebooks beraten wir zur passenden Geräteklasse und konfigurieren je
        nach Modell Arbeitsspeicher, Speicher, Betriebssystem und Software.
        Gerne übernehmen wir außerdem die vollständige Einrichtung inklusive
        Datenübertragung, Programminstallation und E-Mail-Konten.
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div>
          <p className="leading-7 text-blue-700 not-first:mt-6">
            Sichern Sie sich ab.
          </p>
          <p className="leading-7 not-first:mt-6">
            Unsere Elektronik-Versicherungen von Wertgarantie
          </p>
          <p className="leading-7 not-first:mt-6">
            Sichern Sie Ihre liebsten Elektronikgeräte mit den Produkten von
            WERTGARANTIE ab.
          </p>
          <p className="leading-7 not-first:mt-6">
            Egal ob Smartphones, Computer, Laptops oder Fernseher - unsere
            Produkte schützen Ihre Lieblinge immer und überall.
          </p>
        </div>
        <img
          src="/pc-notebook-konfiguration.webp"
          alt="Individuelle Konfiguration von Desktop-PCs und Notebooks sowie WERTGARANTIE Elektronik-Versicherungen"
          className="col-span-2 w-full rounded-lg object-cover"
        />
      </div>
      <h4 className="mt-0 mt-5 py-2 text-xl font-semibold text-blue-700">
        Versicherungsvorteile von WERTGARANTIE auf einen Blick
      </h4>
      <div className="my-3 grid grid-cols-1 gap-10 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Jederzeit erreichbar</CardTitle>
          </CardHeader>
          <CardContent>
            WERTGARANTIE ist für Sie zu jeder Zeit da und hilft Ihnen stets
            weiter. Sie erreichen WERTGARANTIE online oder telefonisch. Kommen
            Sie auch gerne zu uns, wir helfen Ihnen gerne weiter.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sorgenfreier Schutz</CardTitle>
          </CardHeader>
          <CardContent>
            Ihre Lieblingsgeräte sind mit WERTGARANTIE jederzeit und weltweit
            gegen Reparaturkosten und Diebstahl geschützt.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>JZuverlässiger Service</CardTitle>
          </CardHeader>
          <CardContent>
            Wir bearbeiten Schäden schnell und unkompliziert. Bereits mehr als 7
            Millionen Kunden vertrauen dem Service von WERTGARANTIE.
          </CardContent>
        </Card>
      </div>
      <h3 className="text-xl font-semibold text-blue-700">
        Alles neu und ungewohnt?
      </h3>
      <p className="leading-7 not-first:mt-6">
        Das muss nicht sein! Möchten Sie Ihre gewohnte Arbeitsumgebung nicht
        verlieren, übernehmen wir den Umzug Ihrer Daten und Programme für Sie.
        Sie genießen das hohe Arbeitstempo Ihres neuen PCs oder Notebooks in
        Ihrer gewohnten Arbeitsumgebung.
      </p>

      <div className="my-16 grid">
        <Button asChild size={"xl"}>
          <NavLink to={"/Kontakt"}>Schreiben Sie uns</NavLink>
        </Button>
      </div>
    </div>
  )
}

export default Konfiguration
