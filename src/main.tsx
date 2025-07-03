import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import "./index.css";
import Footer from "./Layout/Footer";
import Menu from "./Layout/Menu";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: "2025-05-24",
  persistence: "memory",
  // persistence:
  //   cookieConsentGiven() === "yes" ? "localStorage+cookie" : "memory",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <BrowserRouter>
        <div className="antialiased">
          <ScrollToTopButton />
          {/* Main Content */}
          <Menu />
          <App />
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          {/* Footer */}
          <Footer />
          {/* <CookieBanner /> */}
        </div>
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);
