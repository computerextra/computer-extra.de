import { ContactFormProps, sendContactForm } from "@/api/contactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { CircleCheckBig, CircleOff, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ContactForm() {
  const [res, setRes] = useState<{ status: number; message: string } | null>(
    null
  );
  const form = useForm<z.infer<typeof ContactFormProps>>({
    resolver: zodResolver(ContactFormProps),
  });

  const onSubmit = async (values: z.infer<typeof ContactFormProps>) => {
    const res = await sendContactForm(values);
    setRes(res);
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
  } else if (
    res?.status === 400 ||
    res?.status === 500 ||
    res?.status === 405
  ) {
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
            Fehler: {res?.message}
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
            {/* Datenschutz */}
            <FormField
              control={form.control}
              name="Datenschutz"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      disabled={
                        form.formState.isSubmitting ||
                        form.formState.isSubmitted
                      }
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel>
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                    stimme zu, dass meine Angaben und Daten zur Beantwortung
                    meiner Anfrage elektronisch erhoben und gespeichert werden.
                    Hinweis: Sie können Ihre Einwilligung jederzeit für die
                    Zukunft per E-Mail an info [AT] computer-extra [PUNKT] de
                    widerrufen.
                  </FormLabel>
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
            <p className="!text-xs text-muted-foreground">
              * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht
              an Dritte weitergegeben.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
