import SuperJSON from "superjson";
import { apiRequest } from "./config";

interface ReferenzApi {
  id: string;
  Name: string;
  Webseite: string;
  Bild: string;
  Online: number;
}

interface ReferenzApiResponse {
  success: boolean;
  data: Array<ReferenzApi>;
  count: number;
}

export interface Referenz {
  id: string;
  Name: string;
  Webseite: string;
  Bild: string;
  Online: boolean;
}

interface ReferenzResponse {
  success: boolean;
  data: Array<Referenz>;
  count: number;
}

export const fetchJobs = async (): Promise<ReferenzResponse | null> => {
  const res = await apiRequest<ReferenzApiResponse>("/referenzen.php", "GET");
  return SuperJSON.parse<ReferenzResponse>(JSON.stringify(res.data)) ?? null;
};
