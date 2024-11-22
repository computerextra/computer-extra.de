import {
  Form,
  FormControl,
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
import { format } from "date-fns";
import { formSchema } from "./formSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "react-day-picker/style.css";

export default function PrivateForm({
  version,
}: {
  version: "All" | "Apple" | "Google" | "MS";
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="container mx-auto mt-10 text-start">
      <Form {...form}>
        <form
          target="_blank"
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
            defaultValue={version}
          />
          <FormField
            control={form.control}
            name="Vorname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ihr Vorname</FormLabel>
                <FormControl>
                  <Input required placeholder="Max" {...field} />
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
                  <Input required placeholder="Mustermann" {...field} />
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
                <FormLabel>Ihr Wohnort</FormLabel>
                <FormControl>
                  <Input required {...field} />
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
                    required
                    type="email"
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
                          required
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
                  required
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
                  <Input required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Generieren</Button>
        </form>
      </Form>
    </div>
  );
}
