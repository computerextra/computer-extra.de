import { apiRequest } from "./config";
import superjson from "superjson";

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

interface AngebotApi {
  id: string;
  title: string;
  subtitle: string;
  date_start: string;
  date_end: string;
  link: string;
  image: string;
  anzeigen: number;
}

interface AngebotApiResponse {
  success: boolean;
  data: Array<AngebotApi>;
  count: number;
}

interface AngebotResponse {
  success: boolean;
  data: Array<Angebot>;
  count: number;
}

export const fetchAngebote = async (): Promise<AngebotResponse | null> => {
  const response = await apiRequest<AngebotApiResponse>("/angebote.php", "GET");
  return (
    superjson.parse<AngebotResponse>(JSON.stringify(response.data)) ?? null
  );
};
