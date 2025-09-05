import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { LgWidth } from "@/Vars";
import { useEffect, useState } from "react";

export default function Impressum() {
  const [minHeigt, setMinHeigt] = useState(0);

  useEffect(() => {
    const w = window.screen.width;
    if (LgWidth < w) return;

    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setMinHeigt(height);
  }, []);

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <h1>Impressum</h1>
      <p>
        Computer Extra GmbH <br />
        Harleshäuser Str. 8 <br />
        34130 Kassel
      </p>
      <Table className="max-w-[600px] text-xl ">
        <TableBody>
          <TableRow>
            <TableCell>Handelregister:</TableCell>
            <TableCell className="text-slate-900">HRB 19697</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Registergericht:</TableCell>
            <TableCell className="text-slate-900">Amtsgericht Kassel</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <p>
        <span className="font-bold">Vertreten durch:</span> <br />
        Christian Krauss
      </p>
      <h2 className="mt-5">Kontakt</h2>
      <Table className="max-w-[600px] lg:text-xl">
        <TableBody>
          <TableRow>
            <TableCell>Telefon:</TableCell>
            <TableCell className="text-slate-900">0561 / 60 144 0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Telefax:</TableCell>
            <TableCell className="text-slate-900">0561 / 60 144 199</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>E-Mail:</TableCell>
            <TableCell className="text-slate-900">
              info [AT] computer-extra [PUNKT] de
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="mt-5">Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
        <br />
        DE357590630
      </p>
      <section>
        <h2 className="mt-5">Redaktionell verantwortlich</h2>
        <ul>
          <li>Computer Extra GmbH</li>
          <li>Telekom AG</li>
          <li>AEM Communication GmbH & Co. KG</li>
        </ul>
      </section>
      <h2 className="mt-5">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
      <h2 className="mt-5">
        Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h2 className="mt-5">
        Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung
        (EU) 2022/265)
      </h2>
      <p>
        Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12
        DSA erreichen Sie wie folgt: <br />
      </p>
      <Table className="max-w-[600px] text-xl ">
        <TableBody>
          <TableRow>
            <TableCell>Telefon:</TableCell>
            <TableCell className="text-slate-900">0561 / 60 144 0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Telefax:</TableCell>
            <TableCell className="text-slate-900">0561 / 60 144 199</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>E-Mail:</TableCell>
            <TableCell className="text-slate-900">
              info [AT] computer-extra [PUNKT] de
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p>
        Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch,
        Englisch.
      </p>
    </div>
  );
}
