import { useQuery } from "@tanstack/react-query";
import { fetchAbteilungen } from "@/api/abteilungen";

export default function useAbteilungen() {
  const {
    isPending,
    isError,
    data: Abteilungen,
    error,
  } = useQuery({
    queryKey: ["Abteilungen"],
    queryFn: async () => {
      const res = await fetchAbteilungen();
      return res?.data ?? null;
    },
    staleTime: 5 * 1000,
  });

  return { isPending, isError, Abteilungen, error };
}
