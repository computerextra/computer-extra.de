import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useReferenzen from "@/Hooks/useReferenzen";
import { ArrowRight, Code, ExternalLink, Section, Server } from "lucide-react";
import { Link } from "react-router";

export default function Webentwicklung() {
  const { isPending, isError, Referenzen, error } = useReferenzen();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Webentwicklung",
      description: "Moderne, responsive Websites mit den neuesten Technologien",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Webhosting",
      description: "Hosting in Deutschland ab 9,99€ / Monat",
    },
    {
      icon: <Section className="w-8 h-8" />,
      title: "Datenschutz geprüfte Webseiten",
      description: "Mehr Sicherheit für Sie und Ihre Kunden.",
    },
  ];

  if (isPending)
    return <Loading message="Unsere Referenzen werden geladen..." />;

  if (isError)
    return (
      <Error
        showRetry
        message={
          "Beim Laden der Referenzen ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
          error
        }
      />
    );

  return (
    <div className="container mx-auto mt-10">
      <section className="relative px-4 py-20 shadow-lg rounded-xl bg-gradient-to-br from-blue-950/10 via-background to-blue-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professionelle Webentwicklung
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-balance">
            Ihre Vision, unsere <span className="text-primary">Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground text-pretty">
            Wir verwandeln Ihre Ideen in digitale Lösungen, die Ihr Unternehmen
            voranbringen. Von der Konzeption bis zur Umsetzung - alles aus einer
            Hand.
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
              Unsere Dienstleistungen
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Wir bieten umfassende Webentwicklungslösungen und Hosting für
              Unternehmen jeder Größe
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
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Referenzen
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Erfolgreiche Projekte, die unsere Expertise unter Beweis stellen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {Referenzen?.map((Referenz) => (
              <Card
                key={Referenz.id}
                className="overflow-hidden transition-shadow hover:shadow-xl"
              >
                <div className="overflow-hidden aspect-video">
                  <img
                    src={Referenz.Bild || "/placeholder.svg"}
                    alt={`Website Screenshot von ${Referenz.Name}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{Referenz.Name}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    <a
                      href={Referenz.Webseite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        Referenz.Webseite.split("/")[
                          Referenz.Webseite.split("//").length
                        ]
                      }
                    </a>
                  </div>
                </CardHeader>
                <CardContent></CardContent>
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
              <div className="mb-2 text-3xl font-bold text-primary">40+</div>
              <p className="text-muted-foreground">Betreute Kunden</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">15+</div>
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
