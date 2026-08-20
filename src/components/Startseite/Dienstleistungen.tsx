import { GradientHeader } from "@/components/misc/gradient-header.tsx"

export default function Dienstleistungen() {
  return (
    <div>
      <div
        id="Webdesign"
        className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2"
      >
        <div>
          <GradientHeader>Webdesign & Hosting</GradientHeader>
          <p className="leading-7 not-first:mt-6">
            Wir liefern innovative Konzepte für von modernen und optimierte
            Webseiten (Webdesign) nach Ihren Wünschen, setzen diese für Sie um
            und kümmern uns auf Wunsch auch um das Hosting der Webseite, Emails
            & Domains.
          </p>
        </div>
        <img
          src="https://bilder.computer-extra.de/data/Website/hosting.webp"
          alt="Ausschnitte von Webseiten die durch Computer Extra entstanden sind."
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
          width={900}
        />
      </div>
      <div
        id="Kommunikation"
        className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2"
      >
        <div>
          <GradientHeader>Kommunikation</GradientHeader>
          <p className="leading-7 not-first:mt-6">
            Entdecken Sie maßgeschneiderte Kommunikationslösungen für Ihr
            Unternehmen. Als zertifizierter Partner namhafter Hersteller wie{" "}
            <span className="font-semibold underline">Auerswald</span>,{" "}
            <span className="font-semibold underline">Bintec Elmeg</span> und{" "}
            <span className="font-semibold underline">Agfeo</span> bieten wir
            Ihnen erstklassige Beratung, schnelle installation und
            qualifizierten Service. Auf Kundenwunsch installieren wir die neue
            Telefonanlage lokal vor Ort oder in der Cloud.
          </p>
        </div>

        <img
          src="/business-kommunikation.webp"
          alt="Moderne Business-Kommunikation mit IP-Telefon, Headset und Telefonanlage"
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
          width={900}
        />
      </div>
      <div
        id="Konfiguration"
        className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2"
      >
        <div>
          <GradientHeader>PC- & Notebook-Konfigurationen</GradientHeader>
          <p className="leading-7 not-first:mt-6">
            Wir finden und konfigurieren für Sie den richtigen Desktop-PC oder
            das passende Notebook – unabhängig von Hersteller und System. Ob
            Gaming, Office, mobiles Arbeiten oder Videobearbeitung: Ausstattung,
            Leistung und Budget werden auf Ihre Anforderungen abgestimmt. Bei
            Desktop-PCs stellen wir die Komponenten individuell zusammen;
            Notebooks konfigurieren wir passend mit Arbeitsspeicher, Speicher,
            Betriebssystem und Software. Gerne übernehmen wir auch Einrichtung,
            Datenübertragung, Programme und E-Mail-Konten.
          </p>
        </div>
        <img
          src="/pc-notebook-konfiguration.webp"
          alt="Individuelle Konfiguration von Desktop-PCs und Notebooks sowie WERTGARANTIE Elektronik-Versicherungen"
          className="w-full rounded-lg object-cover transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div
        id="Netzwerke"
        className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2"
      >
        <div>
          <GradientHeader>Netzwerke</GradientHeader>
          <p className="leading-7 not-first:mt-6">
            In der heutigen Zeit sind effiziente IT-Strukturen ein
            entscheidender Faktor für Erfolg. Deshalb orientieren sich unsere
            Konzepte an Ihren Bedürfnissen von morgen. Als erfahrener
            Dienstleister bieten wir umfassende Lösungen im Bereich der modernen
            Datentechnik, um eine optimale Vernetzung von Anlagen und Systemen
            in Unternehmen zu schaffen.
          </p>
        </div>
        <img
          src="https://bilder.computer-extra.de/data/Website/network.webp"
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
          alt="Netzwerkswitch mit Glasfaserkabeln"
          width={900}
        />
      </div>
      <div
        id="Security"
        className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2"
      >
        <div>
          <GradientHeader>IT-Security</GradientHeader>
          <p className="leading-7 not-first:mt-6">
            IT-, Daten- & Cybersicherheit und der verantwortungsbewusste Umgang
            damit ist der Schlüssel für Vertrauen in der Digitalen Welt. Nutzen
            Sie unsere Expertise und unser Know-how für den richtigen Schutz.
            Geben Sie Cyberkriminalität keine Chance! Schützen Sie sich, Ihre
            Mitarbeiter und Ihr Unternehmen. Wir sichern Ihre Firewall,
            Notebooks, PCs und auch Server.
          </p>
        </div>
        <img
          src="https://bilder.computer-extra.de/data/Website/Securepoint.webp"
          alt="Securepoint Logo"
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
          width={900}
        />
      </div>
    </div>
  )
}
