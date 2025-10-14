import {
  ArrowRight,
  HardDrive,
  Monitor,
  Server,
  TabletSmartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTitle from "@/Hooks/useTitle";

export default function Datenrettung() {
  useTitle("Datenrettung");
  const services = [
    {
      icon: <TabletSmartphone className="w-8 h-8" />,
      title: "Datenrettung Apple",
      description:
        "Erhalten Sie eine kostenlose Bewertung Ihres Apple-Geräts und stellen Sie Ihre verlorenen Daten wieder her.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung CCTV",
      description:
        "Greifen Sie auf Videoaufnahmen zu, die versehentlich gelöscht oder beschädigt wurden.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Datenrettung Cloud",
      description:
        "Profitieren Sie von Cloud-Lösungen für alle Plattformen und Datenverlustsituationen.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Datenrettung Backup-Systeme",
      description:
        "Datenrettung von Daten, die aufgrund von menschlichem Versagen, Sabotage oder Cyberangriffen verloren gegangen sind.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Datenrettung nach Art der Beschädigung",
      description:
        "Stellen Sie Daten von Geräten wieder her, die durch Überschwemmungen, Brände oder ähnliches beschädigt wurden.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Datenrettung Datenbank",
      description:
        "Datenrettung wichtiger Informationen aus Ihrer Datenbank mit 24/7-Support.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung Email",
      description:
        "Nutzen Sie die Vorteile der E-Mail-Extraktions- und Datenrettungsdienste.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Datenrettung von Dateien",
      description:
        "Stellen Sie wichtige Dateien mit Hilfe des Marktführers im Bereich Datenrettung wieder her.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Brandschaden",
      description:
        "Verlassen Sie sich auf die Hilfe von Experten, um verlorene Daten von jedem durch Feuer beschädigten Gerät wiederherzustellen.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Überhitzung",
      description:
        "Greifen Sie mit Expertenhilfe auf verlorene Daten von hitzegeschädigten Geräten zu.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Datenrettung HyperV",
      description:
        "Stellen Sie Daten von einem weltweit führenden Unternehmen wieder her, das eng mit Microsoft zusammenarbeitet.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Blitzschlag & Überspannung",
      description:
        "Stellen Sie verlorene Daten nach Blitzeinschlägen, Überspannungen und anderen Ereignissen wieder her.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung Linux",
      description:
        "Stellen Sie Daten von Unix- und Linux-Dateisystemen mit Hilfe von Experten wieder her.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung Foto",
      description:
        "Datenrettung unersetzlicher verlorener Fotos von jeder Art von Gerät oder Plattform.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Physikalischer Schaden",
      description:
        "Datenrettung von Daten von Geräten, die durch einen versehentlichen Sturz oder andere Ursachen beschädigt wurden.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung Ransomware",
      description:
        "Verlassen Sie sich auf die Hilfe von Experten, um durch Ransomware verschlüsselte Daten wiederherzustellen.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung Remote",
      description:
        "Datenrettung von Daten mit Remote-Services, die mit proprietärer Technologie durchgeführt werden.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Datenrettung Veeam",
      description:
        "Reparieren, Wiederherstellen und Rekonstruieren von Veeam-Backups, die nicht mehr zugänglich sind.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Datenrettung Virtuelle Systeme",
      description:
        "Holen Sie sich Expertenhilfe für komplexe DatenDatenrettung aus virtualisierten Umgebungen.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Wasserschaden",
      description:
        "Datenrettung des Zugriffs auf wichtige Daten, die durch Wasserschäden jeglicher Art verloren gegangen sind.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Datenrettung Windows",
      description:
        "Ontrack ist durch selbstentwickelte Programme in der Lage, Datenrettung für alle Betriebssysteme anzubieten, natürlich auch für die ganz aktuellen.",
    },
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <section className="relative px-4 py-20 shadow-lg rounded-xl bg-gradient-to-br from-blue-950/10 via-background to-blue-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professionelle Datenrettung
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-balance">
            <span className="text-primary">Verlorene Daten?</span> Wir holen sie
            zurück.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground text-pretty">
            Mit Ontrack an unserer Seite retten wir Ihre wertvollen Daten –
            sicher und zuverlässig. Ob Festplatten, SSDs oder andere Medien, wir
            bieten auch datenschutzkonforme Datenlöschungen.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-lg" asChild>
              <a
                href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
                target="_blank"
              >
                Jetzt Datenrettung anfragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Angebotene Leistungen
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Ontrack verfügt über jahrzehntelange Erfahrung in der
              Datenwiederherstellung für alle Medien, Hersteller und Modelle und
              bietet Kunden bewährte Lösungen und Produkte.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="p-3 mx-auto mb-4 rounded-lg bg-primary/10 w-fit text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="px-4 py-20 ">
        <div className="mt-12 text-center">
          <Card className="bg-white border-slate-200">
            <CardContent className="pt-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                So funktioniert's
              </h3>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                    1
                  </div>
                  <p className="text-sm text-slate-700">Beratung</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                    2
                  </div>
                  <p className="text-slate-700">Analyse</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                    3
                  </div>
                  <p className="text-sm text-slate-700">Datenrettung</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                    4
                  </div>
                  <p className="text-sm text-slate-700">Datenrückgabe</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Warum uns wählen?
          </h2>
          <div className="grid gap-8 mb-12 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">
                20.000+
              </div>
              <p className="text-muted-foreground">Betreute Kunden</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">
                {new Date().getFullYear() - 1997}
              </div>
              <p className="text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">100%</div>
              <p className="text-muted-foreground">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Bereit für Ihre Datenrettung?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Zögern Sie nicht. Ihre Daten sind Wertvoll!
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 text-lg"
            asChild
          >
            <a
              href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
              target="_blank"
            >
              Jetzt Datenrettung anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
