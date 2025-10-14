import { Calendar, ExternalLink, Info, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTitle from "@/Hooks/useTitle";
import { LgWidth } from "@/Vars";

export default function Termin() {
  const [minHeigt, setMinHeigt] = useState(0);
  useTitle("Termin");

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
        <h1>Professionelle Beratung für Ihr Anliegen</h1>
        <p className="max-w-2xl mx-auto text-xl text-pretty">
          Vereinbaren Sie einen persönlichen Telekom Beratungstermin mit unseren
          Experten und erhalten Sie maßgeschneiderte Lösungen für Ihre
          Bedürfnisse.
        </p>
      </div>
      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Benefits Card */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Calendar className="w-5 h-5 text-blue-900" />
              Warum eine Beratung?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-900 rounded-full"></div>
                <span className="text-slate-700">
                  Individuelle Analyse Ihrer Situation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-900 rounded-full"></div>
                <span className="text-slate-700">
                  Maßgeschneiderte Lösungsvorschläge
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-900 rounded-full"></div>
                <span className="text-slate-700">
                  Kompetente Beratung durch Fachexperten
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-900 rounded-full"></div>
                <span className="text-slate-700">
                  Flexible Terminvereinbarung
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Card */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">Termin vereinbaren</CardTitle>
            <CardDescription className="text-slate-600">
              Buchen Sie Ihren persönlichen Beratungstermin in wenigen
              Schritten.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <Button
                asChild
                className="px-8 py-3 text-lg font-semibold text-white bg-blue-900 hover:bg-blue-800"
                size="lg"
              >
                <a
                  href="https://my.meetergo.com/comp_ex/beratung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Jetzt Termin buchen
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* External Service Notice */}
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-900">
                    Hinweis zum externen Dienstleister
                  </p>
                  <p className="text-sm text-blue-800">
                    Die Terminbuchung erfolgt über einen externen Dienstleister.
                    Durch Klicken des Buttons werden Sie zu einer externen
                    Website weitergeleitet.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-4 border rounded-lg bg-slate-50 border-slate-200">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-900">
                    Datenschutz
                  </p>
                  <p className="text-sm text-slate-700">
                    Weitere Informationen zum externen Dienstleister und zur
                    Datenverarbeitung finden Sie in unserer{" "}
                    <Link
                      to="/Datenschutz"
                      className="text-blue-900 underline hover:text-blue-800"
                    >
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <Card className="bg-white border-slate-200">
          <CardContent className="pt-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              So funktioniert's
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                  1
                </div>
                <p className="text-sm text-slate-700">Termin online buchen</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                  2
                </div>
                <p className="text-sm text-slate-700">Bestätigung erhalten</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-sm font-bold text-white bg-blue-900 rounded-full">
                  3
                </div>
                <p className="text-sm text-slate-700">
                  Beratungsgespräch führen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
