import AnimationLayout from "../Components/AnimationLayout";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

const Werte = [
  {
    x: "Empfänger",
    y: "Computer Extra GmbH",
  },
  {
    x: "Institut",
    y: "Volksbank Kassel-Göttingen",
  },
  {
    x: "IBAN",
    y: "DE95 5209 0000 0021 7112 09",
  },
  {
    x: "BIC",
    y: "GENODE51KS1",
  },
  {
    x: "Gläubiger ID",
    y: "DE29ZZZ00000100909",
  },
];

export default function Bankverbindung() {
  useTitle("Bankverbindung");
  return (
    <AnimationLayout>
      <MainLayout title="Bankverbindung" subtitle="">
        <div className="min-h-[40vh] bg-white">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full lg:py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full font-light text-left lg:text-xl text-surface ">
                    <tbody>
                      {Werte.map((x, idx) => (
                        <tr
                          className="transition duration-300 ease-in-out border-b border-neutral-200 hover:bg-neutral-100 "
                          key={idx}
                        >
                          <td className="px-6 font-medium whitespace-nowrap lg:py-4">
                            {x.x}
                          </td>
                          <td className="px-6 whitespace-nowrap lg:py-4">
                            {x.y}
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
