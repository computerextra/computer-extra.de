import { fetchJobs, type Job } from "@/api/jobs";
import { useEffect, useState } from "react";

export default function useJobs() {
  const [Jobs, setJobs] = useState<Array<Job> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchJobs();
      setJobs(res?.data ?? null);
      setIsLoading(false);
    })();
  }, []);

  return { Jobs, isLoading };
}
