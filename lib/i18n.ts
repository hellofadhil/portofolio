'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const pathDetector = {
  name: 'path',
  lookup() {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const lang = path.split('/')[1];
      return lang;
    }
    return undefined;
  },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'id'],
    debug: false,
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: [], // Jangan cache agar selalu ikut path
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Tambahkan path detector setelah init
i18n.services.languageDetector?.addDetector(pathDetector);

export default i18n;
