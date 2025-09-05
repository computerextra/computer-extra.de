import { BewerbungsProps, sendBewerbungForm } from "@/api/bewerbung";
import useJobs from "@/Hooks/useJobs";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, CircleOff, FileText } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import Error from "./Error";
import Loading from "./Loading";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const One = ["ı", "１", "𝟏", "𝟙", "𝟣", "𝟭", "𝟷"];
const Two = ["Ƨ", "２", "𝟐", "𝟚", "𝟤", "𝟮", "𝟸"];
const Three = [
  "Ʒ",
  "Ȝ",
  "З",
  "Ӡ",
  "Ⳍ",
  "Ꝫ",
  "Ɜ",
  "３",
  "𖼻",
  "𝈆",
  "𝟑",
  "𝟛",
  "𝟥",
  "𝟯",
  "𝟹",
];
const Four = ["Ꮞ", "４", "𝟒", "𝟜", "𝟦", "𝟰", "𝟺"];
const Five = ["Ƽ", "５", "𑢻", "𝟓", "𝟝", "𝟧", "𝟱", "𝟻"];
const Six = ["б", "Ꮾ", "Ⳓ", "６", "𑣕", "𝟔", "𝟞", "𝟨", "𝟲", "𝟼"];
const Seven = ["７", "𐓒", "𝈒", "𝟕", "𝟟", "𝟩", "𝟳", "𝟽"];
const Eight = ["Ȣ", "ȣ", "৪", "８", "𐌚", "𝟖", "𝟠", "𝟪", "𝟴", "𝟾"];
const Nine = ["৭", "੧", "୨", "൭", "Ⳋ", "Ꝯ", "９", "𝟗", "𝟡", "𝟫", "𝟵", "𝟿"];

const abstractNumbers = (num: number): string => {
  switch (num) {
    case 1:
      return One[Math.floor(Math.random() * One.length)];
    case 2:
      return Two[Math.floor(Math.random() * Two.length)];
    case 3:
      return Three[Math.floor(Math.random() * Three.length)];
    case 4:
      return Four[Math.floor(Math.random() * Four.length)];
    case 5:
      return Five[Math.floor(Math.random() * Five.length)];
    case 6:
      return Six[Math.floor(Math.random() * Six.length)];
    case 7:
      return Seven[Math.floor(Math.random() * Seven.length)];
    case 8:
      return Eight[Math.floor(Math.random() * Eight.length)];
    case 9:
      return Nine[Math.floor(Math.random() * Nine.length)];
    default:
      return num.toString();
  }
};

export default function BewerbungsFormular() {
  const { isPending, isError, Jobs, error } = useJobs();

  const [res, setRes] = useState<{ status: number; message: string } | null>(
    null
  );
  const [num1] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [num2] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [answer, setAnswer] = useState("");

  const form = useForm<z.infer<typeof BewerbungsProps>>({
    resolver: zodResolver(BewerbungsProps),
  });
  const onSubmit = async (data: z.infer<typeof BewerbungsProps>) => {
    const response = await sendBewerbungForm(data);
    setRes(response);
  };

  if (res?.status === 200) {
    return (
      <Card className="max-w-2xl mx-auto bg-card border-border">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CircleCheckBig className="w-16 h-16 mb-4 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Bewerbung gesendet!
          </h2>
          <p className="text-center text-muted-foreground">
            Vielen Dank für Dein Bewerbung. Wir werden uns schnellstmöglich bei
            Dir melden.
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
      <Card className="max-w-2xl mx-auto bg-card border-border">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CircleOff className="w-16 h-16 mb-4 text-primary" />
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Fehler!
          </h2>
          <p className="text-center text-muted-foreground">
            Deine Bewerbung konnte leider nicht gesendet werden. Bitte versuche
            es später erneut. <br />
            Fehler: {res?.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isPending) return <Loading message="Unsere Jobs werden geladen..." />;
  if (isError)
    return (
      <Error
        showRetry
        message={
          "Beim Laden der Jobs ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
          error
        }
      />
    );

  return (
    <Card className="max-w-2xl mx-auto bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Bewirb dich bei uns
        </CardTitle>
        <CardDescription>
          Füll das Formular aus und wir melden uns schnellstmöglich bei Dir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Required */}
            <div className="space-y-4">
              <h4 className="font-semibold">Pflichtangaben</h4>
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dein Name *</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deine E-Mail-Adresse *</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deine gewünschte Position *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                        >
                          <SelectValue placeholder="Wähle eine Position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Jobs?.map((job) => (
                          <SelectItem
                            key={job.id}
                            value={
                              job.isAusbilung
                                ? "Ausbilung: " + job.name
                                : job.name
                            }
                          >
                            {job.isAusbilung
                              ? "Ausbilung: " + job.name
                              : job.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Optionale Angaben */}
            <div className="space-y-4">
              <h4 className="text-semibold text-muted-foregound">
                Freiwillige Angaben
              </h4>
              <FormField
                control={form.control}
                name="Telefon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deine Telefonnummer</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="Lebenslauf"
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <FormItem>
                      <FormLabel>Dein Lebenslauf (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                          ref={ref}
                          accept="application/pdf"
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file ? file : null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Anschreiben"
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <FormItem>
                      <FormLabel>Dein Anschreiben (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                          ref={ref}
                          accept="application/pdf"
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file ? file : null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Zeugnisse"
                  render={({ field: { ref, name, onBlur, onChange } }) => (
                    <FormItem>
                      <FormLabel>Deine Zeugnisse (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          ref={ref}
                          disabled={
                            form.formState.isSubmitting ||
                            form.formState.isSubmitted
                          }
                          accept="application/pdf"
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file ? file : null);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Captcha */}
            <FormField
              control={form.control}
              name="Captcha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sicherheitsfrage *</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-lg select-none"
                        style={{ userSelect: "none" }}
                      >
                        {abstractNumbers(num1)} + {abstractNumbers(num2)} =
                      </span>

                      <Input
                        disabled={
                          form.formState.isSubmitting ||
                          form.formState.isSubmitted
                        }
                        type="number"
                        placeholder="?"
                        className="w-20"
                        value={answer}
                        onChange={(e) => {
                          setAnswer(e.target.value);
                          const correctAnswer = num1 + num2;
                          field.onChange(
                            Number.parseInt(e.target.value) === correctAnswer
                          );
                        }}
                      />
                    </div>
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

            <div className="grid">
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting
                  ? "Wird gesendet..."
                  : "Bewerbung absenden"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
