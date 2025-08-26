import type { Angebot } from "@/api/angebote";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useAngebote from "@/Hooks/useAngebote";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function AngeboteSeite() {
  const { Angebote, isLoading } = useAngebote();

  useEffect(() => {
    if (Angebote == null) return;
    console.log(Angebote);
  }, [Angebote]);

  return (
    <>
      <h1 className="text-center">Aktuelle Angebote</h1>
      <p className="mt-2 text-lg text-center">
        Hier finden Sie die neuesten Angebote und Aktionen.
      </p>

      {isLoading ? (
        <p className="mt-10 text-3xl text-center">Bitte warten...</p>
      ) : (
        <div className="grid gap-5 mt-10 mb-5 lg:grid-cols-4">
          {Angebote?.map((Angebot) => (
            <AngebotCard key={Angebot.id} Angebot={Angebot} />
          ))}
        </div>
      )}
    </>
  );
}

function AngebotCard({ Angebot }: { Angebot: Angebot }) {
  return (
    <Card
      key={Angebot.id}
      className="overflow-hidden transition-all duration-300 group border-border bg-card hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={Angebot.image}
          alt={Angebot.title}
          className="object-cover w-full h-64 transition-transform duraion-300 grouo-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight text-card-foreground line-clamp-2">
            {Angebot.title}
          </h3>
          <h4>{Angebot.subtitle}</h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={cn("text-xl font-bold text-primary")}>
              Gültig von {new Date(Angebot.date_start).toLocaleDateString()} bis{" "}
              {new Date(Angebot.date_stop).toLocaleDateString()}
            </span>
          </div>
        </div>
        <Button
          asChild
          className="w-full font-medium bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <a href={Angebot.link} target="_blank" rel="noopener noreferrer">
            Ansehen
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
