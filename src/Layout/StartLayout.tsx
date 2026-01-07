import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function StartLayout({ children }: Props) {
  useEffect(() => {
    // Video in Slow Motion
    const video = document.querySelector("#bgvid") as HTMLVideoElement;
    if (video == null) return;

    video.playbackRate = 0.5;
  }, []);

  return (
    <>
      <video
        autoPlay
        id="bgvid"
        muted
        loop
        playsInline
        src="/videos/bg.mp4"
        className="absolute top-0 left-0 right-0 z-10 object-cover min-w-full min-h-screen invert grayscale"
      />
      <div className="relative z-20 w-full min-h-screen bg-blue-600/50">
        <div className="min-h-[75vh] ps-5 pe-5 flex flex-col justify-center w-full mx-2 lg:pt-[10vh]  lg:mx-0 lg:ps-[20%] lg:pe-0">
          <h1 className="px-10 py-0 pt-3 text-3xl font-bold uppercase lg:text-5xl text-slate-100 max-w-fit rounded-xl md:py-4">
            Computer Extra bietet&nbsp;
            <br className="2xl:hidden" />
            <AnimatedText />
            <br />
            der Extraklasse.
          </h1>
          {/* TODO: Weihnachten */}
          {/* START WEIHNACHTEN UND CO */}
          {/* <Weihnachten /> */}
          {/* <h2 className="text-xl lg:text-2xl font-semibold text-slate-100 mt-3 md:mt-[2rem] w-full lg:w-[50%] max-w-fit rounded-xl px-10 md:py-4 bg-blue-900/70">
						Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
						die passenden Produkte und Services verfügbar. Privat-, Office- und
						Gaming-PCs werden direkt auf die Bedürfnisse der Kunden
						zugeschnitten. Die exklusive Partnerschaft mit der Telekom für
						Business- und Privattarife runden das Gesamtpaket ab.
					</h2> */}
          {/* NICHT WEIHNACHTEN */}
          <h2 className="text-xl lg:text-2xl font-semibold text-slate-100 mt-3 md:mt-[5rem] w-full lg:w-[50%] max-w-fit rounded-xl px-10 md:py-4 bg-blue-900/70">
            Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
            die passenden Produkte und Services verfügbar. Privat-, Office- und
            Gaming-PCs werden direkt auf die Bedürfnisse der Kunden
            zugeschnitten. Die exklusive Partnerschaft mit der Telekom für
            Business- und Privattarife runden das Gesamtpaket ab.
          </h2>
          {/* STOP WEIHNACHTEN UND CO */}

          <h2 className="text-xl lg:text-2xl font-semibold text-slate-100 mt-3 md:mt-[5rem] w-full lg:w-[50%] max-w-fit rounded-xl px-10 md:py-4 bg-blue-900/70">
            Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
            die passenden Produkte und Services verfügbar. Privat-, Office- und
            Gaming-PCs werden direkt auf die Bedürfnisse der Kunden
            zugeschnitten. Die exklusive Partnerschaft mit der Telekom für
            Business- und Privattarife runden das Gesamtpaket ab.
          </h2>
          <div className="text-xl lg:text-2xl font-bold text-slate-100 mt-3 md:mt-[5rem] w-full lg:w-[50%] max-w-fit rounded-xl px-10 md:py-4 bg-blue-900/70">
            <h3 className="uppercase">Öffnungszeiten</h3>
            <p>
              Montag - Freitag: 09:00 - 18:00 | Samstag - Sonntag: geschlossen
            </p>
          </div>
          <NavLink
            to="/Termin"
            className="hover:scale-105 hover:bg-blue-900 focus:bg-blue-900 hover:underline focus:underline transition-all ease-in-out duration-100 text-xl lg:text-2xl font-bold text-slate-100 mt-3 md:mt-[5rem] w-full lg:w-[50%] max-w-fit rounded-xl px-10 md:py-4 bg-blue-900/70"
          >
            Jetzt einen Telekom Beratungstermin buchen
          </NavLink>
        </div>
        <div className="overflow-hidden">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div className="w-full pt-5 bg-white">
          <div className="w-11/12 pt-10 mx-auto rounded-t-xl">{children}</div>
        </div>
      </div>
    </>
  );
}

const AnimatedText = () => {
  const texts = [
    "Hardware",
    "Software",
    "Netzwerktechnik",
    "Telekommunikation",
    "Webdesign",
    "Webhosting",
  ];

  const [text, setText] = useState(texts[0]);

  const variants: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 2.5, filter: "blur(10px)" },
  };

  const getNext = (idx: number) => {
    if (idx < texts.length - 1) return idx + 1;
    else return 0;
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(texts[i]);
      i = getNext(i);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={text}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
};
