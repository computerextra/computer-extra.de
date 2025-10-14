import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import Layout from "./Layout";
import StartLayout from "./StartLayout";

// Lazy load pages
const Startseite = lazy(() => import("./Pages/Startseite"));
const AngeboteSeite = lazy(() => import("./Pages/Angebote"));
const Webentwicklung = lazy(() => import("./Pages/Leistungen/Webentwicklung"));
const PCKonfiguration = lazy(
  () => import("./Pages/Leistungen/PC-Konfiguration")
);
const Kommunikation = lazy(() => import("./Pages/Leistungen/Kommunikation"));
const ITSecurity = lazy(() => import("./Pages/Leistungen/IT-Security"));
const Netzwerke = lazy(() => import("./Pages/Leistungen/Netzwerke"));
const CloudServices = lazy(() => import("./Pages/Leistungen/Cloud-Services"));
const Datenrettung = lazy(() => import("./Pages/Leistungen/Datenrettung"));
const PartnerPage = lazy(() => import("./Pages/Partner"));
const TeamPage = lazy(() => import("./Pages/Team"));
const JobPage = lazy(() => import("./Pages/Jobs"));
const Fernwartung = lazy(() => import("./Pages/Fernwartung"));
const Termin = lazy(() => import("./Pages/Kontakt/Termin"));
const Kontakt = lazy(() => import("./Pages/Kontakt/Kontakt"));
const Impressum = lazy(() => import("./Pages/Gesetzliches/Impressum"));
const Datenschutz = lazy(() => import("./Pages/Gesetzliches/Datenschutz"));
const Auftragsdatenverarbeitung = lazy(
  () => import("./Pages/Gesetzliches/Auftragsdatenverarbeitung")
);
const AGB = lazy(() => import("./Pages/Gesetzliches/AGB"));
const OEM = lazy(() => import("./Pages/OEM"));
const NotFound = lazy(() => import("./Pages/404"));

const queryClient = new QueryClient();

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: "2025-05-24",
  persistence: "memory",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route element={<StartLayout />}>
                <Route index element={<Startseite />} />
              </Route>
              <Route element={<Layout />}>
                <Route path="Angebote" element={<AngeboteSeite />} />

                {/* Leistungen */}
                <Route path="Webentwicklung" element={<Webentwicklung />} />
                <Route path="PC-Konfiguration" element={<PCKonfiguration />} />
                <Route path="Kommunikation" element={<Kommunikation />} />
                <Route path="IT-Security" element={<ITSecurity />} />
                <Route path="Netzwerke" element={<Netzwerke />} />
                <Route path="Cloud-Services" element={<CloudServices />} />
                <Route path="Datenrettung" element={<Datenrettung />} />

                <Route path="Partner" element={<PartnerPage />} />
                <Route path="Team" element={<TeamPage />} />
                <Route path="Jobs" element={<JobPage />} />
                <Route path="Fernwartung" element={<Fernwartung />} />

                {/* Termin */}
                <Route path="Termin" element={<Termin />} />
                <Route path="Kontakt" element={<Kontakt />} />

                {/* Gesetzliches */}
                <Route path="Impressum" element={<Impressum />} />
                <Route path="Datenschutz" element={<Datenschutz />} />
                <Route
                  path="Auftragsdatenverarbeitung"
                  element={<Auftragsdatenverarbeitung />}
                />
                <Route path="AGB" element={<AGB />} />

                {/* Versteckte Links */}
                <Route path="OEM" element={<OEM />} />

                {/* Catch All */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </PostHogProvider>
  </StrictMode>
);
