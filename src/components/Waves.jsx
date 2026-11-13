// Drifting wave lines: the sea under the sun in the hero, and on the FAST card.
// Each path is periodic over half its width, so sliding it by -50% loops seamlessly.

const WIDTH = 2400;

function wavePath(period, amp) {
  const half = period / 2;
  const y = amp + 2;
  let d = `M0 ${y} q ${half / 2} ${-amp} ${half} 0`;
  for (let x = half; x < WIDTH; x += half) d += ` t ${half} 0`;
  return d;
}

const LAYERS = [
  { period: 200, amp: 9, top: 0, duration: 26, opacity: 0.5, sun: true },
  { period: 150, amp: 7, top: 22, duration: 34, opacity: 0.32 },
  { period: 240, amp: 10, top: 46, duration: 44, opacity: 0.2 },
  { period: 120, amp: 6, top: 72, duration: 30, opacity: 0.12 },
];

export default function Waves({ className = "", color = "var(--wave)" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        {LAYERS.map((l) => (
          <svg
            key={l.period}
            className="wave"
            style={{
              top: l.top,
              height: l.amp * 2 + 4,
              animationDuration: `${l.duration}s`,
              opacity: l.sun ? 0.9 : l.opacity,
              color: l.sun ? "var(--sun)" : color,
            }}
            viewBox={`0 0 ${WIDTH} ${l.amp * 2 + 4}`}
            preserveAspectRatio="none"
          >
            <path
              d={wavePath(l.period, l.amp)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
