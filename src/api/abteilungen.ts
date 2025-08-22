import { apiRequest } from "./config";

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
  const res = await apiRequest<AbteilungResponse>("/abteilungen.php", "GET");
  console.log("Abteilungen", res);
  return res ?? null;
};
