import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import ServerImage from "../../Assets/images/Server.webp";
import SpeicherImage from "../../Assets/images/Speicher.webp";
import GradientHeader from "../GradientHeader";

const imgs: string[] = [
  "/Images/Ontrack/01_BoardLogo.webp",
  "/Images/Ontrack/02_BrokenChip.webp",
  "/Images/Ontrack/03_BrokenPlatter_Logo.webp",
  "/Images/Ontrack/04_Channel_Logo.webp",
  "/Images/Ontrack/05_DappledLogo.webp",
  "/Images/Ontrack/06_Fingerprint_Logo.webp",
  "/Images/Ontrack/07_FireCard_Logo.webp",
  "/Images/Ontrack/08_FireDamageEditLogo.webp",
  "/Images/Ontrack/09_FireDrive_Logo.webp",
  "/Images/Ontrack/10_GlassPlatter_NewLogo.webp",
  "/Images/Ontrack/11_HeadScratchLogo.webp",
  "/Images/Ontrack/12_IDE_Logo.webp",
  "/Images/Ontrack/13_MacroCrash_Ontrack.webp",
  "/Images/Ontrack/14_MediaContamination2_Ontrack.webp",
  "/Images/Ontrack/15_MediaDamage2_Ontrack.webp",
  "/Images/Ontrack/16_SpiderboardFB.webp",
];

export default function Datenrettung() {
  return (
    <section
      className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24"
      id="data-retention"
    >
      <GradientHeader paddingBottom="pb-2">Datenrettung</GradientHeader>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Datenrettungen von HDD bis Tapes, DSGVO-Konforme Datenlöschungen.
      </p>
      <div className="my-10">
        <SwipeCarousel />
      </div>
      <div className="grid grid-cols-1 my-16">
        <a
          href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative h-full w-full flex items-center justify-center text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
            Jetzt Datenrettung anfragen
          </span>
        </a>
      </div>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Professionelle Datenrettung mit Ontrack
      </p>
      <p className="text-xl py-2">
        Ontrack verfügt über jahrzehntelange Erfahrung in der
        Datenwiederherstellung für alle Medien, Hersteller und Modelle und
        bietet Kunden bewährte Lösungen und Produkte.
      </p>
      {/* SERVER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div>
          <p className="text-xl text-blue-700 font-semibold mt-0">
            Benötigen Sie eine Server-Wiederherstellung?
          </p>
          <p className="text-xl py-2">
            Hardware-Ausfälle, menschliche Fehler, fehlende Daten, Malware,
            Cyber-Angriffe und Naturkatastrophen.
          </p>
          <p className="text-xl py-2">
            Wir haben das alles schon erlebt. Serverausfälle haben massive
            Auswirkungen auf die Produktivität von Unternehmen. Kleine, mittlere
            und große, weltweit agierende, Unternehmen, vertrauen Ontrack bei
            der zeitkritischen Wiederherstellung und Abfrage von Das, NAS, SDS
            oder Server-Daten. Ontrack hilft Ihnen auch bei der
            Datenwiederherstellung, wenn Ihr Backup-System beschädigt wurde.
          </p>
          <div className="grid grid-cols-1 my-16">
            <a
              href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative h-full w-full flex items-center justify-center text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
                Server Datenrettung
              </span>
            </a>
          </div>
        </div>
        <img
          src={ServerImage}
          alt="Server"
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      {/* SD KArte */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div>
          <p className="text-xl text-blue-700 font-semibold mt-0">
            Wertvolle digitale Erinnerungen gelöscht?
          </p>
          <p className="text-xl py-2">
            Wir kümmern uns um die Datenwiederherstellung von Digitalkameras,
            USB-Sticks, Memory Cards oder Flash-Drives.
          </p>
          <p className="text-xl py-2">
            Die Experten von Ontrack wissen, wie Sie Ihre Fotos, Dateien und
            Videos von allen Storage Medien - auch beschädigten - wieder
            verfügbar machen können.
          </p>
          <div className="grid grid-cols-1 my-16">
            <a
              href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative h-full w-full flex items-center justify-center text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
                SD Karte wiederherstellen
              </span>
            </a>
          </div>
        </div>
        <img
          src={SpeicherImage}
          alt="Speicher"
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <p className="text-xl text-blue-700 font-semibold mt-0">
        Wie schnell benötigen Sie Ihre Daten?
      </p>
      <p className="text-xl py-5">
        Zeit ist ein wichtiger Faktor bei der Datenrettung. Wir haben für jeden
        Anspruch den richtigen Service.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-yellow-300 text-center p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <p className="font-semibold text-2xl py-4">Standard</p>
          <p className="text-lg pb-4">7 - 10 Geschäftstage</p>
        </div>
        <div className="bg-green-400 text-white text-center p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <p className="font-semibold text-2xl py-4">Express</p>
          <p className="text-lg pb-4">Durchschnittlich 3 Geschäftstage</p>
        </div>
        <div className="bg-red-500 text-white text-center p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <p className="font-semibold text-2xl py-4">Notfall</p>
          <p className="text-lg pb-4">Rund um die Uhr bis zur Fertigstellung</p>
        </div>
      </div>
      <p className="text-xl py-5">
        Um den Zustand der Daten zu bestimmen werden Ihre Medien von den
        Experten bei Ontrack analysiert. Optional erhalten Sie einen
        detaillierten Online-Bericht mit allen wieder herstellbaren Dateien,
        bevor Sie sich für die Datenrettung entscheiden.
      </p>
      <div className="grid grid-cols-1 my-16">
        <a
          href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative h-full w-full flex items-center justify-center text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
            Jetzt Datenrettung anfragen
          </span>
        </a>
      </div>
    </section>
  );
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.img
            src={imgSrc}
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
