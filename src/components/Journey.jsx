import { PiBriefcase, PiGraduationCap, PiLightning } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const ICONS = { work: PiBriefcase, team: PiLightning, edu: PiGraduationCap };

export default function Journey() {
  const { t } = useLanguage();
  const j = t.journey;

  return (
    <Section id="journey" eyebrow={j.eyebrow} title={j.title} className="bg-bg-soft">
      <ol className="relative">
        {j.items.map((item, i) => {
          const Icon = ICONS[item.type];
          const current = item.to === null;
          const period = current ? `${item.from} – ${j.present}` : item.to ? `${item.from} – ${item.to}` : item.from;

          return (
            <Reveal
              as="li"
              key={`${item.role}-${item.place}`}
              delay={i * 60}
              className="group relative grid gap-x-8 gap-y-2 pb-12 pl-12 last:pb-0 md:grid-cols-[11rem_1fr] md:pl-0"
            >
              {/* Rail */}
              <span
                className="absolute bottom-0 left-[1.0625rem] top-10 w-px bg-line group-last:hidden md:left-[calc(11rem+1.0625rem+2rem)]"
                aria-hidden="true"
              />

              <p className="pt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted md:text-right">{period}</p>

              <div className="md:flex md:gap-6">
                <span
                  className={`absolute left-0 top-0 grid size-9 shrink-0 place-items-center rounded-full border text-base md:static ${
                    current ? "border-sun bg-sun text-navy" : "border-line bg-surface text-muted"
                  }`}
                  title={j.types[item.type]}
                >
                  <Icon aria-hidden="true" />
                  <span className="sr-only">{j.types[item.type]}</span>
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-accent">{item.place}</p>
                  {item.text && <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.text}</p>}
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
