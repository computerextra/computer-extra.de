import { createElement, lazy, type ComponentType } from "react"
import type { RouteObject } from "react-router"

const element = (importer: () => Promise<{ default: ComponentType }>) =>
  createElement(lazy(importer))

function defineRoutes<const T extends RouteObject[]>(routes: T): T {
  return routes
}

export type RouteHandle = {
  sitemap?: boolean
  navigation?: {
    title: string
    order: number
    requiresAvailableJobs?: boolean
  }
  header?: {
    title: string
    subtitle?: string
    showHomeButton?: boolean
  }
  seo?: {
    title: string
    description: string
    index?: boolean
  }
}

export const appRoutes = defineRoutes([
  {
    element: element(() => import("@/components/Layout/layout")),
    children: [
      {
        index: true,
        element: element(() => import("@/Pages/Start")),
        handle: {
          sitemap: true,
          navigation: {
            title: "Start",
            order: 0,
          },
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
        path: "leistungen",
        element: element(() => import("@/Pages/Leistunen")),
        handle: {
          sitemap: true,
          navigation: {
            title: "Leistungen",
            order: 10,
          },
          header: {
            title: "Leistungen",
            subtitle:
              "Wir bieten Ihnen ein ganzes Spektrum an Dienstleistungen im Bereich der IT.",
          },
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
        path: "agb",
        element: element(() => import("@/Pages/AGB")),
        handle: {
          sitemap: true,
          header: {
            title: "Allgemeine Geschäftsbedingungen",
            subtitle:
              "Der Firma Computer Extra GmbH, im Folgenden Verkäufer genannt.",
          },
          seo: {
            title: "Allgemeine Geschäftsbedingungen | Computer Extra",
            description:
              "Allgemeine Geschäftsbedingungen der Computer Extra GmbH in Kassel.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "auftragsdaten",
        element: element(() => import("@/Pages/Auftragsdaten")),
        handle: {
          header: {
            title: "AVV",
            subtitle: "Auftragsdatenverarbeitungsvertrag",
          },
          seo: {
            title: "Auftragsverarbeitung | Computer Extra",
            description:
              "Informationen zur Auftragsverarbeitung bei der Computer Extra GmbH.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "datenschutz",
        element: element(() => import("@/Pages/Datenschutz")),
        handle: {
          sitemap: true,
          header: {
            title: "Datenschutz",
          },
          seo: {
            title: "Datenschutz | Computer Extra",
            description:
              "Datenschutzerklärung der Computer Extra GmbH in Kassel.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "erfolg",
        element: element(() => import("@/Pages/Erfolg")),
        handle: {
          header: {
            title: "Erfolg",
            showHomeButton: true,
          },
          seo: {
            title: "Anfrage erfolgreich | Computer Extra",
            description: "Ihre Anfrage wurde erfolgreich übermittelt.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "fehler",
        element: element(() => import("@/Pages/Fehler")),
        handle: {
          header: {
            title: "Fehler",
            subtitle: "Da hat etwas nicht funktioniert!",
            showHomeButton: true,
          },
          seo: {
            title: "Fehler | Computer Extra",
            description:
              "Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "fernwartung",
        element: element(() => import("@/Pages/Fernwartung")),
        handle: {
          sitemap: true,
          header: {
            title: "Fernwartung",
            subtitle: "mit einem qualifizierten Mitarbeiter",
          },
          navigation: {
            title: "Fernwartung",
            order: 60,
          },
          seo: {
            title: "IT-Fernwartung & Remote Support | Computer Extra Kassel",
            description:
              "Schnelle IT-Hilfe per Fernwartung durch Computer Extra. Remote Support für Computer, Netzwerke und IT-Systeme.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "impressum",
        element: element(() => import("@/Pages/Impressum")),
        handle: {
          sitemap: true,
          header: {
            title: "Impressum",
          },
          seo: {
            title: "Impressum | Computer Extra GmbH",
            description:
              "Impressum und Anbieterinformationen der Computer Extra GmbH in Kassel.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "jobs",
        element: element(() => import("@/Pages/Jobs")),
        handle: {
          sitemap: true,
          header: {
            title: "Jobs",
            subtitle: "Wir suchen derzeit Verstärkung für unser Team!",
          },
          navigation: {
            title: "Jobs",
            order: 50,
            requiresAvailableJobs: true,
          },
          seo: {
            title: "Jobs & Karriere in Kassel | Computer Extra",
            description:
              "Jobs bei Computer Extra in Kassel. Entdecken Sie aktuelle Stellenangebote und werden Sie Teil unseres Teams.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "kontakt",
        element: element(() => import("@/Pages/Kontakt")),
        handle: {
          sitemap: true,
          header: {
            title: "Kontakt",
          },
          seo: {
            title: "Kontakt | Computer Extra Kassel",
            description:
              "Kontaktieren Sie Computer Extra in Kassel für IT-Service, Computer, Telekommunikation, Reparaturen und weitere IT-Dienstleistungen.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "oem",
        element: element(() => import("@/Pages/OEM")),
        handle: {
          header: {
            title: "OEM",
            subtitle: "Internal Use Only",
          },
          seo: {
            title: "OEM | Computer Extra",
            description: "Interner Bereich der Computer Extra GmbH.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "partner",
        element: element(() => import("@/Pages/Partner")),
        handle: {
          sitemap: true,
          header: {
            title: "Partner",
            subtitle:
              "Wir pflegen eine partnerschaftliche Zusammenarbeit mit unseren Partnern. Auf Vertrauen und Transparenz legen wir großen Wert - denn im Miteinander liegt unsere Stärke.",
          },
          navigation: {
            title: "Partner",
            order: 30,
          },
          seo: {
            title: "Unsere Partner | Computer Extra Kassel",
            description:
              "Computer Extra arbeitet mit ausgewählten Technologie- und Telekommunikationspartnern für zuverlässige IT-Lösungen zusammen.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "team",
        element: element(() => import("@/Pages/Team")),
        handle: {
          sitemap: true,
          header: {
            title: "Team",
            subtitle:
              "Wir schaffen ein flexibles Angebot für unsere Kunden - transparent, kreativ, persönlich.",
          },
          navigation: {
            title: "Team",
            order: 40,
          },
          seo: {
            title: "Unser Team | Computer Extra Kassel",
            description:
              "Lernen Sie das Team von Computer Extra in Kassel kennen und erfahren Sie, wer hinter unseren IT-Services und Lösungen steht.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "termin",
        element: element(() => import("@/Pages/Termin")),
        handle: {
          sitemap: true,
          header: {
            title: "Termin",
            subtitle: "Buchen Sie sich einen Telekom Beratungstermin",
          },
          navigation: {
            title: "Termin",
            order: 70,
          },
          seo: {
            title: "Telekom Beratungstermin in Kassel | Computer Extra",
            description:
              "Vereinbaren Sie einen persönlichen Telekom Beratungstermin bei Computer Extra in Kassel für Privat- und Geschäftskunden.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "phonedocs",
        element: element(() => import("@/Pages/Phonedocs")),
        handle: {
          sitemap: true,
          header: {
            title: "PhoneDocs",
            subtitle:
              "Reparieren statt neu kaufen. Schnell, ehrlich und nachvollziehbar.",
          },
          navigation: {
            title: "Phonedocs",
            order: 20,
          },
          seo: {
            title: "Smartphone Reparatur in Kassel | PhoneDocs",
            description:
              "Smartphone-Reparatur in Kassel bei PhoneDocs von Computer Extra. Reparaturen für Displays, Akkus und weitere Smartphone-Schäden.",
          },
        } satisfies RouteHandle,
      },
      {
        path: "phonedocs/anfrage",
        element: element(() => import("@/Pages/PhonedocsAnfrage")),
        handle: {
          header: {
            title: "PhoneDocs Anfrage",
            subtitle: "Ihre Reparaturanfrage an PhoneDocs.",
          },
          seo: {
            title: "Reparaturanfrage | PhoneDocs",
            description:
              "Senden Sie Ihre Reparaturanfrage direkt an PhoneDocs von Computer Extra.",
            index: false,
          },
        } satisfies RouteHandle,
      },
      {
        path: "phonedocs/preise",
        element: element(() => import("@/Pages/PhonedocsPreise")),
        handle: {
          sitemap: true,
          header: {
            title: "PhoneDocs Preise",
            subtitle: "Unsere Preise für die Reparatur Ihres Gerätes.",
          },
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
          header: {
            title: "404 - Nicht gefunden",
            subtitle: "Die gesuchte Seite konnte nicht gefunden werden.",
            showHomeButton: true,
          },
          seo: {
            title: "Seite nicht gefunden | Computer Extra",
            description: "Die angeforderte Seite konnte nicht gefunden werden.",
            index: false,
          },
        } satisfies RouteHandle,
      },
    ],
  },
])
