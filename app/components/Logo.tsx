export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-label="Vosquery Lab Logo"
    >
      <rect width="32" height="32" rx="8" className="fill-black dark:fill-white" />
      <path
        d="M8 10L16 24L24 10"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-white dark:stroke-black fill-none"
      />
    </svg>
  );
}