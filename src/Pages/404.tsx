import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useTitle from "@/Hooks/useTitle";

export default function NotFound() {
  const router = useNavigate();
  useTitle("404");

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      router("/");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">
              Seite nicht gefunden
            </h2>
            <p className="text-muted-foreground">
              Die angeforderte Seite konnte nicht gefunden werden. Sie wurde
              möglicherweise verschoben oder gelöscht.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              onClick={handleGoBack}
              variant="default"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Button>

            <Button
              onClick={() => router("/")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Startseite
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
