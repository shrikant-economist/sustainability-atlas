// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

import translationEN from './assets/locales/en/translation.json';

i18n
  // .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.NODE_ENV === 'production' ? false : true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: translationEN,
      },
      // es: {
      //   translation: translationES,
      // },
    },
    // backend: {
    //   loadPath: './assets/locales/{{lng}}/{{ns}}.json',
    // },
  });

export default i18n;
