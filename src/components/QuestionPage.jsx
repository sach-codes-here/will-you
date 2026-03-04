import { useState, useCallback, useRef } from 'react'
import SpiderWeb from './SpiderWeb'
import McQueenCar from './McQueenCar'
import FloatingHearts from './FloatingHearts'
import Scene3D from './three/Scene3D'
import Heart3D from './three/Heart3D'
import SpiderWeb3D from './three/SpiderWeb3D'

export default function QuestionPage({ onYes }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [noDodged, setNoDodged] = useState(false)
  const [dodgeCount, setDodgeCount] = useState(0)
  const containerRef = useRef(null)

  const dodgeMessages = [
    "That's not the answer, love!",
    "Nice try, but nope!",
    "My spider-sense won't let you!",
    "Not today, sweetheart!",
    "Ka-chow! You can't catch me!",
    "You know you want to say yes...",
    "Come on, just click yes!",
    "I'll keep running forever!",
  ]

  const dodgeNo = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const maxX = rect.width - 140
    const maxY = rect.height - 60

    const newX = Math.random() * maxX - maxX / 2
    const newY = Math.random() * maxY - maxY / 2

    setNoPos({ x: newX, y: newY })
    setNoDodged(true)
    setDodgeCount((c) => c + 1)
  }, [])

  return (
    <div className="page question-page" ref={containerRef}>
      <FloatingHearts count={8} />
      <SpiderWeb position="top-right" size={160} />
      <SpiderWeb position="bottom-left" size={120} />

      <Scene3D>
        <Heart3D position={[-2.8, 0, -1]} scale={0.2} color="#ff7a93" />
        <Heart3D position={[2.8, 1.5, -1]} scale={0.18} color="#e8405f" rotationSpeed={-0.4} />
        <SpiderWeb3D position={[3, 2.5, 0]} scale={0.6} corner="top-right" />
        <SpiderWeb3D position={[-3, -2, 0]} scale={0.5} corner="bottom-left" />
      </Scene3D>

      <div className="question-car-bg">
        <McQueenCar style={{ width: 180, opacity: 0.08 }} />
      </div>

      <div className="question-content">
        <h1 className="question-title">Will you go on a photo walk with me?</h1>
        <p className="question-date">
          March 6th — the day we first met, 2023
        </p>
        <p className="question-sub">
          I want to relive that beautiful day with you and then treat you to a brownie with ice cream, just the two of us.
        </p>

        <div className="question-buttons">
          <button className="btn-yes" onClick={onYes} type="button">
            Yes!
          </button>

          <button
            className="btn-no"
            type="button"
            onMouseEnter={dodgeNo}
            onTouchStart={dodgeNo}
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            No
          </button>
        </div>

        {noDodged && (
          <p className="dodge-msg">
            {dodgeMessages[dodgeCount % dodgeMessages.length]}
          </p>
        )}
      </div>

      <div className="floating-spider" aria-hidden="true">
        🕷️
      </div>
    </div>
  )
}
