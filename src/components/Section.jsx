import Reveal from "./Reveal.jsx";

// Shared section frame: eyebrow label, display heading, optional intro.
export default function Section({ id, eyebrow, title, intro, className = "", children }) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${className}`}>
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-6xl">
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
