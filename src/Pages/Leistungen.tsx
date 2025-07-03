import { Suspense, lazy } from "react";
import AnimationLayout from "../Components/AnimationLayout";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

const handleClick = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const yOffset = -150;
    const Bounding = element.getBoundingClientRect().top;
    const y = Bounding + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Webdesign = lazy(() => import("../Components/Leistungen/Webdesign"));
const PCKonfiguration = lazy(
  () => import("../Components/Leistungen/PCKonfiguration")
);
const Kommunikation = lazy(
  () => import("../Components/Leistungen/Kommunikation")
);
const Security = lazy(() => import("../Components/Leistungen/Security"));
const Netzwerke = lazy(() => import("../Components/Leistungen/Netzwerke"));
const Datenrettung = lazy(
  () => import("../Components/Leistungen/Datenrettung")
);

export default function Leistungen() {
  useTitle("Leistungen");
  return (
    <AnimationLayout>
      <MainLayout
        title="Leistungen"
        subtitle="Wir bieten Ihnen ein ganzes Spektrum an Dienstleistungen im Bereich der IT."
      >
        <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24">
          <p className="text-lg">
            Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
            die passenden Produkte und Services verfügbar. Privat-, Office- und
            Gaming-PCs werden direkt auf Ihre Bedürfnisse zugeschnitten. Die
            exklusive Partnerschaft mit der Telekom für Business- und
            Privattarife runden das Gesamtpaket ab. Webdesign und -entwicklung
            sowie das passende Hosting von Webseiten und Mails darf dabei nicht
            fehlen. Wenn doch einmal etwas schiefläuft, sind die kompetenten
            Techniker per Fernwartung schnell am Start und können viele Probleme
            in kürzester Zeit aus der Ferne lösen. Falls das Problem größer oder
            komplexer wird, fahren die Kollegen auch gerne vor Ort.
          </p>
        </section>
        <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24 grid grid-cols-2 xl:grid-cols-4 gap-10">
          <NavigationButton text="Webdesign & Hosting" to="webdesign" />
          <NavigationButton text="PC Konfigurationen" to="config" />
          <NavigationButton text="Kommunikation" to="communication" />
          <NavigationButton text="IT Security" to="security" />
          <NavigationButton text="Netzwerke" to="network" />
          <NavigationButton text="Datenrettung" to="data-retention" />
        </section>
        <Suspense>
          <Webdesign />
        </Suspense>
        <hr />
        <Suspense>
          <PCKonfiguration />
        </Suspense>
        <hr />
        <Suspense>
          <Kommunikation />
        </Suspense>
        <hr />
        <Suspense>
          <Security />
        </Suspense>
        <hr />
        <Suspense>
          <Netzwerke />
        </Suspense>
        <hr />
        <Suspense>
          <Datenrettung />
        </Suspense>
      </MainLayout>
    </AnimationLayout>
  );
}

function NavigationButton({ text, to }: { text: string; to: string }) {
  return (
    <div
      onClick={() => handleClick(to)}
      className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group hover:cursor-pointer"
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      <span className="relative flex items-center justify-center w-full h-full text-2xl text-center transition-colors duration-300 delay-200 group-hover:text-white ease">
        {text}
      </span>
    </div>
  );
}
