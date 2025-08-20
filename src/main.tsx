import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<>LAYOUT</>}>
          <Route index element={<>HOME</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
