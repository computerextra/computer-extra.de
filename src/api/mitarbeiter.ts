import SuperJSON from "superjson";
import { apiRequest } from "./config";

interface MitarbeiterApi {
  id: string;
  name: string;
  short: string;
  image: number;
  sex: string;
  focus: string;
  abteilungId: string;
}

interface MitarbeiterApiResponse {
  success: boolean;
  data: Array<MitarbeiterApi>;
  count: number;
}

export interface Mitarbeiter {
  id: string;
  name: string;
  short: string;
  image: boolean;
  sex: string;
  focus: string;
  abteilungId: string;
}

interface MitarbeiterResponse {
  success: boolean;
  data: Array<Mitarbeiter>;
  count: number;
}

export const fetchMitarbeiter =
  async (): Promise<MitarbeiterResponse | null> => {
    const res = await apiRequest<MitarbeiterApiResponse>(
      "/mitarbeiter.php",
      "GET"
    );
    return (
      SuperJSON.parse<MitarbeiterResponse>(JSON.stringify(res.data)) ?? null
    );
  };
