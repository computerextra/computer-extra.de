import {
  fetchAbteilungen,
  fetchAngebote,
  fetchJobs,
  fetchMitarbeiter,
  fetchMitarbeiterCount,
  fetchPartner,
  fetchPhonedocsPreise,
  fetchReferenzen,
  fetchStartseitePartner,
} from "@/lib/apiClient"
import { queryOptions } from "@tanstack/react-query"

const STALE_TIME = 5 * 60 * 1000

export const queries = {
  jobs: () =>
    queryOptions({
      queryKey: ["jobs"] as const,
      queryFn: ({ signal }) => fetchJobs(signal),
      staleTime: STALE_TIME,
    }),

  mitarbeiter: () =>
    queryOptions({
      queryKey: ["mitarbeiter"] as const,
      queryFn: ({ signal }) => fetchMitarbeiter(signal),
      staleTime: STALE_TIME,
    }),

  mitarbeiterCount: () =>
    queryOptions({
      queryKey: ["mitarbeiter", "count"] as const,
      queryFn: ({ signal }) => fetchMitarbeiterCount(signal),
      staleTime: STALE_TIME,
    }),

  abteilungen: () =>
    queryOptions({
      queryKey: ["abteilungen"] as const,
      queryFn: ({ signal }) => fetchAbteilungen(signal),
      staleTime: STALE_TIME,
    }),

  partner: () =>
    queryOptions({
      queryKey: ["partner"] as const,
      queryFn: ({ signal }) => fetchPartner(signal),
      staleTime: STALE_TIME,
    }),

  startseitePartner: () =>
    queryOptions({
      queryKey: ["partner", "startseite"] as const,
      queryFn: ({ signal }) => fetchStartseitePartner(signal),
      staleTime: STALE_TIME,
    }),

  angebote: () =>
    queryOptions({
      queryKey: ["angebote"] as const,
      queryFn: ({ signal }) => fetchAngebote(signal),
      staleTime: STALE_TIME,
    }),

  referenzen: () =>
    queryOptions({
      queryKey: ["referenzen"] as const,
      queryFn: ({ signal }) => fetchReferenzen(signal),
      staleTime: STALE_TIME,
    }),

  phonedocsPreise: () =>
    queryOptions({
      queryKey: ["phonedocs", "preise"] as const,
      queryFn: ({ signal }) => fetchPhonedocsPreise(signal),
      staleTime: STALE_TIME,
    }),
} as const
