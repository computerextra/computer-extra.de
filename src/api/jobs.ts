import { z } from "zod";
import { apiRequest } from "./config";

const Job = z.object({
  id: z.string(),
  name: z.string(),
  online: z.boolean(),
});

export type Job = z.infer<typeof Job>;

const Response = z.object({
  success: z.boolean(),
  data: z.array(Job),
  count: z.number().int(),
});

type Response = z.infer<typeof Response>;

export const fetchJobs = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>("/jobs.php", "GET");
  return res ?? null;
};
