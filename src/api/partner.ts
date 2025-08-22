import { z } from "zod";
import { apiRequest } from "./config";

const Partner = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string(),
  image: z.string(),
});

export type Partner = z.infer<typeof Partner>;

const Response = z.object({
  success: z.boolean(),
  data: z.array(Partner),
  count: z.number().int(),
});

type Response = z.infer<typeof Response>;

export const fetchPartner = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>("/partner.php", "GET");
  return res ?? null;
};
