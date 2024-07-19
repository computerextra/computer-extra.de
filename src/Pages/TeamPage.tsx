import { useEffect, useState } from "react";
import sortBy from "sort-by";
import AnimationLayout from "../Components/AnimationLayout";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAnalytics from "../Hooks/useAnalytics";
import useMitarbeiter, { Mitarbeiter } from "../Hooks/useMitarbeiter";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function TeamPage() {
  useTitle("Team");
  useAnalytics("Team");
  const { Mitarbeiter, mitarbeiterIsLoading } = useMitarbeiter();
  const [SortierteMitarbeiter, setMitarbeiter] = useState<
    Mitarbeiter[] | undefined
  >(undefined);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState<string | undefined>(undefined);

  // Sortiere nach Abteilung, danach nach Name
  useEffect(() => {
    if (Mitarbeiter == null) return;

    const gf = Mitarbeiter.filter(
      (m) => m.Abteilung == "Geschäftsführung"
    ).sort(sortBy("name"));
    const sl = Mitarbeiter.filter((m) => m.Abteilung == "Standortleitung").sort(
      sortBy("name")
    );
    const vt = Mitarbeiter.filter((m) => m.Abteilung == "Vertrieb").sort(
      sortBy("name")
    );
    const ad = Mitarbeiter.filter((m) => m.Abteilung == "Außendienst").sort(
      sortBy("name")
    );
    const tk = Mitarbeiter.filter((m) => m.Abteilung == "Technik").sort(
      sortBy("name")
    );
    const sv = Mitarbeiter.filter((m) => m.Abteilung == "Service").sort(
      sortBy("name")
    );
    const bh = Mitarbeiter.filter((m) => m.Abteilung == "Buchhaltung").sort(
      sortBy("name")
    );
    const az = Mitarbeiter.filter((m) => m.Abteilung == "Azubi").sort(
      sortBy("name")
    );

    setMitarbeiter([...gf, ...sl, ...vt, ...ad, ...tk, ...sv, ...bh, ...az]);
  }, [Mitarbeiter]);

  return (
    <>
      <div className={`${show && "blur-sm"}`}>
        <AnimationLayout>
          <MainLayout
            title="Team"
            subtitle="Wir schaffen ein flexibles Angebot für unsere Kunden - transparent, kreativ, persönlich."
          >
            <>
              {mitarbeiterIsLoading ? (
                <LoadingSpinner />
              ) : (
                <div
                  className={`grid justify-items-center grid-cols-2 lg:grid-cols-5 gap-10 mb-10 ${
                    show && "blur-sm"
                  }`}
                >
                  {!mitarbeiterIsLoading &&
                    SortierteMitarbeiter?.map((p, idx) => (
                      <div
                        className="text-center customHover hover:cursor-pointer"
                        key={idx}
                        onClick={() => {
                          setShow((prev) => !prev);
                          setIndex(p.name);
                        }}
                      >
                        {p.image ? (
                          <img
                            src={`/Images/Mitarbeiter/${p.short}/kreis-510x510.webp`}
                            height={200}
                            width={200}
                            className="rounded-full ring-2 grayscale-0 xl:grayscale md:hover:grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:shadow-xl md:hover:scale-[1.2] scale-100"
                          />
                        ) : p.sex == "m" ? (
                          <img
                            src="/Images/Mitarbeiter/avatar-male-510x510.webp"
                            height={200}
                            width={200}
                            className="rounded-full ring-2 grayscale-0 xl:grayscale md:hover:grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:shadow-xl md:hover:scale-[1.2] scale-100"
                          />
                        ) : (
                          <img
                            src="/Images/Mitarbeiter/avatar-female-510x510.webp"
                            height={200}
                            width={200}
                            className="rounded-full ring-2 grayscale-0 xl:grayscale md:hover:grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:shadow-xl md:hover:scale-[1.2] scale-100"
                          />
                        )}
                        <span className="text-2xl font-bold">
                          {p.name} <br />
                        </span>
                        <span className="text-xl font-thin">{p.Abteilung}</span>
                      </div>
                    ))}
                </div>
              )}
            </>
          </MainLayout>
        </AnimationLayout>
      </div>
      <Overlay
        Mitarbeiter={Mitarbeiter}
        show={show}
        setShow={setShow}
        index={index}
      />
    </>
  );
}

const Overlay = ({
  Mitarbeiter,
  show,
  setShow,
  index,
}: {
  Mitarbeiter: Mitarbeiter[] | undefined;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  index: string | undefined;
}) => {
  if (Mitarbeiter == null) return;
  const Ma = Mitarbeiter.find((m) => m.name == index);
  if (Ma == null) return null;
  if (!show) return null;

  const getMail = (name: string): string => {
    const x = name.split(" ");
    return `${x[0]}.${x[1]} [AT] computer-extra.de`;
  };
  const getImageUrl = (): string => {
    if (Ma.image) {
      return `/Images/Mitarbeiter/${Ma.short}/kreis-510x510.webp`;
    }
    return `/Images/Mitarbeiter/avatar-${
      Ma.sex === "m" ? "male" : "female"
    }-510x510.webp`;
  };

  return (
    <>
      <div
        className="bg-transparent fixed top-0 bottom-0 left-0 right-0 z-[999]"
        onClick={() => setShow(false)}
      >
        <div
          className="fixed z-[1000] top-1/4 left-0 right-0  max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-[12vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="close absolute right-2 top-2"
            onClick={() => setShow(false)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <svg viewBox="0 0 36 36" className="circle">
              <path
                strokeDasharray="100, 100"
                d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="relative">
                  <img
                    src={getImageUrl()}
                    className="shadow-xl bg-white rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div className="w-full text-center mt-20">
                <div
                  className={`grid grid-cols-${
                    Ma.focus.length <= 2 ? Ma.focus.length : "2"
                  } md:grid-cols-${
                    Ma.focus.length <= 4 ? Ma.focus.length : "4"
                  } justify-center lg:pt-4 pt-8 pb-0`}
                >
                  {Ma.focus.map((f) => (
                    <div className="p-3 text-center" key={f}>
                      <span className="text-xs text-slate-400">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                {Ma.name}
              </h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                {Ma.Abteilung}
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="font-light leading-relaxed text-slate-600 mb-4">
                    Mail: {getMail(Ma.name)}
                  </p>
                  <p className="font-light leading-relaxed text-slate-600 mb-4">
                    Telefon:{" "}
                    <a className="underline" href="tel:0561601440">
                      0561 / 60 144 0
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
