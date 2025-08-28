import { fetchMitarbeiter } from "@/api/mitarbeiter";
import { useQuery } from "@tanstack/react-query";

export default function useMitarbeiter() {
  const {
    isPending,
    isError,
    data: Mitarbeiter,
    error,
  } = useQuery({
    queryKey: ["Mitarbeiter"],
    queryFn: async () => {
      const res = await fetchMitarbeiter();
      return res?.data ?? null;
    },
    staleTime: 5 * 1000,
  });

  return { isPending, isError, Mitarbeiter, error };
}
