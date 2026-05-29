export default function FamilyIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="10" r="2.5" />
      <circle cx="19" cy="10" r="2.5" />
      <path d="M12 8v2m0 0c-2 0-4 2-4 4v2h8v-2c0-2-2-4-4-4z" />
      <path d="M5 12.5c-1.5 0-3 1.5-3 3V18h4" />
      <path d="M19 12.5c1.5 0 3 1.5 3 3V18h-4" />
    </svg>
  );
}
