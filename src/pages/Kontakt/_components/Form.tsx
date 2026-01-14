import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFormChallenge from "@/hooks/useFormChallenge";
import { useForm } from "@tanstack/react-form";
import axios from "axios";
import z from "zod";

const formSchema = z.object({
  Name: z.string(),
  Mail: z.string(),
  Telefon: z.string(),
  Nachricht: z.string(),
  Challenge: z.string(),
  Datenschutz: z.boolean(),
});

export default function ContactForm() {
  const { firstAscii, secondAscii, CheckResult } = useFormChallenge();
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
        };
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
      const formData = new FormData();
      formData.append("Name", value.Name);
      formData.append("Mail", value.Mail);
      formData.append("Telefon", value.Telefon);
      formData.append("Nachricht", value.Nachricht);

      const res = await axios.post(
        "https://api.computer-extra.de/kontaktformular.php",
        formData,
      );

      if (res.data) {
        const d = res.data;
        if (d.success) {
          // Navigate to "ERFOLG"
        } else {
          // Navigate to "FEHLER"
        }
      }
    },
  });
  return (
    <form
      id="contactForm"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field
          name="Name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
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
            );
          }}
        />

        <form.Field
          name="Mail"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
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
            );
          }}
        />

        <form.Field
          name="Telefon"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
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
            );
          }}
        />

        <form.Field
          name="Nachricht"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
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
            );
          }}
        />

        <form.Field
          name="Datenschutz"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
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
                        field.handleChange(checked === true);
                      }}
                    />
                    <FieldLabel htmlFor={field.name}>Akzeptiert</FieldLabel>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                </FieldGroup>
              </FieldSet>
            );
          }}
        />

        <form.Field
          name="Challenge"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
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
            );
          }}
        />

        <Button type="submit" form="contactForm">
          Absenden
        </Button>
      </FieldGroup>
    </form>
  );
}
