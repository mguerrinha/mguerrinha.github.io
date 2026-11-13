import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/content.js";

const LanguageContext = createContext({ lang: "en", t: content.en, setLang: () => {} });

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    /* ignore */
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
    document.title = content[lang].meta.title;
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
