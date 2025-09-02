import type { Angebot } from "@/api/angebote";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAngebote from "@/Hooks/useAngebote";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { useEffect } from "react";

export default function AngeboteSeite() {
  const { isPending, isError, Angebote, error } = useAngebote();

  useEffect(() => {
    if (Angebote == null) return;
  }, [Angebote]);

  return (
    <div className="container mx-auto mt-20 mb-10">
      <h1 className="text-center">Unsere Angebote</h1>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-center md:text-xl text-slate-900/90">
        Finden Sie das ideale Gerät für Ihre Anforderungen - Computer,
        Notebooks, Smartphones und Verträge zu unschlagbaren Konditionen!
      </p>
      {isPending && <Loading message="Unsere Angebote werden geladen..." />}
      {isError && (
        <Error
          showRetry
          message={
            "Beim Laden der Angebote ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
            error
          }
        />
      )}
      {Angebote && (
        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-5 max-h-[1000px]">
          {Angebote?.map((Angebot) => (
            <AngebotCard key={Angebot.id} Angebot={Angebot} />
          ))}
        </div>
      )}
    </div>
  );
}

function AngebotCard({ Angebot }: { Angebot: Angebot }) {
  const isActive =
    new Date() > new Date(Angebot.date_start) &&
    new Date() < new Date(Angebot.date_stop);

  return (
    <>
      <Card
        className={cn(
          Angebot.title.toLowerCase().includes("telekom")
            ? "lg:col-span-3 row-span-1"
            : "lg:col-span-2 row-span-1",
          "transition-shadow duration-300 shadow-sm group bg-slate-100  border-blue-950 hover:shadow-md"
        )}
      >
        <div className="relative overflow-hidden h-70">
          <img
            // TODO: Link anpassen, wenn direkt auf API
            src={
              Angebot.link.includes("katalog.computer-extra.de")
                ? Angebot.link + "/shot.png"
                : "https://computer-extra.de/Images/Angebote/" + Angebot.image
            }
            alt={Angebot.title}
            className={cn(
              Angebot.link.includes("katalog.computer-extra.de")
                ? "object-contain h-max"
                : "object-cover h-64",
              "w-auto mx-auto transition-transform duration-300 group-hover:scale-105",
              !isActive ? "grayscale" : "cursor-pointer"
            )}
            onClick={() => isActive && window.open(Angebot.link, "_blank")}
          />
          <div className="absolute flex items-center gap-1 px-3 py-1 rounded-full top-4 right-4 bg-primary/90 text-slate-100">
            <Clock className="w-3 h-3" />
            <span className="text-xs font-medium">
              {new Date(Angebot.date_start).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}{" "}
              -{" "}
              {new Date(Angebot.date_stop).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </span>
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold">{Angebot.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p>{Angebot.subtitle}</p>
          {isActive ? (
            <Button asChild variant={"default"} className="w-full font-medium">
              <a href={Angebot.link} target="_blank" rel="noopener noreferrer">
                Zum Angebot
              </a>
            </Button>
          ) : (
            <Button disabled variant={"default"} className="w-full font-medium">
              Angebot abgelaufen
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
