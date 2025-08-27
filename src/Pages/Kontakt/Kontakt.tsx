import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CircleCheckBig,
  CircleOff,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  Name: z.string().min(1, "Name ist erforderlich"),
  Mail: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  Telefon: z.string().optional(),
  Nachricht: z.string().min(1, "Eine Nachricht ist erforderlich."),
});

export default function Kontakt() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground text-balance">
          Kontakt
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
          Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns gerne über das
          Formular oder direkt über unsere Kontaktdaten.
        </p>
      </div>
      <div className="grid max-w-6xl gap-12 mx-auto lg:grid-cols-2">
        <CompanyInfo />
        <ContactForm />
      </div>
    </div>
  );
}

function ContactForm() {
  const [res, setRes] = useState<{ status: number; message: string } | null>(
    null
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  if (res?.status === 200) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CircleCheckBig className="w-16 h-16 mb-4 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Nachricht gesendet!
          </h2>
          <p className="text-center text-muted-foreground">
            Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei
            Ihnen melden.
          </p>
        </CardContent>
      </Card>
    );
  } else if (res?.status === 500) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CircleOff className="w-16 h-16 mb-4 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Fehler!
          </h2>
          <p className="text-center text-muted-foreground">
            Ihre Nachtricht konnte leider nicht gesendet werden. Bitte versuchen
            Sie es später erneut. <br />
            Fehler: {res.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground">
          Schreiben Sie uns
        </CardTitle>
        <p className="text-muted-foreground">
          Füllen Sie das Formuar aus und wir melden uns bei Ihnen zurück.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihr Name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre E-Mail-Adresse *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Telefon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre Telefonnummer</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Nachricht"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre Nachricht *</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  <div className="w-4 h-4 mr-2 border-b-2 rounded-full animate-spin border-primary-foreground" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Nachricht senden
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht
              an Dritte weitergegeben.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function CompanyInfo() {
  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <MapPin className="w-6 h-6 text-primary" />
            Unser Standort
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              Computer Extra GmbH
            </h3>
            <address className="not-italic leading-relaxed text-muted-foreground">
              Harleshäuser Str. 8
              <br />
              34130 Kassel
            </address>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <Phone className="w-6 h-6 text-primary" />
            Telefon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="tel:0561601440"
            className="text-lg font-medium transition-colors text-primary hover:text-primary/80"
          >
            0561 / 60 144 0
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            Montag bis Freitag, 8:00 - 18:00 Uhr
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <Mail className="w-6 h-6 text-primary" />
            E-Mail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-lg font-medium transition-colors text-primary hover:text-primary/80">
            info [AT] computer-extra.de
          </span>
          <p className="mt-1 text-sm text-muted-foreground">
            Wir antworten innerhalb von 24 Stunden
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
            <Clock className="w-6 h-6 text-primary" />
            Öffnungszeiten
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="text-card-foreground">Montag - Freitag:</span>
            <span className="text-muted-foreground">9:00 - 18:00 Uhr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-card-foreground">Samstag:</span>
            <span className="text-muted-foreground">Geschlossen</span>
          </div>
          <div className="flex justify-between">
            <span className="text-card-foreground">Sonntag:</span>
            <span className="text-muted-foreground">Geschlossen</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
