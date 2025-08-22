import { apiRequest } from "./config";

export interface Job {
  id: string;
  name: string;
  online: boolean;
}

interface JobResponse {
  success: boolean;
  data: Array<Job>;
  count: number;
}

export const fetchJobs = async (): Promise<JobResponse | null> => {
  const res = await apiRequest<JobResponse>("/jobs.php", "GET");
  return res ?? null;
};
