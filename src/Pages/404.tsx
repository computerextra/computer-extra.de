import { Button } from "@/components/ui/button"
import { NavLink } from "react-router"

export default function NotFound() {
  return (
    <div className="container mx-auto mt-5 flex flex-col justify-center gap-8">
      <title>Computer Extra GmbH | 404</title>
      <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Die gesucht Seite konnte nicht gefunden werden.
      </h2>
      <Button asChild size={"xl"}>
        <NavLink to="/">Zur Startseite</NavLink>
      </Button>
    </div>
  )
}
