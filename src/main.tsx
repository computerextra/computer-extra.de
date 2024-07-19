import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import "./index.css";
import Footer from "./Layout/Footer";
import Menu from "./Layout/Menu";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="antialiased">
        <ScrollToTopButton />
        {/* Main Content */}
        <Menu />
        <App />
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
