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

      {isLoading ? (
        <p className="text-center text-3xl mt-10">Bitte warten...</p>
      ) : (
        <div className="grid lg:grid-cols-4 gap-5 mt-10">
          {Angebote?.map((Angebot) => (
            <Card
              key={Angebot.id}
              className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={Angebot.image}
                  alt={Angebot.title}
                  className="w-full h-64 object-cover transition-transform duraion-300 grouo-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-card-foreground line-clamp-2 leading-tight">
                    {Angebot.title}
                  </h3>
                  <h4>{Angebot.subtitle}</h4>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={cn("text-xl font-bold text-primary")}>
                      {new Date(Angebot.date_start).toLocaleDateString()} -{" "}
                      {new Date(Angebot.date_stop).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                >
                  <a
                    href={Angebot.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ansehen
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
