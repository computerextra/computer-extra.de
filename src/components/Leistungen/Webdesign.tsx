import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { Button } from "@/components/ui/button.tsx"
import { NavLink } from "react-router"
import axios from "axios"
import { useEffect, useEffectEvent, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card.tsx"

type Referenz = {
  id: string
  Name: string
  Webseite: string
  Bild: string
  Online: number
}

const Webdesign = () => {
  const [Referenzen, setReferenzen] = useState<Referenz[] | undefined>(
    undefined
  )

  const getReferenzen = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Referenz[] }>(
      "https://api.computer-extra.de/referenzen.php"
    )

    if (res.data.data) setReferenzen(res.data.data)
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getReferenzen()
  }, [])

  return (
    <div>
      <GradientHeader>Webentwicklung & Hosting</GradientHeader>
      <p className="leading-7 text-blue-700 not-first:mt-6">
        Wir liefern innovative Konzepte für von modernen und optimierte
        Webseiten nach Ihren Wünschen, setzen diese für Sie um und kümmern uns
        auf Wunsch auch um das Hosting der Webseite, Emails & Domains.
      </p>
      <div className="my-16 grid grid-cols-1 gap-10">
        <p className="leading-7 not-first:mt-6">
          Wir konzeptionieren & erstellen modernste, optisch ansprechende und
          technisch hochwertige Webseiten - perfekt optimiert auf Ihr Projekt.
        </p>
        <div className="cList">
          <ul className="grid grid-cols-1 items-center gap-10 leading-snug md:grid-cols-2 2xl:grid-cols-4">
            <li>
              <span>Modernstes, individuelles Web-Design</span>
            </li>
            <li>
              <span>Optimiert für Mobilgeräte (Full Responsive)</span>
            </li>
            <li>
              <span>
                Neueste Techniken <br />
                React, TailwindCSS, TypeScript und vieles mehr.
              </span>
            </li>
            <li>
              <span>Datenschutz geprüft (DSGVO)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-16 grid grid-cols-1 gap-10">
        <p className="leading-7 not-first:mt-6">
          Sie benötigen einen leistungsstarken, sicheren und für Sie
          wartungsfreien Ort für Ihrer Webseite (Webspace), auf den Nutzer
          jederzeit zugreifen können. Wir übernehmen Einrichtung, Konfiguration
          und Auslieferung der Webseite (Webhosting), Ihrer E-Mail Adressen und
          die Domain-Verwaltung für Sie.
        </p>
        <div className="cList">
          <ul className="grid grid-cols-1 items-center gap-10 leading-snug md:grid-cols-2 2xl:grid-cols-5">
            <li>
              <span>Aktuelle Hosting-Technik (Apache2)</span>
            </li>
            <li>
              <span>Sichere Verschlüsselung mit SSL Zertifikaten (HTTPS)</span>
            </li>
            <li>
              <span>E-Mail Postfächer (IMAP)</span>
            </li>
            <li>
              <span>Sichern Sie sich Ihre Wunsch-Domains</span>
            </li>
            <li>
              <span>Hosting ab 9,99€ / Monat</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <p className="leading-7 not-first:mt-6">
          Bringen Sie Ihre Website auf die nächste Stufe. Steigern Sie
          Online-Sichtbarkeit & Geschäftserfolg! Jetzt unverbindlich von
          Experten beraten lassen.
        </p>
        <Button asChild size={"xl"}>
          <NavLink to={"/Kontakt"}>Schreiben Sie uns</NavLink>
        </Button>
      </div>

      <div className={"grid gap-10 md:grid-cols-2 xl:grid-cols-3"}>
        {Referenzen?.map((item) => {
          if (item.Online) {
            return (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.Name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Screenshot"
                    className="object-cover"
                    height="200"
                    src={item.Bild}
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardContent>
                <CardFooter>
                  <a
                    target={"_blank"}
                    href={item.Webseite}
                    rel="noopener noreferrer"
                    className={"underline"}
                  >
                    {item.Webseite.replace("https://", "")
                      .replace("www.", "")
                      .replace(/\/$/, "")}
                  </a>
                </CardFooter>
              </Card>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Webdesign
