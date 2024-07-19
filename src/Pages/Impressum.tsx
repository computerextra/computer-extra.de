import AnimationLayout from "../Components/AnimationLayout";
import { ExternalLink } from "../Components/Logos";
import useAnalytics from "../Hooks/useAnalytics";
import useTitle from "../Hooks/useTitle";
import MainLayout from "../Layout/MainLayout";

export default function Impressum() {
  useTitle("Impressum");
  useAnalytics("Impressum");
  return (
    <AnimationLayout>
      <MainLayout title="Impressum" subtitle="Angaben gemäß § 5 TMG">
        <div className="text-xl">
          <p className="py-1">
            Computer Extra GmbH <br />
            Harleshäuser Straße 8 <br />
            34130 Kassel
          </p>
          <p className="py-1">
            Handelsregister: HRB 19697 <br />
            Registergericht: Amtsgericht Kassel
          </p>
          <p className="py-1">
            <strong>Vertreten durch:</strong> <br />
            Christian Krauss
          </p>
          <h2 className="font-medium text-2xl mb-2 mt-5">Kontakt</h2>
          <p className="py-1">
            Telefon: 0561 / 60 144 0 <br />
            Telefax: 0561 / 60 144 199 <br />
            E-Mail: info [at] computer-extra [punkt] de
          </p>
          <h2 className="font-medium text-2xl mb-2 mt-5">Umsatzsteuer-ID</h2>
          <p className="py-1">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE357590630
          </p>
          <h2 className="font-medium text-2xl mb-2 mt-5">
            Redaktionell verantwortlich
          </h2>
          <ul className="py-1">
            <li>Computer Extra GmbH</li>
            <li>Telekom AG</li>
          </ul>
          <h2 className="font-medium text-2xl mb-2 mt-5">
            EU-Streitschlichtung
          </h2>
          <p className="py-1">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              className="text-blue-500 underline"
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/ <ExternalLink />
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <h2 className="font-medium text-2xl mb-2 mt-5">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="py-1">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
