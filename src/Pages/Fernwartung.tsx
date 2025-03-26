import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimationLayout from "../Components/AnimationLayout";
import HelpWindow from "../Components/Fernwartung/HelpWindow";
import GradientHeader from "../Components/GradientHeader";
import { DL_VALUE, PCVisitLink } from "../config";
import useAnalytics from "../Hooks/useAnalytics";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Fernwartung() {
  useTitle("Fernwartung");
  useAnalytics("Fernwartung");
  const [showRest, setShowRest] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  const handleClick = () => {
    setShowWarning(!showWarning);
    setShowRest(!showRest);
  };

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };
  return (
    <AnimationLayout>
      <MainLayout
        title="Fernwartung"
        subtitle="mit einem Qualifizierten Mitarbeiter"
      >
        <div className="bg-white min-h-[40vh]">
          {showWarning && (
            <div className="order-2 text-xl lg:order-1">
              <GradientHeader>
                Folgenden Hinweis habe ich zur Kenntnis genommen:
              </GradientHeader>
              <p className="py-2 text-xl font-bold">
                Mir ist bekannt, dass die Unterstützung kostenpflichtig ist!
              </p>
              <p className="py-1">
                Sofern keine anderweitigen individuellen Vereinbarungen gelten,
                betragen die Kosten für die ersten 30 Minuten {DL_VALUE * 2}€
                und je weiteren begonnenen 15 Minuten {DL_VALUE}€ inklusive der
                derzeit gültigen Mehrwertsteuer.
              </p>
              <p className="py-1">
                Im Rahmen der Fernwartung können Daten und Einstellungen auf
                meinem Computer verändert werden. Der Supportmitarbeiter handelt
                mit meinem Einverständnis. Des Weiteren gelten unsere{" "}
                <NavLink className="text-blue-600 underline" to="/AGB">
                  AGB
                </NavLink>
                .
              </p>
              <p className="py-1">
                Es werden personenbezogene Daten im Einklang mit unserer{" "}
                <NavLink to="/Datenschutz" className="text-blue-600 underline">
                  Datenschutzerklärung
                </NavLink>{" "}
                erhoben.
              </p>
              <div className="flex items-center w-full my-5">
                <button
                  onClick={handleClick}
                  className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                >
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Zur Kenntnis genommen
                  </span>
                </button>
              </div>
            </div>
          )}

          {showRest && (
            <div className="order-2 text-xl lg:order-1">
              <div className="flex items-center w-full my-5">
                <button
                  onClick={handleShowHelp}
                  className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                >
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    {showHelp ? "Hilfe ausblenden" : "Benötigen Sie Hilfe?"}
                  </span>
                </button>
              </div>

              {showHelp && <HelpWindow />}

              <p className="py-1">
                Bitte klicken Sie auf den Download für Ihr Betriebssystem, um
                den Download für die Fernwartungssoftware zu starten.
              </p>
              <p className="py-1">
                Je nach Konfiguration und Browser müssen Sie noch einen
                Speicherort auswählen.
              </p>
              <p className="py-1">Führen Sie die heruntergeladene Datei aus.</p>
              <p className="py-1 font-semibold">
                Sollten Sie Fragen haben, steht Ihnen unser Mitarbeiter, der mit
                Ihnen die Fernwartung durchführt selbstverständlich gern zur
                Verfügung.
              </p>
              <p className="py-1 font-semibold">
                Ist die Software gestartet, müssen Sie eine Verbindungsnummer
                eingeben.{" "}
                <span className="font-semibold">
                  Diese erhalten Sie von unserem Techniker.
                </span>
              </p>
              <DownloadBtn />
            </div>
          )}
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}

function DownloadBtn() {
  const disabled =
    (!navigator.userAgent.includes("Windows") &&
      !navigator.userAgent.includes("Mac")) ||
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad");
  return (
    <div className="flex items-center w-full my-5">
      <a
        href={PCVisitLink}
        onClick={(e) => disabled && e.preventDefault()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          {disabled ? (
            <>Ihr Betriebssystem wird aktuell nicht Unterstützt</>
          ) : (
            <>
              Download für{" "}
              {navigator.userAgent.includes("Windows") ? "Windows" : "MacOs"}
            </>
          )}
        </span>
      </a>
    </div>
  );
}
