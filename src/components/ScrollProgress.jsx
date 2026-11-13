import { useEffect, useRef } from "react";

// Thin orange line pinned to the top of the screen that fills from left to
// right as the page is scrolled. Writes the style directly (no React re-render
// per scroll event); browsers already fire scroll at most once per frame.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Page height changes as fonts, images and reveal animations settle.
    const ro = new ResizeObserver(update);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-sun shadow-[0_0_10px_rgb(247_127_0/0.55)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
