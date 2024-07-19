import { NavLink } from "react-router-dom";
import GradientHeader from "../GradientHeader";

type Referenz = {
  Kunde: string;
  Link: string;
  Bild: string;
};

const Referenzen: Referenz[] = [
  {
    Kunde: "Brand GmbH",
    Link: "https://www.container-brand.de/",
    Bild: "brand.webp",
  },
  {
    Kunde: "Citron & Schmitz Immobilien Service GmbH",
    Link: "https://www.citron-schmitz.de/",
    Bild: "citron.webp",
  },
  {
    Kunde: "Green Building Solutions GmbH",
    Link: "https://www.gbs-ing.de/",
    Bild: "GBS.webp",
  },
  {
    Kunde: "Kramer, Linge + Partner",
    Link: "https://www.kramer-linge.de/",
    Bild: "Kramer.webp",
  },
  {
    Kunde: "K&P Bauphysik GmbH",
    Link: "https://www.kp-bauphysik.de/",
    Bild: "KuP.webp",
  },
];

export default function Webdesign() {
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24" id="webdesign">
      <GradientHeader paddingBottom="pb-2">Webdesign & Hosting</GradientHeader>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Wir liefern innovative Konzepte für von modernen und optimierte
        Webseiten (Webdesign) nach Ihren Wünschen, setzen diese für Sie um und
        kümmern uns auf Wunsch auch um das Hosting der Webseite, Emails &
        Domains.
      </p>
      <div className="grid grid-cols-1 gap-10 my-16">
        <p className="text-xl">
          Wir konzeptionieren & erstellen modernste, optisch ansprechende und
          technisch hochwertige Webseiten - perfekt optimiert auf Ihr Projekt.
        </p>
        <div className="cList">
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 leading-snug items-center">
            <li>
              <span>Modernstes, individuelles Web-Design</span>
            </li>
            <li>
              <span>Mobilgeräte (Full Responsive)</span>
            </li>
            <li>
              <span>Neueste Technik (HTML5, PHP, CSS3, usw.)</span>
            </li>
            <li>
              <span>Datenschutz geprüft (DSGVO)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 my-16">
        <p className="text-xl">
          Sie benötigen einen leistungsstarken, sicheren und für Sie
          wartungsfreien Ort für Ihrer Webseite (Webspace), auf den Nutzer
          jederzeit zugreifen können. Wir übernehmen Einrichtung, Konfiguration
          und Auslieferung der Webseite (Webhosting), Ihrer E-Mail Adressen und
          die Domain-Verwaltung für Sie.
        </p>
        <div className="cList">
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            <li>
              <span>Modernste Hosting-Technik</span>
            </li>
            <li>
              <span>Sichere Verschlüsselung mit SSL Zertifikaten (HTTPS)</span>
            </li>
            <li>
              <span>E-Mail Postfächer (POP3/IMAP)</span>
            </li>
            <li>
              <span>Wunsch-Domains</span>
            </li>
            <li>
              <span>Hosting ab 9,99€ / Monat</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
        <p className="text-xl">
          Bringen Sie Ihre Website auf die nächste Stufe. Steigern Sie
          Online-Sichtbarkeit & Geschäftserfolg! Jetzt unverbindlich von
          Experten beraten lassen.
        </p>
        <NavLink
          to="/Kontakt"
          className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative h-full w-full flex items-center justify-center text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
            Schreiben Sie uns
          </span>
        </NavLink>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 my-16">
        {Referenzen.sort((a, b) => a.Kunde.localeCompare(b.Kunde)).map(
          (Referenz, idx) => (
            <div
              className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:scale-105 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              key={idx}
            >
              <NavLink
                className="flex-1 w-full inline-flex flex-col items-center justify-center"
                to={Referenz.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Screenshot"
                  className="object-cover"
                  height="200"
                  src={"/Images/Mocks/" + Referenz.Bild}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-4 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold">{Referenz.Kunde}</h3>
                  <p className="text-base text-gray-500 mt-1">
                    {Referenz.Link.replace("https://", "")
                      .replace("www.", "")
                      .replace(/\/$/, "")}
                  </p>
                </div>
              </NavLink>
            </div>
          )
        )}
      </div>
    </section>
  );
}
