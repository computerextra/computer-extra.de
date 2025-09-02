import { Loader2 } from "lucide-react";

export default function Loading({
  message = "Daten werden Geladen...",
}: {
  message?: string;
}) {
  return (
    <div className="mt-20 space-y-6 text-center">
      {/* Loading Animation */}
      <div className="relative">
        <div className="w-16 h-16 mx-auto">
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-primary/20 animate-ping" />
      </div>

      {/* Loading Text */}
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-foreground">{message}</h2>
        <p className="text-sm text-muted-foreground">
          Bitte haben Sie einen Moment Geduld
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
      </div>
    </div>
  );
}
