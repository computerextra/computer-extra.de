import { NavLink } from "react-router-dom";
import WertgarantieVideo from "../../Assets/video/RElektro_FINAL_03062101.mp4";
import GradientHeader from "../GradientHeader";

export default function PCKonfiguration() {
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24" id="config">
      <GradientHeader paddingBottom="pb-2">PC-Konfigurationen</GradientHeader>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Wir konfigurieren und bauen Ihren Traum-PC. Wir finden für Sie den
        richtigen, unabhängig von Hersteller und System. Wir beraten und bauen
        für Sie den perfekten Computer, egal ob Spiele-, Office-, oder
        Videobearbeitungs-PC. Wir konfigurieren Ihren Computer für Ihre
        Bedürfnisse.
      </p>
      <div className="grid grid-cols-1 gap-10 my-16">
        <p className="text-xl">
          Gerne übernehmen wir auch die Einrichtung Ihres neuen PCs inklusive
          Übertragung der alten Daten, Installation von Programmen sowie
          einrichtung Ihrer E-Mail Adressen.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <p className="text-xl text-blue-700 font-semibold mt-0">
              Sichern Sie sich ab.
            </p>
            <p className="text-xl py-1">
              Unsere Elektronik-Versicherungen von Wertgarantie
            </p>
            <p className="text-xl py-1">
              Sichern Sie Ihre liebsten Elektronikgeräte mit den Produkten von
              WERTGARANTIE ab.
            </p>
            <p className="text-xl py-1">
              Egal ob Smartphones, Computer, Laptops oder Fernseher - unsere
              Produkte schützen Ihre Lieblinge immer und überall.
            </p>
          </div>
          <video
            src={WertgarantieVideo}
            className="object-cover rounded-lg  max-h-[450px] col-span-2"
            width={"auto"}
            height={900}
            muted
            loop
            playsInline
            controls
            autoPlay
          />
        </div>
        <h4 className="py-2 text-xl text-blue-700 font-semibold mt-0">
          Versicherungsvorteile auf einen Blick
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-3">
          <div className="flex flex-col items-center text-center ring p-2 rounded-xl">
            <h5 className="text-xl py-1">Jederzeit erreichbar</h5>
            <p>
              WERTGARANTIE ist für Sie zu jeder Zeit da und hilft Ihnen stets
              weiter. Sie erreichen WERTGARANTIE online oder telefonisch. Kommen
              Sie auch gerne zu uns, wir helfen Ihnen gerne weiter.
            </p>
          </div>
          <div className="flex flex-col items-center text-center ring p-2 rounded-xl">
            <h5 className="text-xl py-1">Sorgenfreier Schutz</h5>
            <p>
              Ihre Lieblingsgeräte sind mit WERTGARANTIE jederzeit und weltweit
              gegen Reparaturkosten und Diebstahl geschützt.
            </p>
          </div>
          <div className="flex flex-col items-center text-center ring rounded-xl p-2">
            <h5 className="text-xl py-1">Zuverlässiger Service</h5>
            <p>
              Wir bearbeiten Schäden schnell und unkompliziert. Bereits mehr als
              7 Millionen Kunden vertrauen dem Service von WERTGARANTIE.
            </p>
          </div>
        </div>
        <h3 className="text-xl text-blue-700 font-semibold ">
          Alles neu und ungewohnt?
        </h3>
        <p className="py-1 text-xl">
          Das muss nicht sein! Möchten Sie Ihre gewohnte Arbeitsumgebung nicht
          verlieren, übernehmen wir den Umzug Ihrer Daten und Programme für Sie.
          Sie genießen das hohe Arbeitstempo des neuen Computers in Ihrer
          gewohnten Arbeitsumgebung.
        </p>
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
