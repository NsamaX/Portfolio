import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { I18nProvider } from "./locales/i18n";
import App from "./App.jsx";

import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
