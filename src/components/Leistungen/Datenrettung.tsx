import { GradientHeader } from "@/components/misc/gradient-header.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

const imgs: string[] = [
  "01_BoardLogo.webp",
  "02_BrokenChip.webp",
  "03_BrokenPlatter_Logo.webp",
  "04_Channel_Logo.webp",
  "05_DappledLogo.webp",
  "06_Fingerprint_Logo.webp",
  "07_FireCard_Logo.webp",
  "08_FireDamageEditLogo.webp",
  "09_FireDrive_Logo.webp",
  "10_GlassPlatter_NewLogo.webp",
  "11_HeadScratchLogo.webp",
  "12_IDE_Logo.webp",
  "13_MacroCrash_Ontrack.webp",
  "14_MediaContamination2_Ontrack.webp",
  "15_MediaDamage2_Ontrack.webp",
  "16_SpiderboardFB.webp",
]

const Datenrettung = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <GradientHeader padding="pb-2">Datenrettung</GradientHeader>

      <p className="mt-0 text-xl font-semibold text-blue-700">
        Datenrettungen von HDD bis Tapes, DSGVO-Konforme Datenlöschungen.
      </p>
      <div className="my-10">
        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-5xl"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {imgs.map((img, idx) => (
                <CarouselItem key={idx}>
                  <img
                    src={"https://bilder.computer-extra.de/data/Ontrack/" + img}
                    alt={img}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Bild {current} von {count}
          </div>
        </div>
      </div>
      <div className="my-16 grid">
        <Button asChild size={"xl"}>
          <a
            href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt Datenrettung anfragen
          </a>
        </Button>
      </div>
      <p className="mt-0 text-xl font-semibold text-blue-700">
        Professionelle Datenrettung mit Ontrack
      </p>
      <p className="py-2 text-xl">
        Ontrack verfügt über jahrzehntelange Erfahrung in der
        Datenwiederherstellung für alle Medien, Hersteller und Modelle und
        bietet Kunden bewährte Lösungen und Produkte.
      </p>
      {/* SERVER */}
      <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="mt-0 text-xl font-semibold text-blue-700">
            Benötigen Sie eine Server-Wiederherstellung?
          </p>
          <p className="py-2 text-xl">
            Hardware-Ausfälle, menschliche Fehler, fehlende Daten, Malware,
            Cyber-Angriffe und Naturkatastrophen.
          </p>
          <p className="py-2 text-xl">
            Wir haben das alles schon erlebt. Serverausfälle haben massive
            Auswirkungen auf die Produktivität von Unternehmen. Kleine, mittlere
            und große, weltweit agierende, Unternehmen, vertrauen Ontrack bei
            der zeitkritischen Wiederherstellung und Abfrage von Das, NAS, SDS
            oder Server-Daten. Ontrack hilft Ihnen auch bei der
            Datenwiederherstellung, wenn Ihr Backup-System beschädigt wurde.
          </p>
          <div className="my-16 grid">
            <Button asChild size={"xl"}>
              <a
                href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server Datenrettung
              </a>
            </Button>
          </div>
        </div>
        <img
          src="https://bilder.computer-extra.de/data/Website/Server.webp"
          alt="Server"
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      {/* SD KArte */}
      <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="mt-0 text-xl font-semibold text-blue-700">
            Wertvolle digitale Erinnerungen gelöscht?
          </p>
          <p className="py-2 text-xl">
            Wir kümmern uns um die Datenwiederherstellung von Digitalkameras,
            USB-Sticks, Memory Cards oder Flash-Drives.
          </p>
          <p className="py-2 text-xl">
            Die Experten von Ontrack wissen, wie Sie Ihre Fotos, Dateien und
            Videos von allen Storage Medien - auch beschädigten - wieder
            verfügbar machen können.
          </p>
          <div className="my-16 grid">
            <Button asChild size={"xl"}>
              <a
                href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
                target="_blank"
                rel="noopener noreferrer"
              >
                SD Karte wiederherstellen
              </a>
            </Button>
          </div>
        </div>
        <img
          src="https://bilder.computer-extra.de/data/Website/Speicher.webp"
          alt="Speicher"
          className="rounded-lg border object-cover transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <p className="mt-0 text-xl font-semibold text-blue-700">
        Wie schnell benötigen Sie Ihre Daten?
      </p>
      <p className="py-5 text-xl">
        Zeit ist ein wichtiger Faktor bei der Datenrettung. Wir haben für jeden
        Anspruch den richtigen Service.
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="rounded-lg bg-yellow-300 p-4 text-center transition-all duration-300 ease-in-out hover:scale-105">
          <p className="py-4 text-2xl font-semibold">Standard</p>
          <p className="pb-4 text-lg">7 - 10 Geschäftstage</p>
        </div>
        <div className="rounded-lg bg-green-400 p-4 text-center text-white transition-all duration-300 ease-in-out hover:scale-105">
          <p className="py-4 text-2xl font-semibold">Express</p>
          <p className="pb-4 text-lg">Durchschnittlich 3 Geschäftstage</p>
        </div>
        <div className="rounded-lg bg-red-500 p-4 text-center text-white transition-all duration-300 ease-in-out hover:scale-105">
          <p className="py-4 text-2xl font-semibold">Notfall</p>
          <p className="pb-4 text-lg">Rund um die Uhr bis zur Fertigstellung</p>
        </div>
      </div>
      <p className="py-5 text-xl">
        Um den Zustand der Daten zu bestimmen werden Ihre Medien von den
        Experten bei Ontrack analysiert. Optional erhalten Sie einen
        detaillierten Online-Bericht mit allen wieder herstellbaren Dateien,
        bevor Sie sich für die Datenrettung entscheiden.
      </p>
      <div className="my-16 grid grid-cols-1">
        <Button asChild size={"xl"}>
          <a
            href="https://www.ontrack.com/de-de/datenrettung/anfrage-datenrettung/?partnerid=1009352"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt Datenrettung anfragen
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Datenrettung
