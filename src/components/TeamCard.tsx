import { Mail } from "lucide-react";
import type { Abteilung } from "@/api/abteilungen";
import type { Mitarbeiter } from "@/api/mitarbeiter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function EmployeeCard({
  employee,
  dep,
}: {
  employee: Mitarbeiter;
  dep: Abteilung | undefined;
}) {
  const email = employee.name.split(" ").join(".") + " [AT] computer-extra.de";
  return (
    <Card className="transition-all duration-300 shadow-sm bg-card border-border hover:shadow-lg hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Avatar className="w-20 h-20">
            <AvatarImage
              // TODO: Bild über API ziehen
              src={
                employee.image
                  ? `https://bilder.computer-extra.de/data/Mitarbeiter/${employee.short.toLowerCase()}.webp`
                  : ""
              }
              className="transition-transform duration-300 group-hover:scale-120"
              alt={employee.name}
            />
            <AvatarFallback className="text-lg font-semibold transition-transform duration-300 group-hover:scale-120 bg-secondary text-secondary-foreground">
              {employee.short}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-card-foreground text-balance">
              {employee.name}
            </h3>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-pretty">{email}</span>
            </div>

            <Badge
              variant="outline"
              className="bg-foreground text-accent border-accent/20"
            >
              {dep?.name}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
