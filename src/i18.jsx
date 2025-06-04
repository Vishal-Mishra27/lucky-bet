import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uae from "./locales/uae/translation.json";
import en from "./locales/en/translation.json";


i18n.use(initReactI18next).init({
  resources: {
    uae: { translation: uae },
    en: { translation: en },  
  },
  fallbackLng: "en",
  returnObjects: true, // returns an object with the current translations
  interpolation: {
    escapeValue: false, // react already escapes
  },
});

export default i18n;
