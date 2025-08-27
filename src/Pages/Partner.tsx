import type { Partner } from "@/api/partner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import usePartner from "@/Hooks/usePartner";
import { cn } from "@/lib/utils";

export default function PartnerPage() {
  const { Partner, isLoading } = usePartner();

  return (
    <>
      <h1>Unsere Partner</h1>
      <h2>
        Wir pflegen eine partnerschaftliche Zusammenarbeit mit unseren Partnern.
        Auf Vertrauen und Transparenz legen wir großen Wert - denn im
        Miteinander liegt unsere Stärke.
      </h2>
      {isLoading ? (
        <p className="mt-10 text-3xl text-center">Bitte warten...</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-6">
          {Partner?.map((partner, idx) => (
            <PartnerCard key={partner.id} Partner={partner} id={idx} />
          ))}
        </div>
      )}
    </>
  );
}

function PartnerCard({ Partner, id }: { Partner: Partner; id: number }) {
  const isLarge = () => id % 7 === 0;

  return (
    <>
      <Card
        className={cn(
          isLarge() ? "lg:col-span-3 lg:flex-row" : "col-span-1",
          "flex flex-col"
        )}
      >
        <img
          // TODO: Link anpassen, wenn direkt auf API
          src={"https://computer-extra.de/Images/Partner/" + Partner.image}
          alt={Partner.name}
          className={cn(
            "object-contain w-full",
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
                Webseite besuchen
              </a>
            </Button>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
