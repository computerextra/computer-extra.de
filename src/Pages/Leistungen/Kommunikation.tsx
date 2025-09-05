import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Headset, Newspaper, Smartphone } from "lucide-react";
import { Link } from "react-router";

export default function Kommunikation() {
  const services = [
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Festnetz und Mobiles Internet",
      description: "Aktuelle Festnetz- und Mobilfunktarife von der Telekom",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smartphones",
      description: "Bei uns bekommen Sie die aktuellsten Smartphones",
    },
    {
      icon: <Headset className="w-8 h-8" />,
      title: "Telefonanlagen",
      description:
        "Komplette Infrastruktur; Ob Telefonanlage, Systemtelefon oder Telefonie über den PC.",
    },
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <section className="relative px-4 py-20 shadow-lg rounded-xl bg-gradient-to-br from-blue-950/10 via-background to-blue-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professionelle Kommunikation
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-balance">
            <span className="text-primary">Kommunikation</span>, die verbindet.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground text-pretty">
            Wir gestalten Ihre Kommunikationslösungen individuell und
            zukunftssicher. Von Telefonanlagen über Systemtelefone bis hin zu
            maßgeschneiderten Tarifen - alles aus einer Hand.
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
              Wir bieten umfassende Kommunikations-Lösungen für Unternehmen
              jeder Größe
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
            Bereit für Ihren Tarif?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Lassen Sie uns gemeinsam Ihre Bedürfnisse ermitteln. Kontaktieren
            Sie uns für ein kostenloses Beratungsgespräch.
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
