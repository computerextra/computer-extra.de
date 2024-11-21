import { useForm } from "react-hook-form";
import AnimationLayout from "../../Components/AnimationLayout";
import useAnalytics from "../../Hooks/useAnalytics";
import useTitle from "../../Hooks/useTitle";
import MainLayout from "../../Layout/MainLayout";
import { format } from "date-fns";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../Components/Form/Form";
import { Input } from "../../Components/Form/Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../Components/Form/Popover";
import { Button } from "../../Components/Form/Button";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "lucide-react";
import "react-day-picker/style.css";
import { de } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/Form/Select";

const formSchema = z.object({
  Vorname: z.string(),
  Nachname: z.string(),
  Email: z.string().email(),
  EmailPasswort: z.string(),
  Geburtstag: z.date(),
  Geschlecht: z.string(),
  Mobil: z.string(),
});

export default function Google() {
  useTitle("Google Konto");
  useAnalytics("Google-Formular");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <AnimationLayout>
      <MainLayout
        title="Google Konto"
        subtitle="Erstellen Sie hier einfach Ihr Google Formular"
      >
        <div className="w-full p-5 text-center card h-fit md:p-12">
          <div className="lg:w-[50%] w-full mx-auto">
            <p className="py-2 text-xl font-semibold">
              Bitte füllen Sie das Angezeigte Formular mit Ihren Daten aus und
              klicken Sie auf Generieren. Es wird eine PDF erstellt, diese
              Unterzeichnen Sie bitte und senden sie uns per Mail zu. Falls es
              Ihnen nicht möglich ist, das Formular zu senden, bringen Sie es
              einfach mit. Bei Fragen wenden Sie sich gerne persönlich,
              telefonisch oder per Mail an uns.
            </p>
          </div>
          <div className="container mx-auto mt-10 text-start">
            <Form {...form}>
              <form
                action="https://computer-extra.de/php/generateForm.php"
                encType="multipart/form-data"
                method="POST"
                className="space-y-8"
              >
                <input
                  className="hidden"
                  type="text"
                  id="Version"
                  name="Version"
                  defaultValue="Google"
                />
                <FormField
                  control={form.control}
                  name="Vorname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihr Vorname</FormLabel>
                      <FormControl>
                        <Input placeholder="Max" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Nachname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihr Nachname</FormLabel>
                      <FormControl>
                        <Input placeholder="Mustermann" {...field} />
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
                      <FormLabel>Ihre E-Mail-Adresse</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="max.mustermann@beispiel.de"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="EmailPasswort"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihr E-Mail-Passwort</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Das Passwort wird durch uns{" "}
                        <span className="underline">nicht</span> auf dem Server
                        gespeichert, es dient lediglich der Erzeugung der PDF
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Geburtstag"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Ihr Geburtstag</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <input
                                className="sr-only"
                                type="date"
                                name="Geburtstag"
                                id="Geburtstag"
                                value={
                                  field.value
                                    ? format(field.value, "yyyy-MM-dd", {
                                        locale: de,
                                      })
                                    : undefined
                                }
                              />
                              {field.value ? (
                                format(field.value, "PPPP", { locale: de })
                              ) : (
                                <span>Wählen Sie ein Datum</span>
                              )}
                              <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <DayPicker
                            locale={de}
                            mode="single"
                            captionLayout="dropdown"
                            required
                            showOutsideDays={true}
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Geschlecht"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihr Geschlecht</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        name="Geschlecht"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Bitte Wählen Sie Ihr Geschlecht" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="W">Weiblich</SelectItem>
                          <SelectItem value="M">Männlich</SelectItem>
                          <SelectItem value="D">Divers</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Mobil"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihre Handynummer</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Generieren</Button>
              </form>
            </Form>
          </div>
        </div>
      </MainLayout>
    </AnimationLayout>
  );
}
