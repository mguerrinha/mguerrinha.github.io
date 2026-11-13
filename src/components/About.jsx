import { useLanguage } from "../context/LanguageContext.jsx";
import { skills } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <Section id="about" eyebrow={a.eyebrow} title={a.title}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
          {a.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="pt-4">
            <h3 className="eyebrow">{a.strengthsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {a.strengths.map((s) => (
                <li key={s} className="chip font-sans text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="divide-y divide-line border-y border-line">
            {a.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-5">
                <dt className="pt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">{f.label}</dt>
                <dd>
                  <span className="block font-display text-xl font-medium leading-snug">{f.value}</span>
                  <span className="mt-1 block text-sm text-muted">{f.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-20 rounded-3xl border border-line bg-surface p-6 sm:p-10">
        <h3 className="eyebrow">{a.toolboxLabel}</h3>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.id}>
              <h4 className="font-display text-lg font-medium">{a.skillGroups[group.id]}</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip bg-bg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
