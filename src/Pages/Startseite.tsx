import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BadgePercent,
  Calendar,
  CalendarRange,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const Words = [
  "Hardware",
  "Software",
  "Netzwerktechnik",
  "Telekommunikation",
  "Webentwicklung",
  "Webhosting",
];

export default function Startseite() {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [paddingTop, setPaddingTop] = useState<string>("0");

  useEffect(() => {
    const getPadding = () => {
      const minPadding = 10;
      const maxHeight = 1200;
      const height = window.innerHeight;
      let p = 0;
      if (height > maxHeight) {
        p = 0;
      } else {
        p = maxHeight - height;
      }
      setPaddingTop(`min(calc(${p}px), ${minPadding}rem)`);
    };

    window.addEventListener("resize", getPadding);
    getPadding();
    return () => window.removeEventListener("resize", getPadding);
  }, []);

  const isOpen = (): boolean => {
    const d = new Date();
    return (
      d.getHours() >= 9 &&
      d.getHours() < 18 &&
      d.getDay() !== 0 &&
      d.getDay() !== 6
    );
  };

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
        className="fixed top-0 left-0 right-0 bottom-0 z-[-2] w-full h-full object-cover"
      />
      {/* Mobile */}
      <div className="fixed inset-0 flex flex-col items-center justify-center text-center bg-blue-900/85 z-[-1] xl:hidden">
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
        <Button
          className="mt-10 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          variant={"outline"}
          asChild
        >
          <Link to="/Termin" className="flex items-center text-black">
            <Calendar className="w-4 h-4 text-black" />
            Jetzt einen Beratungstermin vereinbaren
          </Link>
        </Button>
        <Button
          className="mt-10 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          variant={"outline"}
          asChild
        >
          <a href="tel:0561601440" className="flex items-center text-black">
            <Phone className="w-4 h-4 text-black" />
            0561 / 60 144 0
          </a>
        </Button>
      </div>
      {/* Desktop */}
      <div
        className="min-h-screen min-w-screen hidden bg-blue-900/80 xl:flex justify-center items-center z-[-1] overflow-auto"
        style={{ paddingTop: paddingTop }}
      >
        <div className="container flex items-center h-full mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-6 gap-4 h-auto max-h-[1000px]">
            <Card className="col-span-6 row-span-2 transition-shadow duration-300 shadow-sm bg-blue-950/75 border-blue-950 hover:shadow-md">
              <CardContent className="flex flex-col justify-center h-full px-8">
                <h1 className="mb-4 font-bold leading-tight text-6xl text-slate-100 !text-start">
                  Willkommen bei{" "}
                  <span className="font-envision text-slate-100">
                    Computer Extra
                  </span>
                  <span className="block">
                    Ihrem Spezialisten für{" "}
                    <Typewriter
                      words={Words}
                      typeSpeed={150}
                      deleteSpeed={100}
                      delayBetweenWords={2000}
                    />
                  </span>
                </h1>
                <p className="max-w-2xl text-lg text-slate-100/80">
                  Ob IT-Infrastruktur, Security oder Kommunikation, Computer
                  Extra hat die passenden Produkte und Services verfügbar.
                  Privat-, Office- und Gaming-PCs werden direkt auf die
                  Bedürfnisse der Kunden zugeschnitten. Die exklusive
                  Partnerschaft mit der Telekom für Business- und Privattarife
                  runden das Gesamtpaket ab.
                </p>
              </CardContent>
            </Card>

            {/* Card Opening Hours */}
            <Card className="col-span-4 row-span-2 transition-shadow duration-300 shadow-sm bg-blue-950/75 border-blue-950 hover:shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-100">
                  <Clock className="w-5 h-5 text-slate-100" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-100/80">Montag - Freitag</span>
                  <span className="font-medium text-slate-100">
                    9:00 - 18:00
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-100/80">Samstag</span>
                  <span className="font-medium text-slate-100">
                    Geschlossen
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-100/80">Sonntag</span>
                  <span className="font-medium text-slate-100">
                    Geschlossen
                  </span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    {isOpen() ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-slate-100/80">
                          Jetzt geöffnet
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-slate-100/80">Geschlossen</span>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card 1 - Contact */}
            <Card className="col-span-1 transition-all duration-300 border-0 shadow-sm bg-primary text-slate-100 hover:shadow-lg hover:scale-105 group">
              <CardContent className="flex flex-col justify-center h-full p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="mb-2 text-xl">Jetzt anrufen</CardTitle>
                <CardDescription className="mb-4 text-slate-100/80">
                  Sprechen Sie direkt mit unserem Team
                </CardDescription>
                <Button
                  variant="secondary"
                  asChild
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href="tel:0561601440">
                    0561 / 60144 0 <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CTA Card 2 - Visit */}
            <Card className="col-span-1 transition-all duration-300 border-0 shadow-sm bg-accent text-accent-foreground hover:shadow-lg hover:scale-105 group">
              <CardContent className="flex flex-col justify-center h-full p-6 text-center">
                <CalendarRange className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="mb-2 text-xl">Beratung</CardTitle>
                <CardDescription className="mb-4 text-accent-foreground/80">
                  Buchen Sie sich einen Telekom-Beratungstermin
                </CardDescription>
                <Button
                  variant="secondary"
                  asChild
                  className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                >
                  <Link to="/Termin">
                    Termin Buchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* CTA Card 3 - Visit */}
            <Card className="col-span-1 transition-all duration-300 border-0 shadow-sm bg-accent text-accent-foreground hover:shadow-lg hover:scale-105 group">
              <CardContent className="flex flex-col justify-center h-full p-6 text-center">
                <BadgePercent className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="mb-2 text-xl">Angebote</CardTitle>
                <CardDescription className="mb-4 text-accent-foreground/80">
                  Schauen Sie sich unsere Angebote an
                </CardDescription>
                <Button
                  variant="secondary"
                  asChild
                  className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                >
                  <Link to="/Angebote">
                    <span className="hidden 2xl:block">Angebote entdecken</span>
                    <span className="block 2xl:hidden">Angebote</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* CTA Card 4 - Email Contact */}
            <Card className="transition-all duration-300 border-0 shadow-sm bg-secondary text-secondary-foreground hover:shadow-lg hover:scale-105 group">
              <CardContent className="flex flex-col justify-center h-full p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="mb-2 text-xl">Kontakt</CardTitle>
                <CardDescription className="mb-4 text-secondary-foreground/80">
                  Schreiben Sie uns eine Nachricht
                </CardDescription>
                <Button
                  variant="secondary"
                  asChild
                  className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                >
                  <Link to="/Kontakt">
                    <span className="hidden 2xl:block">Kontakt aufnehmen</span>
                    <span className="block 2xl:hidden">Kontakt</span>

                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
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
