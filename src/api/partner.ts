import SuperJSON from "superjson";
import { apiRequest } from "./config";

interface PartnerApi {
  id: string;
  name: string;
  link: string;
  image: string;
}

interface PartnerApiResponse {
  success: boolean;
  data: Array<PartnerApi>;
  count: number;
}

export interface Partner {
  id: string;
  name: string;
  link: string;
  image: string;
}

interface PartnerResponse {
  success: boolean;
  data: Array<Partner>;
  count: number;
}

export const fetchPartner = async (): Promise<PartnerResponse | null> => {
  const res = await apiRequest<PartnerApiResponse>("/partner.php", "GET");
  return SuperJSON.parse<PartnerResponse>(JSON.stringify(res.data)) ?? null;
};
