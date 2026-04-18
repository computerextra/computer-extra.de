import axios, { type AxiosResponse } from "axios"
import z from "zod"

export const AuftragsdatenverarbeitungProps = z.object({
  Kundennummer: z
    .string("Die Kundennummer ist zwingend erforderlich")
    .min(7, "Die Kundennummer besteht aus einem D gefolgt von 6 Ziffern.")
    .max(7, "Die Kundennummer besteht aus einem D gefolgt von 6 Ziffern.")
    .refine((Kundennummer) => /D[0-9]{6}$/.test(Kundennummer)),
  Firma: z.string("Der Firmenname ist zwingend erforderlich"),
  Adresse: z.string("Die Adresse ist zwingend erforderlich"),
  Postleitzahl: z
    .string("Die Postleitzahl ist zwingend erforderlich")
    .min(5, "Die Postleitzahl ist zwingend erforderlich")
    .max(5, "Die Postleitzahl ist zwingend erforderlich"),
  Ort: z.string("Der Ort ist zwingend erforderlich"),
  Land: z.string(),
  Vertretungsberechtigter: z.string(
    "Die Angabe eines Vertretungsberechtigten ist zwingend erforderlich"
  ),
  Gelesen: z.boolean(),
  Richtig: z.boolean(),
  EMail: z.email("Eine E-Mail-Adresse ist zwingend erforderlich"),
})

const baseUrl = "https://api.computer-extra.de"

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
})

const apiMultiPartClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
})

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: unknown
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    method,
    url,
    data,
  })

  return response.data
}

export const apiMultiPartRequest = async <T>(
  url: string,
  method: "POST" | "PUT",
  data: FormData
): Promise<T> => {
  const resonse: AxiosResponse<T> = await apiMultiPartClient({
    method,
    url,
    data,
  })

  return resonse.data
}

const Response = z.object({
  status: z.number().int(),
  message: z.string(),
})
type Response = z.infer<typeof Response>

const CreateResponse = z.object({
  status: z.number().int(),
  message: z.string(),
  filename: z.string().optional(),
})
export type CreateResponse = z.infer<typeof CreateResponse>

export const createPdf = async (
  data: z.infer<typeof AuftragsdatenverarbeitungProps>
): Promise<CreateResponse | null> => {
  const res = await apiRequest<CreateResponse>(
    "/Auftragsdatenverarbeitung.php",
    "POST",
    data
  )
  return res ?? null
}

export const getBlankoVertrag = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>(
    "Auftragsdaten/BlankoVertragsbedingungen.php",
    "GET"
  )
  return res ?? null
}

export const getBlankoAnlageA = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>(
    "Auftragsdaten/BlankoAnlage_A.php",
    "GET"
  )
  return res ?? null
}

export const getBlankoAnlageB = async (): Promise<Response | null> => {
  const res = await apiRequest<Response>(
    "Auftragsdaten/BlankoAnlage_B.php",
    "GET"
  )
  return res ?? null
}

const Mitarbeiter = z.object({
  id: z.string(),
  name: z.string(),
  short: z.string(),
  image: z.boolean(),
  sex: z.string(),
  focus: z.string(),
  abteilungId: z.string(),
})
export type Mitarbeiter = z.infer<typeof Mitarbeiter>
const MitarbeiterResponse = z.object({
  success: z.boolean(),
  data: z.array(Mitarbeiter),
  count: z.number().int(),
})
export type MitarbeiterResponse = z.infer<typeof MitarbeiterResponse>

export const fetchMitarbeiter =
  async (): Promise<MitarbeiterResponse | null> => {
    const res = await apiRequest<MitarbeiterResponse>("/mitarbeiter.php", "GET")
    return res ?? null
  }

const Abteilung = z.object({
  id: z.string(),
  name: z.string(),
  idx: z.number().int(),
})
export type Abteilung = z.infer<typeof Abteilung>

const AbteilungResponse = z.object({
  success: z.boolean(),
  data: z.array(Abteilung),
  count: z.number().int(),
})

type AbteilungResponse = z.infer<typeof AbteilungResponse>

export const fetchAbteilungen = async (): Promise<AbteilungResponse | null> => {
  const res = await apiRequest<AbteilungResponse>("/abteilungen.php", "GET")
  return res ?? null
}
