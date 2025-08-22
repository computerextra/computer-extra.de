import { fetchReferenzen, type Referenz } from "@/api/referenzen";
import { useEffect, useState } from "react";

export default function useReferenzen() {
  const [Referenzen, setReferenzen] = useState<Array<Referenz> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchReferenzen();
      setReferenzen(res?.data ?? null);
      setIsLoading(false);
    })();
  }, []);

  return { Referenzen, isLoading };
}
