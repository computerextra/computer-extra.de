import z from "zod";
import { apiRequest } from "./config";

export const ContactFormProps = z.object({
  Name: z.string().min(1, "Name ist erforderlich"),
  Mail: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  Telefon: z.string().optional(),
  Nachricht: z.string().min(1, "Eine Nachricht ist erforderlich."),
});

const Response = z.object({
  status: z.number().int(),
  message: z.string(),
});
type Response = z.infer<typeof Response>;

// TODO: Geht nicht, nur 500er Fehler
export const sendContactForm = async (
  data: z.infer<typeof ContactFormProps>
): Promise<Response | null> => {
  const formData = new FormData();
  formData.append("Name", data.Name);
  formData.append("Mail", data.Mail);
  formData.append("Telefon", data.Telefon ?? "");
  formData.append("Nachricht", data.Nachricht);

  const res = await apiRequest<Response>("/kontaktformular.php", "POST", data);
  return res ?? null;
};
