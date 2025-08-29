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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, BadgePlus, Rainbow, Wrench } from "lucide-react";
import { Link } from "react-router";

export default function PCKonfiguration() {
  const services = [
    {
      icon: <BadgePlus className="w-8 h-8" />,
      title: "Aktuelle Hardware",
      description: "Bei uns bekommen Sie immer die aktuellste Hardware.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Zuverlässigkeit",
      description: "Alle Systeme werden von uns auf Herz und Nieren getestet.",
    },
    {
      icon: <Rainbow className="w-8 h-8" />,
      title: "Schlicht oder Bunt?",
      description:
        "Alle Systeme werden auf Sie zugeschnitten Konfiguriert, egal ob Schlicht oder in allen Farben des Regenbogens.",
    },
  ];

  return (
    <div className="container mx-auto mt-20 ">
      <section className="relative px-4 py-20 shadow-lg rounded-xl bg-gradient-to-br from-blue-950/10 via-background to-blue-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Computer ganz nach Ihren Wünschen
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-balance">
            <span className="text-primary">Perfekte Technik</span>, nach Ihren
            Vorstellungen.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground text-pretty">
            Wir realisieren Ihre perfekte PC-Konfiguration – maßgeschneidert für
            Ihre Bedürfnisse. Ob Gaming, Office oder Media-PC – wir bieten Ihnen
            die optimale Lösung, die Ihre Anforderungen erfüllt.
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
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Referenzen
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Erfolgreiche Projekte, die unsere Expertise unter Beweis stellen
            </p>
          </div>

          <div className="">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full max-w-lg mx-auto"
            >
              <CarouselContent>
                {/* TODO: Bilder von Computern */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6 aspect-video">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
            Bereit für Ihren neuen PC?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Kontaktieren Sie
            uns für ein kostenloses Beratungsgespräch.
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
