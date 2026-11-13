import { PiArrowUp } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Miguel Guerrinha. {t.footer.built}
        </p>
        <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
          {t.footer.top}
          <PiArrowUp />
        </a>
      </div>
    </footer>
  );
}
