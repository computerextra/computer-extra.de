import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Lock } from "lucide-react";

const DownloadUrl = "https://api.computer-extra.de/OEMLogo.zip";

export default function OEM() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl font-semibold">
            Interner Bereich
          </CardTitle>
          <CardDescription className="text-balance">
            Diese Seite ist ausschließlich für interne Zwecke bestimmt.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="mb-4 text-sm text-muted-foreground">OEM Logo:</p>
            <Button className="w-full" size="lg" asChild>
              <a href={DownloadUrl}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
          <div className="pt-4 text-xs text-center border-t text-muted-foreground">
            Nur für internen Gebrauch
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
