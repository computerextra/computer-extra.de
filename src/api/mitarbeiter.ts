import { z } from "zod";
import { apiRequest } from "./config";

const Mitarbeiter = z.object({
  id: z.string(),
  name: z.string(),
  short: z.string(),
  image: z.boolean(),
  sex: z.string(),
  focus: z.string(),
  abteilungId: z.string(),
});

export type Mitarbeiter = z.infer<typeof Mitarbeiter>;

const Response = z.object({
  success: z.boolean(),
  data: z.array(Mitarbeiter),
  count: z.number().int(),
});

type Response = z.infer<typeof Response>;

export const fetchMitarbeiter = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>("/mitarbeiter.php", "GET");
  return res ?? null;
};
