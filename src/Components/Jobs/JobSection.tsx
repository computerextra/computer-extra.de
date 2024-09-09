import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseControllerProps, useController, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { HOSTNAME } from "../../config";
import useFormChallenge from "../../Hooks/useFormChallenge";
import {
  EigenschaftenInformatiker,
  EigenschaftenTechniker,
  EigenschaftenVerkauf,
  ProfilInformtikar,
  ProfilTechniker,
  ProfilVerkauf,
} from "../../Pages/JobTexte";
import GradientHeader from "../GradientHeader";

const BewerbungsSchema = yup.object({
  Name: yup.string().required(),
  Mail: yup.string().email().required(),
  Telefon: yup.string(),
  Job: yup.string().required(),
});

function Input(
  props: UseControllerProps<yup.InferType<typeof BewerbungsSchema>> & {
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

export default function JobSection({ job }: { job: string }) {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      Job: job,
    },
    mode: "onChange",
    resolver: yupResolver(BewerbungsSchema),
  });

  const { firstAscii, secondAscii, CheckResult } = useFormChallenge();
  const [Eingabe, setEingabe] = useState("");
  const [Fehler, setFehler] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: yup.InferType<typeof BewerbungsSchema>) => {
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
    <section id={job} className="text-xl p-10">
      <GradientHeader>
        <>Bewirb Dich als {job} in unserem Geschäft.</>
      </GradientHeader>

      <p className="font-semibold">
        {job.includes("Verkäufer")
          ? "Du arbeitest leidenschaftlich gerne im Verkauf? Dann bist Du bei uns genau richtig. Unser Verkaufsteam freut sich jederzeit über erfahrene Kollegen. Und jene, die es werden wollen."
          : "Du arbeitest leidenschaftlich gerne mit Computern? Dann bist Du bei uns genau richtig. Unser Technikteam freut sich jederzeit über erfahrene Kollegen. Und jene, die es werden wollen."}
      </p>
      <p className="py-2">
        Bei uns erwarten Dich viele abwechslungsreiche Aufgaben und
        Möglichkeiten, die Dich beruflich weiterbringen. Und außerdem ein
        starkes Team, in dem Du dich ganz schnell zu Hause fühlen wirst.
      </p>
      <p className="pt-10 font-semibold">Job Inhalte</p>
      <p className="py-2">
        Neben Spaß am Umgang mit technischen Produkten bringen Sie folgende
        Eigenschaften mit:
      </p>
      <div className="cList">
        {job.includes("Verkäufer") && (
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            {EigenschaftenVerkauf.map((e, i) => (
              <li key={i}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        )}
        {job.includes("Fachinformatiker ") && (
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            {EigenschaftenInformatiker.map((e, i) => (
              <li key={i}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        )}
        {job.includes("Techniker") && (
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            {EigenschaftenTechniker.map((e, i) => (
              <li key={i}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="pt-10 font-semibold">Dein Profil</p>
      <div className="cList">
        {job.includes("Verkäufer") && (
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            {ProfilVerkauf.map((e, i) => (
              <li key={i}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        )}
        {job.includes("Fachinformatiker ") && (
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            {ProfilInformtikar.map((e, i) => (
              <li key={i}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        )}
        {job.includes("Techniker") && (
          <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 leading-snug items-center">
            {ProfilTechniker.map((e, i) => (
              <li key={i}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="pt-10 font-semibold">Wann?</p>
      <p className="py-2">Ab sofort.</p>
      <GradientHeader>Begeistert? Dann bewirb Dich bei uns.</GradientHeader>
      <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
        <form id="Bewerbungsform" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <div className="mx-0 mb-1 sm:mb-4">
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="Name"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <Input
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
                <Input
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
                <Input
                  control={control}
                  name="Telefon"
                  rules={{ required: false }}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                />
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
