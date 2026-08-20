import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { Button } from "@/components/ui/button.tsx"
import { CheckCircle2, Smartphone, Wrench } from "lucide-react"
import { NavLink } from "react-router"

const benefits = [
  "Ehrliche Diagnose statt Teiletausch auf Verdacht",
  "Mehr als 15 Jahre Erfahrung in der Reparatur",
  "Klare Preise und transparente Kommunikation",
  "Schnelle Hilfe für Smartphone, Tablet und MacBook",
]

const PhoneDocs = () => {
  return (
    <div>
      <GradientHeader padding="pb-2">PhoneDocs</GradientHeader>

      <p className="mt-0 text-xl font-semibold text-blue-700">
        Reparieren statt neu kaufen – schnell, ehrlich und nachvollziehbar.
      </p>

      <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="py-2 text-xl">
            PhoneDocs ist die Fachwerkstatt von Computer Extra für Smartphones,
            Tablets und MacBooks. Ob Display, Akku, Wasserschaden oder
            Ladebuchse: Das Gerät wird zuerst sorgfältig geprüft und die
            sinnvolle Lösung verständlich erklärt.
          </p>
          <p className="py-2 text-xl">
            Vor Beginn der Reparatur erhalten Sie eine klare Einschätzung zu
            Aufwand, Kosten und Dauer. So entscheiden Sie in Ruhe, ob sich die
            Reparatur für Sie lohnt.
          </p>
        </div>

        <div className="rounded-lg border bg-slate-50 p-6">
          <div className="mb-5 flex items-center gap-3 text-blue-700">
            <Smartphone aria-hidden="true" className="size-8" />
            <Wrench aria-hidden="true" className="size-7" />
            <h3 className="text-2xl font-semibold">
              Warum sich eine Reparatur lohnt
            </h3>
          </div>
          <ul className="grid gap-4">
            {benefits.map((benefit) => (
              <li className="flex items-start gap-3 text-lg" key={benefit}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-6 shrink-0 text-blue-600"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-16 grid">
        <Button asChild size={"xl"}>
          <NavLink to="/Phonedocs/Anfrage">
            Reparatur bei PhoneDocs anfragen
          </NavLink>
        </Button>
      </div>
    </div>
  )
}

export default PhoneDocs
