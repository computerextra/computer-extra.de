import { apiRequest } from "./config";

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

export const fetchReferenzen = async (): Promise<ReferenzResponse | null> => {
  const res = await apiRequest<ReferenzResponse>("/referenzen.php", "GET");
  return res ?? null;
};
