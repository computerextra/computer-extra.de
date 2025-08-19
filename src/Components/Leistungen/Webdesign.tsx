import { useState } from "react";
import { NavLink } from "react-router-dom";
import useReferenzen from "../../Hooks/useReferenzen";
import GradientHeader from "../GradientHeader";

export default function Webdesign() {
  const { Referenzen, referenzIsLoading } = useReferenzen();
  const [showToolTip, setShowToolTip] = useState(false);
  const [shownToolTip, setShownToolTip] = useState("");

  const toggleToolTip = (tooltip: string) => {
    setShownToolTip(tooltip);
    setShowToolTip(!showToolTip);
  };

  const hideToolTips = () => {
    setShowToolTip(false);
    setShownToolTip("");
  };

  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24" id="webdesign">
      <GradientHeader paddingBottom="pb-2">
        Webentwicklung & Hosting
      </GradientHeader>
      <p className="mt-0 text-xl font-semibold text-blue-700">
        Wir liefern innovative Konzepte für von modernen und optimierte
        Webseiten nach Ihren Wünschen, setzen diese für Sie um und kümmern uns
        auf Wunsch auch um das Hosting der Webseite, Emails & Domains.
      </p>
      <div className="grid grid-cols-1 gap-10 my-16">
        <p className="text-xl">
          Wir konzeptionieren & erstellen modernste, optisch ansprechende und
          technisch hochwertige Webseiten - perfekt optimiert auf Ihr Projekt.
        </p>
        <div className="cList">
          <ul className="grid items-center grid-cols-1 gap-10 text-xl leading-snug md:grid-cols-2 2xl:grid-cols-4">
            <li>
              <span>Modernstes, individuelles Web-Design</span>
            </li>
            <li>
              <span>Mobilgeräte (Full Responsive)</span>
            </li>
            <li>
              <span>
                Neueste Techniken <br />(
                <div
                  className="!p-0 !m-0 inline-block	"
                  aria-label="tooltip-react"
                  onMouseOver={() => toggleToolTip("react")}
                  onFocus={() => toggleToolTip("react")}
                  onMouseOut={hideToolTips}
                >
                  <div className="relative">
                    React
                    {showToolTip && shownToolTip == "react" && (
                      <ToolTip text="React ist eine JavaScript-Programmbibliothek zur Erstellung von webbasierten Benutzeroberflächen." />
                    )}
                  </div>
                </div>
                ,{" "}
                <div
                  className="!p-0 !m-0 inline-block	"
                  aria-label="tooltip-framer"
                  onMouseOver={() => toggleToolTip("framer")}
                  onFocus={() => toggleToolTip("framer")}
                  onMouseOut={hideToolTips}
                >
                  <div className="relative">
                    Framer-Motion
                    {showToolTip && shownToolTip == "framer" && (
                      <ToolTip text="Framer-Motion ist eine JavaScript-Programmbibliothek zur Erstellung von Animationen." />
                    )}
                  </div>
                </div>
                ,{" "}
                <div
                  className="!p-0 !m-0 inline-block	"
                  aria-label="tooltip-tailwind"
                  onMouseOver={() => toggleToolTip("tailwind")}
                  onFocus={() => toggleToolTip("tailwind")}
                  onMouseOut={hideToolTips}
                >
                  <div className="relative">
                    TailwindCss
                    {showToolTip && shownToolTip == "tailwind" && (
                      <ToolTip text="TailwindCss ist eine OpenSource-CSS-Bibliothek. TailwindCss erstellt eine Reihe von nützlichen CSS Klassen." />
                    )}
                  </div>
                </div>
                ,{" "}
                <div
                  className="!p-0 !m-0 inline-block	"
                  aria-label="tooltip-typescript"
                  onMouseOver={() => toggleToolTip("typescript")}
                  onFocus={() => toggleToolTip("typescript")}
                  onMouseOut={hideToolTips}
                >
                  <div className="relative">
                    TypeScript
                    {showToolTip && shownToolTip == "typescript" && (
                      <ToolTip text="TypeScript ist eine von Microsoft entwickelte Skriptsprache, die auf den Vorschlägen zum ECMAScript6-Standard basiert und statische Typisierung zu JavaScript hinzufügt." />
                    )}
                  </div>
                </div>
                , etc.)
              </span>
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
          <ul className="grid items-center grid-cols-1 gap-10 text-xl leading-snug md:grid-cols-2 2xl:grid-cols-5">
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
      {/* <div>
        <p className="mb-5 text-xl">Unsere Demoseiten</p>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 grayscale hover:grayscale-0">
            <NavLink
              className="inline-flex flex-col items-center justify-center flex-1 w-full"
              to="https://computerextra.github.io/demo-single-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Screenshot"
                className="object-cover"
                height="200"
                src="/Images/Mocks/singlpage.webp"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="flex flex-col justify-center flex-1 p-4 text-center">
                <h3 className="text-xl font-bold">Static-Single-Page</h3>
                <p>Mit statischen Inhalten</p>
                <p>ab 140€* netto</p>
                <p className="mt-1 text-base text-gray-500">
                  computerextra.github.io/demo-single-page
                </p>
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 grayscale hover:grayscale-0">
            <NavLink
              className="inline-flex flex-col items-center justify-center flex-1 w-full"
              to="https://computerextra.github.io/demo-single-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Screenshot"
                className="object-cover"
                height="200"
                src="/Images/Mocks/singlpage.webp"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="flex flex-col justify-center flex-1 p-4 text-center">
                <h3 className="text-xl font-bold">Static-Multi-Page</h3>
                <p>Mit statischen Inhalten</p>
                <p></p>
                <p className="mt-1 text-base text-gray-500">Noch im aufbau</p>
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 grayscale hover:grayscale-0">
            <NavLink
              className="inline-flex flex-col items-center justify-center flex-1 w-full"
              to="https://computerextra.github.io/demo-single-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Screenshot"
                className="object-cover"
                height="200"
                src="/Images/Mocks/singlpage.webp"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="flex flex-col justify-center flex-1 p-4 text-center">
                <h3 className="text-xl font-bold">Dynamic-Multi-Page</h3>
                <p>Mit dynamischen Inhalten aus Datenbanken</p>
                <p></p>
                <p className="mt-1 text-base text-gray-500">Noch im aufbau</p>
              </div>
            </NavLink>
          </div>
        </div>
        <small className="text-xs font-medium leading-none text-muted-foreground">
          * Der Umfang aller angebotenen Dienstleistungen ist ein Schätzwert,
          der sich aufgrund unserer Erfahrung ergeben hat. Berechnet wird die
          tatsächlich erbrachte Dienstleistung.
        </small>
      </div> */}
      <div className="grid grid-cols-1 gap-10 my-16 lg:grid-cols-2">
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
          <span className="relative flex items-center justify-center w-full h-full text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
            Schreiben Sie uns
          </span>
        </NavLink>
      </div>
      <div className="grid gap-10 my-16 md:grid-cols-2 xl:grid-cols-3">
        {!referenzIsLoading &&
          Referenzen?.map((Referenz, idx) => (
            <div
              className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 grayscale hover:grayscale-0"
              key={idx}
            >
              <NavLink
                className="inline-flex flex-col items-center justify-center flex-1 w-full"
                to={Referenz.Webseite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Screenshot"
                  className="object-cover"
                  height="200"
                  src={Referenz.Bild}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="flex flex-col justify-center flex-1 p-4 text-center">
                  <h3 className="text-xl font-bold">{Referenz.Name}</h3>
                  <p className="mt-1 text-base text-gray-500">
                    {Referenz.Webseite.replace("https://", "")
                      .replace("www.", "")
                      .replace(/\/$/, "")}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </section>
  );
}

function ToolTip({ text }: { text: string }) {
  return (
    <div className="absolute z-[10000] p-4 font-normal text-white rounded-md bg-slate-900/100">
      {text}
    </div>
  );
}
