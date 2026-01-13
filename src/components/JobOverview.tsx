import useMitarbeiter from "@/hooks/useMitarbeiter";
import { z } from "zod";
import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";
import { useForm } from "@tanstack/react-form";
import useFormChallenge from "@/hooks/useFormChallenge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

type Job = {
  id: string;
  name: string;
  online: number;
  Aufgaben: string;
  Beschreibung: string | null;
  Profil: string | null;
  isAusbilung: number;
};

export default function JobOverview() {
  const [Jobs, setJobs] = useState<Array<Job> | undefined>(undefined);
  const [selected, setSelected] = useState<Job | undefined>(undefined);

  const getJobs = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Job> }>(
      "https://api.computer-extra.de/jobs.php",
    );
    if (res.data.data) {
      setJobs(res.data.data);
    }
  });

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className="min-h-[38vh]">
      {Jobs?.map((j) => {
        if (j.online == 1 && j.isAusbilung == 0) {
          return (
            <button
              key={j.id}
              onClick={() => setSelected(j)}
              className="group relative m-2 w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 px-10 py-5 font-medium text-gray-600 shadow-inner"
            >
              <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
              <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
                {j.name}
              </span>
            </button>
          );
        }
      })}
      {Jobs?.map((j) => {
        if (j.online == 1 && j.isAusbilung == 1) {
          return (
            <button
              key={j.id}
              onClick={() => setSelected(j)}
              className="group relative m-2 w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-100 px-10 py-5 font-medium text-gray-600 shadow-inner"
            >
              <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
              <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
              <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
                Ausbildung - {j.name}
              </span>
            </button>
          );
        }
      })}

      <JobCard Job={selected} />
    </section>
  );
}

