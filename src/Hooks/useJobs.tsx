import axios from "axios";
import { useEffect, useState } from "react";
import { HOSTNAME } from "../config";

export type Job = {
  id: string;
  name: string;
  online: boolean;
};

/**
 * A custom hook that fetches a list of jobs from the server and manages the loading state.
 *
 * @return {{Jobs: Job[] | undefined, isLoading: boolean}} An object containing the list of jobs and the loading state.
 */
export default function useJobs(): {
  Jobs: Job[] | undefined;
  jobsIsLoading: boolean;
} {
  const [Jobs, setJobs] = useState<Job[] | undefined>(undefined);
  const [jobsIsLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function x() {
      setIsLoading(true);
      const data = await axios.get(HOSTNAME + "/php/jobs.php");
      if (data == null) return;
      if (!data.data) return;
      const jobs: Job[] = [];
      data.data.forEach((d: { id: string; name: string; online: string }) => {
        const j: Job = {
          id: d.id,
          name: d.name,
          online: d.online == "1" ? true : false,
        };
        jobs.push(j);
      });
      setJobs(jobs);
      setIsLoading(false);
    }
    void x();
  }, []);

  return { Jobs, jobsIsLoading };
}
