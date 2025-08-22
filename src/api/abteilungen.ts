import { z } from "zod";
import { apiRequest } from "./config";

const Abteilung = z.object({
  id: z.string(),
  name: z.string(),
  idx: z.number().int(),
});

export type Abteilung = z.infer<typeof Abteilung>;

const Response = z.object({
  success: z.boolean(),
  data: z.array(Abteilung),
  count: z.number().int(),
});

type Response = z.infer<typeof Response>;

export const fetchAbteilungen = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>("/abteilungen.php", "GET");
  return res ?? null;
};
