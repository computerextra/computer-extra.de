import { fetchPartner, type Partner } from "@/api/partner";
import { useEffect, useState } from "react";

export default function usePartner() {
  const [Partner, setPartner] = useState<Array<Partner> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchPartner();
      setPartner(res?.data ?? null);
      setIsLoading(false);
    })();
  }, []);

  return { Partner, isLoading };
}
