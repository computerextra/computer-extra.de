import {
  ArrowRight,
  BookText,
  ChartGantt,
  EthernetPort,
  MessageCircleMore,
  Rss,
  ToolCase,
} from "lucide-react";
import { Link } from "react-router";
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

export default function Netzwerke() {
  useTitle("Netzwerke");
  const services = [
    {
      icon: <MessageCircleMore className="w-8 h-8" />,
      title: "Consulting & Konzept",
      description: "Individuelle Beratung und Konzepterstellung",
    },
    {
      icon: <ChartGantt className="w-8 h-8" />,
      title: "Projektierung & Planung",
      description: "Wir Planen Ihr Projekt mit Ihnen.",
    },
    {
      icon: <EthernetPort className="w-8 h-8" />,
      title: "Installation & Projektabwicklung",
      description: "Installation der Netzwerkinfrastruktur.",
    },
    {
      icon: <BookText className="w-8 h-8" />,
      title: "Dokumentation",
      description: "Professionelle Dokumentation der kompletten Struktur",
    },
    {
      icon: <ToolCase className="w-8 h-8" />,
      title: "Service, Wartung & Instandhaltung",
      description: "Alles aus einer Hand",
    },
    {
      icon: <Rss className="w-8 h-8" />,
      title: "Update & Performance-Optimierung",
      description:
        "Ihr Infrastruktur immer auf dem neusten Stand und Performant.",
    },
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <section className="relative px-4 py-20 shadow-lg rounded-xl bg-gradient-to-br from-blue-950/10 via-background to-blue-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professionelle Netzwerkinfrastrukturen
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-balance">
            <span className="text-primary">Netzwerke</span>, die Ihr Business
            verbinden.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground text-pretty">
            Wir schaffen leistungsstarke Netzwerkinfrastrukturen, die Ihr
            Unternehmen voranbringen. Von Router über Switche bis hin zu WLAN
            und Server - alles maßgeschneidert und zuverlässig.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-lg" asChild>
              <Link to="/Kontakt">
                Kostenloses Beratungsgespräch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Wir bieten umfassende Netzwerklösungen für Unternehmen jeder Größe
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
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 text-lg"
            asChild
          >
            <Link to="/Kontakt">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
