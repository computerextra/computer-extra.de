import SuperJSON from "superjson";
import { apiRequest } from "./config";

interface JobApi {
  id: string;
  name: string;
  online: number;
}

interface JobApiResponse {
  success: boolean;
  data: Array<JobApi>;
  count: number;
}

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
  const res = await apiRequest<JobApiResponse>("/jobs.php", "GET");
  return SuperJSON.parse<JobResponse>(JSON.stringify(res.data)) ?? null;
};
