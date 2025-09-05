import type { Partner } from "@/api/partner";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function PartnerCard({
  Partner,
  id,
}: {
  Partner: Partner;
  id: number;
}) {
  const isLarge = () => id % 7 === 0;

  return (
    <>
      <Card
        className={cn(
          isLarge() ? "lg:col-span-3 lg:flex-row" : "col-span-1",
          "flex flex-col transition-all shadow-sm hover:shadow-lg hover:scale-105 group duration-300"
        )}
      >
        <img
          // TODO: Link anpassen, wenn direkt auf API
          src={"https://computer-extra.de/Images/Partner/" + Partner.image}
          alt={Partner.name}
          className={cn(
            "object-contain w-full group-hover:scale-120 transition-transform duration-300",
            isLarge() ? "lg:h-70 h-48" : "h-48"
          )}
        />
        <div className="flex flex-col justify-around flex-1">
          <CardHeader className="text-xl font-bold text-center">
            {Partner.name}
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button className="lg:hidden" asChild size={"default"}>
              <a href={Partner.link} target="_blank" rel="noopener noreferrer">
                Webseite besuchen
              </a>
            </Button>
            <Button
              className="hidden lg:inline-flex"
              asChild
              size={isLarge() ? "lg" : "default"}
            >
              <a href={Partner.link} target="_blank" rel="noopener noreferrer">
                <span className="hidden xl:block">Webseite besuchen</span>
                <span className="block xl:hidden">Webseite</span>
              </a>
            </Button>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
