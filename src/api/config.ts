import axios, { type AxiosResponse } from "axios";

const baseUrl = "https://api.computer-extra.de";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiMultiPartClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: unknown
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    method,
    url,
    data,
  });

  return response.data;
};

export const apiMultiPartRequest = async <T>(
  url: string,
  method: "POST" | "PUT",
  data: FormData
): Promise<T> => {
  const resonse: AxiosResponse<T> = await apiMultiPartClient({
    method,
    url,
    data,
  });

  return resonse.data;
};
