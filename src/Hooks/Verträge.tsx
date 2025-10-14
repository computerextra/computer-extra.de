import { useQuery } from "@tanstack/react-query";
import {
  getBlankoAnlageA,
  getBlankoAnlageB,
  getBlankoVertrag,
} from "@/api/Auftragsdatenverarbeitung";

export function useBlankoVertrag() {
  const {
    isPending,
    isError,
    data: BlankoVertrag,
    error,
  } = useQuery({
    queryKey: ["BlankoVertrag"],
    queryFn: async () => {
      const res = await getBlankoVertrag();
      return res?.message ?? null;
    },
    staleTime: 5 * 1000 * 100,
  });

  return { isPending, isError, BlankoVertrag, error };
}

export function useBlankoAnlageA() {
  const {
    isPending,
    isError,
    data: BlankoAnlageA,
    error,
  } = useQuery({
    queryKey: ["BlankoAnlageA"],
    queryFn: async () => {
      const res = await getBlankoAnlageA();
      return res?.message ?? null;
    },
    staleTime: 5 * 1000 * 100,
  });

  return { isPending, isError, BlankoAnlageA, error };
}

export function useBlankoAnlageB() {
  const {
    isPending,
    isError,
    data: BlankoAnlageB,
    error,
  } = useQuery({
    queryKey: ["BlankoAnlageB"],
    queryFn: async () => {
      const res = await getBlankoAnlageB();
      return res?.message ?? null;
    },
    staleTime: 5 * 1000 * 100,
  });

  return { isPending, isError, BlankoAnlageB, error };
}
