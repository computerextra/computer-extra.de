import { LoadingSpinner } from "@/components/misc/LoadingSpinner.tsx"
import axios from "axios"
import { useEffect, useEffectEvent, useState } from "react"
import sortBy from "sort-by"

type Partner = { id: string; name: string; link: string; image: string }

export default function Partner() {
  const [p, setP] = useState<Partner[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const getPartner = useEffectEvent(() => {
    setLoading(true)
    axios
      .get<{
        success: boolean
        data: Partner[]
      }>("https://api.computer-extra.de/partner.php")
      .then((res) => {
        if (res.data.data) {
          setP(res.data.data)
        }
        setLoading(false)
      })
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPartner()
  }, [])

  const getRandomPartner = (anzahl: number) => {
    const tmp: Partner[] = []

    if (p) {
      for (let i = 0; i < anzahl; i++) {
        // eslint-disable-next-line react-hooks/purity
        const random = Math.floor(Math.random() * p.length)
        if (!tmp.includes(p[random])) tmp.push(p[random])
        else i--
      }
    }
    return tmp
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="mb-10 grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-5">
      {getRandomPartner(5)
        .sort(sortBy("name"))
        .map((p, idx) => (
          <a key={p.id + idx} href={p.link} target="_blank">
            <img
              src={`https://bilder.computer-extra.de/data/Partner/${p.image}`}
              height={200}
              width={200}
              className="scale-100 rounded-full ring-2 grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.2] hover:shadow-xl hover:grayscale-0 xl:grayscale"
              alt={p.name}
            />
          </a>
        ))}
    </div>
  )
}
