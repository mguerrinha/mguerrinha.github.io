import { useEffect, useState } from "react";
import { PiList, PiMoon, PiSun, PiX } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const SECTIONS = ["about", "journey", "projects", "beyond", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A thin band across the middle of the viewport decides the active section.
      { rootMargin: "-45% 0px -50% 0px" }
    );
    const top = document.getElementById("top");
    [top, ...SECTIONS.map((id) => document.getElementById(id))]
      .filter(Boolean)
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}

function LanguageToggle({ className = "" }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`items-center rounded-full border border-line p-0.5 font-mono text-xs ${className}`}
    >
      {["en", "pt"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code ? "bg-ink text-bg" : "text-muted hover:text-ink"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
      className="grid size-9 place-items-center rounded-full border border-line text-lg text-ink transition-colors hover:border-sun hover:text-accent"
    >
      {theme === "dark" ? <PiSun /> : <PiMoon />}
    </button>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open ? "border-line bg-bg" : scrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-semibold tracking-tight"
        >
          <span className="size-2.5 rounded-full bg-sun" aria-hidden="true" />
          Miguel Guerrinha
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-sun after:transition-transform after:duration-300 hover:text-ink ${
                  active === id ? "text-ink after:scale-x-100" : "text-muted after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* On phones the language switch lives inside the menu to keep the bar on one line. */}
          <LanguageToggle className="hidden sm:flex" />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-9 place-items-center rounded-full border border-line text-lg lg:hidden"
          >
            {open ? <PiX /> : <PiList />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="shell flex flex-col pb-5 lg:hidden">
          {SECTIONS.map((id) => (
            <li key={id} className="border-t border-line">
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-3.5 font-display text-xl ${active === id ? "text-accent" : "text-ink"}`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
          <li className="border-t border-line pt-5 sm:hidden">
            <LanguageToggle className="inline-flex" />
          </li>
        </ul>
      )}
    </header>
  );
}
