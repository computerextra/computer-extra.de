import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout";
import NotFound from "./Pages/404";
import AngeboteSeite from "./Pages/Angebote";
import Fernwartung from "./Pages/Fernwartung";
import AGB from "./Pages/Gesetzliches/AGB";
import Auftragsdatenverarbeitung from "./Pages/Gesetzliches/Auftragsdatenverarbeitung";
import Datenschutz from "./Pages/Gesetzliches/Datenschutz";
import Impressum from "./Pages/Gesetzliches/Impressum";
import JobPage from "./Pages/Jobs";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Termin from "./Pages/Kontakt/Termin";
import CloudServices from "./Pages/Leistungen/Cloud-Services";
import Datenrettung from "./Pages/Leistungen/Datenrettung";
import ITSecurity from "./Pages/Leistungen/IT-Security";
import Kommunikation from "./Pages/Leistungen/Kommunikation";
import Netzwerke from "./Pages/Leistungen/Netzwerke";
import PCKonfiguration from "./Pages/Leistungen/PC-Konfiguration";
import Webentwicklung from "./Pages/Leistungen/Webentwicklung";
import OEM from "./Pages/OEM";
import PartnerPage from "./Pages/Partner";
import Startseite from "./Pages/Startseite";
import TeamPage from "./Pages/Team";
import StartLayout from "./StartLayout";

const queryClient = new QueryClient();

// posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
//   api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
//   defaults: "2025-05-24",
//   persistence: "memory",
// });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <PostHogProvider client={posthog}> */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
      </BrowserRouter>
    </QueryClientProvider>
    {/* </PostHogProvider> */}
  </StrictMode>
);
