import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseControllerProps, useController, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import AnimationLayout from "../Components/AnimationLayout";
import { HOSTNAME } from "../config";
import useFormChallenge from "../Hooks/useFormChallenge";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

const schema = yup.object({
  Name: yup.string().required(),
  Email: yup.string().email().required(),
  Nachricht: yup.string().required(),
});

function Input(
  props: UseControllerProps<yup.InferType<typeof schema>> & {
    className: string;
  }
) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} className={props.className} />
      <p className="text-xl text-red-500">
        {fieldState.invalid ? "Fehlerhafte Eingabe" : ""}
      </p>
    </div>
  );
}

function Textarea(
  props: UseControllerProps<yup.InferType<typeof schema>> & {
    className: string;
    cols: number;
    rows: number;
  }
) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <textarea
        {...field}
        rows={props.rows}
        cols={props.cols}
        placeholder={props.name}
        className={props.className}
      ></textarea>
      <p className="text-xl text-red-500">
        {fieldState.invalid ? "Fehlerhafte Eingabe" : ""}
      </p>
    </div>
  );
}

export default function Kontakt() {
  useTitle("Kontakt");

  const navigate = useNavigate();

  const { firstAscii, secondAscii, CheckResult } = useFormChallenge();
  const [Eingabe, setEingabe] = useState("");
  const [Fehler, setFehler] = useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {},
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: yup.InferType<typeof schema>) => {
    // Check Eingabe
    if (Eingabe == "" || Eingabe.length < 1) return;
    if (CheckResult(Eingabe)) {
      const form = new FormData();
      form.append("Name", values.Name);
      form.append("Email", values.Email);
      form.append("Nachricht", values.Nachricht);
      const res = await axios.post(HOSTNAME + "/php/Kontaktmail.php", form);
      if (res.data) {
        const d = res.data;
        if (d.success) {
          navigate("/Erfolg");
        } else {
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
    <AnimationLayout>
      <MainLayout
        title="Kontakt"
        subtitle="Erzählen Sie uns von Ihnen - gemeinsam machen wir den Unterschied."
      >
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="max-w-3xl mb-6 text-center sm:text-center md:mx-auto md:mb-12"></div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="text-5xl font-semibold">Let´s Chat!</p>
                <p className="mt-3 mb-12 text-3xl">
                  Erzählen Sie uns von Ihren Wünschen
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex pt-2 mb-5 shadow-xl rounded-xl ps-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Unsere Adresse
                      </h3>
                      <p className="text-gray-600">Computer Extra GmbH</p>
                      <p className="text-gray-600 ">Harleshäuser Str. 8</p>
                      <p className="text-gray-600 ">34130 Kassel</p>
                    </div>
                  </li>
                  <li className="flex pt-2 mb-5 shadow-xl rounded-xl ps-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Kontakt
                      </h3>
                      <p className="text-gray-600 ">Telefon: 0561 / 60 144 0</p>
                      <p className="text-gray-600 ">
                        E-Mail: info [AT] computer-extra.de
                      </p>
                    </div>
                  </li>
                  <li className="flex pt-2 mb-5 shadow-xl rounded-xl ps-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="mb-4 ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                        Öffnungszeiten
                      </h3>
                      <p className="text-gray-600 ">
                        Montag - Freitag: 09:00 - 18:00
                      </p>
                      <p className="text-gray-600 ">
                        Samstag &amp; Sonntag: geschlossen
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="max-w-6xl p-5 card h-fit md:p-12 rounded-xl ring-2"
                id="form"
              >
                <h2 className="mb-4 text-2xl font-bold">
                  Jetzt mit uns Durchstarten
                </h2>
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="Name"
                          className="pb-1 text-xs tracking-wider uppercase"
                        ></label>
                        <Input
                          control={control}
                          name="Name"
                          rules={{ required: true }}
                          className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs tracking-wider uppercase"
                        ></label>
                        <Input
                          control={control}
                          name="Email"
                          rules={{ required: true }}
                          className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs tracking-wider uppercase"
                      ></label>
                      <Textarea
                        control={control}
                        name="Nachricht"
                        cols={30}
                        rows={5}
                        rules={{ required: true, minLength: 10 }}
                        className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div>
                        <input
                          type="checkbox"
                          name="dsgvo"
                          id="dsgvo"
                          className="py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
                          required
                        />

                        <label
                          htmlFor="dsgvo"
                          className="pb-1 text-xs tracking-wider uppercase"
                        >
                          Ich habe die Datenschutzerklärung zur Kenntnis
                          genommen. Ich stimme zu, dass meine Angaben und Daten
                          zur Beantwortung meiner Anfrage elektronisch erhoben
                          und gespeichert werden. Hinweis: Sie können Ihre
                          Einwilligung jederzeit für die Zukunft per E-Mail an
                          info [AT] computer-extra [PUNKT] de widerrufen.
                        </label>
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs tracking-wider uppercase"
                      >
                        Das Ergebnis von{" "}
                        <span className="text-base select-none">
                          {firstAscii} + {secondAscii}
                        </span>
                        ?
                      </label>
                      <input
                        type="text"
                        className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
                        defaultValue={Eingabe}
                        onChange={(e) => setEingabe(e.target.value)}
                      />
                    </div>
                    {Fehler && Eingabe.length > 0 && (
                      <p className="text-xl text-red-500">
                        Fehlerhaftes Ergebnis
                      </p>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 text-white bg-blue-800 rounded-md font-xl sm:mb-0"
                    >
                      Nachricht Senden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
