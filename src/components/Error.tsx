import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ErrorAlert({
  title = "Etwas ist schiefgelaufen",
  message = "Beim Laden der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  onRetry = () => location.reload(),
  showRetry = true,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showRetry?: boolean;
}) {
  return (
    <Card className="w-full max-w-md mt-20">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10">
          <AlertCircle className="w-6 h-6 text-destructive" />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {message}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {showRetry && onRetry && (
          <Button
            onClick={onRetry}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Erneut versuchen
          </Button>
        )}

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Falls das Problem weiterhin besteht, kontaktieren Sie bitte den
            Support.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
