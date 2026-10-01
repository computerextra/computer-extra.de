import { queries } from "@/lib/queries"
import { useQuery } from "@tanstack/react-query"

export function useBlankoVertrag() {
  const {
    isPending,
    isError,
    data: BlankoVertrag,
    error,
  } = useQuery(queries.blankoVertrag())

  return { isPending, isError, BlankoVertrag, error }
}

export function useBlankoAnlageA() {
  const {
    isPending,
    isError,
    data: BlankoAnlageA,
    error,
  } = useQuery(queries.blankoAnlageA())

  return { isPending, isError, BlankoAnlageA, error }
}

export function useBlankoAnlageB() {
  const {
    isPending,
    isError,
    data: BlankoAnlageB,
    error,
  } = useQuery(queries.blankoAnlageB())

  return { isPending, isError, BlankoAnlageB, error }
}
