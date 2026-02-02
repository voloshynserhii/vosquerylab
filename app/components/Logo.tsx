export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-label="Vosquery Lab Logo"
    >
      <defs>
        <linearGradient id="vosquery-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#vosquery-gradient)" />
      <path
        d="M16 6A10 10 0 1 0 16 26A10 10 0 0 0 16 6M10 10L16 20L22 10M21 21L27 27"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}