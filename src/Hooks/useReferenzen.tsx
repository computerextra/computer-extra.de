import { fetchReferenzen } from "@/api/referenzen";
import { useQuery } from "@tanstack/react-query";

export default function useReferenzen() {
  const {
    isPending,
    isError,
    data: Referenzen,
    error,
  } = useQuery({
    queryKey: ["Referenzen"],
    queryFn: async () => {
      const res = await fetchReferenzen();
      return res?.data ?? null;
    },
    staleTime: 5 * 1000,
  });

  return { isPending, isError, Referenzen, error };
}
