import AppNavLink from "@/components/AppNavLink"
import { GradientHeader } from "@/components/misc/gradient-header"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const Termin = () => {
  return (
    <div className="container mx-auto mt-5">
      <Button asChild size={"xl"}>
        <a href="https://my.meetergo.com/comp_ex/beratung" target="_blank">
          Jetzt einen Termin buchen* <ExternalLink />
        </a>
      </Button>

      <section>
        <GradientHeader>* Informationen</GradientHeader>
        <p className="leading-7 not-first:mt-6">
          Bitte beachten Sie, dass die verlinkte Seite auf ein externes
          Unternehmen verlinkt. Weitere Informationen finden Sie in unserer{" "}
          <AppNavLink to="/datenschutz" className="text-blue-600 underline">
            Datenschutzerklärung
          </AppNavLink>
          . Falls Sie dies dennoch nicht wünschen, rufen Sie uns bitte unter der
          bekannten Rufnummer an und wir buchen den Termin mit Ihnen.
        </p>
      </section>
    </div>
  )
}

export default Termin
