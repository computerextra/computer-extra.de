type Steps = {
  Index: number;
  SubTitle: string | null;
  Text: JSX.Element;
  Image: string | null;
};

const MacSchritte: Steps[] = [
  {
    Index: 1,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Als aller Erstes laden Sie sich das Supportmodul unserer Software
        herunter. Die Software, mit der wir die Fernwartung durchführen, nennt
        sich "PC Visit". Rufen Sie hierfür unsere Internetseite{" "}
        <a
          href="https://computer-extra.de"
          target="_blank"
          className="underline text-blue-600"
        >
          computer-extra.de
        </a>{" "}
        auf und klicken Sie in der oberen Menü-Leiste auf{" "}
        <strong className="text-sm lg:text-base">"Fernwartung"</strong>
      </p>
    ),
    Image: null,
  },
  {
    Index: 2,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Sie kommen nun auf eine Informationsseite, auf der Sie gebeten werden,
        diese zu lesen und zu bestätigen. Wenn Sie die Informationen zur
        Kenntnis genommen haben, können Sie mit einem klick in die viereckige
        Box einen Haken setzen, um diese zu akzeptieren. Sie werden dann sofort
        weitergeleitet auf die nächste Seite, wo Sie die Software herunterladen
        können. Sollten Sie bereits eine Datei{" "}
        <strong className="text-sm lg:text-base">
          "pcvisit_Support_Kunden_Modul.exe"
        </strong>{" "}
        auf ihrem PC/Notebook haben, so können Sie diesen Schritt überspringen
        und direkt bei Punkt 3 fortfahren.
      </p>
    ),
    Image: null,
  },
  {
    Index: 3,
    SubTitle: "Starten des Supportmoduls",
    Text: (
      <p className="py-1">
        Wenn Sie das Supportmodul von unserer Website heruntergeladen haben,
        dann gehen Sie bitte in den Download Ordner. Machen Sie einen
        Doppelklick auf die Datei{" "}
        <strong className="text-sm lg:text-base">
          "pcvisit_Support_Kunden_Modul"
        </strong>
      </p>
    ),
    Image: "/Images/Anleitungen/1downloadOrdnerMac.webp",
  },
  {
    Index: 4,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Es öffnet sich nun ein neues Fenster, dort machen Sie einen Doppelklick
        auf{" "}
        <strong className="text-sm lg:text-base">
          "pcvisit Kunden-Moduk starten.app"
        </strong>
      </p>
    ),
    Image: "/Images/Anleitungen/2pcVisitOffen.webp",
  },
  {
    Index: 5,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Bestätigen Sie nun, dass Sie die App wirklich öffnen möchten, indem Sie
        "Öffnen" wählen.
      </p>
    ),
    Image: "/Images/Anleitungen/3internetMeldung.webp",
  },
  {
    Index: 6,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Bestätigen Sie nun, dass Sie die App wirklich öffnen möchten, indem Sie
        erneut "Öffnen" wählen.
      </p>
    ),
    Image: "/Images/Anleitungen/4internetMeldung2.webp",
  },
  {
    Index: 7,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Es öffnet sich nun die Anwendung. Geben Sie nun die Fernwartungs-ID ein,
        die Sie von unserem Techniker erhalten haben.
      </p>
    ),
    Image: "/Images/Anleitungen/5oberflaechePcVisit.webp",
  },
  {
    Index: 8,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Lesen Sie sich den folgenden Hinweis durch, geben Sie Ihren Namen ein
        und bestätigen Sie mit "Ja"
      </p>
    ),
    Image: "/Images/Anleitungen/6supportBedingungen.webp",
  },
  {
    Index: 9,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Es öffnet sich nun eine Meldung, bei dieser drücken Sie auf{" "}
        <strong className="text-sm lg:text-base">
          "Systemeinstellungen öffnen"
        </strong>
      </p>
    ),
    Image: "/Images/Anleitungen/7bildschirmFreigabe.webp",
  },
  {
    Index: 10,
    SubTitle: null,
    Text: (
      <p className="py-1">
        In den geöffneten Systemeinstellungen schieben Sie den Regler bei
        "pcvisit_client" nach rechts.
      </p>
    ),
    Image: "/Images/Anleitungen/8bildschirmAufnahme.webp",
  },
  {
    Index: 11,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Geben Sie nun nach Aufforderung Ihr Passwort ein oder bestätigen Sie, je
        nach Modell mit Ihrem Fingerabdruck.
      </p>
    ),
    Image: "/Images/Anleitungen/9bestaetigung.webp",
  },
  {
    Index: 12,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Drücken Sie nun{" "}
        <strong className="text-sm lg:text-base">
          "Beenden & erneut öffnen"
        </strong>
        , die Fernwartung wird unterbrochen und PC Visit startet neu, die
        Fernwartung verbindet sich automatisch erneut.
        <strong className="text-sm lg:text-base">
          "pcvisit Kunden-Moduk starten.app"
        </strong>
      </p>
    ),
    Image: "/Images/Anleitungen/10neustart.webp",
  },
  {
    Index: 13,
    SubTitle: null,
    Text: (
      <p className="py-1">
        Es öffnet sich nun erneut ein Fenster, bitte drücken Sie auch hier{" "}
        <strong className="text-sm lg:text-base">
          "Systemeinstellungen öffnen"
        </strong>
        .
      </p>
    ),
    Image: "/Images/Anleitungen/11bedienung.webp",
  },
  {
    Index: 14,
    SubTitle: null,
    Text: (
      <p className="py-1">
        In den geöffneten Systemeinstellungen schieben Sie den Regler bei
        "pcvisit_client" nach rechts. Die Fernwartung kann nun beginnen, der
        Techniker sieht nun Ihren Bildschirm und kann Eingaben Tätigen
      </p>
    ),
    Image: "/Images/Anleitungen/12bediehnungshilfen.webp",
  },
];
export default function MacHelp() {
  return (
    <div>
      <h2 className="font-medium text-2xl mb-2 mt-5">MacOS Hilfe</h2>
      <p className="py-1">
        Hier wird Ihnen Schritt für Schritt erklärt, wie die Abfolge einer
        unserer Fernwartungen ist.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {MacSchritte.map((schritt) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border rounded-lg p-2 m-2">
            <div
              className={`order-1 lg:order-${schritt.Index % 2 === 0 ? 1 : 2}`}
            >
              <h3>
                <strong>{schritt.Index}. Schritt</strong>
                {schritt.SubTitle && <span> - {schritt.SubTitle}</span>}
              </h3>
              <p>{schritt.Text}</p>
            </div>

            <div
              className={`order-2 lg:order-${schritt.Index % 2 === 0 ? 2 : 1}`}
            >
              {schritt.Image && (
                <img
                  src={schritt.Image}
                  className="object-cover border rounded-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
