import { useForm } from "react-hook-form";
import AnimationLayout from "../../Components/AnimationLayout";
import useAnalytics from "../../Hooks/useAnalytics";
import useTitle from "../../Hooks/useTitle";
import MainLayout from "../../Layout/MainLayout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../Components/Form/Form";
import { Input } from "../../Components/Form/Input";
import { Button } from "../../Components/Form/Button";

const formSchema = z.object({
  Firmenname: z.string(),
  Vorname: z.string(),
  Nachname: z.string(),
  Anschrift: z.string(),
  Plz: z.number().min(5).max(5),
  Ort: z.string(),
  Email: z.string().email(),
  Telefon: z.string(),
});

export default function MicrosoftBusiness() {
  useTitle("Microsoft Business Konto");
  useAnalytics("Microsoft-Business-Formular");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <AnimationLayout>
      <MainLayout
        title="Microsoft Business"
        subtitle="Erstellen Sie hier einfach Ihr Microsft Busienss Formular"
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
                  defaultValue="MSBusi"
                />
                <FormField
                  control={form.control}
                  name="Firmenname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firmenname</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="Vorname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vorname Geschäfstführung</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                        <FormLabel>Nachname Geschäftsführung</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="Anschrift"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Straße und Hausnummer</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="Plz"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postleitzahl</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                        <FormLabel>Ort</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kontakt E-Mail-Adresse</FormLabel>
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
                      <FormLabel>Telefonnummer</FormLabel>
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
