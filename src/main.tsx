import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout";
import AngeboteSeite from "./Pages/Angebote";
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
          <Route path="Team" element={<div>Team Page</div>} />
          <Route path="Jobs" element={<div>Jobs Page</div>} />
          <Route path="Fernwartung" element={<div>Fernwartung Page</div>} />
          {/* Termin */}
          <Route path="Termin" element={<div>Termin Page</div>} />
          <Route path="Kontakt" element={<div>Kontakt Page</div>} />
          {/* Gesetzliches */}
          <Route path="Impressum" element={<div>Impressum Page</div>} />
          <Route path="Datenschutz" element={<div>Datenschutz Page</div>} />
          <Route path="AGB" element={<div>AGB Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
