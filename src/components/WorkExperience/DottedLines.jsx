export default function DottedLines() {
  return (
    <svg
      className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[300px]"
      viewBox="0 0 1000 300"
    >
      <defs>
        <linearGradient id="glowLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff1aff" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>

      <path
        d="M120 150 C380 60, 420 260, 900 130"
        stroke="url(#glowLine)"
        strokeWidth="10"
        fill="none"
        strokeDasharray="22 18"
        strokeLinecap="round"
        className="drop-shadow-[0_0_12px_#ff1aff]"
      />
    </svg>
  );
}
