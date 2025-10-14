import Autoplay from "embla-carousel-autoplay";
import Ref1 from "@/assets/Computer/ref1.webp";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//  TODO: Bilder von Computern
const Referenzen = [Ref1];

export default function KonfigReferenzen() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Unsere Referenzen
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Erfolgreiche Projekte, die unsere Expertise unter Beweis stellen
          </p>
        </div>

        <div className="">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent>
              {Referenzen.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 aspect-video">
                        <img src={img} alt={img} />
                        {/* <span className="text-4xl font-semibold">
                            {index + 1}
                          </span> */}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
