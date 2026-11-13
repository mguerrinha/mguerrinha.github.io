import { useState } from "react";
import { PiArrowUpRight, PiCheck, PiCopy, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext.jsx";
import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";

const LINKS = [
  { href: profile.linkedin, label: "LinkedIn", handle: "in/miguel-guerrinha", Icon: PiLinkedinLogo },
  { href: profile.github, label: "GitHub", handle: "mguerrinha", Icon: PiGithubLogo },
];

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: fall back to opening the mail client.
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-6xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-8xl">
            {c.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{c.text}</p>
        </Reveal>

        <Reveal delay={100} className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="break-all border-b-2 border-sun pb-1 font-display text-2xl font-medium tracking-tight transition-colors hover:text-accent sm:text-4xl"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-sun hover:text-accent"
          >
            {copied ? <PiCheck /> : <PiCopy />}
            <span aria-live="polite">{copied ? c.copied : c.copy}</span>
          </button>
        </Reveal>

        <Reveal delay={160} className="mt-14 grid gap-4 sm:grid-cols-2">
          {LINKS.map(({ href, label, handle, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-line bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-sun"
            >
              <span className="flex items-center gap-4">
                <Icon className="text-3xl text-accent" aria-hidden="true" />
                <span>
                  <span className="block font-display text-xl font-medium">{label}</span>
                  <span className="block font-mono text-xs text-muted">{handle}</span>
                </span>
              </span>
              <PiArrowUpRight className="text-xl text-muted transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
