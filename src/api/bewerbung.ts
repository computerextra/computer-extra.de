import z from "zod";
import { apiMultiPartRequest } from "./config";

const fileSizeLimit = 2 * 1024 * 1024; // 2MB

export const BewerbungsProps = z.object({
  Name: z.string("Name ist erforderlich").min(1, "Name ist erforderlich"),
  Email: z.email("Ungültige E-Mail-Adresse"),
  Telefon: z.string().optional(),
  Position: z
    .string("Eine Auswahl ist erforderlich")
    .min(1, "Position ist erforderlich"),
  Datenschutz: z.boolean(
    "Die Datenschutzebedingungen müssen akzeptiert werden"
  ),
  Captcha: z.boolean("Das CAPTCHA muss erfolgreich gelöst werden"),
  Lebenslauf: z
    .instanceof(File)
    .refine((file) => ["application/pdf"].includes(file.type), {
      message: "Es können nur PDF Dateien hochgeladen werden.",
    })
    .refine((file) => file.size <= fileSizeLimit, {
      message: "Die Datei darf maximal 2MB groß sein.",
    })
    .optional(),
  Anschreiben: z
    .instanceof(File)
    .refine((file) => ["application/pdf"].includes(file.type), {
      message: "Es können nur PDF Dateien hochgeladen werden.",
    })
    .refine((file) => file.size <= fileSizeLimit, {
      message: "Die Datei darf maximal 2MB groß sein.",
    })
    .optional(),
  Zeugnisse: z
    .instanceof(File)
    .refine((file) => ["application/pdf"].includes(file.type), {
      message: "Es können nur PDF Dateien hochgeladen werden.",
    })
    .refine((file) => file.size <= fileSizeLimit, {
      message: "Die Datei darf maximal 2MB groß sein.",
    })
    .optional(),
});

const Response = z.object({
  status: z.number().int(),
  message: z.string(),
});
type Response = z.infer<typeof Response>;

export const sendBewerbungForm = async (
  data: z.infer<typeof BewerbungsProps>
): Promise<Response | null> => {
  const formData = new FormData();
  formData.append("Name", data.Name);
  formData.append("Email", data.Email);
  if (data.Telefon) formData.append("Telefon", data.Telefon);
  formData.append("Position", data.Position);
  if (data.Lebenslauf)
    formData.append("Lebenslauf", data.Lebenslauf, "Lebenslauf.pdf");
  if (data.Anschreiben)
    formData.append("Anschreiben", data.Anschreiben, "Anschreiben.pdf");
  if (data.Zeugnisse)
    formData.append("Zeugnisse", data.Zeugnisse, "Zeugnisse.pdf");

  const res = await apiMultiPartRequest<Response>(
    "/bewerbung.php",
    "POST",
    formData
  );
  return res ?? null;
};
