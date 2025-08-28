import { fetchJobs } from "@/api/jobs";
import { useQuery } from "@tanstack/react-query";

export default function useJobs() {
  const {
    isPending,
    isError,
    data: Jobs,
    error,
  } = useQuery({
    queryKey: ["Jobs"],
    queryFn: async () => {
      const res = await fetchJobs();
      return res?.data ?? null;
    },
    staleTime: 5 * 1000,
  });

  return { isPending, isError, Jobs, error };
}
