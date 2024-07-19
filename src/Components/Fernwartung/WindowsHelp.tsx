type Steps = {
  Index: number;
  SubTitle: string | null;
  Text: JSX.Element;
  Image: string | null;
};

const WindowsSchritte: Steps[] = [
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
        dann gehen Sie bitte in den Ordner, in dem Sie die Datei abgelegt haben.
        In den meisten Fällen sollte dies der Ordner "Downloads" sein. Der Pfad
        kann jedoch abweichen, wenn Sie einen benutzerdefinierten Pfad für den
        Download der Datei ausgewählt haben. Machen Sie einen Doppelklick auf
        die Datei{" "}
        <strong className="text-sm lg:text-base">
          "pcvisit_Support_Kunden_Modul.exe"
        </strong>
        .
      </p>
    ),
    Image: "/Images/Anleitungen/programmstart.webp",
  },
  {
    Index: 4,
    SubTitle: "Das Supportmodul und Eingabe der Verbindungsnummer",
    Text: (
      <p className="py-1">
        Wenn Sie dieses Fenster sehen, wurde das Supportmodul erfolgreich
        gestartet. Sobald Sie an dieser Stelle angelangt sind, können Sie die
        Fernwartungs-ID, welche Ihnen einer unserer Mitarbeiter mitteilen wird,
        in das Orange umrandete Feld eingeben. Klicken Sie dazu einfach in das
        Feld und geben die Nummer auf Ihrer Tastatur ein. Anschließend erscheint
        das Feld "Starten", sofern Sie die richtige ID eingegeben haben. Klicken
        Sie bitte auf dieses, um mit dem Support zu beginnen.
      </p>
    ),
    Image: "/Images/Anleitungen/supportmodul.webp",
  },
  {
    Index: 5,
    SubTitle: "Bestätigung der Administrativen Rechte auf Ihrem PC",
    Text: (
      <p className="py-1">
        Die Verbindung mit einem unserer Support-Mitarbeiter wurde erfolgreich
        hergestellt. Sie müssen nun jedoch noch bestätigen, dass unser
        Mitarbeiter auch auf Ihrem System arbeiten darf. Sollte dieses Fenster
        erscheinen, bestätigen Sie bitte mit "Ja". Dadurch werden unserem
        Mitarbeiter für die Dauer der Fernwartung die notwendigen
        Administrationsrechte verliehen, ohne die wir nicht berechtigt sind,
        Änderungen vorzunehmen. Bei älteren Systemen (vor Windows Vista)
        erscheint dieses Fenster nicht. Je nachdem, wie Ihre Einstellungen der
        Benutzerkontensteuerung getroffen wurden, kann es auch sein, dass dieses
        Fenster auf neueren Betriebssystemen ebenfalls nicht erscheint. Dann ist
        alles in Ordnung. Unser Mitarbeiter kann sich nun an die Arbeit machen
        und mit der Fernwartung beginnen.
      </p>
    ),
    Image: "/Images/Anleitungen/adminrechte.webp",
  },
];

export default function WindowsHelp() {
  return (
    <div>
      <h2 className="font-medium text-2xl mb-2 mt-5">Windows Hilfe</h2>
      <p className="py-1">
        Hier wird Ihnen Schritt für Schritt erklärt, wie die Abfolge einer
        unserer Fernwartungen ist.
      </p>
      <div className="grid grid-cols-1 gap-10">
        {WindowsSchritte.map((schritt) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 border rounded-lg p-2 m-2 gap-10">
            <div
              className={`order-1 lg:order-${schritt.Index % 2 === 0 ? 1 : 2}`}
            >
              <h3>
                <strong>{schritt.Index}. Schritt</strong>
                {schritt.SubTitle && <span> - {schritt.SubTitle}</span>}
              </h3>

              {schritt.Text}
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
