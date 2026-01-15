import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

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
];

export default function SwipeCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-5xl">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full max-w-5xl"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
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
      <div className="text-muted-foreground py-2 text-center text-sm">
        Bild {current} von {count}
      </div>
    </div>
  );
}
