import { z } from "zod";
import { apiRequest } from "./config";

const Referenz = z.object({
  id: z.string(),
  Name: z.string(),
  Webseite: z.string(),
  Bild: z.string(),
  Online: z.boolean(),
});

export type Referenz = z.infer<typeof Referenz>;

const Response = z.object({
  success: z.boolean(),
  data: z.array(Referenz),
  count: z.number().int(),
});

type Response = z.infer<typeof Response>;

export const fetchReferenzen = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>("/referenzen.php", "GET");
  return res ?? null;
};
