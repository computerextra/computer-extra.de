import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { lazy, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useTitle from "@/Hooks/useTitle";
import { LgWidth } from "@/Vars";

const ContactForm = lazy(() => import("@/components/KontaktForm"));

export default function Kontakt() {
  const [minHeigt, setMinHeigt] = useState(0);
  useTitle("Kontakt");

  useEffect(() => {
    const w = window.screen.width;
    if (LgWidth < w) return;

    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setMinHeigt(height);
  }, []);

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground text-balance">
          Kontakt
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
          Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns gerne über das
          Formular oder direkt über unsere Kontaktdaten.
        </p>
      </div>
      <div className="grid max-w-6xl gap-12 mx-auto lg:grid-cols-2">
        <CompanyInfo />
        <ContactForm />
      </div>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <MapPin className="w-6 h-6 text-primary" />
            Unser Standort
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              Computer Extra GmbH
            </h3>
            <address className="not-italic leading-relaxed text-muted-foreground">
              Harleshäuser Str. 8
              <br />
              34130 Kassel
            </address>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <Phone className="w-6 h-6 text-primary" />
            Telefon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="tel:0561601440"
            className="text-lg font-medium transition-colors text-primary hover:text-primary/80"
          >
            0561 / 60 144 0
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            Montag bis Freitag, 8:00 - 18:00 Uhr
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <Mail className="w-6 h-6 text-primary" />
            E-Mail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-lg font-medium transition-colors text-primary hover:text-primary/80">
            info [AT] computer-extra.de
          </span>
          <p className="mt-1 text-sm text-muted-foreground">
            Wir antworten innerhalb von 24 Stunden
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <Clock className="w-6 h-6 text-primary" />
            Öffnungszeiten
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="text-card-foreground">Montag - Freitag:</span>
            <span className="text-muted-foreground">9:00 - 18:00 Uhr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-card-foreground">Samstag:</span>
            <span className="text-muted-foreground">Geschlossen</span>
          </div>
          <div className="flex justify-between">
            <span className="text-card-foreground">Sonntag:</span>
            <span className="text-muted-foreground">Geschlossen</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
