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

export default function useReferenzen() {
  const [Referenzen, setReferenzen] = useState<Referenz[] | undefined>(
    undefined
  );
  const [referenzIsLoading, setIsloadin] = useState(false);

  useEffect(() => {
    (async () => {
      setIsloadin(true);
      const data = await axios(HOSTNAME + "/php/referenzen.php");
      if (data == null) return;
      if (!data.data) return;
      const referenzen: Referenz[] = [];
      data.data.forEach(
        (d: {
          id: string;
          Name: string;
          Webseite: string;
          Bild: string;
          Online: string;
        }) => {
          const x: Referenz = {
            ...d,
            Online: d.Online == "1" ? true : false,
          };
          referenzen.push(x);
        }
      );
      setReferenzen(referenzen);
      setIsloadin(false);
    })();
  }, []);

  return { Referenzen, referenzIsLoading };
}
