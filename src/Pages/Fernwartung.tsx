import { GradientHeader } from "@/components/misc/gradient-header"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router"

const PCVisitLink =
  "https://stable-update.pcvisit.de/v1/hosted/jumplink?func=download&topic=guestSetup&productrole=guestSetup&gateway=stable-update.pcvisit.de&companyid=4500788308"

const DL_VALUE = 30

const Fernwartung = () => {
  return (
    <div className="container mx-auto mt-5">
      <title>Computer Extra GmbH | Fernwartung</title>

      <GradientHeader>Hinweis:</GradientHeader>
      <p className="leading-7 not-first:mt-6">
        Mir ist bekannt, dass die Unterstützung kostenpflichtig ist!
      </p>
      <p className="leading-7 not-first:mt-6">
        Sofern keine anderweitigen individuellen Vereinbarungen gelten, betragen
        die Kosten für die ersten 30 Minuten {DL_VALUE * 2}€ und je weiteren
        begonnenen 15 Minuten {DL_VALUE}€ inklusive der derzeit gültigen
        Mehrwertsteuer.
      </p>
      <p className="leading-7 not-first:mt-6">
        Im Rahmen der Fernwartung können Daten und Einstellungen auf meinem
        Computer verändert werden. Der Supportmitarbeiter handelt mit meinem
        Einverständnis. Des Weiteren gelten unsere{" "}
        <NavLink to="/AGB" className={"text-blue-600 underline"}>
          AGB
        </NavLink>
        .
      </p>
      <p className="leading-7 not-first:mt-6">
        Es werden personenbezogene Daten im Einklang mit unserer{" "}
        <NavLink to="/Datenschutz" className={"text-blue-600 underline"}>
          Datenschutzerklärung
        </NavLink>{" "}
        erhoben.
      </p>

      <div className="my-5 flex w-full items-center">
        <div className="grid grid-cols-2 gap-4">
          <Button size="xl" asChild>
            <a href={PCVisitLink} target="_blank" rel="noopener noreferrer">
              Download für Windows
            </a>
          </Button>
          <Button size="xl" asChild>
            <a href={PCVisitLink} target="_blank" rel="noopener noreferrer">
              Download für MacOs
            </a>
          </Button>
        </div>
      </div>

      <div className="order-2 pt-5 pb-10 lg:order-1">
        <p className="leading-7 not-first:mt-6">
          Bitte klicken Sie auf den Download für Ihr Betriebssystem, um den
          Download für die Fernwartungssoftware zu starten.
        </p>
        <p className="leading-7 not-first:mt-6">
          Je nach Konfiguration und Browser müssen Sie noch einen Speicherort
          auswählen.
        </p>
        <p className="leading-7 not-first:mt-6">
          Führen Sie die heruntergeladene Datei aus.
        </p>
        <p className="leading-7 not-first:mt-6">
          Sollten Sie Fragen haben, steht Ihnen unser Mitarbeiter, der mit Ihnen
          die Fernwartung durchführt selbstverständlich gern zur Verfügung.
        </p>
        <p className="leading-7 not-first:mt-6">
          Ist die Software gestartet, müssen Sie eine Verbindungsnummer
          eingeben.{" "}
          <span className="font-semibold">
            Diese erhalten Sie von unserem Techniker.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Fernwartung
