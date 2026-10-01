import { createElement, lazy, type ComponentType } from "react"
import type { RouteObject } from "react-router"

const element = (importer: () => Promise<{ default: ComponentType }>) =>
  createElement(lazy(importer))

export type RouteHandle = {
  sitemap?: boolean
}

export const appRoutes: RouteObject[] = [
  {
    element: element(() => import("@/components/Layout/layout")),
    children: [
      {
        index: true,
        element: element(() => import("@/Pages/Start")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
    ],
  },
  {
    element: element(() => import("@/components/Layout/layout_leistungen")),
    children: [
      {
        path: "Leistungen",
        element: element(() => import("@/Pages/Leistunen")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
    ],
  },
  {
    element: element(() => import("@/components/Layout/root-layout")),
    children: [
      {
        path: "AGB",
        element: element(() => import("@/Pages/AGB")),
      },
      {
        path: "Auftragsdaten",
        element: element(() => import("@/Pages/Auftragsdaten")),
      },
      {
        path: "Datenschutz",
        element: element(() => import("@/Pages/Datenschutz")),
      },
      {
        path: "Erfolg",
        element: element(() => import("@/Pages/Erfolg")),
      },
      {
        path: "Fehler",
        element: element(() => import("@/Pages/Fehler")),
      },
      {
        path: "Fernwartung",
        element: element(() => import("@/Pages/Fernwartung")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "Impressum",
        element: element(() => import("@/Pages/Impressum")),
      },
      {
        path: "Jobs",
        element: element(() => import("@/Pages/Jobs")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "Kontakt",
        element: element(() => import("@/Pages/Kontakt")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "OEM",
        element: element(() => import("@/Pages/OEM")),
      },
      {
        path: "Partner",
        element: element(() => import("@/Pages/Partner")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "Team",
        element: element(() => import("@/Pages/Team")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "Termin",
        element: element(() => import("@/Pages/Termin")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "Phonedocs",
        element: element(() => import("@/Pages/Phonedocs")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "Phonedocs/Anfrage",
        element: element(() => import("@/Pages/PhonedocsAnfrage")),
      },
      {
        path: "Phonedocs/Preise",
        element: element(() => import("@/Pages/PhonedocsPreise")),
        handle: {
          sitemap: true,
        } satisfies RouteHandle,
      },
      {
        path: "*",
        element: element(() => import("@/Pages/404")),
      },
    ],
  },
]
