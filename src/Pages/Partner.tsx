import { useEffect, useEffectEvent, useState } from "react"
import axios from "axios"
import sortBy from "sort-by"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"

type Partner = {
  id: string
  name: string
  link: string
  image: string
}

const Partner = () => {
  const [Partner, setPartner] = useState<Array<Partner> | undefined>(undefined)

  const getPartner = useEffectEvent(async () => {
    const res = await axios.get<{ success: true; data: Partner[] }>(
      "https://api.computer-extra.de/partner.php"
    )
    if (res.data) {
      setPartner(res.data.data)
    }
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPartner()
  }, [])

  return (
    <div
      className={
        "container mx-auto mt-5 grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-4"
      }
    >
      <title>Computer Extra GmbH | Partner</title>
      {Partner?.sort(sortBy("name")).map((p) => {
        return (
          <Card key={p.id}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={"https://bilder.computer-extra.de/data/Partner/" + p.image}
                height={200}
                width={200}
                className="scale-100 rounded-full ring-2 grayscale-0 md:grayscale md:transition-all md:duration-300 md:ease-in-out lg:hover:grayscale-0"
                alt={p.name}
              />
            </CardContent>

            <CardFooter className={"grid"}>
              <Button asChild variant={"default"}>
                <a href={p.link} target={"_blank"} rel="noopener noreferrer">
                  Seite besuchen
                </a>
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default Partner
