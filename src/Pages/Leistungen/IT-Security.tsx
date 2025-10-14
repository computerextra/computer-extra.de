import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
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

export default function ITSecurity() {
  useTitle("IT-Sicherheit");
  const services = [
    {
      icon: (
        <div className="min-w-20">
          <img
            src="https://bilder.computer-extra.de/data/GData-C1NFFgD5.webp"
            alt="G Data Gold Partner Logo"
            className="w-auto h-8"
          />
        </div>
      ),
      title: "G Data",
      description: "IT-Sicherheit aus Deutschland für höchsten Datenschutz.",
    },
    {
      icon: (
        <div className="min-w-20">
          <img
            src="https://bilder.computer-extra.de/data/Securepoint-CMybLUE-.webp"
            alt="G Data Gold Partner Logo"
            className="w-auto h-8"
          />
        </div>
      ),
      title: "Securepoint",
      description: "Netzwerksicherheit - Made in Germany.",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Mailstore",
      description:
        "Die führende Software-Lösung zur rechtssicheren E-Mail-Archivierung.",
    },
    {
      icon: <LockKeyhole className="w-8 h-8" />,
      title: "Shadowprotect",
      description:
        "Die Besten in Sachen zuverlässiger Datensicherung und Disaster Recovery.",
    },
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <section className="relative px-4 py-20 shadow-lg rounded-xl bg-gradient-to-br from-blue-950/10 via-background to-blue-950/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professionelle Cybersecurity
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-balance">
            <span className="text-primary">Sicherheit</span>, die Vertrauen
            schafft.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground text-pretty">
            Wir schützen Ihre IT-Infrastruktur mit maßgeschneiderten
            Sicherheitslösungen. Von Anti-Viren-Software bis hin zu Firewalls -
            alles aus Deutschland und sicher gehostet.
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
              Wir bieten umfassende Sicherheitslösungen für Unternehmen jeder
              Größe
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
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
            Lassen Sie uns gemeinsam Ihre Cyber-Security auf das Maximum heben.
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
