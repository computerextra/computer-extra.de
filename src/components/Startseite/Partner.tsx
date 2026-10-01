import { LoadingSpinner } from "@/components/misc/LoadingSpinner.tsx"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import sortBy from "sort-by"

type Partner = { id: string; name: string; link: string; image: string }

export default function Partner() {
  const { data: partner, isPending: loading } = useQuery({
    queryKey: ["StartseitePartner"],
    queryFn: async () => {
      const res = await axios.get<{ success: boolean; data: Partner[] }>(
        "https://api.computer-extra.de/parnter.php"
      )

      const items = [...res.data.data]

      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[items[i], items[j]] = [items[j], items[i]]
      }

      return items.slice(0, 5)
    },
  })

  if (loading) return <LoadingSpinner />

  return (
    <div className="mb-10 grid grid-cols-2 justify-items-center gap-10 lg:grid-cols-5">
      {[...(partner ?? [])].sort(sortBy("name")).map((p, idx) => (
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
