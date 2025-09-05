import type { Partner } from "@/api/partner";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import usePartner from "@/Hooks/usePartner";
import { cn } from "@/lib/utils";
import { LgWidth } from "@/Vars";
import { useEffect, useState } from "react";

export default function PartnerPage() {
  const { isPending, isError, Partner, error } = usePartner();
  const [minHeigt, setMinHeigt] = useState(0);

  useEffect(() => {
    if (Partner == null) return;

    const w = window.screen.width;
    if (LgWidth < w) return;

    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setMinHeigt(height);
  }, [Partner]);

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <h1>Unsere Partner</h1>
      <h2 className="text-center">
        Wir pflegen eine partnerschaftliche Zusammenarbeit mit unseren Partnern.
        Auf Vertrauen und Transparenz legen wir großen Wert - denn im
        Miteinander liegt unsere Stärke.
      </h2>
      {isPending && <Loading message="Unsere Partner werden geladen..." />}
      {isError && (
        <Error
          showRetry
          message={
            "Beim Laden der Partner ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
            error
          }
        />
      )}
      {Partner && (
        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-6">
          {Partner?.map((partner, idx) => (
            <PartnerCard key={partner.id} Partner={partner} id={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

function PartnerCard({ Partner, id }: { Partner: Partner; id: number }) {
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
