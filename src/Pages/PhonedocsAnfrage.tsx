import { GradientHeader } from "@/components/misc/gradient-header"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "@tanstack/react-form"
import { useState } from "react"
import { NavLink } from "react-router"
import { z } from "zod"

const issueOptions = [
  "Displaywechsel",
  "Akkuwechsel",
  "Wasserschaden",
  "Ladebuchse reparieren",
  "Kostenvoranschlag",
  "Fehlerdiagnose",
  "Datensicherung",
  "Recycling",
] as const

const phoneSchema = z
  .string()
  .refine(
    (value) =>
      value === "" ||
      (/^[0-9+()\s/-]+$/.test(value) && value.replace(/\D/g, "").length >= 6),
    "Bitte geben Sie eine gültige Telefonnummer ein."
  )

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  telefonnummer: phoneSchema,
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  geraet: z.string().min(2, "Bitte geben Sie Ihr Gerät an."),
  fehler: z.string().min(1, "Bitte wählen Sie einen Fehler aus."),
  fehlerbeschreibung: z
    .string()
    .min(10, "Bitte beschreiben Sie den Fehler etwas genauer."),
  datenschutz: z.boolean().refine(Boolean, "Bitte stimmen Sie zu."),
})

type SubmitState = "idle" | "success" | "error"

export default function PhonedocsAnfrage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const form = useForm({
    defaultValues: {
      name: "",
      telefonnummer: "",
      email: "",
      geraet: "",
      fehler: "",
      fehlerbeschreibung: "",
      datenschutz: false,
    },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      setSubmitState("idle")
      const payload = new FormData()

      payload.append("name", value.name)
      payload.append("telefonnummer", value.telefonnummer)
      payload.append("email", value.email)
      payload.append("geraet", value.geraet)
      payload.append("fehler", value.fehler)
      payload.append("fehlerbeschreibung", value.fehlerbeschreibung)
      payload.append("datenschutz", value.datenschutz ? "1" : "0")

      try {
        const response = await fetch(
          "https://api.computer-extra.de/phonedocs.php",
          { method: "POST", body: payload }
        )

        if (!response.ok) throw new Error("Request failed")

        setSubmitState("success")
        form.reset()
      } catch {
        setSubmitState("error")
      }
    },
  })

  return (
    <div className="container mx-auto my-5 max-w-3xl">
      <title>Computer Extra GmbH | PhoneDocs Anfrage</title>
      <GradientHeader>PhoneDocs Reparaturanfrage</GradientHeader>
      <p className="mt-4 text-lg leading-7">
        Beschreiben Sie Ihr Gerät und den Fehler. Wir melden uns zeitnah bei
        Ihnen.
      </p>

      <form
        className="mt-8 rounded-xl border p-6 shadow-sm"
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()
          form.handleSubmit()
        }}
        noValidate
      >
        <FieldGroup>
          <form.Field name={"name"}>
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>{"Name *"}</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={"text"}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    autoComplete={"name"}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>
          <form.Field name={"telefonnummer"}>
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    {"Telefonnummer (optional)"}
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={"text"}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    autoComplete={"tel"}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>
          <form.Field name={"email"}>
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>{"E-Mail *"}</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={"text"}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    autoComplete={"email"}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>
          <form.Field name={"geraet"}>
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>{"Gerät *"}</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={"text"}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>

          <form.Field name="fehler">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Fehler *</FieldLabel>
                  <select
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-invalid={isInvalid}
                    className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="">Bitte auswählen</option>
                    {issueOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>

          <form.Field name="fehlerbeschreibung">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    Fehlerbeschreibung *
                  </FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-invalid={isInvalid}
                    className="min-h-32"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              )
            }}
          </form.Field>

          <form.Field name="datenschutz">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <FieldSet>
                  <FieldLegend>Datenschutz</FieldLegend>
                  <FieldDescription>
                    Ich habe die{" "}
                    <NavLink to="/Datenschutz" className="underline">
                      Datenschutzerklärung
                    </NavLink>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.
                  </FieldDescription>
                  <Field orientation="horizontal" data-invalid={isInvalid}>
                    <Checkbox
                      id={field.name}
                      name={field.name}
                      checked={field.state.value}
                      onBlur={field.handleBlur}
                      onCheckedChange={(checked) =>
                        field.handleChange(checked === true)
                      }
                      aria-invalid={isInvalid}
                    />
                    <FieldLabel htmlFor={field.name}>Akzeptiert *</FieldLabel>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                </FieldSet>
              )
            }}
          </form.Field>

          {submitState === "success" && (
            <p className="rounded-md bg-emerald-50 p-3 text-emerald-800">
              Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.
            </p>
          )}
          {submitState === "error" && (
            <p className="rounded-md bg-red-50 p-3 text-red-800">
              Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es
              erneut oder rufen Sie uns an.
            </p>
          )}

          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
              </Button>
            )}
          </form.Subscribe>
        </FieldGroup>
      </form>
    </div>
  )
}
