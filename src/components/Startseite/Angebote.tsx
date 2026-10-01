import { LoadingSpinner } from "@/components/misc/LoadingSpinner.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { fetchAngebote } from "@/lib/apiClient"
import { cn } from "@/lib/utils.ts"
import { useQuery } from "@tanstack/react-query"
import sortBy from "sort-by"

const getDate = (date: string) => {
  const d = new Date(date)
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours() + 2,
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  ).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function Angebote() {
  const { data: a, isPending: loading } = useQuery({
    queryKey: ["Angebote"],
    queryFn: ({ signal }) => fetchAngebote(signal),
  })

  const isDisabled = (start: string, end: string) => {
    if (new Date(end) < new Date()) return true
    return new Date(start) > new Date()
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 2xl:grid-cols-4">
      {[...(a ?? [])].sort(sortBy("date_start")).map((Angebot, idx) => {
        if (Angebot.anzeigen == 1)
          return (
            <Card key={Angebot.id}>
              <CardHeader>
                <CardTitle>{Angebot.title}</CardTitle>
                <CardDescription>{Angebot.subtitle}</CardDescription>
                <CardAction>
                  <Button
                    asChild
                    variant={"outline"}
                    disabled={isDisabled(Angebot.date_start, Angebot.date_stop)}
                  >
                    <a
                      key={idx}
                      href={Angebot.link}
                      target="_blank"
                      className={cn(
                        isDisabled(Angebot.date_start, Angebot.date_stop) &&
                          "line-through"
                      )}
                      onClick={(e) =>
                        isDisabled(Angebot.date_start, Angebot.date_stop) &&
                        e.preventDefault()
                      }
                    >
                      {isDisabled(Angebot.date_start, Angebot.date_stop)
                        ? "Abgelaufen"
                        : "Ansehen"}
                    </a>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <img
                  className={cn(
                    "w-full",
                    isDisabled(Angebot.date_start, Angebot.date_stop)
                      ? "grayscale"
                      : "grayscale-0"
                  )}
                  src={`https://bilder.computer-extra.de/data/Angebote/${Angebot.image}`}
                  alt={Angebot.title}
                />
              </CardContent>
              <CardFooter>
                Gültigkeit: {getDate(Angebot.date_start)} -{" "}
                {getDate(Angebot.date_stop)}
              </CardFooter>
            </Card>
          )
      })}
    </div>
  )
}
