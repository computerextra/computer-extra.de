import { fetchAbteilungen, type Abteilung } from "@/api/abteilungen";
import { useEffect, useState } from "react";

export default function useAbteilungen() {
  const [Abteilungen, setAbteilungen] = useState<Array<Abteilung> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchAbteilungen();
      setAbteilungen(res?.data ?? null);
      setIsLoading(false);
    })();
  }, []);

  return { Abteilungen, isLoading };
}
