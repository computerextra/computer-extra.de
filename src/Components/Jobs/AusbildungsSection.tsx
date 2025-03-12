import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseControllerProps, useController, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import useFormChallenge from "../../Hooks/useFormChallenge";
import useMitarbeiter from "../../Hooks/useMitarbeiter";
import { HOSTNAME } from "../../config";
import GradientHeader from "../GradientHeader";
import QuoteBox from "./QuoteBox";

const AusbildungsSchema = yup.object({
  Name: yup.string().required(),
  Mail: yup.string().email().required(),
  Telefon: yup.string(),
  Job: yup.string().required(),
});

function AusbildungInput(
  props: UseControllerProps<yup.InferType<typeof AusbildungsSchema>> & {
    className?: string;
  },
) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        placeholder={`${props.name} ${props.name !== "Telefon" ? "*" : ""}`}
        className={
          props.className +
          `${props.name != "Telefon" && "after:content-['*']"}`
        }
      />
      <p className="text-red-500 text-xl">
        {fieldState.invalid ? "Fehlerhafte Eingabe" : ""}
      </p>
    </div>
  );
}

export default function AusbildungsSection() {
  const { Mitarbeiter } = useMitarbeiter();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      Job: "Ausbildung",
    },
    mode: "onChange",
    resolver: yupResolver(AusbildungsSchema),
  });

  const { firstAscii, secondAscii, CheckResult } = useFormChallenge();
  const [Eingabe, setEingabe] = useState("");
  const [Fehler, setFehler] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: yup.InferType<typeof AusbildungsSchema>) => {
    setLoading(true);
    if (Eingabe == "" || Eingabe.length < 1) {
      setLoading(false);
      return;
    }
    if (CheckResult(Eingabe)) {
      const form = new FormData();
      form.append("Name", values.Name);
      form.append("Mail", values.Mail);
      form.append("Phone", values.Telefon ?? "");
      form.append("Job", values.Job);
      form.append(
        "Lebenslauf",
        (document.querySelector("#Lebenslauf") as HTMLFormElement).files[0],
      );
      form.append(
        "Anschreiben",
        (document.querySelector("#Anschreiben") as HTMLFormElement).files[0],
      );
      form.append(
        "Ausbildung",
        (document.querySelector("#Ausbildung_Selection") as HTMLSelectElement)
          .value,
      );

      const res = await axios.post(HOSTNAME + "/php/mail.php", form, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data) {
        const d = res.data;
        if (d.success) {
          // Navigate to Erfolgsseite
          navigate("/Erfolg");
        } else {
          // Navigate to Doof
          navigate("/Fehler");
        }
      }
    }
  };
  useEffect(() => {
    if (CheckResult(Eingabe)) {
      setFehler(false);
    } else {
      setFehler(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Eingabe]);
  return (
    <section id="Ausbildung">
      <GradientHeader>
        Wir suchen Dich als Auszubildenden/&shy;Auszubildende
      </GradientHeader>
      <div className="text-xl">
        <p className="py-3">
          Wir suchen Dich als Auszubildenden/Auszubildende als{" "}
          <strong>
            Fachinformatiker/-in Systemintegration (m/w/d), Kaufmann/-frau für
            Digitalisierungsmanagement (m/w/d), Kaufmann/-frau für
            IT-System-Management (m/w/d)
          </strong>
        </p>
        <p className="py-3">
          <strong>
            Teamarbeit wird bei uns großgeschrieben - unterstütze auch Du unser
            Team! Wir möchten weiter wachen und suchen zum Sommer{" "}
            {new Date().getFullYear().toString()} noch interessierte
            Auszubildende für unsere offenen Ausbildungsstellen.
          </strong>
        </p>
        <p className="py-3">
          Die Computer Extra GmbH ist als inhabergeführtes mittelständiges
          Unternehmen mit {Mitarbeiter?.length} Mitarbeitern ein Fachhandel und
          Systemhaus für Datenverarbeitung, Vernetzung und jegliche Art von IT.
        </p>
        <p className="py-3">
          Wenn Du Lust auf Neues und Spaß an spannenden Aufgaben hast, dann bist
          du in unserem Team genau richtig.
        </p>
        <p className="py-3">
          Lernbereitschaft, Teamgeist und Verantwortungsbewusstsein wird bei uns
          innerhalb der Ausbildung großgeschrieben. In einem offenen,
          partnerschaftlichen und kreativen Umfeld hast du die Chance, viel zu
          bewegen und nach der Ausbildung übernommen zu werden.
        </p>
        <p className="py-3">
          Neben einer attraktiven Ausbildungsvergütung und einer Chance auf eine
          Übernahme nach deiner Ausbildung bieten wir dir zudem einen Einblick
          in alle Abteilungen, die dich interessieren.
        </p>
        <p className="py-3">
          Wir liegen Zentral in Kirchditmold und sind gut angebunden und gut zu
          erreichen. Von der Teichstraße oder dem Bahnhof Kirchditmold sind wir
          nur einen Katzensprung entfernt, sodass du morgens ganz entspannt zur
          Arbeit kommen kannst. Darüber hinaus wirst du den Tag über mit
          kostenlosem Kaffee und Wasser in unserer Küche versorgt.
        </p>
        <p className="py-3">Wir suchen Dich für folgende Ausbildungsberufe:</p>
        <div className="cList">
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 leading-snug items-center">
            <li>
              <span>Fachinformatiker/-in Systemintegration (m/w/d)</span>
            </li>
            <li>
              <span>Kaufmann/-frau für Digitalisierungsmanagement (m/w/d)</span>
            </li>
            <li>
              <span>Kaufmann/-frau für IT-System-Management (m/w/d)</span>
            </li>
          </ul>
        </div>

        <p className="py-3 mt-5 mb-5">
          <NavLink to="/Kontakt" className="underline text-blue-600">
            Vereinbare doch gerne einen Termin für ein erstes unverbindliches
            Gespräch
          </NavLink>
          , um weitere Informationen über unser Unternehmen zu erhalten. Du
          kannst dich auch gerne{" "}
          <a href="#AzubiForm" className="underline text-blue-600">
            direkt bei uns Bewerben
          </a>
          .
        </p>
        <p className="py-3">
          <strong>Das sagen Auszubildende bei uns über ihre Ausbildung:</strong>
        </p>
        <p className="py-3">
          Folgende Fragen haben wir unseren Auszubildenden gestellt:
        </p>
        <div className="cList">
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 leading-snug items-center">
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
              <span>Wie sieht dein Aufgabenbereich denn inzwischen aus?</span>
            </li>
            <li>
              <span>
                Ein Tag als Systemintegrator / Fachkraft f. Lagerlogistik: Wie
                läuft er bei dir ab?
              </span>
            </li>
            <li>
              <span>Was hast du nach deiner Ausbildung vor?</span>
            </li>
            <li>
              <span>
                Was hat dir an Computer Extra als Ausbildungsbetrieb besonders
                gefallen?
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
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:grid-rows-2 mb-3 mt-10">
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
          <div className="xl:row-span-2 row-span-1">
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
      </div>
      <GradientHeader className="mt-10" paddingBottom="pb-2">
        Haben wir dein Interesse geweckt? Bewirb dich doch einfach schnell über
        dieses Formular.
      </GradientHeader>
      <div className="card h-fit max-w-6xl p-5 md:p-12" id="AzubiForm">
        <form id="Bewerbungsform" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <div className="mx-0 mb-1 sm:mb-4">
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Name"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <AusbildungInput
                  control={control}
                  name="Name"
                  rules={{ required: true }}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                />
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Mail"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <AusbildungInput
                  control={control}
                  name="Mail"
                  rules={{ required: true }}
                  className=" mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                />
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Phone"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <AusbildungInput
                  control={control}
                  name="Telefon"
                  rules={{ required: false }}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                />
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Ausbildung"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <select
                  name="Ausbildung"
                  id="Ausbildung_Selection"
                  required
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                >
                  <option value="" disabled selected>
                    Ausbildungsberuf:
                  </option>
                  <option value="Fachinformatiker">
                    Fachinformatiker/-in Systemintegration
                  </option>
                  <option value="Digitalisierungsmanagement">
                    Kaufmann/-frau für Digitalisierungsmanagement
                  </option>
                  <option value="IT-System-Management">
                    Kaufmann/-frau für IT-System-Management
                  </option>
                  {/* <option value="Lagerlogistik"> */}
                  {/*   Fachkraft für Lagerlogistik */}
                  {/* </option> */}
                </select>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Lebenslauf"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <input
                  className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4 file:rounded-md
                  file:border-0 file:text-sm file:font-semibold
                  file:bg-pink-50 file:text-blue-700
                  hover:file:bg-pink-100"
                  aria-describedby="Lebenslauf_help"
                  id="Lebenslauf"
                  type="file"
                  accept="application/pdf"
                />
                <p className="mt-1 text-sm text-gray-500" id="Lebenslauf_help">
                  Lebenslauf als PDF - Datei
                </p>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Anschreiben"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <input
                  className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4 file:rounded-md
                  file:border-0 file:text-sm file:font-semibold
                  file:bg-pink-50 file:text-blue-700
                  hover:file:bg-pink-100"
                  aria-describedby="Anschreiben_help"
                  id="Anschreiben"
                  type="file"
                  accept="application/pdf"
                />
                <p className="mt-1 text-sm text-gray-500" id="Anschreiben_help">
                  Anschreiben als PDF - Datei
                </p>
              </div>
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <div>
              <input
                type="checkbox"
                name="dsgvo"
                id="dsgvo"
                className="mb-2 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                required
              />

              <label
                htmlFor="dsgvo"
                className="pb-1 text-xs uppercase tracking-wider"
              >
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                stimme zu, dass meine Angaben und Daten zur Beantwortung meiner
                Anfrage elektronisch erhoben und gespeichert werden. Hinweis:
                Sie können Ihre Einwilligung jederzeit für die Zukunft per
                E-Mail an info [AT] computer-extra [PUNKT] de widerrufen.
              </label>
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="textarea"
              className="pb-1 text-xs uppercase tracking-wider"
            >
              Das Ergebnis von{" "}
              <span className="text-base select-none">
                {firstAscii} + {secondAscii}
              </span>
              ?
            </label>
            <input
              type="text"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
              defaultValue={Eingabe}
              onChange={(e) => setEingabe(e.target.value)}
            />
          </div>
          {Fehler && Eingabe.length > 0 && (
            <p className="text-red-500 text-xl">Fehlerhaftes Ergebnis</p>
          )}
          <button
            disabled={loading}
            type="submit"
            className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-full"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              {loading ? "Bitte Warten ..." : "Bewerben"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
