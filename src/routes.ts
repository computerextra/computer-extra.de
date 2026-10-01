import { createElement, lazy, type ComponentType } from "react"
import type { RouteObject } from "react-router"

const element = (importer: () => Promise<{ default: ComponentType }>) =>
  createElement(lazy(importer))

export type RouteHandle = {
  sitemap?: boolean
  seo?: {
    title: string
    description: string
    index?: boolean
  }
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
          seo: {
            title:
              "IT-Dienstleister & Computerservice in Kassel | Computer Extra",
            description:
              "Computer Extra in Kassel: IT-Service, IT-Sicherheit, Netzwerke, PC- und Notebook-Systeme, Telekom, Webdesign und Reparaturen.",
          },
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
          seo: {
            title: "IT-Service & Dienstleistungen in Kassel | Computer Extra",
            description:
              "IT-Service in Kassel: Netzwerke, IT-Sicherheit, Datenrettung, PC- und Notebook-Systeme, Webdesign, Hosting und Smartphone-Reparaturen.",
          },
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
        handle: {
          sitemap: true,
          seo: {
            title: "Allgemeine Geschäftsbedingungen | Computer Extra",
            description:
              "Allgemeine Geschäftsbedingungen der Computer Extra GmbH in Kassel.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Auftragsdaten",
        element: element(() => import("@/Pages/Auftragsdaten")),
        handle: {
          seo: {
            title: "Auftragsverarbeitung | Computer Extra",
            description:
              "Informationen zur Auftragsverarbeitung bei der Computer Extra GmbH.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "Datenschutz",
        element: element(() => import("@/Pages/Datenschutz")),
        handle: {
          sitemap: true,
          seo: {
            title: "Datenschutz | Computer Extra",
            description:
              "Datenschutzerklärung der Computer Extra GmbH in Kassel.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Erfolg",
        element: element(() => import("@/Pages/Erfolg")),
        handle: {
          seo: {
            title: "Anfrage erfolgreich | Computer Extra",
            description: "Ihre Anfrage wurde erfolgreich übermittelt.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "Fehler",
        element: element(() => import("@/Pages/Fehler")),
        handle: {
          seo: {
            title: "Fehler | Computer Extra",
            description:
              "Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "Fernwartung",
        element: element(() => import("@/Pages/Fernwartung")),
        handle: {
          sitemap: true,
          seo: {
            title: "IT-Fernwartung & Remote Support | Computer Extra Kassel",
            description:
              "Schnelle IT-Hilfe per Fernwartung durch Computer Extra. Remote Support für Computer, Netzwerke und IT-Systeme.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Impressum",
        element: element(() => import("@/Pages/Impressum")),
        handle: {
          sitemap: true,
          seo: {
            title: "Impressum | Computer Extra GmbH",
            description:
              "Impressum und Anbieterinformationen der Computer Extra GmbH in Kassel.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Jobs",
        element: element(() => import("@/Pages/Jobs")),
        handle: {
          sitemap: true,
          seo: {
            title: "Jobs & Karriere in Kassel | Computer Extra",
            description:
              "Jobs bei Computer Extra in Kassel. Entdecken Sie aktuelle Stellenangebote und werden Sie Teil unseres Teams.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Kontakt",
        element: element(() => import("@/Pages/Kontakt")),
        handle: {
          sitemap: true,
          seo: {
            title: "Kontakt | Computer Extra Kassel",
            description:
              "Kontaktieren Sie Computer Extra in Kassel für IT-Service, Computer, Telekommunikation, Reparaturen und weitere IT-Dienstleistungen.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "OEM",
        element: element(() => import("@/Pages/OEM")),
        handle: {
          seo: {
            title: "OEM | Computer Extra",
            description: "Interner Bereich der Computer Extra GmbH.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "Partner",
        element: element(() => import("@/Pages/Partner")),
        handle: {
          sitemap: true,
          seo: {
            title: "Unsere Partner | Computer Extra Kassel",
            description:
              "Computer Extra arbeitet mit ausgewählten Technologie- und Telekommunikationspartnern für zuverlässige IT-Lösungen zusammen.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Team",
        element: element(() => import("@/Pages/Team")),
        handle: {
          sitemap: true,
          seo: {
            title: "Unser Team | Computer Extra Kassel",
            description:
              "Lernen Sie das Team von Computer Extra in Kassel kennen und erfahren Sie, wer hinter unseren IT-Services und Lösungen steht.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Termin",
        element: element(() => import("@/Pages/Termin")),
        handle: {
          sitemap: true,
          seo: {
            title: "Telekom Beratungstermin in Kassel | Computer Extra",
            description:
              "Vereinbaren Sie einen persönlichen Telekom Beratungstermin bei Computer Extra in Kassel für Privat- und Geschäftskunden.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Phonedocs",
        element: element(() => import("@/Pages/Phonedocs")),
        handle: {
          sitemap: true,
          seo: {
            title: "Smartphone Reparatur in Kassel | PhoneDocs",
            description:
              "Smartphone-Reparatur in Kassel bei PhoneDocs von Computer Extra. Reparaturen für Displays, Akkus und weitere Smartphone-Schäden.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "Phonedocs/Anfrage",
        element: element(() => import("@/Pages/PhonedocsAnfrage")),
        handle: {
          seo: {
            title: "Reparaturanfrage | PhoneDocs",
            description:
              "Senden Sie Ihre Reparaturanfrage direkt an PhoneDocs von Computer Extra.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "Phonedocs/Preise",
        element: element(() => import("@/Pages/PhonedocsPreise")),
        handle: {
          sitemap: true,
          seo: {
            title: "Smartphone Reparatur Preise in Kassel | PhoneDocs",
            description:
              "Preise für Smartphone-Reparaturen bei PhoneDocs in Kassel. Gerät auswählen und verfügbare Reparaturen und Preise prüfen.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "*",
        element: element(() => import("@/Pages/404")),
        handle: {
          seo: {
            title: "Seite nicht gefunden | Computer Extra",
            description: "Die angeforderte Seite konnte nicht gefunden werden.",
            index: false,
          },
        } satisfies RouteHandle,
      },
    ],
  },
]
