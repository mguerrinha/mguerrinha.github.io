import { useState } from "react";
import { PiArrowDown, PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext.jsx";
import { profile } from "../data/content.js";
import Waves from "./Waves.jsx";
import { rich } from "./rich.jsx";

function Portrait({ alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-square w-48 sm:w-72 lg:w-full lg:max-w-[23rem]">
      {/* The sun, rising from behind the portrait. */}
      <div className="sunrise absolute -right-[9%] -top-[9%] size-[68%] rounded-full bg-sun" aria-hidden="true" />
      <div
        className="absolute -inset-[18%] rounded-full bg-[radial-gradient(closest-side,var(--sun-soft),transparent)]"
        aria-hidden="true"
      />
      {failed ? (
        <div className="relative grid size-full place-items-center rounded-full bg-surface font-display text-7xl font-semibold ring-[6px] ring-bg">
          MG
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={alt}
          width="960"
          height="960"
          onError={() => setFailed(true)}
          className="relative size-full rounded-full object-cover ring-[6px] ring-bg"
        />
      )}
    </div>
  );
}

const SOCIALS = [
  { href: profile.github, label: "GitHub", Icon: PiGithubLogo },
  { href: profile.linkedin, label: "LinkedIn", Icon: PiLinkedinLogo },
  { href: `mailto:${profile.email}`, label: "Email", Icon: PiEnvelopeSimple },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pb-36 pt-24 sm:pb-40 sm:pt-28">
      <div className="shell grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <p className="eyebrow rise">{t.hero.eyebrow}</p>
          <h1
            className="rise mt-5 font-display text-[clamp(3.25rem,11vw,8rem)] font-semibold leading-[0.9] tracking-[-0.035em]"
            style={{ "--delay": "80ms" }}
          >
            Miguel
            <br />
            Guerrinha<span className="text-sun">.</span>
          </h1>
          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl [&_strong]:font-medium [&_strong]:text-ink"
            style={{ "--delay": "180ms" }}
          >
            {rich(t.hero.lead)}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ "--delay": "280ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {t.hero.primary}
              <PiArrowDown />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-ink/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-sun hover:text-accent"
            >
              {t.hero.secondary}
            </a>
            <div className="ml-1 flex items-center gap-1">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="grid size-11 place-items-center rounded-full text-xl text-muted transition-colors hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rise order-1 lg:order-2" style={{ "--delay": "120ms" }}>
          <Portrait alt={t.hero.photoAlt} />
        </div>
      </div>

      <Waves className="absolute inset-x-0 bottom-0 h-28" />
    </section>
  );
}
