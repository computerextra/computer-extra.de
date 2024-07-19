import { NavLink } from "react-router-dom";
import NetworkImage from "../../Assets/images/network.webp";
import GradientHeader from "../GradientHeader";

export default function Netzwerke() {
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24" id="network">
      <GradientHeader paddingBottom="pb-2">Netzwerke</GradientHeader>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Die Zukunft der Vernetzung!
      </p>
      <p className="text-xl py-2">
        In der heutigen Zeit sind effiziente IT-Strukturen ein entscheidender
        Faktor für Erfolg. Deshalb orientieren sich unsere Konzepte an Ihren
        Bedürfnissen von morgen. Als erfahrener Dienstleister bieten wir
        umfassende Lösungen im Bereich der modernen Datentechnik, um eine
        optimale Vernetzung von Anlagen und Systemen in Unternehmen zu schaffen.
      </p>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Das können wir für Sie tun:
      </p>
      <div className="cList my-7">
        <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 leading-snug items-center">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <p className="text-xl py-2">
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
          src={NetworkImage}
          alt="G Data Logo"
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
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
    </section>
  );
}
