import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
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
        className="absolute top-0 left-0 right-0 bottom-0 z-[-2] w-full h-full object-cover"
      />
      {/* Mobile */}
      <div className="fixed inset-0 flex flex-col items-center justify-center text-center bg-blue-900/85 z-[-1] lg:hidden ">
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
      </div>
      {/* Desktop */}
      <div className="container hidden mx-auto lg:block">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 h-auto lg:h-[1200px]">
          <Card className="transition-shadow duration-300 shadow-sm md:col-span-4 lg:col-span-4 lg:row-span-2 bg-card border-border hover:shadow-md">
            <CardContent className="flex flex-col justify-center h-full p-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-foreground">
                Willkommen bei
                <span className="block text-primary font-envision">
                  Computer Extra
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Ihr vertrauensvoller Partner für erstklassige Dienstleistungen
                und individuelle Lösungen.
              </p>
            </CardContent>
          </Card>

          {/* CTA Card 1 - Contact */}
          <Card className="transition-all duration-300 border-0 shadow-sm lg:col-span-2 bg-primary text-primary-foreground hover:shadow-lg hover:scale-105 group">
            <CardContent className="flex flex-col justify-center h-full p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
              <CardTitle className="mb-2 text-xl">Jetzt anrufen</CardTitle>
              <CardDescription className="mb-4 text-primary-foreground/80">
                Sprechen Sie direkt mit unserem Team
              </CardDescription>
              <Button
                variant="secondary"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                +49 123 456 789
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* CTA Card 2 - Visit */}
          <Card className="transition-all duration-300 border-0 shadow-sm lg:col-span-2 bg-accent text-accent-foreground hover:shadow-lg hover:scale-105 group">
            <CardContent className="flex flex-col justify-center h-full p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
              <CardTitle className="mb-2 text-xl">Besuchen Sie uns</CardTitle>
              <CardDescription className="mb-4 text-accent-foreground/80">
                Finden Sie uns in der Innenstadt
              </CardDescription>
              <Button
                variant="secondary"
                className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              >
                Route anzeigen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Card 4 - Opening Hours */}
          <Card className="transition-shadow duration-300 shadow-sm lg:col-span-3 lg:row-span-2 bg-muted border-border hover:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                Öffnungszeiten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Montag - Freitag</span>
                <span className="font-medium text-foreground">
                  9:00 - 18:00
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Samstag</span>
                <span className="font-medium text-foreground">
                  10:00 - 16:00
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Sonntag</span>
                <span className="font-medium text-foreground">Geschlossen</span>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Jetzt geöffnet</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    Termine auch außerhalb der Öffnungszeiten nach Vereinbarung
                    möglich.
                  </p>
                  <p className="font-medium text-primary">Rufen Sie uns an!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card 3 - Email Contact */}
          <Card className="transition-all duration-300 border-0 shadow-sm cursor-pointer bg-secondary text-secondary-foreground hover:shadow-lg hover:scale-105 group">
            <CardContent className="flex flex-col justify-center h-full p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
              <CardTitle className="mb-2 text-xl">E-Mail senden</CardTitle>
              <CardDescription className="mb-4 text-secondary-foreground/80">
                Schreiben Sie uns eine Nachricht
              </CardDescription>
              <Button
                variant="outline"
                className="w-full bg-transparent border-secondary-foreground/20 hover:bg-secondary-foreground/10"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
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
