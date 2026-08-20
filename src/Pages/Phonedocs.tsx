import { GradientHeader } from "@/components/misc/gradient-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Phone, Smartphone, Wrench } from "lucide-react"
import { NavLink } from "react-router"

const services = [
  {
    title: "Displaywechsel",
    summary:
      "Ob Glasbruch, Streifen oder schwarze Flecken: Wir tauschen Displays bei Smartphone, Tablet und MacBook mit passender Teilequalität.",
    hint: "Typische Anzeichen: Risse, Touch reagiert schlecht, Bildfehler.",
  },
  {
    title: "Akkuwechsel",
    summary:
      "Wenn das Gerät schnell leer ist oder unerwartet ausgeht, tauschen wir den Akku professionell und prüfen gleichzeitig die Ladeleistung.",
    hint: "Typische Anzeichen: kurze Laufzeit, Performance-Einbruch, Aufblähung.",
  },
  {
    title: "Wasserschaden",
    summary:
      "Nach Feuchtigkeit zählt jede Stunde. Wir reinigen die Platine fachgerecht und prüfen alle kritischen Komponenten unter dem Mikroskop.",
    hint: "Wichtig: Nicht laden, nicht in Reis legen, schnell vorbeikommen.",
  },
  {
    title: "Ladebuchse reparieren",
    summary:
      "Von Verschmutzung bis Lötarbeit: Wir finden die Ursache bei Wackelkontakt oder Ladeproblemen und beheben sie nachhaltig.",
    hint: "Typische Anzeichen: Laden nur in bestimmtem Winkel, kein Kontakt.",
  },
  {
    title: "Kostenvoranschlag",
    summary:
      "Sie erhalten einen offiziellen, nachvollziehbaren Kostenvoranschlag mit Stempel, z. B. für Versicherungen oder Schadensmeldungen.",
    hint: "Transparent: Diagnose, Teile, Arbeitszeit und Gesamtkosten klar gelistet.",
  },
  {
    title: "Fehlerdiagnose",
    summary:
      "Mit professionellem Messequipment analysieren wir systematisch, warum ein Gerät ausfällt, statt nur auf Verdacht zu tauschen.",
    hint: "Messung mit u. a. Multimeter und Mikroskoptechnik.",
  },
  {
    title: "Datensicherung",
    summary:
      "Auf Wunsch sichern, übertragen oder retten wir Fotos, Kontakte und Dokumente, damit keine wichtigen Daten verloren gehen.",
    hint: "Vor jeder Reparatur empfehlen wir ein Backup.",
  },
  {
    title: "Recycling",
    summary:
      "Defekte Altgeräte nehmen wir an, bereiten Rettbares auf und entsorgen nicht mehr nutzbare Technik fachgerecht und umweltbewusst.",
    hint: "Einfach vorbeibringen, kein Termin erforderlich.",
  },
  {
    title: "Zubehör",
    summary:
      "Passendes Zubehör für Ihr Gerät erhalten Sie direkt vor Ort – von Panzerglas und Schutzhüllen bis zu Ladekabeln und Adaptern.",
    hint: "Panzerglas und Folien montieren wir professionell und blasenfrei.",
  },
]

const benefits = [
  "Ehrliche Diagnose statt Teiletausch auf Verdacht",
  "Mehr als 15 Jahre Erfahrung in der Reparatur",
  "Klare Preise und transparente Kommunikation",
  "Schnelle Hilfe für Smartphone, Tablet und MacBook",
]

