import axios from "axios";
import { useEffect, useState } from "react";
import { HOSTNAME } from "../config";

export type Referenz = {
  id: string;
  Name: string;
  Webseite: string;
  Bild: string;
  Online: boolean;
};

// TODO: forEach is not a function... ???

export default function useReferenzen(): {
  Referenzen: Referenz[] | undefined;
  referenzIsLoading: boolean;
} {
  const [Referenzen, setReferenzen] = useState<Referenz[] | undefined>(
    undefined
  );
  const [referenzIsLoading, setIsloadin] = useState(false);

  useEffect(() => {
    async function y() {
      setIsloadin(true);
      const data = await axios.get<
        {
          id: string;
          Name: string;
          Webseite: string;
          Bild: string;
          Online: string;
        }[]
      >(HOSTNAME + "/php/referenzen.php");
      if (data == null) return;
      if (!data.data) return;
      const referenzen: Referenz[] = [];
      data.data.forEach((d) => {
        const x: Referenz = {
          ...d,
          Online: d.Online == "1" ? true : false,
        };
        referenzen.push(x);
      });
      setReferenzen(referenzen);
      setIsloadin(false);
    }
    void y();
  }, []);

  return { Referenzen, referenzIsLoading };
}
