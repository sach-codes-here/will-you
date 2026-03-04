export default function McQueenCar({ style, className = '' }) {
  return (
    <svg
      className={`mcqueen-car ${className}`}
      style={style}
      viewBox="0 0 340 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Metallic red body paint */}
        <linearGradient id="bodyPaint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="35%" stopColor="#e63946" />
          <stop offset="60%" stopColor="#c1121f" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
        {/* Hood top highlight */}
        <linearGradient id="hoodShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Lower body */}
        <linearGradient id="lowerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e63946" />
          <stop offset="50%" stopColor="#c1121f" />
          <stop offset="100%" stopColor="#7a0b0b" />
        </linearGradient>
        {/* Windshield glass */}
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d0eaf0" />
          <stop offset="40%" stopColor="#a8dadc" />
          <stop offset="100%" stopColor="#6baed6" />
        </linearGradient>
        {/* Glass reflection streak */}
        <linearGradient id="glassReflect" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Wheel rim metallic */}
        <radialGradient id="rimMetal" cx="0.4" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="50%" stopColor="#a0a0a0" />
          <stop offset="100%" stopColor="#555" />
        </radialGradient>
        {/* Tire rubber */}
        <radialGradient id="tire" cx="0.45" cy="0.4" r="0.55">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
        {/* Chrome bumper */}
        <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="30%" stopColor="#c8c8c8" />
          <stop offset="60%" stopColor="#888" />
          <stop offset="100%" stopColor="#aaa" />
        </linearGradient>
        {/* Ground shadow */}
        <radialGradient id="groundShadow" cx="0.5" cy="0.5" rx="0.5" ry="0.5">
          <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        {/* Yellow metallic for 95 */}
        <linearGradient id="goldPaint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe066" />
          <stop offset="50%" stopColor="#ffd60a" />
          <stop offset="100%" stopColor="#cc9900" />
        </linearGradient>
        {/* Headlight glow */}
        <radialGradient id="headlightGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgba(255,240,180,0.8)" />
          <stop offset="100%" stopColor="rgba(255,240,180,0)" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="170" cy="148" rx="140" ry="10" fill="url(#groundShadow)" />

      {/* ---- LOWER BODY / SKIRT ---- */}
      <path
        d="M30 95 L310 95 C315 95 320 100 318 108 L316 115 C315 118 312 120 308 120 L32 120 C28 120 25 118 24 115 L22 108 C20 100 25 95 30 95 Z"
        fill="url(#lowerBody)"
      />
      {/* Side panel line */}
      <path
        d="M40 100 L300 100"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.7"
      />
      {/* Chrome side trim */}
      <path
        d="M50 108 L290 108"
        stroke="url(#chrome)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* ---- UPPER BODY / CABIN ---- */}
      <path
        d="M45 95 C45 95 55 48 105 38 L235 38 C275 38 290 58 298 95 Z"
        fill="url(#bodyPaint)"
      />
      {/* Top highlight streak */}
      <path
        d="M55 95 C55 95 65 52 110 42 L230 42 C268 42 282 60 290 95 Z"
        fill="url(#hoodShine)"
      />
      {/* Panel crease */}
      <path
        d="M80 65 L260 65"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="0.8"
      />

      {/* ---- WINDSHIELD (LEFT EYE) ---- */}
      <path
        d="M115 42 C110 42 100 55 98 85 L158 85 L158 48 C155 44 140 40 115 42 Z"
        fill="url(#glass)"
      />
      <path
        d="M115 44 C112 44 105 54 103 75 L125 75 L130 48 Z"
        fill="url(#glassReflect)"
      />

      {/* ---- WINDSHIELD (RIGHT EYE) ---- */}
      <path
        d="M168 48 L168 85 L244 85 C246 55 240 42 225 40 L168 48 Z"
        fill="url(#glass)"
      />
      <path
        d="M172 50 L172 72 L195 72 L198 50 Z"
        fill="url(#glassReflect)"
      />

      {/* Windshield divider */}
      <path
        d="M160 44 L160 87"
        stroke="#c1121f"
        strokeWidth="5"
      />
      <path
        d="M160 44 L160 87"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {/* ---- EYES (PUPILS) ---- */}
      {/* Left eye */}
      <ellipse cx="132" cy="66" rx="12" ry="14" fill="#1a2744" />
      <ellipse cx="132" cy="66" rx="8" ry="10" fill="#0d1b33" />
      <ellipse cx="128" cy="60" rx="4" ry="5" fill="rgba(255,255,255,0.7)" />
      <ellipse cx="136" cy="72" rx="2" ry="2.5" fill="rgba(255,255,255,0.25)" />
      {/* Right eye */}
      <ellipse cx="206" cy="66" rx="12" ry="14" fill="#1a2744" />
      <ellipse cx="206" cy="66" rx="8" ry="10" fill="#0d1b33" />
      <ellipse cx="202" cy="60" rx="4" ry="5" fill="rgba(255,255,255,0.7)" />
      <ellipse cx="210" cy="72" rx="2" ry="2.5" fill="rgba(255,255,255,0.25)" />

      {/* ---- EYEBROW LINES (eyelids) ---- */}
      <path
        d="M102 54 Q130 42 156 50"
        stroke="#8b0000"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M168 50 Q200 42 242 54"
        stroke="#8b0000"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ---- SMILE ---- */}
      <path
        d="M135 90 Q170 100 205 90"
        stroke="#8b0000"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M135 90 Q170 100 205 90"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />

      {/* ---- FRONT BUMPER ---- */}
      <path
        d="M22 108 C20 100 25 95 30 95 L60 95 L58 110 L26 110 Z"
        fill="url(#chrome)"
        opacity="0.8"
      />
      {/* Headlight */}
      <ellipse cx="38" cy="100" rx="8" ry="6" fill="#ffeebb" opacity="0.9" />
      <ellipse cx="38" cy="100" rx="5" ry="4" fill="#fff8dc" />
      <ellipse cx="38" cy="100" rx="14" ry="10" fill="url(#headlightGlow)" />

      {/* ---- REAR ---- */}
      <path
        d="M280 95 L310 95 C315 95 320 100 318 108 L314 110 L282 110 Z"
        fill="url(#chrome)"
        opacity="0.8"
      />
      {/* Tail light */}
      <rect x="304" y="98" width="8" height="6" rx="2" fill="#ff1a1a" opacity="0.9" />
      <rect x="304" y="98" width="8" height="6" rx="2" fill="rgba(255,80,80,0.5)" />

      {/* ---- NUMBER 95 + LIGHTNING ---- */}
      {/* Circle background for 95 */}
      <circle cx="80" cy="102" r="14" fill="#c1121f" />
      <circle cx="80" cy="102" r="13" fill="url(#bodyPaint)" />
      <circle cx="80" cy="102" r="12" stroke="url(#goldPaint)" strokeWidth="1.5" fill="none" />
      <text
        x="80"
        y="108"
        fill="url(#goldPaint)"
        fontFamily="'Bebas Neue', Impact, sans-serif"
        fontSize="17"
        fontWeight="bold"
        textAnchor="middle"
      >
        95
      </text>

      {/* Lightning bolt on side */}
      <path
        d="M110 96 L122 96 L118 104 L130 104 L108 122 L114 110 L102 110 Z"
        fill="url(#goldPaint)"
      />
      <path
        d="M112 97 L120 97 L117 103 L126 103 L111 117 L115 108 L106 108 Z"
        fill="rgba(255,255,255,0.2)"
      />

      {/* ---- FRONT WHEEL ---- */}
      <g>
        <circle cx="85" cy="128" r="22" fill="url(#tire)" />
        <circle cx="85" cy="128" r="21" stroke="rgba(60,60,60,0.6)" strokeWidth="1" fill="none" />
        <circle cx="85" cy="128" r="14" fill="url(#rimMetal)" />
        <circle cx="85" cy="128" r="13.5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none" />
        {/* Spokes */}
        <line x1="85" y1="116" x2="85" y2="140" stroke="rgba(80,80,80,0.6)" strokeWidth="2" />
        <line x1="73" y1="128" x2="97" y2="128" stroke="rgba(80,80,80,0.6)" strokeWidth="2" />
        <line x1="76.5" y1="119.5" x2="93.5" y2="136.5" stroke="rgba(80,80,80,0.6)" strokeWidth="1.5" />
        <line x1="93.5" y1="119.5" x2="76.5" y2="136.5" stroke="rgba(80,80,80,0.6)" strokeWidth="1.5" />
        {/* Hub cap */}
        <circle cx="85" cy="128" r="5" fill="#bbb" />
        <circle cx="85" cy="128" r="4" fill="url(#rimMetal)" />
        <circle cx="85" cy="128" r="2" fill="#ddd" />
        {/* Rim highlight */}
        <ellipse cx="82" cy="124" rx="3" ry="2" fill="rgba(255,255,255,0.25)" />
      </g>

      {/* ---- REAR WHEEL ---- */}
      <g>
        <circle cx="258" cy="128" r="22" fill="url(#tire)" />
        <circle cx="258" cy="128" r="21" stroke="rgba(60,60,60,0.6)" strokeWidth="1" fill="none" />
        <circle cx="258" cy="128" r="14" fill="url(#rimMetal)" />
        <circle cx="258" cy="128" r="13.5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none" />
        <line x1="258" y1="116" x2="258" y2="140" stroke="rgba(80,80,80,0.6)" strokeWidth="2" />
        <line x1="246" y1="128" x2="270" y2="128" stroke="rgba(80,80,80,0.6)" strokeWidth="2" />
        <line x1="249.5" y1="119.5" x2="266.5" y2="136.5" stroke="rgba(80,80,80,0.6)" strokeWidth="1.5" />
        <line x1="266.5" y1="119.5" x2="249.5" y2="136.5" stroke="rgba(80,80,80,0.6)" strokeWidth="1.5" />
        <circle cx="258" cy="128" r="5" fill="#bbb" />
        <circle cx="258" cy="128" r="4" fill="url(#rimMetal)" />
        <circle cx="258" cy="128" r="2" fill="#ddd" />
        <ellipse cx="255" cy="124" rx="3" ry="2" fill="rgba(255,255,255,0.25)" />
      </g>

      {/* ---- WHEEL ARCHES ---- */}
      <path
        d="M55 120 Q85 98 115 120"
        stroke="url(#lowerBody)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M228 120 Q258 98 288 120"
        stroke="url(#lowerBody)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* ---- SPOILER ---- */}
      <path
        d="M272 40 L290 32 L300 32 L296 40 Z"
        fill="url(#bodyPaint)"
      />
      <path
        d="M288 32 L300 32 L298 36 L290 36 Z"
        fill="rgba(255,255,255,0.15)"
      />
      {/* Spoiler support */}
      <path d="M280 40 L284 34" stroke="#8b0000" strokeWidth="2" />
      <path d="M292 40 L294 34" stroke="#8b0000" strokeWidth="2" />

      {/* ---- EXHAUST ---- */}
      <ellipse cx="316" cy="115" rx="4" ry="3" fill="#555" />
      <ellipse cx="316" cy="115" rx="3" ry="2" fill="#333" />
    </svg>
  )
}
