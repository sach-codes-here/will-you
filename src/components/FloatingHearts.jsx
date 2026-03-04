import { useMemo } from 'react'

export default function FloatingHearts({ count = 12 }) {
  const hearts = useMemo(() => {
    const symbols = ['❤️', '💕', '💗', '🤍', '♥']
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 0.6 + Math.random() * 0.8,
      drift: -30 + Math.random() * 60,
    }))
  }, [count])

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}rem`,
            '--drift': `${h.drift}px`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  )
}
