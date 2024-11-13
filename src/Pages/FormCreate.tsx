import { useController, UseControllerProps, useForm } from "react-hook-form";
import AnimationLayout from "../Components/AnimationLayout";
import useAnalytics from "../Hooks/useAnalytics";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// @ts-expect-error Types sind nicht da, gibt es auch nicht.
import { pdfFromReact } from "generate-pdf-from-react-html";
import PdfTemplate, { TemplateProps } from "../Components/PdfTemplate";
import { useState } from "react";

const privateFormSchema = yup.object({
  Vorname: yup.string().required(),
  Nachname: yup.string().required(),
  Mail: yup.string().required(),
  MailPasswort: yup.string().required(),
  Geburtstag: yup.string().required(),
  Geschlecht: yup.string().required(),
  Mobil: yup.string().required(),
});

const businessFormSchema = yup.object({
  Firma: yup.string().required(),
  Vorname: yup.string().required(),
  Nachname: yup.string().required(),
  Anschrift: yup.string().required(),
  Plz: yup.string().required(),
  Ort: yup.string().required(),
  Telefon: yup.string().required(),
  Mail: yup.string().required(),
});

function Select(
  props: UseControllerProps<yup.InferType<typeof privateFormSchema>> & {
    className: string;
    options: { value: string; name: string }[];
  }
) {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <select {...field} className={props.className}>
        <option value={undefined} selected hidden disabled>
          Bitte Wählen...
        </option>
        {props.options.map((x) => (
          <option value={x.value}>{x.name}</option>
        ))}
      </select>
      <p>{fieldState.invalid ? "Fehlerhafte Eingabe" : ""}</p>
    </div>
  );
}
function TextInputBusiness(
  props: UseControllerProps<yup.InferType<typeof businessFormSchema>> & {
    className: string;
  }
) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} className={props.className} />
      <p>{fieldState.invalid ? "Fehlerhafte Eingabe" : ""}</p>
    </div>
  );
}

function TextInputPrivate(
  props: UseControllerProps<yup.InferType<typeof privateFormSchema>> & {
    className: string;
  }
) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} className={props.className} />
      <p>{fieldState.invalid ? "Fehlerhafte Eingabe" : ""}</p>
    </div>
  );
}

