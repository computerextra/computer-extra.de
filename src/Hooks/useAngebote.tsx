import { fetchAngebote, type Angebot } from "@/api/angebote";
import { useEffect, useState } from "react";

export default function useAngebote() {
  const [Angebote, setAngebote] = useState<Array<Angebot> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchAngebote();
      setAngebote(res?.data ?? null);
      setIsLoading(false);
    })();
  }, []);

  return { Angebote, isLoading };
}
