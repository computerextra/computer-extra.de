import SuperJSON from "superjson";
import { apiRequest } from "./config";

interface AbteilungApi {
  id: string;
  name: string;
  idx: number;
}

interface AbteilungApiResponse {
  success: boolean;
  data: Array<AbteilungApi>;
  count: number;
}

export interface Abteilung {
  id: string;
  name: string;
  idx: number;
}

interface AbteilungResponse {
  success: boolean;
  data: Array<Abteilung>;
  count: number;
}

export const fetchAbteilungen = async (): Promise<AbteilungResponse | null> => {
  const res = await apiRequest<AbteilungApiResponse>("/abteilungen.php", "GET");
  return SuperJSON.parse<AbteilungResponse>(JSON.stringify(res.data)) ?? null;
};
