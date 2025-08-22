import { apiRequest } from "./config";

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
    const res = await apiRequest<MitarbeiterResponse>(
      "/mitarbeiter.php",
      "GET"
    );
    return res ?? null;
  };
