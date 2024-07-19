import { NavLink } from "react-router-dom";
import TelekomWand from "../../Assets/images/TelekomWand.webp";
import BusinessKommunikationBild from "../../Assets/images/business.webp";
import GradientHeader from "../GradientHeader";

export default function Kommunikation() {
  return (
    <section
      className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24"
      id="communication"
    >
      <GradientHeader paddingBottom="pb-2">
        Business Kommunikation
      </GradientHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <p className="text-xl order-last md:order-first">
          Entdecken Sie maßgeschneiderte Kommunikationslösungen für Ihr
          Unternehmen. Als zertifizierter Partner namhafter Hersteller wie{" "}
          <span className="font-semibold underline">Auerswald</span>,{" "}
          <span className="font-semibold underline">Bintec Elmeg</span> und{" "}
          <span className="font-semibold underline">Agfeo</span> bieten wir
          Ihnen erstklassige Beratung, schnelle installation und qualifizierten
          Service. Auf Kundenwunsch installieren wir die neue Telefonanlage
          lokal vor Ort oder in der Cloud. Kontaktieren Sie uns jetzt für eine{" "}
          <NavLink className="text-blue-600 underline" to="/Kontakt">
            unverbindliche Beratung
          </NavLink>
          .
        </p>

        <img
          src={BusinessKommunikationBild}
          alt=""
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out md:order-last order-first"
          width={900}
        />
      </div>
      <GradientHeader className="pt-10">Mobilfunk</GradientHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="order-last md:order-first text-xl">
          <p>
            Wir sind exklusiver Partner der Deutschen Telekom und bieten Ihnen
            neben den Tarifen aus dem Telekom Netz auch die Produkte von
            CONGSTAR an.
          </p>
          <p>
            Bei uns erhalten Sie alle Endgeräte der führenden Marken wie z.B.
            Apple, Samsung, Google, Sony, Xiaomi,
          </p>
        </div>
        <img
          src={TelekomWand}
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out md:order-last order-first"
          width={900}
        />
      </div>
      <h2 className="text-xl font-semibold text-blue-700 pb-10">
        Was bieten wir Ihnen?
      </h2>
      <div className="cList">
        <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 leading-snug items-center">
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
