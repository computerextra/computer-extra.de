import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useJobs from "@/Hooks/useJobs";
import { LgWidth } from "@/Vars";
import { Briefcase, Clock, GraduationCap, MapPin, Quote } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const BewerbungsFormular = lazy(() => import("@/components/JobForm"));

export default function JobPage() {
  const { isPending, isError, Jobs, error } = useJobs();
  const [minHeigt, setMinHeigt] = useState(0);

  useEffect(() => {
    if (Jobs == null) return;

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
  }, [Jobs]);

  if (isPending) return <Loading message="Unsere Jobs werden geladen..." />;
  if (isError)
    return (
      <Error
        showRetry
        message={
          "Beim Laden der Jobs ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
          error
        }
      />
    );

  return (
    <div className="container mx-auto mt-10 " style={{ minHeight: minHeigt }}>
      {/* Jobs Section */}
      <section id="jobs">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance">
            Aktuelle Stellenangebote
          </h2>
          <p className="text-lg text-muted-foreground">
            Entdecke spannende Karrieremöglichkeiten in unserem Team.
          </p>
        </div>
        <Suspense
          fallback={<Loading message="Unsere Jobs werden geladen..." />}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Jobs?.map((job) => {
              if (!job.isAusbilung)
                return (
                  <Card
                    key={job.id}
                    className="transition-shadow hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="mb-2 text-xl">
                            {job.name}
                          </CardTitle>
                          <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              Kassel
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Vollzeit
                            </div>
                          </div>
                        </div>
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between flex-1">
                      <p className="mb-4 !text-base text-muted-foreground">
                        {job.Beschreibung}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">Details anzeigen</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{job.name}</DialogTitle>
                            <DialogDescription>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  Kassel
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  Vollzeit
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="mb-2 font-semibold">
                                Beschreibung
                              </h4>
                              <p className="text-muted-foreground !text-base">
                                {job.Beschreibung}
                              </p>
                            </div>
                            <div>
                              <h4 className="mb-2 font-semibold">
                                Deine Aufgaben
                              </h4>
                              <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                                {job.Aufgaben?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-2 font-semibold">
                                Dein Profil
                              </h4>
                              <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                                {job.Profil?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                );
            })}
          </div>
        </Suspense>
      </section>
      {/* Apprenticeship Section */}
      <section id="ausbildung" className="mt-3">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance">
            Ausbildungsplätze
          </h2>
          <p className="text-lg text-muted-foreground">
            Starten Deine Karriere mit einer fundierten Ausbildung
          </p>
        </div>
        <Suspense
          fallback={<Loading message="Unsere Jobs werden geladen..." />}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Jobs?.map((job) => {
              if (job.isAusbilung)
                return (
                  <Card
                    className="transition-shadow hover:shadow-lg"
                    key={job.id}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="mb-2 text-xl">
                            {job.name}
                          </CardTitle>
                          <div className="flex items-center gap-1 mb-2 text-sm text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />3 Jahre
                            Ausbildungsdauer
                          </div>
                        </div>
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground !text-base">
                        Teamarbeit wird bei uns großgeschrieben - unterstütze
                        auch Du unser Team! Wir möchten weiter wachen und suchen
                        zum Sommer {new Date().getFullYear()} noch interessierte
                        Auszubildende für unsere offenen Ausbildungsstellen.
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">Details anzeigen</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{job.name}</DialogTitle>
                            <DialogDescription>
                              3 Jahre Ausbildungsdauer
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="mb-2 font-semibold">
                                Beschreibung
                              </h4>
                              <p className="text-muted-foreground !text-base">
                                Wenn Du Lust auf Neues und Spaß an spannenden
                                Aufgaben hast, dann bist du in unserem Team
                                genau richtig. <br />
                                Lernbereitschaft, Teamgeist und
                                Verantwortungsbewusstsein wird bei uns innerhalb
                                der Ausbildung großgeschrieben. In einem
                                offenen, partnerschaftlichen und kreativen
                                Umfeld hast du die Chance, viel zu bewegen und
                                nach der Ausbildung übernommen zu werden.
                                <br />
                                Neben einer attraktiven Ausbildungsvergütung und
                                einer Chance auf eine Übernahme nach deiner
                                Ausbildung bieten wir dir zudem einen Einblick
                                in alle Abteilungen, die dich interessieren.
                              </p>
                            </div>
                            <div>
                              <h4 className="mb-2 font-semibold">
                                Deine Aufgaben
                              </h4>
                              <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                                {job.Aufgaben?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-2 font-semibold">
                                Das sagen unsere Auszubildenden
                              </h4>
                              <div className="space-y-4">
                                <div className="pl-4 border-l-4 border-primary">
                                  <div className="flex items-start gap-2">
                                    <Quote className="flex-shrink-0 w-4 h-4 mt-1 text-primary" />
                                    <div>
                                      <p className="mb-2 italic text-muted-foreground !text-base">
                                        Durch mein Interesse an Videospielen bin
                                        ich zu Gaming-Hardware gekommen. Um
                                        diese Instand zu halten oder Reparaturen
                                        durchzuführen, bin ich tiefer in das
                                        Thema Systemintegration vorgedrungen.
                                        [...] Mein Aufgabenfeld ist nach 3
                                        Jahren jetzt breit gefächert,
                                        Serverwartungen, Neubauten von PCs,
                                        Reparatur von Notebooks, Druckern und
                                        PCs, Ausliefern von Ware, sowie das
                                        Einrichten von Smartphones. [...] Ich
                                        möchte nach meiner Ausbildung in dem
                                        Betrieb bleiben und das Team von
                                        Computer Extra in er Werkstatt
                                        unterstützen.
                                      </p>
                                      <p className="!text-sm !leading-none !mt-0 !my-0 !py-0 font-medium">
                                        Auszubildender (Fachinformatiker f.
                                        Systemintegration)
                                      </p>
                                      <p className="!text-xs !leading-none !mt-0 !my-0 !py-0 text-muted-foreground">
                                        3. Lehrjahr
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="pl-4 border-l-4 border-primary">
                                  <div className="flex items-start gap-2">
                                    <Quote className="flex-shrink-0 w-4 h-4 mt-1 text-primary" />
                                    <div>
                                      <p className="mb-2 italic text-muted-foreground !text-base">
                                        Über Vereinsaktivitäten, Zweirad
                                        Gemeinschaft KS, [...] habe ich Rainer
                                        Jacob, den ehemaligen Geschäftsführer
                                        kennengelernt. [...] es war sehr
                                        spannend und ich habe direkt am Anfang
                                        eine Menge neue Sachen gelernt. Mein
                                        Aufgabenbereich umfasst inzwischen ein
                                        großes Spektrum, reparieren und
                                        einrichten von Handys, Laptops und PCs
                                        bis zum NAS. Jeder Tag ist anders, da
                                        man täglich mit neuen Problemen
                                        konfrontiert wird, welche man lösen
                                        muss. Ich würde mich gerne im Bereich
                                        Cybersecurity weiterbilden. Wenn du an
                                        Informatik interessiert bist, dann kann
                                        ich dir versichern, dass du eine Menge
                                        spaß hier haben wirst.
                                      </p>
                                      <p className="!text-sm font-medium !leading-none !mt-0 !my-0 !py-0">
                                        Auszubildender (Fachinformatiker f.
                                        Systemintegration)
                                      </p>
                                      <p className="!text-xs text-muted-foreground !leading-none !mt-0 !my-0 !py-0">
                                        1. Lehrjahr
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="pl-4 border-l-4 border-primary">
                                  <div className="flex items-start gap-2">
                                    <Quote className="flex-shrink-0 w-4 h-4 mt-1 text-primary" />
                                    <div>
                                      <p className="mb-2 italic text-muted-foreground !text-base">
                                        Ich hatte schon immer Interesse an IT
                                        und habe auch privat immer am PC
                                        gespielt. Dadurch war für mich anfangs
                                        klar, dass meine Ausbildung definitiv
                                        mit IT zu tun haben soll. Somit habe ich
                                        mich im Internet informiert und bin auf
                                        Computer Extra gestoßen. Ich habe mich
                                        anfangs für eine Ausbildungsstelle als
                                        Fachinformatiker (Systemintegration) bei
                                        Computer Extra beworben. Anfang 2022
                                        habe ich dort ein Halbjahrespraktikum
                                        angefangen. In den ersten Wochen lernte
                                        ich die Basics im Software- und
                                        Hardwarebereich. Ich musste leider
                                        feststellen, dass der Beruf an sich sehr
                                        viel praktische Erfahrung von vornherein
                                        erfordert und hatte somit die
                                        Möglichkeit, in andere Berufsgruppen
                                        reinzuschauen. Ich habe daraufhin
                                        probeweise für ein paar Wochen in den
                                        Beruf Fachkraft für Lagerlogistik
                                        reingeschnuppert. Da merkte ich, dass
                                        der Beruf eigentlich ganz interessant
                                        ist. Somit bin ich dann in dem Bereich
                                        geblieben. Der Beruf ist sehr
                                        anspruchsvoll. Ich habe bereits nach
                                        wenigen Wochen viel Verantwortung
                                        übertragen bekommen, z.B. beim Einbuchen
                                        und Prüfen von Waren. Ich bin nun im 2.
                                        Ausbildungsjahr und habe über die Zeit
                                        hin mehr und mehr verantwortungsvolle
                                        Aufgaben übernommen. Nach meiner
                                        Ausbildung will ich gerne bei Computer
                                        Extra bleiben und das Lager komplett
                                        übernehmen. An Computer Extra als
                                        Ausbildungsbetrieb gefällt mir
                                        besonders, dass die Arbeit immer
                                        abwechslungsreich ist und praktisch
                                        immer was Neues dazulernt, sowohl in der
                                        IT als wichtige Dinge für meinen Beruf
                                        als Fachkraft für Lagerlogistik.
                                      </p>
                                      <p className="!text-sm font-medium !leading-none !mt-0 !my-0 !py-0">
                                        Auszubildender (Fachkraft f.
                                        Lagerlogistik)
                                      </p>
                                      <p className="!text-xs text-muted-foreground !leading-none !mt-0 !my-0 !py-0">
                                        2. Lehrjahr
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                );
            })}
          </div>
        </Suspense>
      </section>
      {/* Application Form Section */}
      <section id="bewerbung" className="mt-3">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance">
            Schnellbewerbung
          </h2>
          <p className="text-lg text-muted-foreground">
            Bewirb Dich unkompliziert auf unsere Stellen
          </p>
        </div>

        <BewerbungsFormular />
      </section>
    </div>
  );
}
