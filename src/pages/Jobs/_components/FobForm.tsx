import useFormChallenge from "@/hooks/useFormChallenge";
import z from "zod";
import type { Job } from "./JobOverview";
import { useForm } from "@tanstack/react-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axios from "axios";

const formSchema = z.object({
  Name: z.string(),
  Mail: z.email(),
  Telefon: z.string(),
  Job: z.string(),
  Challenge: z.string(),
  Datenschutz: z.boolean(),
});

export default function JobForm({ Job }: { Job: Job }) {
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
      Job: Job.name,
      Challenge: "",
      Datenschutz: false,
    },
    onSubmit: async ({ value }) => {
      const formData = new FormData();
      formData.append("Name", value.Name);
      formData.append("Mail", value.Mail);
      formData.append("Phone", value.Telefon);
      if (Job.isAusbilung == 1) {
        formData.append("Job", "Ausbildung: " + value.Job);
      } else {
        formData.append("Job", value.Job);
      }
      formData.append(
        "Lebenslauf",
        (document.querySelector("#Lebenslauf") as HTMLFormElement).files[0],
      );
      formData.append(
        "Anschreiben",
        (document.querySelector("#Anschreiben") as HTMLFormElement).files[0],
      );
      formData.append(
        "Zeugnisse",
        (document.querySelector("#Zeugnisse") as HTMLFormElement).files[0],
      );

      const res = await axios.post(
        "https://api.computer-extra.de/bewerbung.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      if (res) {
        if (res.status === 200) {
          // Navigate to "ERFOLG"
          window.location.href = "/Erfolg";
        } else {
          // Navigate to "FEHLER"
          window.location.href = "/Fehler";
        }
      }
    },
  });

  return (
    <Card className="w-full sm:max-w-xl">
      <CardHeader>
        <CardTitle>Begeistert?</CardTitle>
        <CardDescription>Dann bewirb dich bei uns.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="Bewerbungsform"
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
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
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
                    <FieldLabel htmlFor={field.name}>Mail *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="true"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
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
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <Field>
              <FieldLabel htmlFor={"Lebenslauf"}>
                Lebenslauf als PDF - Datei
              </FieldLabel>
              <Input
                id={"Lebenslauf"}
                name={"Lebenslauf"}
                type="file"
                accept="application/pdf"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={"Anschreiben"}>
                Anschreiben als PDF - Datei
              </FieldLabel>
              <Input
                id={"Anschreiben"}
                name={"Anschreiben"}
                type="file"
                accept="application/pdf"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={"Zeugnisse"}>
                Zeugnisse als PDF - Datei
              </FieldLabel>
              <Input
                id={"Zeugnisse"}
                name={"Zeugnisse"}
                type="file"
                accept="application/pdf"
              />
            </Field>

            <form.Field
              name="Datenschutz"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <FieldSet>
                    <FieldLegend>Datenschutz</FieldLegend>
                    <FieldDescription>
                      Ich habe die Datenschutzerklärung zur Kenntnis genommen.
                      Ich stimme zu, dass meine Angaben und Daten zur
                      Beantwortung meiner Anfrage elektronisch erhoben und
                      gespeichert werden. Hinweis: Sie können Ihre Einwilligung
                      jederzeit für die Zukunft per E-Mail an info [AT]
                      computer-extra [PUNKT] de widerrufen.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field
                        data-invalid={isInvalid}
                        orientation={"horizontal"}
                      >
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
                        errors={[
                          { message: field.state.meta.errors[0] as string },
                        ]}
                      />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="Bewerbungsform">
            Absenden
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
