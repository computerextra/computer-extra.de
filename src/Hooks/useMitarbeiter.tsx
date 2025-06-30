import axios from "axios";
import { useEffect, useState } from "react";
import { HOSTNAME } from "../config";

export type Mitarbeiter = {
  name: string;
  short: string;
  image: boolean;
  focus: string[];
  Abteilung: string;
  sex: "m" | "w";
};

/**
 * Custom hook to fetch Mitarbeiter data from the API and manage loading state.
 *
 * @return {{Mitarbeiter: Mitarbeiter[] | undefined, isLoading: boolean}} The fetched Mitarbeiter data and loading state
 */
export default function useMitarbeiter(): {
  Mitarbeiter: Mitarbeiter[] | undefined;
  mitarbeiterIsLoading: boolean;
} {
  const [Mitarbeiter, setMitarbeiter] = useState<Mitarbeiter[] | undefined>(
    undefined
  );
  const [mitarbeiterIsLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function x() {
      setIsLoading(true);
      const data = await axios.get(HOSTNAME + "/php/mitarbeiter.php");
      if (data == null) return;
      if (!data.data) return;
      const tmp: Mitarbeiter[] = [];
      data.data.forEach(
        (element: {
          name: string;
          short: string;
          image: string;
          tags: string;
          focus?: string;
          Abteilung: string;
          sex: "m" | "w";
        }) => {
          const focus = element.focus?.split(",");

          const m: Mitarbeiter = {
            name: element.name,
            short: element.short,
            image: element.image == "1" ? true : false,
            focus: focus ?? [],
            Abteilung: element.Abteilung,
            sex: element.sex,
          };
          tmp.push(m);
        }
      );
      setMitarbeiter(tmp);
      setIsLoading(false);
    }
    void x();
  }, []);

  return { Mitarbeiter, mitarbeiterIsLoading };
}
