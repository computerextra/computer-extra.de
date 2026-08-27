import { GradientHeader } from "@/components/misc/gradient-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { fetchPhonedocsPreise, type PhonedocsPreis } from "@/lib/apiClient"
import { ArrowDownUp } from "lucide-react"
import { useEffect, useEffectEvent, useMemo, useState } from "react"
import { NavLink } from "react-router"

type Sortierung = "aufsteigend" | "absteigend"

export default function PhonedocsPreise() {
  const [preise, setPreise] = useState<PhonedocsPreis[]>([])
  const [hersteller, setHersteller] = useState("")
  const [modell, setModell] = useState("")
  const [filter, setFilter] = useState("")
  const [sortierung, setSortierung] = useState<Sortierung>("aufsteigend")
  const [laedt, setLaedt] = useState(true)
  const [fehler, setFehler] = useState(false)

  const ladePreise = useEffectEvent(async () => {
    try {
      setPreise(await fetchPhonedocsPreise())
    } catch {
      setFehler(true)
    } finally {
      setLaedt(false)
    }
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    ladePreise()
  }, [])

  const herstellerOptionen = useMemo(
    () =>
      [...new Set(preise.map((preis) => preis.hersteller))].sort((a, b) =>
        a.localeCompare(b, "de")
      ),
    [preise]
  )

  const modellOptionen = useMemo(
    () =>
      [
        ...new Set(
          preise
            .filter((preis) => preis.hersteller === hersteller)
            .map((preis) => preis.geraet)
        ),
      ].sort((a, b) => a.localeCompare(b, "de", { numeric: true })),
    [preise, hersteller]
  )

  const angezeigtePreise = useMemo(() => {
    const suchbegriff = filter.trim().toLocaleLowerCase("de")

    return preise
      .filter(
        (preis) =>
          preis.hersteller === hersteller &&
          preis.geraet === modell &&
          preis.reparatur.toLocaleLowerCase("de").includes(suchbegriff)
      )
      .sort((a, b) => {
        if (a.preis === null && b.preis === null) return 0
        if (a.preis === null) return 1
        if (b.preis === null) return -1
        const preisA = Number(a.preis)
        const preisB = Number(b.preis)
        if (Number.isNaN(preisA) && Number.isNaN(preisB)) return 0
        if (Number.isNaN(preisA)) return 1
        if (Number.isNaN(preisB)) return -1
        return sortierung === "aufsteigend" ? preisA - preisB : preisB - preisA
      })
  }, [filter, hersteller, modell, preise, sortierung])

  return (
    <div className="container mx-auto my-5 max-w-4xl">
      <title>Computer Extra GmbH | PhoneDocs Preise</title>
      <GradientHeader>PhoneDocs Reparaturpreise</GradientHeader>

      <div className="mt-8 grid gap-4 rounded-xl border p-6 shadow-sm md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Hersteller
          <select
            value={hersteller}
            onChange={(event) => {
              setHersteller(event.target.value)
              setModell("")
              setFilter("")
            }}
            disabled={laedt || fehler}
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="">Bitte auswählen</option>
            {herstellerOptionen.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Modell
          <select
            value={modell}
            onChange={(event) => {
              setModell(event.target.value)
              setFilter("")
            }}
            disabled={!hersteller}
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Bitte auswählen</option>
            {modellOptionen.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        {modell && (
          <label className="grid gap-2 text-sm font-medium md:col-span-2">
            Reparaturtyp filtern
            <Input
              type="search"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              placeholder="z. B. Display, Akku oder Ladebuchse"
            />
          </label>
        )}
      </div>

      {laedt && <p className="mt-6">Preise werden geladen…</p>}
      {fehler && (
        <p className="mt-6 rounded-md bg-red-50 p-3 text-red-800">
          Die Preisliste konnte nicht geladen werden.
        </p>
      )}

      {modell && !laedt && !fehler && (
        <div className="mt-6 overflow-hidden rounded-xl border shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 font-medium">Reparatur</th>
                <th className="px-4 py-3 text-right font-medium">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setSortierung((wert) =>
                        wert === "aufsteigend" ? "absteigend" : "aufsteigend"
                      )
                    }
                    aria-label={`Preis ${sortierung === "aufsteigend" ? "absteigend" : "aufsteigend"} sortieren`}
                  >
                    Preis <ArrowDownUp />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {angezeigtePreise.map((eintrag) => (
                <tr key={eintrag.id}>
                  <td className="px-4 py-3">{eintrag.reparatur}</td>
                  <td className="px-4 py-3 text-right font-medium">
                    {eintrag.preis === null
                      ? "Auf Anfrage"
                      : Number.isNaN(Number(eintrag.preis))
                        ? eintrag.preis.toLocaleLowerCase("de") ===
                          "nicht möglich"
                          ? "Nicht möglich"
                          : eintrag.preis
                        : Number(eintrag.preis).toLocaleString("de-DE", {
                            style: "currency",
                            currency: "EUR",
                          })}
                  </td>
                </tr>
              ))}
              {angezeigtePreise.length === 0 && (
                <tr>
                  <td
                    colSpan={2}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    Keine Reparaturen gefunden.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <Button asChild size="xl" className="mt-5">
        <NavLink to="/Phonedocs/Anfrage">Reparatur anfragen</NavLink>
      </Button>
    </div>
  )
}
