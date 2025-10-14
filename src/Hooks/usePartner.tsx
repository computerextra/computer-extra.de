import { useQuery } from "@tanstack/react-query";
import { fetchPartner } from "@/api/partner";

export default function usePartner() {
  const {
    isPending,
    isError,
    data: Partner,
    error,
  } = useQuery({
    queryKey: ["Partner"],
    queryFn: async () => {
      const res = await fetchPartner();
      return res?.data ?? null;
    },
    staleTime: 5 * 1000,
  });

  return { isPending, isError, Partner, error };
}
