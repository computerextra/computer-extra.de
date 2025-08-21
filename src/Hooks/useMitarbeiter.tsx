import { fetchMitarbeiter, type Mitarbeiter } from "@/api/mitarbeiter";
import { useEffect, useState } from "react";

export default function useMitarbeiter() {
  const [Mitarbeiter, setMitarbeiter] = useState<Array<Mitarbeiter> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchMitarbeiter();
      setMitarbeiter(res?.data ?? null);
      setIsLoading(false);
    })();
  }, []);

  return { Mitarbeiter, isLoading };
}
