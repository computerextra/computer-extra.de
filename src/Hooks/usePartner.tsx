import axios from "axios";
import { useEffect, useState } from "react";
import { HOSTNAME } from "../config";

export type Partner = {
  id: string;
  name: string;
  link: string;
  image: string;
};

/**
 * Fetches a list of partners from the server and manages the loading state.
 *
 * @return {{Partner: Partner[] | undefined; isLoading: boolean;}} An object containing the list of partners and the loading state.
 */
export default function usePartner(): {
  Partner: Partner[] | undefined;
  partnerIsLoading: boolean;
} {
  const [Partner, setPartner] = useState<Partner[] | undefined>(undefined);
  const [partnerIsLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function x() {
      setIsLoading(true);
      const data = await axios.get(HOSTNAME + "/php/partner.php");
      if (data == null) return;
      if (!data.data) return;
      setPartner(data.data);
      setIsLoading(false);
    }
    void x();
  }, []);

  return { Partner, partnerIsLoading };
}
