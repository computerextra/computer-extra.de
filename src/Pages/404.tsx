import AppNavLink from "@/components/AppNavLink"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto mt-5 flex flex-col justify-center gap-8">
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Die gesucht Seite konnte nicht gefunden werden.
      </h2>
      <Button asChild size={"xl"}>
        <AppNavLink to="/">Zur Startseite</AppNavLink>
      </Button>
    </div>
  )
}
