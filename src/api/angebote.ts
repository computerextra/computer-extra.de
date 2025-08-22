import { apiRequest } from "./config";

export interface Angebot {
  id: string;
  title: string;
  subtitle: string;
  date_start: Date;
  date_end: Date;
  link: string;
  image: string;
  anzeigen: boolean;
}

interface AngebotResponse {
  success: boolean;
  data: Array<Angebot>;
  count: number;
}

export const fetchAngebote = async (): Promise<AngebotResponse | null> => {
  const res = await apiRequest<AngebotResponse>("/angebote.php", "GET");
  return res ?? null;
};
