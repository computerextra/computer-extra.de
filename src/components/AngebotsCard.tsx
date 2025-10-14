import type { Angebot } from "@/api/angebote";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function AngebotCard({
  Angebot,
  idx,
}: {
  Angebot: Angebot;
  idx: number;
}) {
  const isActive =
    new Date() > new Date(Angebot.date_start) &&
    new Date() < new Date(Angebot.date_stop);

  return (
    <>
      <Card
        className={cn(
          idx % 2 == 0
            ? "lg:col-span-3 row-span-1"
            : "lg:col-span-2 row-span-1",
          "transition-shadow duration-300 shadow-sm group bg-slate-100  border-blue-950 hover:shadow-md"
        )}
      >
        <div className="relative overflow-hidden h-70">
          {/* Laufzeit Mobile */}
          <div className="flex items-center gap-1 px-3 py-1 mb-1 rounded-full lg:hidden justify-self-end me-2 max-w-fit bg-primary/90 text-slate-100">
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
          {/* Laufzeit Desktop */}
          <div className="absolute items-center hidden gap-1 px-3 py-1 rounded-full lg:flex top-4 right-4 bg-primary/90 text-slate-100">
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
