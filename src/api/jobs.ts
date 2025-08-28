import { z } from "zod";
import { apiRequest } from "./config";

const Job = z.object({
  id: z.string(),
  name: z.string(),
  online: z.boolean(),
  Aufgaben: z.array(z.string()).optional(),
  Beschreibung: z.string().optional(),
  Profil: z.array(z.string()).optional(),
  isAusbilung: z.boolean(),
});
export type Job = z.infer<typeof Job>;

const JobResponse = z.object({
  id: z.string(),
  name: z.string(),
  online: z.boolean(),
  Aufgaben: z.string().optional(),
  Beschreibung: z.string().optional(),
  Profil: z.string().optional(),
  isAusbilung: z.boolean(),
});

const Response = z.object({
  success: z.boolean(),
  data: z.array(JobResponse),
  count: z.number().int(),
});
type Response = z.infer<typeof Response>;

const JobsResponse = z.object({
  success: z.boolean(),
  data: z.array(Job),
  count: z.number().int(),
});
type JobsResponse = z.infer<typeof JobsResponse>;

export const fetchJobs = async (): Promise<JobsResponse | null> => {
  const res = await apiRequest<Response>("/jobs.php", "GET");
  if (res == null) return null;

  const jobs: Array<Job> = res.data.map((job) => ({
    id: job.id,
    name: job.name,
    online: job.online,
    Aufgaben: job.Aufgaben ? job.Aufgaben.split("|") : [],
    Beschreibung: job.Beschreibung,
    Profil: job.Profil ? job.Profil.split("|") : [],
    isAusbilung: job.isAusbilung,
  }));

  return {
    success: res.success,
    data: jobs,
    count: res.count,
  };
};
