export function Mark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#FFC91F" />
      <path d="M8 24V8h16" fill="none" stroke="#17212B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13h3M8 18h3M13 8v3M18 8v3" stroke="#17212B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