export default function FormCreate() {
  useTitle("Formular Generator");
  useAnalytics("Formular Generator");

  const [auswahl, setAuswahl] = useState<undefined | string>(undefined);

  return (
    <AnimationLayout>
      <MainLayout
        title="Formular Generator"
        subtitle="Hiermit können PDF Formulare für Online Konten generiert werden"
      >
        <div className="max-w-6xl p-5 card h-fit md:p-12" id="form">
          {auswahl == null && (
            <div className="mb-6">
              <label htmlFor="Auswahl">
                Welches Formular soll erstellt werden?
              </label>
              <select
                id="Auswahl"
                name="Auswahl"
                onChange={(e) => setAuswahl(e.target.value)}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              >
                <option value={undefined} hidden disabled selected>
                  Bitte Wählen...
                </option>
                <option value="MS">Microsoft Privatkonto</option>
                <option value="MSBusi">Microsoft Businesskonto</option>
                <option value="Apple">Apple ID</option>
                <option value="Google">Google Konto</option>
              </select>
            </div>
          )}
          {auswahl != null && (
            <div className="mb-5 text-center">
              <button
                onClick={() => setAuswahl(undefined)}
                className="w-full px-6 py-3 text-white bg-blue-800 rounded-md font-xl sm:mb-0"
              >
                Neu Starten
              </button>
            </div>
          )}
          {(auswahl === "MS" ||
            auswahl === "Apple" ||
            auswahl === "Google") && <PrivateForm auswahl={auswahl} />}
          {auswahl === "MSBusi" && <BusinessForm />}
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}

function PrivateForm({ auswahl }: { auswahl: "MS" | "Apple" | "Google" }) {
  const { handleSubmit, control } = useForm({
    defaultValues: {},
    mode: "onChange",
    resolver: yupResolver(privateFormSchema),
  });
  const [props, setProps] = useState<undefined | TemplateProps>();
  const [clicked, setClicked] = useState(false);

  const onSubmit = async (values: yup.InferType<typeof privateFormSchema>) => {
    if (clicked) {
      pdfFromReact(".element-to-print", "Formular", "p", true, true);
      return;
    }
    const props: TemplateProps = {
      version: auswahl,
      ...values,
    };
    setProps(props);
    setClicked(true);
  };

  return (
    <>
      <form id="FormGen" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <div className="mx-0:mbb-1 sm:mb-4">
            {/* Vorname */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Vorname"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Vorname
              </label>
              <TextInputPrivate
                control={control}
                name="Vorname"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Nachname */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Nachname"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Nachname
              </label>
              <TextInputPrivate
                control={control}
                name="Nachname"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Mail */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Mail"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Mail
              </label>
              <TextInputPrivate
                control={control}
                name="Mail"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Mail PW */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="MailPasswort"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Mail Passwort
              </label>
              <TextInputPrivate
                control={control}
                name="MailPasswort"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Geburtstag */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Geburtstag"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Geburtstag
              </label>

              <TextInputPrivate
                control={control}
                name="Geburtstag"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Geschlecht */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Geschlecht"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Geschlecht
              </label>
              <Select
                control={control}
                name="Geschlecht"
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
                rules={{ required: true }}
                options={[
                  {
                    value: "D",
                    name: "Divers",
                  },
                  {
                    value: "M",
                    name: "Männlich",
                  },
                  {
                    value: "W",
                    name: "Weiblich",
                  },
                ]}
              />
            </div>

            {/* Mobil */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Mobil"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Mobil Rufnummer
              </label>

              <TextInputPrivate
                control={control}
                name="Mobil"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-blue-800 rounded-md font-xl sm:mb-0"
          >
            {clicked ? "Formular Herunterladen" : "Formular Generieren"}
          </button>
        </div>
      </form>
      <div className="sr-only">
        {props != null && <PdfTemplate {...props} />}
      </div>
    </>
  );
}

function BusinessForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {},
    mode: "onChange",
    resolver: yupResolver(businessFormSchema),
  });
  const [props, setProps] = useState<undefined | TemplateProps>();
  const [clicked, setClicked] = useState(false);

  const onSubmit = async (values: yup.InferType<typeof businessFormSchema>) => {
    if (clicked) {
      pdfFromReact(".element-to-print", "Formular", "p", true, true);
      return;
    }
    // Generate PDF
    const props: TemplateProps = {
      version: "MSBusi",
      ...values,
    };
    setProps(props);
    setClicked(true);
  };

  return (
    <>
      <form id="FormGenBusiness" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <div className="mx-0:mbb-1 sm:mb-4">
            {/* Firmenname */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Firma"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Firmenname
              </label>
              <TextInputBusiness
                control={control}
                name="Firma"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Vorname */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Vorname"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Vorname GF
              </label>
              <TextInputBusiness
                control={control}
                name="Vorname"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Nachname */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Nachname"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Nachname GF
              </label>
              <TextInputBusiness
                control={control}
                name="Nachname"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Anschrift */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Anschrift"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Straße + Hausnummer
              </label>
              <TextInputBusiness
                control={control}
                name="Anschrift"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* PLZ */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Plz"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Postleitzahl
              </label>
              <TextInputBusiness
                control={control}
                name="Plz"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Ort */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Ort"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Ort
              </label>
              <TextInputBusiness
                control={control}
                name="Ort"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Telefon */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Telefon"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Telefonnummer
              </label>
              <TextInputBusiness
                control={control}
                name="Telefon"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>

            {/* Mail */}
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="Mail"
                className="pb-1 text-xs tracking-wider uppercase"
              >
                Kontakt E-Mail
              </label>
              <TextInputBusiness
                control={control}
                name="Mail"
                rules={{ required: true }}
                className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md sm:mb-0"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-blue-800 rounded-md font-xl sm:mb-0"
          >
            {clicked ? "Formular Herunterladen" : "Formular Generieren"}
          </button>
        </div>
      </form>
      {/* <div className="sr-only"> */}
      <div className="sr-only">
        {props != null && <PdfTemplate {...props} />}
      </div>
    </>
  );
}