function JobCard({ Job }: { Job: Job | undefined }) {
  const { Mitarbeiter } = useMitarbeiter();

  if (Job != null) {
    return (
      <section className="p-10 text-xl" id={Job.name}>
        <h2
          className={`bg-linear-to-br from-blue-900 to-blue-500 bg-clip-text pb-10 text-4xl font-bold hyphens-manual text-transparent`}
        >
          Bewirb Dich {Job.isAusbilung == 1 ? "für eine Ausbildung als" : "als"}{" "}
          {Job.name} in unserem Geschäft.
        </h2>
        <p className="font-semibold">{Job.Beschreibung}</p>
        <p className="py-2">
          Bei uns erwarten Dich viele abwechslungsreiche Aufgaben und
          Möglichkeiten, die Dich beruflich weiterbringen. Und außerdem ein
          starkes Team, in dem Du dich ganz schnell zu Hause fühlen wirst.
        </p>
        {Job.isAusbilung == 0 ? (
          <>
            {/* Job Inhalt */}
            <p className="pt-10 font-semibold">Job Inhalte</p>
            <p className="py-2">
              Neben Spaß am Umgang mit technischen Produkten bringen Sie
              folgende Eigenschaften mit:
            </p>
            <div className="cList">
              <ul className="grid grid-cols-1 items-center gap-10 text-xl leading-snug md:grid-cols-2 2xl:grid-cols-5">
                {Job.Profil?.split("|").map((e, i) => (
                  <li key={i}>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* Ausbildungs Inhalt */}
            <p className="py-3">
              <strong>
                Teamarbeit wird bei uns großgeschrieben - unterstütze auch Du
                unser Team! Wir möchten weiter wachen und suchen zum Sommer{" "}
                {new Date().getFullYear().toString()} noch interessierte
                Auszubildende für unsere offenen Ausbildungsstellen.
              </strong>
            </p>
            <p className="py-3">
              Die Computer Extra GmbH ist als inhabergeführtes mittelständiges
              Unternehmen mit {Mitarbeiter?.length} Mitarbeitern ein Fachhandel
              und Systemhaus für Datenverarbeitung, Vernetzung und jegliche Art
              von IT.
            </p>
            <p className="py-3">
              Wenn Du Lust auf Neues und Spaß an spannenden Aufgaben hast, dann
              bist du in unserem Team genau richtig.
            </p>
            <p className="py-3">
              Lernbereitschaft, Teamgeist und Verantwortungsbewusstsein wird bei
              uns innerhalb der Ausbildung großgeschrieben. In einem offenen,
              partnerschaftlichen und kreativen Umfeld hast du die Chance, viel
              zu bewegen und nach der Ausbildung übernommen zu werden.
            </p>
            <p className="py-3">
              Neben einer attraktiven Ausbildungsvergütung und einer Chance auf
              eine Übernahme nach deiner Ausbildung bieten wir dir zudem einen
              Einblick in alle Abteilungen, die dich interessieren.
            </p>
            <p className="py-3">
              Wir liegen Zentral in Kirchditmold und sind gut angebunden und gut
              zu erreichen. Von der Teichstraße oder dem Bahnhof Kirchditmold
              sind wir nur einen Katzensprung entfernt, sodass du morgens ganz
              entspannt zur Arbeit kommen kannst. Darüber hinaus wirst du den
              Tag über mit kostenlosem Kaffee und Wasser in unserer Küche
              versorgt.
            </p>

            <p className="mt-5 mb-5 py-3">
              <a href="/Kontakt" className="text-blue-600 underline">
                Vereinbare doch gerne einen Termin für ein erstes
                unverbindliches Gespräch
              </a>
              , um weitere Informationen über unser Unternehmen zu erhalten. Du
              kannst dich auch gerne{" "}
              <a href="#AzubiForm" className="text-blue-600 underline">
                direkt bei uns Bewerben
              </a>
              .
            </p>
            <p className="py-3">
              <strong>
                Das sagen Auszubildende bei uns über ihre Ausbildung:
              </strong>
            </p>
            <p className="py-3">
              Folgende Fragen haben wir unseren Auszubildenden gestellt:
            </p>
            <div className="cList">
              <ul className="grid grid-cols-1 items-center gap-10 text-xl leading-snug md:grid-cols-2 2xl:grid-cols-4">
                <li>
                  <span>
                    Wie bist du überhaupt auf den Beruf „Fachinformatiker
                    Systemintegration / Fachkraft f. Lagerlogistik“ gekommen?
                  </span>
                </li>
                <li>
                  <span>
                    Wie kamst du dann auf Computer Extra als Ausbildungsbetrieb?
                  </span>
                </li>
                <li>
                  <span>
                    Erinnerst du dich noch an deine ersten Wochen bei Computer
                    Extra?
                  </span>
                </li>
                <li>
                  <span>
                    Wie sieht dein Aufgabenbereich denn inzwischen aus?
                  </span>
                </li>
                <li>
                  <span>
                    Ein Tag als Systemintegrator / Fachkraft f. Lagerlogistik:
                    Wie läuft er bei dir ab?
                  </span>
                </li>
                <li>
                  <span>Was hast du nach deiner Ausbildung vor?</span>
                </li>
                <li>
                  <span>
                    Was hat dir an Computer Extra als Ausbildungsbetrieb
                    besonders gefallen?
                  </span>
                </li>
                <li>
                  <span>
                    Was möchtest du zukünftigen Bewerberinnen und Bewerbern um
                    Ausbildungsplätze bei Computer Extra noch sagen?
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-10 mb-3 grid grid-cols-1 gap-10 xl:grid-cols-2 xl:grid-rows-2">
              <div>
                <QuoteBox
                  wer="Auszubildender (Fachinformatiker f. Systemintegration) im dritten Lehrjahr"
                  quote="Durch mein Interesse an Videospielen bin ich zu Gaming-Hardware gekommen. 
                  Um diese Instand zu halten oder Reparaturen durchzuführen, 
                  bin ich tiefer in das Thema Systemintegration vorgedrungen. [...] Mein Aufgabenfeld ist nach 3 
                  Jahren jetzt breit gefächert, Serverwartungen, Neubauten von PCs, Reparatur von Notebooks, Druckern und PCs, 
                  Ausliefern von Ware, sowie das Einrichten von Smartphones. [...] Ich möchte nach meiner Ausbildung in dem 
                  Betrieb bleiben und das Team von Computer Extra in er Werkstatt unterstützen."
                />
              </div>
              <div className="row-span-1 xl:row-span-2">
                <QuoteBox
                  wer="Auszubildender (Fachkraft f. Lagerlogistik) im zweiten Lehrjahr"
                  quote="Ich hatte schon immer Interesse an IT und habe auch privat immer am PC gespielt. Dadurch war für mich anfangs klar, dass meine Ausbildung definitiv mit IT zu tun haben soll.
              Somit habe ich mich im Internet informiert und bin auf Computer Extra gestoßen. 
              Ich habe mich anfangs für eine Ausbildungsstelle als Fachinformatiker (Systemintegration) bei Computer Extra beworben. 
              Anfang 2022 habe ich dort ein Halbjahrespraktikum angefangen. In den ersten Wochen lernte ich die Basics im Software- und Hardwarebereich. 
              Ich musste leider feststellen, dass der Beruf an sich sehr viel praktische Erfahrung von vornherein erfordert und hatte somit die Möglichkeit,
              in andere Berufsgruppen reinzuschauen. Ich habe daraufhin probeweise für ein paar Wochen in den Beruf Fachkraft für Lagerlogistik reingeschnuppert.
              Da merkte ich, dass der Beruf eigentlich ganz interessant ist. Somit bin ich dann in dem Bereich geblieben. Der Beruf ist sehr anspruchsvoll. Ich habe bereits nach wenigen Wochen viel Verantwortung übertragen bekommen, z.B. beim Einbuchen und Prüfen von Waren.
              Ich bin nun im 2. Ausbildungsjahr und habe über die Zeit hin mehr und mehr verantwortungsvolle Aufgaben übernommen.
              Nach meiner Ausbildung will ich gerne bei Computer Extra bleiben und das Lager komplett übernehmen. An Computer Extra als Ausbildungsbetrieb gefällt mir besonders, dass die Arbeit immer abwechslungsreich ist und praktisch immer was Neues dazulernt, sowohl in der IT als wichtige Dinge für meinen Beruf als Fachkraft für Lagerlogistik."
                />
              </div>
              <div>
                <QuoteBox
                  wer="Auszubildender (Fachinformatiker f. Systemintegration) im ersten Lehrjahr"
                  quote="Über Vereinsaktivitäten, Zweirad Gemeinschaft KS, [...] habe ich Rainer Jacob, den ehemaligen Geschäftsführer kennengelernt.
                [...] es war sehr spannend und ich habe direkt am Anfang eine Menge neue Sachen gelernt.
                Mein Aufgabenbereich umfasst inzwischen ein großes Spektrum, reparieren und einrichten von Handys, Laptops und PCs bis zum NAS.
                Jeder Tag ist anders, da man täglich mit neuen Problemen konfrontiert wird, welche man lösen muss.
                Ich würde mich gerne im Bereich Cybersecurity weiterbilden.
                Wenn du an Informatik interessiert bist, dann kann ich dir versichern, dass du eine Menge spaß hier haben wirst."
                />
              </div>
            </div>
          </>
        )}

        <div className="mt-10">
          <JobForm Job={Job} />
        </div>
      </section>
    );
  }
}

function QuoteBox({ wer, quote }: { wer: string; quote: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl">
      <div className="grid grid-cols-4">
        <p className="col-span-3 font-thin">
          <em>{quote}</em>
        </p>
      </div>

      <span className="text-sm font-thin text-gray-400">- {wer}</span>
    </div>
  );
}

const formSchema = z.object({
  Name: z.string(),
  Mail: z.email(),
  Telefon: z.string(),
  Job: z.string(),
  Challenge: z.string(),
  Datenschutz: z.boolean(),
});

function JobForm({ Job }: { Job: Job }) {
  const { firstAscii, secondAscii, CheckResult } = useFormChallenge();

  const form = useForm({
    validators: {
      onSubmit: formSchema,
      onChange: ({ value }) => {
        return {
          fields: {
            Challenge: !CheckResult(value.Challenge)
              ? "Falsches Ergebnis"
              : undefined,
          },
        };
      },
    },
    defaultValues: {
      Name: "",
      Mail: "",
      Telefon: "",
      Job: Job.name,
      Challenge: "",
      Datenschutz: false,
    },
    onSubmit: async ({ value }) => {
      const formData = new FormData();
      formData.append("Name", value.Name);
      formData.append("Mail", value.Mail);
      formData.append("Phone", value.Telefon);
      if (Job.isAusbilung == 1) {
        formData.append("Job", "Ausbildung: " + value.Job);
      } else {
        formData.append("Job", value.Job);
      }
      formData.append(
        "Lebenslauf",
        (document.querySelector("#Lebenslauf") as HTMLFormElement).files[0],
      );
      formData.append(
        "Anschreiben",
        (document.querySelector("#Anschreiben") as HTMLFormElement).files[0],
      );
      formData.append(
        "Zeugnisse",
        (document.querySelector("#Zeugnisse") as HTMLFormElement).files[0],
      );

      const res = await axios.post(
        "https://api.computer-extra.de/Bewerbung.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      if (res.data) {
        const d = res.data;
        if (d.success) {
          // Navigate to "ERFOLG"
        } else {
          // Navigate to "FEHLER"
        }
      }
    },
  });

  return (
    <Card className="w-full sm:max-w-xl">
      <CardHeader>
        <CardTitle>Begeistert?</CardTitle>
        <CardDescription>Dann bewirb dich bei uns.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="Bewerbungsform"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="Name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="true"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Mail"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Mail *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="true"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Telefon"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Telefon *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="true"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <Field>
              <FieldLabel htmlFor={"Lebenslauf"}>
                Lebenslauf als PDF - Datei
              </FieldLabel>
              <Input
                id={"Lebenslauf"}
                name={"Lebenslauf"}
                type="file"
                accept="application/pdf"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={"Anschreiben"}>
                Anschreiben als PDF - Datei
              </FieldLabel>
              <Input
                id={"Anschreiben"}
                name={"Anschreiben"}
                type="file"
                accept="application/pdf"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={"Zeugnisse"}>
                Zeugnisse als PDF - Datei
              </FieldLabel>
              <Input
                id={"Zeugnisse"}
                name={"Zeugnisse"}
                type="file"
                accept="application/pdf"
              />
            </Field>

            <form.Field
              name="Datenschutz"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <FieldSet>
                    <FieldLegend>Datenschutz</FieldLegend>
                    <FieldDescription>
                      Ich habe die Datenschutzerklärung zur Kenntnis genommen.
                      Ich stimme zu, dass meine Angaben und Daten zur
                      Beantwortung meiner Anfrage elektronisch erhoben und
                      gespeichert werden. Hinweis: Sie können Ihre Einwilligung
                      jederzeit für die Zukunft per E-Mail an info [AT]
                      computer-extra [PUNKT] de widerrufen.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field
                        data-invalid={isInvalid}
                        orientation={"horizontal"}
                      >
                        <Checkbox
                          id={field.name}
                          name={field.name}
                          aria-invalid={isInvalid}
                          checked={field.state.value}
                          onCheckedChange={(checked) => {
                            field.handleChange(checked === true);
                          }}
                        />
                        <FieldLabel htmlFor={field.name}>Akzeptiert</FieldLabel>

                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                );
              }}
            />

            <form.Field
              name="Challenge"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Das Ergebnis von{" "}
                      <span className="select-none">
                        {firstAscii} + {secondAscii}
                      </span>
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="true"
                    />
                    {isInvalid && field.state.meta.errors[0] && (
                      <FieldError
                        errors={[
                          { message: field.state.meta.errors[0] as string },
                        ]}
                      />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="Bewerbungsform">
            Absenden
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
