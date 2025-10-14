import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  AuftragsdatenverarbeitungProps,
  type CreateResponse,
  createPdf,
} from "@/api/Auftragsdatenverarbeitung";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useBlankoAnlageA,
  useBlankoAnlageB,
  useBlankoVertrag,
} from "@/Hooks/Verträge";
import { LgWidth } from "@/Vars";

const EULänder = [
  "Belgien",
  "Bulgarien",
  "Dänemark",
  "Deutschland",
  "Estland",
  "Finnland",
  "Frankreich",
  "Griechenland",
  "Irland",
  "Italien",
  "Kroation",
  "Lettland",
  "Litauen",
  "Luxemburg",
  "Malta",
  "Niederlande",
  "Österreich",
  "Polen",
  "Portugal",
  "Rumänien",
  "Schweden",
  "Slowakei",
  "Slowenien",
  "Spanien",
  "Tschechien",
  "Ungern",
  "Zypern",
];

export default function Auftragsdatenverarbeitung() {
  const {
    isPending: BlankoIsPending,
    isError: BlankoIsError,
    BlankoVertrag,
  } = useBlankoVertrag();

  const {
    isPending: BlankoAIsPending,
    isError: BlankoAIsError,
    BlankoAnlageA,
  } = useBlankoAnlageA();

  const {
    isPending: BlankoBIsPending,
    isError: BlankoBIsError,
    BlankoAnlageB,
  } = useBlankoAnlageB();

  const [minHeigt, setMinHeigt] = useState(0);

  useEffect(() => {
    if (BlankoVertrag == null || BlankoAnlageA == null || BlankoAnlageB == null)
      return;

    const w = window.screen.width;
    if (LgWidth < w) return;

    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setMinHeigt(height);
  }, [BlankoVertrag, BlankoAnlageA, BlankoAnlageB]);

  const [res, setRes] = useState<CreateResponse | null>(null);

  const form = useForm<z.infer<typeof AuftragsdatenverarbeitungProps>>({
    resolver: zodResolver(AuftragsdatenverarbeitungProps),
    defaultValues: {
      Land: "Deutschland",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof AuftragsdatenverarbeitungProps>
  ) => {
    const res = await createPdf(values);
    setRes(res);
  };

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <h1>Auftragsdatenverarbeitungsvertrag</h1>
      {!BlankoIsPending && !BlankoIsError && (
        <div className="p-4 mx-auto mt-5 border-4 rounded-2xl bg-slate-100">
          <h2 className="!text-xl">Vertragsbedingungen</h2>
          <p className="!text-lg">
            Hinweis: "[XXXXX]" sind Platzhalter. Ihre Vertragspartnerdaten
            werden im nächsten Schritt automatisch eingefügt.
          </p>
          <div
            className="mt-2 overflow-y-scroll bg-white border-4 max-h-70"
            id="blanko"
            dangerouslySetInnerHTML={{ __html: BlankoVertrag ?? "" }}
          />
        </div>
      )}
      {!BlankoAIsPending && !BlankoAIsError && (
        <div className="p-4 mx-auto mt-5 border-4 rounded-2xl bg-slate-100">
          <h2 className="!text-xl">Anlage A: Details zum Auftrag</h2>
          <div
            className="mt-2 overflow-y-scroll bg-white border-4 max-h-70"
            id="blanko"
            dangerouslySetInnerHTML={{ __html: BlankoAnlageA ?? "" }}
          />
        </div>
      )}
      {!BlankoBIsPending && !BlankoBIsError && (
        <div className="p-4 mx-auto mt-5 border-4 rounded-2xl bg-slate-100">
          <h2 className="!text-xl">
            Anlage B: Technische und organisatorische Maßnahmen
          </h2>
          <div
            className="mt-2 overflow-y-scroll bg-white border-4 max-h-70"
            id="blanko"
            dangerouslySetInnerHTML={{ __html: BlankoAnlageB ?? "" }}
          />
        </div>
      )}
      <div className="p-4 mx-auto mt-5 border-4 rounded-2xl bg-slate-100">
        <h2>Vertragsdaten des Auftraggebers</h2>
        <p>Bitte überprüfen Sie Ihre Eingaben vor dem Absenden.</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 space-y-6 max-w-150 "
          >
            <FormField
              control={form.control}
              name="Kundennummer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kundennummer: *</FormLabel>
                  <FormControl>
                    <Input disabled={res?.status == 200} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Firma"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firma: *</FormLabel>
                  <FormControl>
                    <Input disabled={res?.status == 200} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Vertretungsberechtigter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Vollständiger Name des Vertretungsberechtigten: *
                  </FormLabel>
                  <FormControl>
                    <Input disabled={res?.status == 200} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Adresse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Straße und Hausnummer *</FormLabel>
                  <FormControl>
                    <Input disabled={res?.status == 200} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Postleitzahl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postleitzahl: *</FormLabel>
                  <FormControl>
                    <Input disabled={res?.status == 200} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Ort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ort: *</FormLabel>
                  <FormControl>
                    <Input disabled={res?.status == 200} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Land"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={res?.status == 200}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen Sie ein Land aus" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-60">
                      {EULänder.map((Land, idx) => (
                        <SelectItem value={Land} key={idx}>
                          {Land}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormControl></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="EMail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail-Adresse: *</FormLabel>

                  <Input disabled={res?.status == 200} {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Gelesen"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      disabled={
                        form.formState.isSubmitting ||
                        form.formState.isSubmitted ||
                        res?.status == 200
                      }
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel>
                    Ich habe den Vertrag vollständig gelesen und bin als
                    Vertretungsberechtigter des Auftraggebers mit der oben
                    genannten Vereinbarung einverstanden. *
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Richtig"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      disabled={
                        form.formState.isSubmitting ||
                        form.formState.isSubmitted ||
                        res?.status == 200
                      }
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel>
                    Ich versichere die Vollständigkeit und Richtigkeit meiner
                    Angaben. *
                  </FormLabel>
                </FormItem>
              )}
            />

            <p className="!p-0 !text-xs text-muted-foreground !m-0 !mb-2">
              *Bei diesen Feldern handelt es sich um ein Pflichtfeld.
            </p>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting || res?.status == 200}
            >
              {form.formState.isSubmitting ? (
                <>
                  <div className="w-4 h-4 mr-2 border-b-2 rounded-full animate-spin border-primary-foreground" />
                  Wird gesendet...
                </>
              ) : res?.status == 200 ? (
                <>{res.message}</>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Online Vereinbarung abschließen
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
