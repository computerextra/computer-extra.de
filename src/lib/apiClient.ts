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
  data?: unknown,
  signal?: AbortSignal
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    method,
    url,
    data,
    signal,
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
  Gruppenwahl: z.string(),
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

export type PhonedocsPreis = {
  id: number
  hersteller: string
  geraet: string
  reparatur: string
  preis: string
}

type PhonedocsPreisApi = {
  id: number
  model: string
  [service: string]: string | number
}

type PhonedocsPreiseResponse = {
  success: boolean
  data: PhonedocsPreisApi[]
  count: number
}

const serviceBezeichnungen: Record<string, string> = {
  display_incell_lcd: "Display Incell LCD",
  display_soft_oled_nachbau: "Display Soft-OLED Nachbau",
  display_refurbished_original: "Display Refurbished Original",
  display_original_neu: "Display Original Neu",
  alternativ_akku_ios_faehig: "Alternativ Akku iOS-fähig",
  akku_original: "Akku Original",
  ladebuchse_reinigung: "Ladebuchse Reinigung",
  ladebuchse_austausch: "Ladebuchse Austausch",
  backcover: "Backcover",
  kamera: "Kamera",
  kamera_glas_linse: "Kamera Glas Linse",
  lautsprecher: "Lautsprecher",
  kostenvoranschlag: "Kostenvoranschlag",
}

const formatiereService = (service: string) => {
  const bezeichnung = serviceBezeichnungen[service]
  if (bezeichnung) return bezeichnung

  const text = service
    .replaceAll("_", " ")
    .replaceAll("ae", "ä")
    .replaceAll("oe", "ö")
    .replaceAll("ue", "ü")
    .trim()

  return text.charAt(0).toLocaleUpperCase("de") + text.slice(1)
}

export const fetchPhonedocsPreise = async (
  signal?: AbortSignal
): Promise<PhonedocsPreis[]> => {
  const res = await apiRequest<PhonedocsPreiseResponse>(
    "/phonedocspreise.php",
    "GET",
    undefined,
    signal
  )
  if (!res.success) return []

  return res.data.flatMap(({ id, model, ...services }) => {
    const trennstelle = model.indexOf(" ")
    const hersteller = trennstelle === -1 ? model : model.slice(0, trennstelle)
    const geraet =
      trennstelle === -1 ? model : model.slice(trennstelle + 1).trim()

    return Object.entries(services)
      .filter(([, preis]) => String(preis).trim() !== "-")
      .map(([reparatur, preis]) => ({
        id,
        hersteller,
        geraet,
        reparatur: formatiereService(reparatur),
        preis: String(preis),
      }))
  })
}

export type Job = {
  id: string
  name: string
  online: number
  Aufgaben: string
  Beschreibung: string | null
  Profil: string | null
  isAusbilung: number
}

type JobsResponse = {
  success: boolean
  data: Job[]
}

export const fetchJobs = async (signal?: AbortSignal): Promise<Job[]> => {
  const res = await apiRequest<JobsResponse>(
    "/jobs.php",
    "GET",
    undefined,
    signal
  )

  return res.data
}

export const fetchMitarbeiterCount = async (
  signal?: AbortSignal
): Promise<number> => {
  const res = await apiRequest<MitarbeiterResponse>(
    "/mitarbeiter.php",
    "GET",
    undefined,
    signal
  )

  return res.count
}

export type Partner = {
  id: string
  name: string
  link: string
  image: string
}

type PartnerResponse = {
  success: boolean
  data: Partner[]
}

export const fetchPartner = async (
  signal?: AbortSignal
): Promise<Partner[]> => {
  const res = await apiRequest<PartnerResponse>(
    "/partner.php",
    "GET",
    undefined,
    signal
  )

  return res.data
}

export const fetchStartseitePartner = async (
  signal?: AbortSignal
): Promise<Partner[]> => {
  const res = await apiRequest<PartnerResponse>(
    "/parnter.php",
    "GET",
    undefined,
    signal
  )

  const items = [...res.data]

  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }

  return items.slice(0, 5)
}

export type Angebot = {
  id: string
  title: string
  subtitle: string
  date_start: string
  date_stop: string
  link: string
  image: string
  anzeigen: number
}

type AngeboteResponse = {
  success: boolean
  data: Angebot[]
}

export const fetchAngebote = async (
  signal?: AbortSignal
): Promise<Angebot[]> => {
  const res = await apiRequest<AngeboteResponse>(
    "/angebote.php",
    "GET",
    undefined,
    signal
  )

  return res.data
}

export type Referenz = {
  id: string
  Name: string
  Webseite: string
  Bild: string
  Online: number
}

type ReferenzenResponse = {
  success: boolean
  data: Referenz[]
}

export const fetchReferenzen = async (
  signal?: AbortSignal
): Promise<Referenz[]> => {
  const res = await apiRequest<ReferenzenResponse>(
    "/referenzen.php",
    "GET",
    undefined,
    signal
  )

  return res.data
}

export const submitKontakt = async (data: FormData): Promise<void> => {
  await apiMultiPartRequest("/kontaktformular.php", "POST", data)
}

export const submitBewerbung = async (data: FormData): Promise<void> => {
  await apiMultiPartRequest("/bewerbung.php", "POST", data)
}
