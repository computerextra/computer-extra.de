import axios from "axios";
import { useEffect, useState } from "react";
import { HOSTNAME } from "../config";

export type Angebot = {
  id: string;
  title: string;
  subtitle: string;
  date_start: string;
  date_stop: string;
  link: string;
  image: string;
  anzeigen: boolean;
};

export default function useAngebote(): {
  Angebote: Angebot[] | undefined;
  angebotIsLoading: boolean;
} {
  const [Angebote, setAngebote] = useState<Angebot[] | undefined>(undefined);
  const [angebotIsLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function x() {
      setIsLoading(true);
      const data = await axios.get(HOSTNAME + "/php/angebote.php");
      if (data == null) return;
      if (!data.data) return;
      const angebot: Angebot[] = [];
      data.data.forEach(
        (d: {
          id: string;
          title: string;
          subtitle: string;
          date_start: string;
          date_stop: string;
          link: string;
          image: string;
          anzeigen: string;
        }) => {
          const j: Angebot = {
            ...d,
            anzeigen: d.anzeigen == "1" ? true : false,
          };
          angebot.push(j);
        }
      );
      setAngebote(angebot);
      setIsLoading(false);
    }
    void x();
  }, []);

  return { Angebote, angebotIsLoading };
}
