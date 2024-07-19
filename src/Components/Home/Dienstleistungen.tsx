import BusinessKommunikationBild from "../../Assets/images/business.webp";
import HostingImage from "../../Assets/images/hosting.webp";
import NetworkImage from "../../Assets/images/network.webp";
import SecurepointImage from "../../Assets/images/Securepoint.webp";
import WertgarantieVideo from "../../Assets/video/RElektro_FINAL_03062101.mp4";
import GradientHeader from "../GradientHeader";
import HomeBtn from "../HomeBtn";

export default function Dienstleitungen() {
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24 ">
      <GradientHeader>Dienstleistungen</GradientHeader>
      <div
        id="Webdesign"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-10"
      >
        <div>
          <GradientHeader fontSize="text-3xl">
            Webdesign & Hosting
          </GradientHeader>
          <p className="text-lg">
            Wir liefern innovative Konzepte für von modernen und optimierte
            Webseiten (Webdesign) nach Ihren Wünschen, setzen diese für Sie um
            und kümmern uns auf Wunsch auch um das Hosting der Webseite, Emails
            & Domains.
          </p>
        </div>
        <img
          src={HostingImage}
          alt="Ausschnitte von Webseiten die durch Computer Extra entstanden sind."
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out "
          width={900}
        />
      </div>
      <div
        id="Kommunikation"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-10"
      >
        <div>
          <GradientHeader fontSize="text-3xl">Kommunikation</GradientHeader>
          <p className="text-lg">
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
          src={BusinessKommunikationBild}
          alt=""
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out "
          width={900}
        />
      </div>
      <div
        id="Konfiguration"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-10"
      >
        <div>
          <GradientHeader fontSize="text-3xl">
            PC-Konfigurationen
          </GradientHeader>
          <p className="text-lg">
            Wir finden für Sie den richtigen PC, unabhängig von Hersteller und
            System. Wir beraten und bauen für Sie den perfekten Computer, egal
            ob Spiele-, Office-, oder Videobearbeitungs-PC. Wir konfigurieren
            Ihren Computer für Ihre Bedürfnisse. Gerne übernehmen wir auch die
            Einrichtung Ihres neuen PCs inklusive Übertragung der alten Daten,
            Installation von Programmen sowie einrichtung Ihrer E-Mail Adressen.
            Bei Desktop Computern können wir ganz individuell für Sie einen
            Rechner konfigurieren und bauen. Sie Zahlen dann nur für das, was
            Sie auch wirklich brauchen!
          </p>
        </div>

        <video
          src={WertgarantieVideo}
          className="object-cover rounded-lg  max-h-[450px] hover:scale-105 transition-all duration-300 ease-in-out "
          width={"auto"}
          height={900}
          muted
          loop
          playsInline
          controls
          autoPlay
        ></video>
      </div>
      <div
        id="Netzwerke"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-10"
      >
        <div>
          <GradientHeader fontSize="text-3xl">Netzwerke</GradientHeader>
          <p className="text-lg">
            In der heutigen Zeit sind effiziente IT-Strukturen ein
            entscheidender Faktor für Erfolg. Deshalb orientieren sich unsere
            Konzepte an Ihren Bedürfnissen von morgen. Als erfahrener
            Dienstleister bieten wir umfassende Lösungen im Bereich der modernen
            Datentechnik, um eine optimale Vernetzung von Anlagen und Systemen
            in Unternehmen zu schaffen.
          </p>
        </div>
        <img
          src={NetworkImage}
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out "
          width={900}
        />
      </div>
      <div
        id="Security"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 my-10"
      >
        <div>
          <GradientHeader fontSize="text-3xl">IT-Security</GradientHeader>
          <p className="text-lg">
            IT-, Daten- & Cybersicherheit und der verantwortungsbewusste Umgang
            damit ist der Schlüssel für Vertrauen in der Digitalen Welt. Nutzen
            Sie unsere Expertise und unser Know-how für den richtigen Schutz.
            Geben Sie Cyberkriminalität keine Chance! Schützen Sie sich, Ihre
            Mitarbeiter und Ihr Unternehmen. Wir sichern Ihre Firewall,
            Notebooks, PCs und auch Server.
          </p>
        </div>
        <img
          src={SecurepointImage}
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out "
          width={900}
        />
      </div>
      <HomeBtn to="/Leistungen" content="Alle Dienstleistungen ansehen" />
    </section>
  );
}
