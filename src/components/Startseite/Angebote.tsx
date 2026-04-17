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
import { cn } from "@/lib/utils.ts"
import axios from "axios"
import { useEffect, useEffectEvent, useState } from "react"
import sortBy from "sort-by"

type Angebot = {
  id: string
  title: string
  subtitle: string
  date_start: string
  date_stop: string
  link: string
  image: string
  anzeigen: number
}

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
  const [a, setA] = useState<Angebot[] | null>(null)
  const [loading, setLoading] = useState(false)

  const getAngebote = useEffectEvent(() => {
    setLoading(true)
    axios
      .get<{
        success: boolean
        data: Angebot[]
      }>("https://api.computer-extra.de/angebote.php")
      .then((res) => {
        if (res.data.data) {
          setA(res.data.data)
        }
        setLoading(false)
      })
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAngebote()
  }, [])

  const isDisabled = (start: string, end: string) => {
    if (new Date(end) < new Date()) return true
    return new Date(start) > new Date()
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 2xl:grid-cols-4">
      {a?.sort(sortBy("date_start")).map((Angebot, idx) => {
        if (Angebot.anzeigen == 1)
          return (
            <Card>
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
                      onClick={(e) =>
                        isDisabled(Angebot.date_start, Angebot.date_stop) &&
                        e.preventDefault()
                      }
                    >
                      Ansehen
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
