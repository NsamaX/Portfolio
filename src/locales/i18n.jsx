/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { translations } from "./languages";

const I18nContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  t: (path) => path,
});

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("language");
    if (stored === "en" || stored === "th") {
      return stored;
    }
  }
  return "en";
};

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((current, key) => {
    if (current && Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }
    return undefined;
  }, obj);
};

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "th" : "en"));
  }, []);

  const t = useCallback(
    (path) => {
      const langPack = translations[language] || translations.en;
      const value =
        getNestedValue(langPack, path) ||
        getNestedValue(translations.en, path) ||
        path;
      return value;
    },
    [language],
  );

  return (
    <I18nContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
