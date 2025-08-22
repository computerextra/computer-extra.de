import { apiRequest } from "./config";

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
  const res = await apiRequest<PartnerResponse>("/partner.php", "GET");
  return res ?? null;
};
