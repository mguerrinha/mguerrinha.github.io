import { useState } from "react";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext.jsx";
import { profile, projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const FILTERS = ["all", "algorithms", "systems", "apps"];

function ProjectCard({ project, lang, viewCode }) {
  const copy = project[lang];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${copy.title}. ${viewCode}`}
      className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-sun"
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-muted">
        <span>{project.course}</span>
        <PiArrowUpRight className="text-lg transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight">{copy.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{copy.text}</p>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 font-mono text-xs">
        <span>{project.stack}</span>
        {project.grade != null && (
          <span className="text-muted">
            <span className="text-sm font-medium text-accent">{project.grade.toFixed(1)}</span> / 20
          </span>
        )}
      </div>
    </a>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const p = t.projects;
  const [filter, setFilter] = useState("all");

  const visible = filter === "all" ? projects : projects.filter((x) => x.category === filter);

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <Reveal className="flex flex-wrap gap-2">
        {FILTERS.map((id) => {
          const count = id === "all" ? projects.length : projects.filter((x) => x.category === id).length;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === id ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-sun hover:text-ink"
              }`}
            >
              {p.filters[id]}
              <span className="ml-2 font-mono text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </Reveal>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal as="li" key={project.id} delay={(i % 3) * 70}>
            <ProjectCard project={project} lang={lang} viewCode={p.viewCode} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border-b border-line pb-1 font-medium transition-colors hover:border-sun hover:text-accent"
        >
          <PiGithubLogo className="text-lg" />
          {p.more}
          <PiArrowUpRight />
        </a>
      </Reveal>
    </Section>
  );
}
