import axios from "axios";
import { useEffectEvent, useState } from "react";

type Mitarbeiter = {
  id: string;
  name: string;
  short: string;
  image: number;
  sex: string;
  focus: string | null;
  abteilungId: string;
};

export default function useMitarbeiter() {
  const [Mitarbeiter, setMitarbeiter] = useState<
    Array<Mitarbeiter> | undefined
  >(undefined);

  const getMitarbeiter = useEffectEvent(async () => {
    const res = await axios.get<{ success: boolean; data: Array<Mitarbeiter> }>(
      "https://api.computer-extra.de/mitarbeiter.php",
    );

    if (res.data.data) {
      setMitarbeiter(res.data.data);
    }
  });

  return { Mitarbeiter };
}
