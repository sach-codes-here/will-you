import { useEffect, useCallback } from 'react'
import confetti from 'canvas-confetti'
import McQueenCar from './McQueenCar'
import SpiderWeb from './SpiderWeb'
import FloatingHearts from './FloatingHearts'
import Scene3D from './three/Scene3D'
import Heart3D from './three/Heart3D'
import SpiderWeb3D from './three/SpiderWeb3D'
import Rose3D from './three/Rose3D'

export default function YesPage({ onGallery }) {
  const fireConfetti = useCallback(() => {
    const colors = ['#e8405f', '#ff7a93', '#ffc2cf', '#e8b84e', '#f5d98a', '#faf5f7']
    confetti({ particleCount: 80, spread: 70, origin: { x: 0.2, y: 0.5 }, colors })
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 70, origin: { x: 0.8, y: 0.5 }, colors })
    }, 300)
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 100, origin: { x: 0.5, y: 0.3 }, colors })
    }, 600)
  }, [])

  useEffect(() => {
    fireConfetti()
  }, [fireConfetti])

  return (
    <div className="page yes-page">
      <FloatingHearts count={15} />
      <SpiderWeb position="top-left" size={140} />
      <SpiderWeb position="bottom-right" size={110} />

      <Scene3D>
        <Heart3D position={[0, 2.5, 0]} scale={0.3} color="#ff7a93" rotationSpeed={0.8} />
        <Heart3D position={[-3, 1, -1]} scale={0.2} color="#e8405f" rotationSpeed={-0.6} />
        <Heart3D position={[3, -0.5, -1]} scale={0.18} color="#ffc2cf" rotationSpeed={0.5} />
        <Heart3D position={[-1.5, -2, -0.5]} scale={0.12} color="#ff7a93" rotationSpeed={-0.3} />
        <Heart3D position={[2, 2, -0.5]} scale={0.15} color="#e8405f" rotationSpeed={0.7} />
        <Rose3D position={[-2.8, -1.5, -0.5]} scale={0.35} />
        <Rose3D position={[2.8, 1.8, -0.5]} scale={0.3} />
        <SpiderWeb3D position={[-3, 2.5, 0]} scale={0.6} corner="top-left" />
        <SpiderWeb3D position={[3, -2.5, 0]} scale={0.5} corner="bottom-right" />
      </Scene3D>

      <div className="yes-content">
        <h1 className="yes-title">Yayyy!</h1>
        <p className="yes-emoji">❤️🕸️❤️</p>
        <p className="yes-sub">I knew you'd say yes, my love!</p>

        <div className="yes-plan">
          <h2 className="yes-plan-heading">Here's what I have in mind</h2>

          <div className="plan-cards">
            <div className="plan-card plan-card--red">
              <div className="plan-card-icon">📸</div>
              <h3>Our photo walk</h3>
              <p>We'll walk the same path we did on March 6, 2023 — the day everything changed. This time, we'll capture every moment together.</p>
            </div>
            <div className="plan-card plan-card--blue">
              <div className="plan-card-icon">🍫🍨</div>
              <h3>Brownie with ice cream</h3>
              <p>After our walk, a warm brownie with ice cream — the perfect sweet treat for the sweetest person I know.</p>
            </div>
          </div>
        </div>

        <div className="yes-car-row">
          <McQueenCar style={{ width: 200 }} className="yes-car" />
          <span className="yes-kachow">Ka-chow!</span>
        </div>

        <button className="gallery-btn" onClick={onGallery} type="button">
          See our memories
        </button>

        <button className="confetti-again" onClick={fireConfetti} type="button">
          More love!
        </button>
      </div>
    </div>
  )
}
