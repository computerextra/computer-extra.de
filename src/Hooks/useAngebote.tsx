import { fetchAngebote } from "@/api/angebote";
import { useQuery } from "@tanstack/react-query";

export default function useAngebote() {
  const {
    isPending,
    isError,
    data: Angebote,
    error,
  } = useQuery({
    queryKey: ["Angebote"],
    queryFn: async () => {
      const res = await fetchAngebote();
      return res?.data ?? null;
    },
    staleTime: 5 * 1000,
  });

  return { isPending, isError, Angebote, error };
}
