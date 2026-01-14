import z from "zod";
import { useBlankoAnlageA, useBlankoAnlageB, useBlankoVertrag } from "./hooks";
import { useEffect, useState } from "react";
import { createPdf, type CreateResponse } from "./client";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";

const queryClient = new QueryClient();

const LgWidth = 1024;

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

const formSchema = z.object({
  Kundennummer: z
    .string("Die Kundennummer ist zwingend erforderlich")
    .min(7, "Die Kundennummer besteht aus einem D gefolgt von 6 Ziffern.")
    .max(7, "Die Kundennummer besteht aus einem D gefolgt von 6 Ziffern.")
    .refine((Kundennummer) => /D[0-9]{6}$/.test(Kundennummer)),
  Firma: z.string("Der Firmenname ist zwingend erforderlich"),
  Adresse: z.string("Die Adresse ist zwingend erforderlich"),
  Postleitzahl: z
    .string("Die Postleitzahl ist zwingend erforderlich")
    .min(5, "Die Postleitzahl ist zwingend erforderlich")
    .max(5, "Die Postleitzahl ist zwingend erforderlich"),
  Ort: z.string("Der Ort ist zwingend erforderlich"),
  Land: z.string(),
  Vertretungsberechtigter: z.string(
    "Die Angabe eines Vertretungsberechtigten ist zwingend erforderlich",
  ),
  Gelesen: z.boolean(),
  Richtig: z.boolean(),
  EMail: z.email("Eine E-Mail-Adresse ist zwingend erforderlich"),
});

export default function Avv() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
}

function Form() {
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
      html.offsetHeight,
    );

    setMinHeigt(height);
  }, [BlankoVertrag, BlankoAnlageA, BlankoAnlageB]);

  const [res, setRes] = useState<CreateResponse | null>(null);

  const form = useForm({
    validators: {
      onSubmit: formSchema,
    },
    defaultValues: {
      Kundennummer: "",
      Firma: "",
      Adresse: "",
      Postleitzahl: "",
      Ort: "",
      Land: "Deutschland",
      Vertretungsberechtigter: "",
      Gelesen: false,
      Richtig: false,
      EMail: "",
    },
    onSubmit: async ({ value }) => {
      const res = await createPdf(value);
      setRes(res);
    },
  });

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      {!BlankoIsPending && !BlankoIsError && (
        <div className="mx-auto mt-5 rounded-2xl border-4 bg-slate-100 p-4">
          <h2 className="text-xl!">Vertragsbedingungen</h2>
          <p className="text-lg!">
            Hinweis: "[XXXXX]" sind Platzhalter. Ihre Vertragspartnerdaten
            werden im nächsten Schritt automatisch eingefügt.
          </p>
          <div
            className="mt-2 max-h-70 overflow-y-scroll border-4 bg-white"
            id="blanko"
            dangerouslySetInnerHTML={{ __html: BlankoVertrag ?? "" }}
          />
        </div>
      )}
      {!BlankoAIsPending && !BlankoAIsError && (
        <div className="mx-auto mt-5 rounded-2xl border-4 bg-slate-100 p-4">
          <h2 className="text-xl!">Anlage A: Details zum Auftrag</h2>
          <div
            className="mt-2 max-h-70 overflow-y-scroll border-4 bg-white"
            id="blanko"
            dangerouslySetInnerHTML={{ __html: BlankoAnlageA ?? "" }}
          />
        </div>
      )}
      {!BlankoBIsPending && !BlankoBIsError && (
        <div className="mx-auto mt-5 rounded-2xl border-4 bg-slate-100 p-4">
          <h2 className="text-xl!">
            Anlage B: Technische und organisatorische Maßnahmen
          </h2>
          <div
            className="mt-2 max-h-70 overflow-y-scroll border-4 bg-white"
            id="blanko"
            dangerouslySetInnerHTML={{ __html: BlankoAnlageB ?? "" }}
          />
        </div>
      )}
      <div className="mx-auto mt-5 rounded-2xl border-4 bg-slate-100 p-4">
        <h2>Vertragsdaten des Auftraggebers</h2>
        <p>Bitte überprüfen Sie Ihre Eingaben vor dem Absenden.</p>
        <form
          id="avv-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="Kundennummer"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Kundennummer *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Firma"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Firma *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Vertretungsberechtigter"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Vollständiger Name des Vertretungsberechtigten *
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Adresse"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Straße und Hausnummer *
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Postleitzahl"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Postleitzahl *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Ort"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Ort *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Land"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid} orientation="vertical">
                    <FieldContent>
                      <FieldLabel htmlFor={field.name}>Land *</FieldLabel>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </FieldContent>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      disabled={res?.status == 200}
                    >
                      <SelectTrigger
                        id={field.name}
                        aria-invalid={isInvalid}
                        className="min-w-30"
                      >
                        <SelectValue placeholder="Bitte wählen..." />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        {EULänder.map((land, idx) => (
                          <SelectItem value={land} key={idx}>
                            {land}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                );
              }}
            />

            <form.Field
              name="EMail"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      E-Mail-Adresse *
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      disabled={res?.status == 200}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Gelesen"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid} orientation={"horizontal"}>
                    <Checkbox
                      id={field.name}
                      name={field.name}
                      aria-invalid={isInvalid}
                      checked={field.state.value}
                      onCheckedChange={(checked) =>
                        field.handleChange(checked === true)
                      }
                      disabled={res?.status == 200}
                    />
                    <FieldLabel htmlFor={field.name}>
                      Ich habe den Vertrag vollständig gelesen und bin als
                      Vertretungsberechtigter des Auftraggebers mit der oben
                      genannten Vereinbarung einverstanden. *
                    </FieldLabel>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="Richtig"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid} orientation={"horizontal"}>
                    <Checkbox
                      id={field.name}
                      name={field.name}
                      aria-invalid={isInvalid}
                      checked={field.state.value}
                      onCheckedChange={(checked) =>
                        field.handleChange(checked === true)
                      }
                      disabled={res?.status == 200}
                    />
                    <FieldLabel htmlFor={field.name}>
                      Ich versichere die Vollständigkeit und Richtigkeit meiner
                      Angaben. *
                    </FieldLabel>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <p className="text-muted-foreground m-0! mb-2! p-0! text-xs!">
              *Bei diesen Feldern handelt es sich um ein Pflichtfeld.
            </p>

            <Button
              type="submit"
              disabled={form.state.isSubmitting || res?.status == 200}
            >
              {form.state.isSubmitting ? (
                <>
                  <div className="border-primary-foreground mr-2 h-4 w-4 animate-spin rounded-full border-b-2" />
                  Wird gesendet...
                </>
              ) : res?.status == 200 ? (
                <>{res.message}</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Online Vereinbarung abschließen
                </>
              )}
            </Button>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
