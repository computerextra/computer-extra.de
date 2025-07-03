import AnimationLayout from "../Components/AnimationLayout";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

const Werte = [
  {
    Datei: "Auftragsdatenverarbeitungsvertrag",
    Stand: "01.11.2023",
    Download: "avv.pdf",
  },
  {
    Datei: "Anlage 1 - Technische- und Organisatorische Maßnahmen",
    Stand: "24.09.2024",
    Download: "ANLAGE_1_TOM.pdf",
  },
  {
    Datei: "Anlage 2 - Zugelassene Subdienstleister",
    Stand: "22.05.2024",
    Download: "ANLAGE_2_Subdienstleister.pdf",
  },
  {
    Datei:
      "Anlage 3 - Weisungsberechtigte Personen, Adresse zur Meldung von Datenschutzverletzungen",
    Stand: "01.11.2023",
    Download: "ANLAGE_3_Weisungsberechtigte.pdf",
  },
  {
    Datei: "Anlage 4 - Datenschutzbeauftragter",
    Stand: "27.10.2023",
    Download: "ANLAGE_4_DSB.pdf",
  },
];

export default function Auftragsverarbeitung() {
  useTitle("Auftragsdatenverarbeitungsvertrag");
  return (
    <AnimationLayout>
      <MainLayout
        title="Auftragsdaten&shy;verarbeitungs&shy;vertrag"
        subtitle="Download des aktuellen AVV"
      >
        <div className="min-h-[35vh] bg-white">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full font-light text-left lg:text-xl text-surface ">
                    <tbody>
                      {Werte.map((x, idx) => (
                        <tr
                          className="transition duration-300 ease-in-out border-b border-neutral-200 hover:bg-neutral-100"
                          key={idx}
                        >
                          <td className="px-6 font-medium md:whitespace-nowrap lg:py-4">
                            {x.Datei}
                          </td>
                          <td className="px-6 whitespace-nowrap lg:py-4">
                            {x.Stand}
                          </td>
                          <td className="px-6 whitespace-nowrap lg:py-4">
                            <div className="flex items-center w-full my-5">
                              <a
                                href={"/data/avv/" + x.Download}
                                target="_blank"
                                className="relative px-10 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner lg:py-5 group"
                              >
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                                  Download
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
