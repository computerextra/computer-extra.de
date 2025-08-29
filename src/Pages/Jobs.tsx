import { BewerbungsProps, sendBewerbungForm } from "@/api/bewerbung";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useJobs from "@/Hooks/useJobs";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Briefcase,
  CircleCheckBig,
  CircleOff,
  Clock,
  FileText,
  GraduationCap,
  MapPin,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function JobPage() {
  const { isPending, isError, Jobs, error } = useJobs();
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
    <div className="container mx-auto mt-20 mb-5">
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
                            <h4 className="mb-2 font-semibold">Beschreibung</h4>
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
                            <h4 className="mb-2 font-semibold">Dein Profil</h4>
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
      </section>
      {/* Apprenticeship Section */}
      <section id="ausbildung">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance">
            Ausbildungsplätze
          </h2>
          <p className="text-lg text-muted-foreground">
            Starten Deine Karriere mit einer fundierten Ausbildung
          </p>
        </div>

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
                      Teamarbeit wird bei uns großgeschrieben - unterstütze auch
                      Du unser Team! Wir möchten weiter wachen und suchen zum
                      Sommer {new Date().getFullYear()} noch interessierte
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
                            <h4 className="mb-2 font-semibold">Beschreibung</h4>
                            <p className="text-muted-foreground !text-base">
                              Wenn Du Lust auf Neues und Spaß an spannenden
                              Aufgaben hast, dann bist du in unserem Team genau
                              richtig. <br />
                              Lernbereitschaft, Teamgeist und
                              Verantwortungsbewusstsein wird bei uns innerhalb
                              der Ausbildung großgeschrieben. In einem offenen,
                              partnerschaftlichen und kreativen Umfeld hast du
                              die Chance, viel zu bewegen und nach der
                              Ausbildung übernommen zu werden.
                              <br />
                              Neben einer attraktiven Ausbildungsvergütung und
                              einer Chance auf eine Übernahme nach deiner
                              Ausbildung bieten wir dir zudem einen Einblick in
                              alle Abteilungen, die dich interessieren.
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
                                      ich zu Gaming-Hardware gekommen. Um diese
                                      Instand zu halten oder Reparaturen
                                      durchzuführen, bin ich tiefer in das Thema
                                      Systemintegration vorgedrungen. [...] Mein
                                      Aufgabenfeld ist nach 3 Jahren jetzt breit
                                      gefächert, Serverwartungen, Neubauten von
                                      PCs, Reparatur von Notebooks, Druckern und
                                      PCs, Ausliefern von Ware, sowie das
                                      Einrichten von Smartphones. [...] Ich
                                      möchte nach meiner Ausbildung in dem
                                      Betrieb bleiben und das Team von Computer
                                      Extra in er Werkstatt unterstützen.
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
                                      kennengelernt. [...] es war sehr spannend
                                      und ich habe direkt am Anfang eine Menge
                                      neue Sachen gelernt. Mein Aufgabenbereich
                                      umfasst inzwischen ein großes Spektrum,
                                      reparieren und einrichten von Handys,
                                      Laptops und PCs bis zum NAS. Jeder Tag ist
                                      anders, da man täglich mit neuen Problemen
                                      konfrontiert wird, welche man lösen muss.
                                      Ich würde mich gerne im Bereich
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
                                      Ich hatte schon immer Interesse an IT und
                                      habe auch privat immer am PC gespielt.
                                      Dadurch war für mich anfangs klar, dass
                                      meine Ausbildung definitiv mit IT zu tun
                                      haben soll. Somit habe ich mich im
                                      Internet informiert und bin auf Computer
                                      Extra gestoßen. Ich habe mich anfangs für
                                      eine Ausbildungsstelle als
                                      Fachinformatiker (Systemintegration) bei
                                      Computer Extra beworben. Anfang 2022 habe
                                      ich dort ein Halbjahrespraktikum
                                      angefangen. In den ersten Wochen lernte
                                      ich die Basics im Software- und
                                      Hardwarebereich. Ich musste leider
                                      feststellen, dass der Beruf an sich sehr
                                      viel praktische Erfahrung von vornherein
                                      erfordert und hatte somit die Möglichkeit,
                                      in andere Berufsgruppen reinzuschauen. Ich
                                      habe daraufhin probeweise für ein paar
                                      Wochen in den Beruf Fachkraft für
                                      Lagerlogistik reingeschnuppert. Da merkte
                                      ich, dass der Beruf eigentlich ganz
                                      interessant ist. Somit bin ich dann in dem
                                      Bereich geblieben. Der Beruf ist sehr
                                      anspruchsvoll. Ich habe bereits nach
                                      wenigen Wochen viel Verantwortung
                                      übertragen bekommen, z.B. beim Einbuchen
                                      und Prüfen von Waren. Ich bin nun im 2.
                                      Ausbildungsjahr und habe über die Zeit hin
                                      mehr und mehr verantwortungsvolle Aufgaben
                                      übernommen. Nach meiner Ausbildung will
                                      ich gerne bei Computer Extra bleiben und
                                      das Lager komplett übernehmen. An Computer
                                      Extra als Ausbildungsbetrieb gefällt mir
                                      besonders, dass die Arbeit immer
                                      abwechslungsreich ist und praktisch immer
                                      was Neues dazulernt, sowohl in der IT als
                                      wichtige Dinge für meinen Beruf als
                                      Fachkraft für Lagerlogistik.
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
      </section>
      {/* Application Form Section */}
      <section id="bewerbung">
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

const One = ["ı", "１", "𝟏", "𝟙", "𝟣", "𝟭", "𝟷"];
const Two = ["Ƨ", "２", "𝟐", "𝟚", "𝟤", "𝟮", "𝟸"];
const Three = [
  "Ʒ",
  "Ȝ",
  "З",
  "Ӡ",
  "Ⳍ",
  "Ꝫ",
  "Ɜ",
  "３",
  "𖼻",
  "𝈆",
  "𝟑",
  "𝟛",
  "𝟥",
  "𝟯",
  "𝟹",
];
const Four = ["Ꮞ", "４", "𝟒", "𝟜", "𝟦", "𝟰", "𝟺"];
const Five = ["Ƽ", "５", "𑢻", "𝟓", "𝟝", "𝟧", "𝟱", "𝟻"];
const Six = ["б", "Ꮾ", "Ⳓ", "６", "𑣕", "𝟔", "𝟞", "𝟨", "𝟲", "𝟼"];
const Seven = ["７", "𐓒", "𝈒", "𝟕", "𝟟", "𝟩", "𝟳", "𝟽"];
const Eight = ["Ȣ", "ȣ", "৪", "８", "𐌚", "𝟖", "𝟠", "𝟪", "𝟴", "𝟾"];
const Nine = ["৭", "੧", "୨", "൭", "Ⳋ", "Ꝯ", "９", "𝟗", "𝟡", "𝟫", "𝟵", "𝟿"];

const abstractNumbers = (num: number): string => {
  switch (num) {
    case 1:
      return One[Math.floor(Math.random() * One.length)];
    case 2:
      return Two[Math.floor(Math.random() * Two.length)];
    case 3:
      return Three[Math.floor(Math.random() * Three.length)];
    case 4:
      return Four[Math.floor(Math.random() * Four.length)];
    case 5:
      return Five[Math.floor(Math.random() * Five.length)];
    case 6:
      return Six[Math.floor(Math.random() * Six.length)];
    case 7:
      return Seven[Math.floor(Math.random() * Seven.length)];
    case 8:
      return Eight[Math.floor(Math.random() * Eight.length)];
    case 9:
      return Nine[Math.floor(Math.random() * Nine.length)];
    default:
      return num.toString();
  }
};

function BewerbungsFormular() {
  const { isPending, isError, Jobs, error } = useJobs();

  const [res, setRes] = useState<{ status: number; message: string } | null>(
    null
  );
  const [num1] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [num2] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [answer, setAnswer] = useState("");

  const form = useForm<z.infer<typeof BewerbungsProps>>({
    resolver: zodResolver(BewerbungsProps),
  });
  const onSubmit = async (data: z.infer<typeof BewerbungsProps>) => {
    const response = await sendBewerbungForm(data);
    setRes(response);
  };

  if (res?.status === 200) {
    return (
      <Card className="max-w-2xl mx-auto bg-card border-border">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CircleCheckBig className="w-16 h-16 mb-4 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Bewerbung gesendet!
          </h2>
          <p className="text-center text-muted-foreground">
            Vielen Dank für Dein Bewerbung. Wir werden uns schnellstmöglich bei
            Dir melden.
          </p>
        </CardContent>
      </Card>
    );
  } else if (
    res?.status === 400 ||
    res?.status === 500 ||
    res?.status === 405
  ) {
    return (
      <Card className="max-w-2xl mx-auto bg-card border-border">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CircleOff className="w-16 h-16 mb-4 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Fehler!
          </h2>
          <p className="text-center text-muted-foreground">
            Deine Bewerbung konnte leider nicht gesendet werden. Bitte versuche
            es später erneut. <br />
            Fehler: {res?.message}
          </p>
        </CardContent>
      </Card>
    );
  }

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
    <Card className="max-w-2xl mx-auto bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Bewirb dich bei uns
        </CardTitle>
        <CardDescription>
          Füll das Formular aus und wir melden uns schnellstmöglich bei Dir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Required */}
            <div className="space-y-4">
              <h4 className="font-semibold">Pflichtangaben</h4>
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dein Name *</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deine E-Mail-Adresse *</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deine gewünschte Position *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                        >
                          <SelectValue placeholder="Wähle eine Position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Jobs?.map((job) => (
                          <SelectItem
                            key={job.id}
                            value={
                              job.isAusbilung
                                ? "Ausbilung: " + job.name
                                : job.name
                            }
                          >
                            {job.isAusbilung
                              ? "Ausbilung: " + job.name
                              : job.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Optionale Angaben */}
            <div className="space-y-4">
              <h4 className="text-semibold text-muted-foregound">
                Freiwillige Angaben
              </h4>
              <FormField
                control={form.control}
                name="Telefon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deine Telefonnummer</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="Lebenslauf"
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <FormItem>
                      <FormLabel>Dein Lebenslauf (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                          ref={ref}
                          accept="application/pdf"
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file ? file : null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Anschreiben"
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <FormItem>
                      <FormLabel>Dein Anschreiben (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                          ref={ref}
                          accept="application/pdf"
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file ? file : null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Zeugnisse"
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <FormItem>
                      <FormLabel>Deine Zeugnisse (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          ref={ref}
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                          accept="application/pdf"
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file ? file : null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Captcha */}
            <FormField
              control={form.control}
              name="Captcha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sicherheitsfrage *</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-lg select-none"
                        style={{ userSelect: "none" }}
                      >
                        {abstractNumbers(num1)} + {abstractNumbers(num2)} =
                      </span>

                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        type="number"
                        placeholder="?"
                        className="w-20"
                        value={answer}
                        onChange={(e) => {
                          setAnswer(e.target.value);
                          const correctAnswer = num1 + num2;
                          field.onChange(
                            Number.parseInt(e.target.value) === correctAnswer
                          );
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Datenschutz */}
            <FormField
              control={form.control}
              name="Datenschutz"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      disabled={
                        form.formState.isSubmitting ||
                        form.formState.isSubmitted
                      }
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel>
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                    stimme zu, dass meine Angaben und Daten zur Beantwortung
                    meiner Anfrage elektronisch erhoben und gespeichert werden.
                    Hinweis: Sie können Ihre Einwilligung jederzeit für die
                    Zukunft per E-Mail an info [AT] computer-extra [PUNKT] de
                    widerrufen.
                  </FormLabel>
                </FormItem>
              )}
            />

            <div className="grid">
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting
                  ? "Wird gesendet..."
                  : "Bewerbung absenden"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
