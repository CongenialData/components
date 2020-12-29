import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// English
import enCommon from "../i18n/en/common.json";

// Swedish
import svCommon from "../i18n/sv/common.json";

const detection = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "htmlTag",
    "navigator",
    "path",
    "subdomain",
  ], // Change place on htmlTag and navigator to get best detextion

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

const resources = {
  en: {
    common: enCommon,
  },
  sv: {
    common: svCommon,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(
    {
      defaultNS: "common",
      detection,
      interpolation: {
        escapeValue: false,
        formatSeparator: ",",
        format(value: string, format /* lng */): string {
          if (format === "uppercase") {
            return value.toUpperCase();
          }
          if (format === "capitalize") {
            return `${value[0].toUpperCase() + value.substring(1)}`;
          }
          return "";
        },
      },
      load: "languageOnly",
      react: {
        wait: true,
      },
      resources,
      whitelist: ["en"], // Add `en` to enable english translation. Remember to check `utils/i18n.ts` for default language
    },
    (err) => {
      if (err) {
        // eslint-disable-next-line
        return console.log("something went wrong loading", err);
      }
    }
  );

export default i18next;
