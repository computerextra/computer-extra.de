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
import useFormChallenge from "@/hooks/form-challenge"
import { useForm } from "@tanstack/react-form"
import axios from "axios"
import z from "zod"

const formSchema = z.object({
  Name: z.string(),
  Mail: z.string(),
  Telefon: z.string(),
  Nachricht: z.string(),
  Challenge: z.string(),
  Datenschutz: z.boolean(),
})

const Kontakt = () => {
  return (
    <div className="container mx-auto my-5">
      <title>Computer Extra GmbH | Kontakt</title>
      <div className="mb-4">
        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"></div>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="grid md:grid-cols-2">
          <div className="h-full pr-6">
            <p className="text-5xl font-semibold">Let´s Chat!</p>
            <p className="mt-3 mb-12 text-3xl">
              Erzählen Sie uns von Ihren Wünschen
            </p>
            <ul className="mb-6 md:mb-0">
              <li className="mb-5 flex rounded-xl ps-2 pt-2 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="mb-4 ml-4">
                  <h3 className="mb-2 text-lg leading-6 font-medium text-gray-900">
                    Unsere Adresse
                  </h3>
                  <p className="text-gray-600">Computer Extra GmbH</p>
                  <p className="text-gray-600">Harleshäuser Str. 8</p>
                  <p className="text-gray-600">34130 Kassel</p>
                </div>
              </li>
              <li className="mb-5 flex rounded-xl ps-2 pt-2 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="mb-4 ml-4">
                  <h3 className="mb-2 text-lg leading-6 font-medium text-gray-900">
                    Kontakt
                  </h3>
                  <p className="text-gray-600">Telefon: 0561 / 60 144 0</p>
                  <p className="text-gray-600">
                    E-Mail: info [AT] computer-extra.de
                  </p>
                </div>
              </li>
              <li className="mb-5 flex rounded-xl ps-2 pt-2 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="mb-4 ml-4">
                  <h3 className="mb-2 text-lg leading-6 font-medium text-gray-900">
                    Öffnungszeiten
                  </h3>
                  <p className="text-gray-600">
                    Montag - Freitag: 09:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    Samstag &amp; Sonntag: geschlossen
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="card h-fit max-w-6xl rounded-xl p-5 ring-2 md:p-12"
            id="form"
          >
            <h2 className="mb-4 text-2xl font-bold">
              Jetzt mit uns Durchstarten
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt

function ContactForm() {
  const { firstAscii, secondAscii, CheckResult } = useFormChallenge()
  const form = useForm({
    validators: {
      onSubmit: formSchema,
      onChange: ({ value }) => {
        return {
          fields: {
            Challenge: !CheckResult(value.Challenge)
              ? "Falsches Ergebnis"
              : undefined,
          },
        }
      },
    },
    defaultValues: {
      Name: "",
      Mail: "",
      Telefon: "",
      Nachricht: "",
      Challenge: "",
      Datenschutz: false,
    },
    onSubmit: async ({ value }) => {
      const formData = new FormData()
      formData.append("Name", value.Name)
      formData.append("Mail", value.Mail)
      formData.append("Telefon", value.Telefon)
      formData.append("Nachricht", value.Nachricht)

      const res = await axios.post(
        "https://api.computer-extra.de/kontaktformular.php",
        formData
      )

      if (res) {
        if (res.status === 200) {
          // Navigate to "ERFOLG"
          window.location.href = "/Erfolg"
        } else {
          // Navigate to "FEHLER"
          window.location.href = "/Fehler"
        }
      }
    },
  })
  return (
    <form
      id="contactForm"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <FieldGroup>
        <form.Field
          name="Name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Name *</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  autoComplete="true"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        />

        <form.Field
          name="Mail"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>E-Mail *</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  autoComplete="true"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        />

        <form.Field
          name="Telefon"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Telefon *</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  autoComplete="true"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        />

        <form.Field
          name="Nachricht"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Ihre Nachricht *</FieldLabel>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  className="min-h-30"
                />

                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            )
          }}
        />

        <form.Field
          name="Datenschutz"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <FieldSet>
                <FieldLegend>Datenschutz</FieldLegend>
                <FieldDescription>
                  Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                  stimme zu, dass meine Angaben und Daten zur Beantwortung
                  meiner Anfrage elektronisch erhoben und gespeichert werden.
                  Hinweis: Sie können Ihre Einwilligung jederzeit für die
                  Zukunft per E-Mail an info [AT] computer-extra [PUNKT] de
                  widerrufen.
                </FieldDescription>
                <FieldGroup data-slot="checkbox-group">
                  <Field data-invalid={isInvalid} orientation={"horizontal"}>
                    <Checkbox
                      id={field.name}
                      name={field.name}
                      aria-invalid={isInvalid}
                      checked={field.state.value}
                      onCheckedChange={(checked) => {
                        field.handleChange(checked === true)
                      }}
                    />
                    <FieldLabel htmlFor={field.name}>Akzeptiert</FieldLabel>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                </FieldGroup>
              </FieldSet>
            )
          }}
        />

        <form.Field
          name="Challenge"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>
                  Das Ergebnis von{" "}
                  <span className="select-none">
                    {firstAscii} + {secondAscii}
                  </span>
                </FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  autoComplete="true"
                />
                {isInvalid && field.state.meta.errors[0] && (
                  <FieldError
                    errors={[{ message: field.state.meta.errors[0] as string }]}
                  />
                )}
              </Field>
            )
          }}
        />

        <Button type="submit" form="contactForm">
          Absenden
        </Button>
      </FieldGroup>
    </form>
  )
}
