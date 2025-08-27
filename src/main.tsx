import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout";
import AngeboteSeite from "./Pages/Angebote";
import Impressum from "./Pages/Impressum";
import Startseite from "./Pages/Startseite";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Startseite />} />
          <Route path="Angebote" element={<AngeboteSeite />} />

          {/* Leistungen */}
          <Route
            path="Webentwicklung"
            element={<div>Webentwicklung Page</div>}
          />
          <Route path="Partner" element={<div>Partner Page</div>} />
          <Route
            path="PC-Konfiguration"
            element={<div>PC-Konfiguration Page</div>}
          />
          <Route path="Kommunikation" element={<div>Kommunikation Page</div>} />
          <Route path="IT-Security" element={<div>IT-Security Page</div>} />
          <Route path="Netzwerke" element={<div>Netzwerke Page</div>} />
          <Route
            path="Cloud-Services"
            element={<div>Cloud-Services Page</div>}
          />
          <Route path="Datenrettung" element={<div>Datenrettung Page</div>} />

          <Route path="Partner" element={<div>Partner Page</div>} />
          <Route path="Team" element={<div>Team Page</div>} />
          <Route path="Jobs" element={<div>Jobs Page</div>} />
          <Route path="Fernwartung" element={<div>Fernwartung Page</div>} />

          {/* Termin */}
          <Route path="Termin" element={<div>Termin Page</div>} />
          <Route path="Kontakt" element={<div>Kontakt Page</div>} />

          {/* Gesetzliches */}
          <Route path="Impressum" element={<Impressum />} />
          <Route path="Datenschutz" element={<div>Datenschutz Page</div>} />
          <Route path="AGB" element={<div>AGB Page</div>} />

          {/* Versteckte Links */}
          <Route path="OEM" element={<div>OEM Page</div>} />

          {/* Catch All */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
