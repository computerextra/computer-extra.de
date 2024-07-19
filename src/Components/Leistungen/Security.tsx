import { NavLink } from "react-router-dom";
import GDataImage from "../../Assets/images/GData.webp";
import SecurepointImage from "../../Assets/images/Securepoint.webp";
import GradientHeader from "../GradientHeader";

export default function Security() {
  return (
    <section className="w-full lg:w-[60%] mx-0 lg:mx-auto my-24" id="security">
      <GradientHeader paddingBottom="pb-2">IT-Security</GradientHeader>
      <p className="text-xl py-2">
        IT-, Daten- & Cybersicherheit und der verantwortungsbewusste Umgang
        damit ist der Schlüssel für Vertrauen in der Digitalen Welt.
      </p>
      <p className="text-xl py-2">
        Nutzen Sie unsere Expertise und unser Know-how für den richtigen Schutz.
      </p>
      <h3>IT-Security Lösungen</h3>
      <p className="text-xl py-2">
        Geben Sie Cyberkriminalität keine Chance! Schützen Sie sich, Ihre
        Mitarbeiter und Ihr Unternehmen. Wir sichern Ihre Firewall, Notebooks,
        PCs und auch Server.
      </p>
      <GradientHeader paddingBottom="pb-2" className="pt-10">
        G Data
      </GradientHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xl py-2">
            IT-Sicherheit aus Deutschland für höchsten Datenschutz.
          </p>
          <p className="text-xl py-2">
            Forschung und Entwicklung erfolgen ausschließlich in Deutschland.
            Unsere Lösungen entsprechen den strengen deutschen und europäischen
            Datenschutzgesetzen und enthalten{" "}
            <span className="font-semibold">garantiert keine Hintertüren</span>.
            Der Bundesverband IT-Sicherheit e.V. TeleTrust hat 2011 mit der
            Arbeitsgruppe „IT-Security made in Germany“ (ITSMIG) eine Initiative
            gegründet, die Kriterien für ein Qualitätssiegel für
            vertrauenswürdige IT-Security-Lösungen festlegt.
          </p>
          <p className="text-xl py-2">
            Als ITSMIG-Mitglied erfüllt G DATA die fünf Kriterien, um das
            Qualitätssiegel führen zu dürfen:
          </p>
        </div>
        <img
          src={GDataImage}
          alt="G Data Logo"
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="cList mt-5">
        <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 leading-snug items-center">
          <li>
            <span>1. Der Unternehmenshauptsitz muss in Deutschland sein.</span>
          </li>
          <li>
            <span>
              2. Das Unternehmen muss vertrauenswürdige IT-Sicherheitslösungen
              anbieten.
            </span>
          </li>
          <li>
            <span>
              3. Die angebotenen Produkte dürfen keine versteckten Zugänge
              enthalten (keine „Backdoors“).
            </span>
          </li>
          <li>
            <span>
              4. Die IT-Sicherheitsforschung und -entwicklung des Unternehmens
              muss in Deutschland stattfinden.
            </span>
          </li>
          <li>
            <span>
              5. Das Unternehmen muss sich verpflichten, den Anforderungen des
              deutschen Datenschutzrechtes zu genügen.
            </span>
          </li>
        </ul>
      </div>
      <GradientHeader paddingBottom="pb-2" className="pt-10">
        Securepoint
      </GradientHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xl py-2">Netzwerksicherheit - Made in Germany</p>
          <p className="text-xl py-2">
            Mit sicheren Netzwerken sind Home-Office, Standortanbindung und der
            Schutz Ihrer Daten einfach umsetzbar. UTM-Firewalls und VPN-Gateways
            von Securepoint sichern Ihre Netzwerke - mit passenden
            IT-Security-Lösungen für kleine und mittlere Unternehmen zur Miete,
            zum Kauf oder als Komplettservice.
          </p>
        </div>
        <img
          src={SecurepointImage}
          alt="G Data Logo"
          className="object-cover rounded-lg border hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="cList mt-5">
        <ul className="grid gap-10 text-xl grid-cols-1 md:grid-cols-2 leading-snug items-center">
          <li>
            <span>
              Firewall, Router und Unified Threat Management (UTM) in einem
              Gerät.
            </span>
          </li>
          <li>
            <span>
              Software-Entwicklung in Deutschland und ohne versteckte Zugänge.
            </span>
          </li>
          <li>
            <span>
              Hardware, Software, Service und Support in einer Lizenz vereint.
            </span>
          </li>
          <li>
            <span>
              Mit dabei: Die Securepoint VPN-Lösung für verschlüsselte
              Verbindungen.
            </span>
          </li>
        </ul>
      </div>
      <GradientHeader paddingBottom="pb-2" className="pt-10">
        Mailstore
      </GradientHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xl py-2">
            Die führende Software-Lösung zur rechtssicheren E-Mail-Archivierung
          </p>
          <p className="text-xl py-2">
            Mit MailStore Server können Unternehmen alle Vorteile moderner
            E-Mail-Archivierung einfach und sicher für sich nutzbar machen. Dazu
            legt MailStore Server perfekte Kopien aller E-Mails in einem
            zentralen Archiv ab und stellt so die Sicherheit und Verfügbarkeit
            beliebiger Datenmengen auch über viele Jahre hinweg sicher. Anwender
            können weiterhin, beispielsweise über eine nahtlose Integration in
            Microsoft Outlook, auf ihre E-Mails zugreifen und diese schnell
            durchsuchen.
          </p>
        </div>
        <div className="cList mt-5">
          <ul className="grid gap-10 text-xl grid-cols-1 leading-snug items-center">
            <li>
              <span>
                MailStore Server ermöglicht eine GoBD-konforme
                E-Mail-Archivierung und kann dabei helfen die DSGVO einzuhalten.
              </span>
            </li>
            <li>
              <span>
                Mit der Journalarchivierung wird die Vollständigkeit des Archivs
                sichergestellt.
              </span>
            </li>
            <li>
              <span>
                Eine vom E-Mail-Dienst unabhängige Archivierung bildet eine
                zusätzliche Sicherungsmaßnahme Ihrer E-Mail-Daten.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <GradientHeader paddingBottom="pb-2" className="pt-10">
        Shadowprotect
      </GradientHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xl py-2">
            Die Besten in Sachen zuverlässiger Datensicherung und Disaster
            Recovery
          </p>
          <p className="text-xl py-2">
            Mit ShadowProtect können Sie Ihre Wiederherstellungszeiten und
            Wiederherstellungsziele (RTOs und RPOs) einhalten oder sogar noch
            übertreffen. Dateien und Ordner in wenigen Minuten wiederherstellen.
            Ausgefallene Server wiederherstellen. Verwenden Sie die patentierte
            VirtualBoot-Technologie, um ein Backup-Image sofort in eine
            virtuelle Maschine zu booten.
          </p>
          <p className="text-xl py-2">
            Die Image-basierten Backups von ShadowProtect bieten Ihnen
            zahlreiche Optionen für die Wiederherstellung. Greifen Sie sich eine
            fehlende Datei, stellen Sie ein gesamtes Datenvolumen wieder her
            oder stellen Sie das System eines ausgefallenen Servers auf einer
            neuen physischen oder virtuellen Maschine ohne Kopfschmerzen wieder
            her (P2P, P2V, V2P, V2V). Sie können sich auf ShadowProtect
            verlassen, da es eine automatisierte Verifizierung von Backup-Images
            bietet, um sicherzustellen, dass diese auch funktionieren, wenn es
            zu einem Ausfall kommt.
          </p>
          <p className="text-xl py-2">
            Unabhängig davon, ob Sie für ein Dutzend oder tausend Backups
            verantwortlich sind, bietet ShadowProtect eine skalierbare,
            stressfreie Lösung. Von der Massenbereitstellung und -konfiguration
            bis hin zur automatisierten Überprüfung und Warnung schützt
            ShadowProtect Ihre Systeme weiterhin mit minimalem Aufwand.
          </p>
        </div>
        <div className="cList mt-5">
          <ul className="grid gap-10 text-xl grid-cols-1 leading-snug items-center">
            <li>
              <span>
                Schützen Sie Ihre Windows- und Linux-Systeme mit einer
                Backup-Softwarelösung - physische ebenso wie virtuelle.
              </span>
            </li>
            <li>
              <span>
                ShadowProtect unterstüzt so gut wie jede Art der Speicherung auf
                Festplatten, darunter auch OneBlox. Wählen Sie die Mischung aus
                Produktions- und Backup-Speicherung, die Ihren Bedürfnissen
                jetzt oder in Zukunft am besten entspricht.
              </span>
            </li>
            <li>
              <span>
                Verwenden Sie unsere Lösung mit VMware ESX/ESXi, Microsoft
                Hyper-V, Red Hat Enterprise Virtualization und vielen anderen
                Hypervisoren.
              </span>
            </li>
            <li>
              <span>
                Führen Sie regelmäßige Backups durch, sogar während die
                Mitarbeiter arbeiten (sie bemerken es nicht), und Sie haben kein
                Risiko, mehr als ein paar Minuten Daten zu verlieren. Ihre
                RPO-Werte bleiben ausgezeichnet.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
        <NavLink
          to="/Kontakt"
          className="relative px-10 py-5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative h-full w-full flex items-center justify-center text-2xl transition-colors duration-300 delay-200 group-hover:text-white ease">
            Schreiben Sie uns
          </span>
        </NavLink>
      </div>
    </section>
  );
}
