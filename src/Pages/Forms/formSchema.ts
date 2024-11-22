import { z } from "zod";

export const formSchema = z.object({
  Vorname: z.string(),
  Nachname: z.string(),
  Email: z.string().email(),
  Geburtstag: z.date(),
  Geschlecht: z.string(),
  Mobil: z.string(),
  Ort: z.string(),
});

export const businessFormSchema = z.object({
  Firmenname: z.string(),
  Vorname: z.string(),
  Nachname: z.string(),
  Anschrift: z.string(),
  Plz: z.number().min(5).max(5),
  Ort: z.string(),
  Email: z.string().email(),
  Telefon: z.string(),
});
