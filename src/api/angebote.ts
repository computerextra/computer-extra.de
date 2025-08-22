import { z } from "zod";
import { apiRequest } from "./config";

const Angebot = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  link: z.string(),
  image: z.string(),
  date_start: z.date(),
  date_stop: z.date(),
  anzeigen: z.boolean(),
});

export type Angebot = z.infer<typeof Angebot>;

const Response = z.object({
  success: z.boolean(),
  data: z.array(Angebot),
  count: z.number().int(),
});

type Response = z.infer<typeof Response>;

export const fetchAngebote = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>("/angebote.php", "GET");
  return res ?? null;
};
