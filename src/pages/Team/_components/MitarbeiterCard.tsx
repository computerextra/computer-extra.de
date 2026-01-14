import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";
import sortBy from "sort-by";

type Mitarbeiter = {
  id: string;
  name: string;
  short: string;
  image: number;
  sex: string;
  focus: string | null;
  abteilungId: string;
};

type Abteilung = {
  id: string;
  name: string;
  idx: number;
};

interface Sorted extends Mitarbeiter {
  Abteilung: Abteilung;
}

export default function MitarbeiterCard() {
  const [Mitarbeiter, setMitarbeiter] = useState<
    Array<Mitarbeiter> | undefined
  >(undefined);
  const [Abteilungen, setAbteilungen] = useState<Array<Abteilung> | undefined>(
    undefined,
  );

  const [Sorted, setSorted] = useState<Array<Sorted> | undefined>(undefined);

  const [showOverlay, setShowOverlay] = useState(false);
  const [index, setIndex] = useState<Sorted | undefined>(undefined);

  const getMitarbeiter = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Mitarbeiter> }>(
      "https://api.computer-extra.de/mitarbeiter.php",
    );

    if (res.data.data) {
      setMitarbeiter(res.data.data);
    }
  });

  const getAbteilungen = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Abteilung> }>(
      "https://api.computer-extra.de/abteilungen.php",
    );

    if (res.data.data) {
      setAbteilungen(res.data.data);
    }
  });

  useEffect(() => {
    getAbteilungen();
    getMitarbeiter();
  }, []);

  useEffect(() => {
    if (Mitarbeiter == null) return;
    if (Abteilungen == null) return;

    const tmp: Sorted[] = [];

    Abteilungen.sort(sortBy("idx")).forEach((element) => {
      Mitarbeiter.sort(sortBy("name")).forEach((e) => {
        if (element.id === e.abteilungId) {
          tmp.push({
            ...e,
            Abteilung: {
              ...element,
            },
          });
        }
      });
    });

    setSorted(tmp);
  }, [Mitarbeiter, Abteilungen]);

  return (
    <>
      <div
        className={`mb-10 grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-5 ${
          showOverlay ? "blur-sm" : ""
        }`}
      >
        {Sorted?.map((ma) => {
          return (
            <div
              className="customHover text-center hover:cursor-pointer"
              key={ma.id}
              onClick={() => {
                setShowOverlay((prev) => !prev);
                setIndex(ma);
              }}
            >
              {ma.image == 1 ? (
                <img
                  src={`https://bilder.computer-extra.de/data/Mitarbeiter/${ma.short.toLowerCase()}.webp`}
                  height={200}
                  width={200}
                  className="scale-100 rounded-full ring-2 grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:scale-[1.2] md:hover:shadow-xl md:hover:grayscale-0 xl:grayscale"
                />
              ) : ma.sex == "m" ? (
                <img
                  src="https://bilder.computer-extra.de/data/Mitarbeiter/avatar-male-510x510.webp"
                  height={200}
                  width={200}
                  className="scale-100 rounded-full ring-2 grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:scale-[1.2] md:hover:shadow-xl md:hover:grayscale-0 xl:grayscale"
                />
              ) : (
                <img
                  src="https://bilder.computer-extra.de/data/Mitarbeiter/avatar-female-510x510.webp"
                  height={200}
                  width={200}
                  className="scale-100 rounded-full ring-2 grayscale-0 md:transition-all md:duration-300 md:ease-in-out md:hover:scale-[1.2] md:hover:shadow-xl md:hover:grayscale-0 xl:grayscale"
                />
              )}
              <span className="text-2xl font-bold">
                {ma.name} <br />
              </span>
              <span className="text-xl font-thin">{ma.Abteilung.name}</span>
            </div>
          );
        })}
      </div>
      <Overlay
        Mitarbeiter={index}
        show={showOverlay}
        setShow={setShowOverlay}
      />
    </>
  );
}

const Overlay = ({
  Mitarbeiter,
  show,
  setShow,
}: {
  Mitarbeiter: Sorted | undefined;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (Mitarbeiter == null) return;
  if (!show) return null;

  const getMail = (name: string): string => {
    const x = name.split(" ");
    return `${x[0]}.${x[1]} [AT] computer-extra.de`;
  };

  const getImageUrl = (): string => {
    if (Mitarbeiter.image == 1) {
      return `https://bilder.computer-extra.de/data/Mitarbeiter/${Mitarbeiter.short.toLowerCase()}.webp`;
    }
    return `https://bilder.computer-extra.de/data/Mitarbeiter/avatar-${
      Mitarbeiter.sex === "m" ? "male" : "female"
    }-510x510.webp`;
  };

  return (
    <>
      <div
        className="fixed top-0 right-0 bottom-0 left-0 z-999 bg-transparent"
        onClick={() => setShow(false)}
      >
        <div
          className="fixed top-1/4 right-0 left-0 z-1000 mx-auto mt-[12vh] mb-6 w-full max-w-md min-w-0 rounded-xl bg-white wrap-break-word shadow-lg md:max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="close absolute top-2 right-2"
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
              <div className="flex w-full justify-center">
                <div className="relative">
                  <img
                    src={getImageUrl()}
                    className="absolute -m-16 -ml-20 max-w-37.5 rounded-full border-none bg-white align-middle shadow-xl lg:-ml-16"
                  />
                </div>
              </div>
              <div className="mt-20 w-full text-center">
                <div
                  className={`grid grid-cols-${
                    Mitarbeiter.focus &&
                    Mitarbeiter.focus.split("|").length <= 2
                      ? Mitarbeiter.focus.split("|").length
                      : "2"
                  } md:grid-cols-${
                    Mitarbeiter.focus &&
                    Mitarbeiter.focus.split("|").length <= 4
                      ? Mitarbeiter.focus.split("|").length
                      : "4"
                  } justify-center pt-8 pb-0 lg:pt-4`}
                >
                  {Mitarbeiter.focus?.split("|").map((f) => (
                    <div className="p-3 text-center" key={f}>
                      <span className="text-xs text-slate-400">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <h3 className="mb-1 text-2xl leading-normal font-bold text-slate-700">
                {Mitarbeiter.name}
              </h3>
              <div className="mt-0 mb-2 text-xs font-bold text-slate-400 uppercase">
                {Mitarbeiter.Abteilung.name}
              </div>
            </div>
            <div className="mt-6 border-t border-slate-200 py-6 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="mb-4 leading-relaxed font-light text-slate-600">
                    Mail: {getMail(Mitarbeiter.name)}
                  </p>
                  <p className="mb-4 leading-relaxed font-light text-slate-600">
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
