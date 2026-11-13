import { PiBasketball, PiLifebuoy, PiMountains } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import Waves from "./Waves.jsx";

function Card({ icon: Icon, copy, className = "" }) {
  return (
    <div className={`flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-8 ${className}`}>
      <Icon className="text-4xl text-accent" aria-hidden="true" />
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-muted">{copy.meta}</p>
      <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{copy.title}</h3>
      <p className="mt-3 max-w-xl leading-relaxed text-muted">{copy.text}</p>
    </div>
  );
}

// The signature card: always navy, with the sun over drifting water.
function FastCard({ copy }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy text-[#edede9] dark:border dark:border-line dark:bg-[#0f1b31]">
      {/* Art: the sun setting into the water. Kept in its own block so it never runs under the text. */}
      <div className="relative h-52 shrink-0 sm:h-60" aria-hidden="true">
        <div className="absolute -right-40 -top-40 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(247_127_0/0.28),transparent)] sm:size-[38rem]" />
        <div className="absolute -top-20 right-[8%] size-56 rounded-full bg-sun sm:-top-24 sm:size-72" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-navy dark:bg-[#0f1b31]" />
        <Waves className="absolute inset-x-0 bottom-0 h-24" color="#9db9de" />
      </div>

      <div className="relative flex flex-1 flex-col justify-end p-7 pt-2 sm:p-10 sm:pt-2">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#ffb066]">{copy.meta}</p>
        <h3 className="mt-3 max-w-md font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {copy.title}
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-[#b9c3d6]">{copy.text}</p>
      </div>
    </div>
  );
}

export default function Beyond() {
  const { t } = useLanguage();
  const b = t.beyond;

  return (
    <Section id="beyond" eyebrow={b.eyebrow} title={b.title} className="bg-bg-soft">
      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <FastCard copy={b.cards.fast} />
        </Reveal>
        <Reveal delay={80}>
          <Card icon={PiLifebuoy} copy={b.cards.lifeguard} />
        </Reveal>
        <Reveal>
          <Card icon={PiBasketball} copy={b.cards.basketball} />
        </Reveal>
        <Reveal delay={80} className="lg:col-span-2">
          <Card icon={PiMountains} copy={b.cards.roots} />
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h3 className="eyebrow">{b.alsoLabel}</h3>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {b.also.map((item) => (
            <li key={item.title} className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p>
                <span className="font-display text-lg font-medium">{item.title}</span>
                <span className="mt-0.5 block text-sm text-muted sm:ml-3 sm:mt-0 sm:inline">{item.detail}</span>
              </p>
              <p className="font-mono text-xs text-muted">{item.year}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
