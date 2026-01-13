import { useEffect, useEffectEvent, useState } from "react";
import axios from "axios";

export type Partner = {
  id: string;
  name: string;
  link: string;
  image: string;
};

export default function usePartner() {
  const [Partner, setPartner] = useState<Array<Partner> | undefined>(undefined);

  const getPartner = useEffectEvent(async () => {
    const res = await axios.get<{ success: true; data: Partner[] }>(
      "https://api.computer-extra.de/partner.php",
    );
    if (res.data) {
      setPartner(res.data.data);
    }
  });

  useEffect(() => {
    getPartner();
  }, []);

  return { Partner };
}
