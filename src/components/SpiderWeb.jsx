export default function SpiderWeb({ position = 'top-left', size = 120 }) {
  const posClass = `spider-web--${position}`
  return (
    <svg
      className={`spider-web ${posClass}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Radial threads */}
      <line x1="0" y1="0" x2="120" y2="120" stroke="rgba(255,194,207,0.2)" strokeWidth="0.8" />
      <line x1="0" y1="0" x2="60" y2="120" stroke="rgba(255,194,207,0.2)" strokeWidth="0.8" />
      <line x1="0" y1="0" x2="120" y2="60" stroke="rgba(255,194,207,0.2)" strokeWidth="0.8" />
      <line x1="0" y1="0" x2="0" y2="120" stroke="rgba(255,194,207,0.2)" strokeWidth="0.8" />
      <line x1="0" y1="0" x2="120" y2="0" stroke="rgba(255,194,207,0.2)" strokeWidth="0.8" />
      <line x1="0" y1="0" x2="30" y2="120" stroke="rgba(255,194,207,0.15)" strokeWidth="0.6" />
      <line x1="0" y1="0" x2="120" y2="30" stroke="rgba(255,194,207,0.15)" strokeWidth="0.6" />
      {/* Spiral threads */}
      <path d="M10 0 Q10 10 0 10" stroke="rgba(255,194,207,0.25)" strokeWidth="0.7" fill="none" />
      <path d="M25 0 Q25 25 0 25" stroke="rgba(255,194,207,0.22)" strokeWidth="0.7" fill="none" />
      <path d="M45 0 Q45 45 0 45" stroke="rgba(255,194,207,0.19)" strokeWidth="0.7" fill="none" />
      <path d="M65 0 Q65 65 0 65" stroke="rgba(255,194,207,0.16)" strokeWidth="0.7" fill="none" />
      <path d="M90 0 Q90 90 0 90" stroke="rgba(255,194,207,0.12)" strokeWidth="0.7" fill="none" />
      <path d="M115 0 Q115 115 0 115" stroke="rgba(255,194,207,0.09)" strokeWidth="0.7" fill="none" />
    </svg>
  )
}
