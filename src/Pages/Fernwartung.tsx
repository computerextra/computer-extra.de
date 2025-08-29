import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  Euro,
  Headphones,
  Monitor,
  PencilIcon,
  Smartphone,
} from "lucide-react";
import { useEffect, useState } from "react";

type OperatingSystem =
  | "Windows"
  | "macOS"
  | "Linux"
  | "Android"
  | "iOS"
  | "Unknown";

const DL_PREIS = 30;

export default function Fernwartung() {
  const [os, setOs] = useState<OperatingSystem>("Unknown");
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    let detectedOS: OperatingSystem = "Unknown";

    if (userAgent.includes("windows")) {
      detectedOS = "Windows";
    } else if (userAgent.includes("mac")) {
      detectedOS = "macOS";
    } else if (userAgent.includes("linux")) {
      detectedOS = "Linux";
    } else if (userAgent.includes("android")) {
      detectedOS = "Android";
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      detectedOS = "iOS";
    }

    setOs(detectedOS);
    setIsSupported(detectedOS === "Windows" || detectedOS === "macOS");
  }, []);

  const getOSIcon = () => {
    switch (os) {
      case "Windows":
        return <Monitor className="w-5 h-5" />;
      case "macOS":
        return <Monitor className="w-5 h-5" />;
      default:
        return <Smartphone className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto mt-20 mb-5">
      <main className="container px-4 py-12 mx-auto space-y-16">
        {/* Hero Section with OS Detection */}
        <section className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground text-balance">
              Professionelle Fernwartung für Ihr System
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              Schnelle und sichere Fernunterstützung durch unsere Experten.
              Laden Sie unsere Software herunter und erhalten Sie sofortige
              Hilfe.
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-2 space-x-2">
                {getOSIcon()}
                <CardTitle>Erkanntes System: {os}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isSupported ? (
                <>
                  <Button asChild className="w-full py-6 text-lg" size="lg">
                    <a href="https://lb3.pcvisit.de/v1/hosted/jumplink?func=download&topic=guestSetup&destname=pcvisit_Kunden-Modul">
                      <Download className="w-5 h-5 mr-2" />
                      Download für {os}
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Kostenloser Download • Sichere Verbindung • Sofort
                    einsatzbereit
                  </p>
                </>
              ) : (
                <>
                  <Button disabled className="w-full py-6 text-lg" size="lg">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Nicht verfügbar für {os}
                  </Button>
                  <Alert>
                    <AlertCircle className="w-4 h-4" />
                    <AlertDescription>
                      Unsere Software ist derzeit nur für Windows und macOS
                      verfügbar.
                    </AlertDescription>
                  </Alert>
                </>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-3xl font-bold text-foreground">
              Transparente Preisgestaltung
            </h3>
            <p className="text-lg text-muted-foreground">
              Faire Preise für professionelle Fernwartung
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Euro className="w-6 h-6 text-primary" />
                <span>Fernwartung Preise</span>
              </CardTitle>
              <CardDescription>
                Kostenpflichtige Dienstleistung - Bezahlung nach Aufwand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Erste 30 Minuten</h4>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {DL_PREIS * 2}€
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Grundgebühr für die ersten 30 Minuten der Fernwartung
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-900" />
                    <h4 className="font-semibold">
                      Jede weitere Viertelstunde
                    </h4>
                  </div>
                  <div className="text-3xl font-bold text-blue-900">
                    {DL_PREIS}€
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pro angefangener Viertelstunde nach den ersten 30 Minuten
                  </p>
                </div>
              </div>

              <Alert>
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  <strong>Wichtiger Hinweis:</strong> Die Fernwartung ist
                  kostenpflichtig. Die Abrechnung erfolgt minutengenau nach der
                  tatsächlich benötigten Zeit.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-3xl font-bold text-foreground">
              So starten Sie die Fernwartung
            </h3>
            <p className="text-lg text-muted-foreground">
              Folgen Sie diesen einfachen Schritten für eine erfolgreiche
              Verbindung
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: 1,
                title: "Software herunterladen",
                description:
                  "Laden Sie das PC Visit Kunden Modul für Ihr Betriebssystem herunter.",
                icon: <Download className="w-6 h-6" />,
              },
              {
                step: 2,
                title: "Programm starten",
                description:
                  "Öffnen Sie die heruntergeladene Datei und starten Sie das Programm. Keine Installation erforderlich.",
                icon: <Monitor className="w-6 h-6" />,
              },
              {
                step: 3,
                title: "Session-ID mitteilen",
                description:
                  "Ihr Supporter teilt Ihnen eine Session-ID mit. Diese geben Sie in dem Modul ein",
                icon: <Headphones className="w-6 h-6" />,
              },
              {
                step: 4,
                title: "Passwort eingeben",
                description:
                  "Ihr Supporter teilt Ihnen ein einmaliges Passwort mit, geben Sie dieses bitte in das Modul ein.",
                icon: <PencilIcon className="w-6 h-6" />,
              },
              {
                step: 5,
                title: "Verbindung bestätigen",
                description:
                  "Bestätigen Sie die Verbindungsanfrage und die Fernwartung kann beginnen.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <Badge variant="secondary" className="mx-auto mb-2 w-fit">
                    Schritt {item.step}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="p-8 rounded-lg bg-muted/50">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Sicherheit und Datenschutz
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground text-pretty">
              Ihre Sicherheit ist unsere Priorität. Alle Verbindungen sind
              verschlüsselt und werden nur mit Ihrer ausdrücklichen Zustimmung
              hergestellt. Nach der Sitzung wird die Verbindung automatisch
              beendet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
