import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const Words = [
  "Hardware",
  "Software",
  "Netzwerktechnik",
  "Telekommunikation",
  "Webdesign",
  "Webhosting",
];

export default function Startseite() {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const setPlayBack = () => {
    if (videoRef.current == null) return;
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <div>
      <video
        ref={videoRef}
        src="/videos/bg.mp4"
        autoPlay
        loop
        onCanPlay={setPlayBack}
        muted
        className="fixed z-[-2] inset-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 flex flex-col items-center justify-center text-center bg-blue-900/85  z-[-1]">
        <h1 className="text-xl font-bold text-white shadow-lg lg:text-4xl lg:text-start lg:w-xl">
          <span className="font-envision">Computer Extra</span> <br />
          bietet{" "}
          <Typewriter
            words={Words}
            typeSpeed={150}
            deleteSpeed={100}
            delayBetweenWords={2000}
            className="text-white"
          />
          <br />
          der Extraklasse.
        </h1>
        <p className="mt-5 text-white lg:w-xl lg:text-start">
          Ob IT-Infrastruktur, Security oder Kommunikation, Computer Extra hat
          die passenden Produkte und Services verfügbar. Privat-, Office- und
          Gaming-PCs werden direkt auf die Bedürfnisse der Kunden zugeschnitten.
          Die exklusive Partnerschaft mit der Telekom für Business- und
          Privattarife runden das Gesamtpaket ab.
        </p>
        <p className="mt-5 text-center text-white lg:w-xl lg:text-start">
          <span className="text-xl">Öffnungszeiten</span>
          <br />
          <span className="lg:hidden">
            Montag bis Freitag: 09:00 - 18:00 Uhr <br />
            Samstag und Sonntag: Geschlossen
          </span>
        </p>
        <div className="hidden text-white lg:block w-xl text-start">
          <table>
            <tbody>
              <tr>
                <td>Montag bis Freitag</td>
                <td className="ps-2">09:00 - 18:00 Uhr</td>
              </tr>
              <tr>
                <td>Samstag und Sonntag</td>
                <td className="ps-2">Geschlossen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button className="mt-10" variant={"outline"} asChild>
          <Link to="/Termin" className="flex items-center text-black">
            <Calendar className="w-4 h-4 text-black" />
            Jetzt einen Beratungstermin vereinbaren
          </Link>
        </Button>
      </div>
    </div>
  );
}

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

function Typewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Word is complete, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Word is deleted, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
}
