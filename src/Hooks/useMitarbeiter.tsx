import { useQuery } from "@tanstack/react-query";
import { fetchMitarbeiter } from "@/api/mitarbeiter";

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
