export type TemplateProps = {
  version: string;
  Mail: string;
  Anschrift?: string | undefined;
  Plz?: string | undefined;
  Ort?: string | undefined;
  Telefon?: string | undefined;
  Vorname: string;
  Nachname: string;
  Firma?: string | undefined;
  MailPasswort?: string | undefined;
  Geburtstag?: string | undefined;
  Geschlecht?: string | undefined;
  Mobil?: string | undefined;
};

const Texte = [
  {
    version: "MSBusi",
    text: (
      <>
        <p className="py-2">
          Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen
          mit den oben genannten Angaben, ein Microsoft 365 Business Konto zu
          erstellen.
        </p>
        <p className="py-2">
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Microsoft Corp.
          übermittelt werden und dass Microsoft diese Daten auf ihren Servern
          eigenverantwortlich speichert. Des weiteren akzeptieren ich den MCA
          (Microsoft Kundenvertrag). Auf verlangen wird mir dieser in
          Schriftform vorgelegt.
        </p>
        <p className="py-2">
          Die von uns erhobenen Daten werden zusätzlich durch uns DS-GVO konform
          auf unseren Servern gespeichert.
        </p>
      </>
    ),
  },
  {
    version: "MS",
    text: (
      <>
        <p className="py-2">
          Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen,
          mit den oben genannten Angaben ein Microsoft Konto zu erstellen.
        </p>
        <p className="py-2">
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Microsoft Corp.
          übermittelt werden und dass Microsoft diese Daten auf ihren Servern
          eigenverantwortlich speichert. Die von uns erhobenen Daten werden
          zusätzlich durch uns DS-GVO konform auf unseren Servern gespeichert.
        </p>
      </>
    ),
  },
  {
    version: "Apple",
    text: (
      <>
        <p className="py-2">
          Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen,
          mit den oben genannten Angaben ein Apple Konto zu erstellen.
        </p>
        <p className="py-2">
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Apple Inc.
          übermittelt werden und dass Apple diese Daten auf ihren Servern
          eigenverantwortlich speichert. Die von uns erhobenen Daten werden
          zusätzlich durch uns DS-GVO konform auf unseren Servern gespeichert.
        </p>
      </>
    ),
  },
  {
    version: "Google",
    text: (
      <>
        <p className="py-2">
          Hiermit beauftrage ich die Firma Computer Extra GmbH, in meinem Namen,
          mit den oben genannten Angaben ein Google Konto zu erstellen.
        </p>
        <p className="py-2">
          Mit meiner Unterschrift bestätige ich, dass die oben genannten Daten
          vollständig und richtig sind. Ich bin mir darüber im Klaren, dass alle
          benötigten Daten und alle nötigen Bestätigungen an Google LLC.
          übermittelt werden und dass Google diese Daten auf ihren Servern
          eigenverantwortlich speichert. Die von uns erhobenen Daten werden
          zusätzlich durch uns DS-GVO konform auf unseren Servern gespeichert.
        </p>
      </>
    ),
  },
];

export default function PdfTemplate(props: TemplateProps) {
  if (props == null) return "";

  const name =
    props.version === "MSBusi"
      ? "MS365 - Business - Konto"
      : props.version === "MS"
      ? "Microsoft - Privat - Konto"
      : props.version === "Apple"
      ? "Apple - ID"
      : props.version === "Google"
      ? "Google - Konto"
      : null;

  return (
    <div className="element-to-print">
      <div className="w-[90%] mx-auto text-xs">
        <section>
          <h1 className="mt-2 mb-5 text-xl ">{name != null && name}</h1>
        </section>

        <section className="grid gap-4">
          {props.version === "MSBusi" ? (
            <>
              <div className="flex justify-between ">
                <p>Firmenname:</p>
                <p>{props.Firma}</p>
              </div>
              <div className="flex justify-between ">
                <p>Geschäftsführung</p>
                <p></p>
              </div>
              <div className="flex justify-between ">
                <p>Vorname:</p>
                <p>{props.Vorname}</p>
              </div>
              <div className="flex justify-between ">
                <p>Nachname:</p>
                <p>{props.Nachname}</p>
              </div>
              <div className="flex justify-between">
                <p>Kontakt Email:</p>
                <p>{props.Mail}</p>
              </div>
              <div className="flex justify-between">
                <p>Telefon:</p>
                <p>{props.Telefon}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between ">
                <p>Name:</p>
                <p>{props.Vorname + " " + props.Nachname}</p>
              </div>
              <div className="flex justify-between">
                <p>E-Mail-Adresse:</p>
                <p>{props.Mail}</p>
              </div>
              <div className="flex justify-between">
                <p>E-Mail-Passwort:</p>
                <p>{props.MailPasswort}</p>
              </div>
              <div className="flex justify-between">
                <p>Geburtstag:</p>
                <p>{props.Geburtstag}</p>
              </div>
              <div className="flex justify-between">
                <p>Geschlecht:</p>
                <p>
                  {props.Geschlecht == "D"
                    ? "Divers"
                    : props.Geschlecht == "W"
                    ? "Weiblich"
                    : "Männlich"}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Mobilfunk:</p>
                <p>{props.Mobil}</p>
              </div>
            </>
          )}
        </section>
        <section className="pt-5">
          {Texte.find((x) => x.version === props.version)?.text}
        </section>
        <section className="grid grid-cols-2 gap-6">
          <div className="flex gap-6">
            <p>Ort, Datum</p>
            <p>_______________________</p>
          </div>
          <div className="flex gap-6">
            <p>Unterschrift</p>
            <p>_______________________</p>
          </div>
        </section>
      </div>
    </div>
  );
}