const faqs = [
  {
    question: "Wie lange dauert eine Reparatur?",
    answer:
      "Viele Standardreparaturen wie Display-, Akku- oder Ladebuchsenwechsel sind noch am selben Tag möglich. Bei komplexeren Schäden nennen wir Ihnen nach der Diagnose einen realistischen Termin.",
  },
  {
    question: "Was kostet eine Reparatur?",
    answer:
      "Die Kosten hängen von Gerät, Modell, Schaden und gewünschter Teilequalität ab. Sie erhalten vor Beginn der Reparatur eine transparente Einschätzung ohne versteckte Kosten.",
  },
  {
    question: "Lohnt sich die Reparatur noch?",
    answer:
      "Wir bewerten Zustand, Gerätewert und Reparaturkosten ehrlich. Wenn eine Reparatur wirtschaftlich nicht sinnvoll ist, sagen wir Ihnen das offen.",
  },
  {
    question: "Kann ein Gerät mit Wasserschaden gerettet werden?",
    answer:
      "Oft ja. Schalten Sie das Gerät aus, laden Sie es nicht und bringen Sie es möglichst schnell vorbei. Je früher die professionelle Reinigung beginnt, desto größer ist die Chance auf Rettung.",
  },
  {
    question: "Welche Ersatzteile werden verwendet?",
    answer:
      "Wir verwenden Originalteile oder hochwertige alternative Bauteile. Verfügbare Optionen, Qualitätsunterschiede und Preise erklären wir Ihnen vor der Reparatur.",
  },
  {
    question: "Werden auch MacBooks und iPads repariert?",
    answer:
      "Ja. Wir reparieren unter anderem Displays, Akkus und Wasserschäden bei MacBooks und iPads und führen auch Fehlerdiagnosen durch.",
  },
  {
    question: "Erhalte ich einen Kostenvoranschlag für die Versicherung?",
    answer:
      "Ja. Wir erstellen einen nachvollziehbaren Kostenvoranschlag mit Schadenbeschreibung, Ersatzteilen, Arbeitskosten und Betriebsstempel.",
  },
]

export default function Phonedocs() {
  return (
    <div className="container mx-auto mt-5">
      <title>Computer Extra GmbH | PhoneDocs</title>

      <section className="mb-16 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <img
            src="/phonedocs/logo.webp"
            alt="PhoneDocs"
            className="mb-8 h-auto w-72 max-w-full"
          />
          <GradientHeader>Handyreparatur in Kassel</GradientHeader>
          <p className="mt-2 text-xl font-semibold text-blue-700">
            Reparieren statt neu kaufen – schnell, ehrlich und nachvollziehbar.
          </p>
          <p className="mt-6 text-lg leading-7">
            PhoneDocs ist die Fachwerkstatt von Computer Extra für Smartphones,
            Tablets und MacBooks. Wir prüfen Ihr Gerät sorgfältig und erklären
            Ihnen verständlich, welche Reparatur sinnvoll ist.
          </p>
          <p className="mt-4 text-lg leading-7">
            Vor Beginn erhalten Sie eine klare Einschätzung zu Aufwand, Kosten
            und Dauer. So können Sie in Ruhe entscheiden, ob sich die Reparatur
            für Sie lohnt.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button asChild size="xl">
              <NavLink to="/Phonedocs/Anfrage">Reparatur anfragen</NavLink>
            </Button>
            <Button asChild size="xl" variant="outline">
              <NavLink to="/Phonedocs/Preise">Preisliste ansehen</NavLink>
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <img
            src="/phonedocs/hero.webp"
            alt="Smartphone-Reparatur bei PhoneDocs"
            className="w-full rounded-xl object-cover shadow-lg"
          />
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-700">
                <Smartphone aria-hidden="true" className="size-8" />
                <Wrench aria-hidden="true" className="size-7" />
                Ihre Vorteile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-lg">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-6 shrink-0 text-blue-600"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="my-16">
        <GradientHeader>Unsere Leistungen</GradientHeader>
        <img
          src="/phonedocs/leistungen.webp"
          alt="Professionelle Reparaturarbeiten an einer Hauptplatine"
          className="mt-8 max-h-96 w-full rounded-xl object-cover shadow-lg"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-7">{service.summary}</p>
                <p className="text-sm text-muted-foreground">{service.hint}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-16">
        <GradientHeader>Häufige Fragen</GradientHeader>
        <Card className="mt-8">
          <CardContent className="p-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-4 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-base leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <section className="my-16 grid rounded-xl bg-linear-to-br from-purple-500 to-blue-600 p-8 text-center text-white">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ihr Gerät braucht Hilfe?
        </h2>
        <p className="mt-3 leading-7">
          Bringen Sie es direkt vorbei oder fragen Sie Ihre Reparatur online an.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Button asChild variant="secondary" size="lg">
            <a href="tel:+4956160144180">
              <Phone aria-hidden="true" className="mr-2 size-5" />
              0561 / 60144-180 anrufen
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <NavLink to="/Phonedocs/Anfrage">Schriftlich anfragen</NavLink>
          </Button>
        </div>
      </section>
    </div>
  )
}
