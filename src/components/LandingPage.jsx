import { useState, useEffect, useRef, useCallback } from 'react'
import McQueenCar from './McQueenCar'
import SpiderWeb from './SpiderWeb'
import FloatingHearts from './FloatingHearts'
import Scene3D from './three/Scene3D'
import Heart3D from './three/Heart3D'
import Rose3D from './three/Rose3D'
import SpiderWeb3D from './three/SpiderWeb3D'

export default function LandingPage({ onNext }) {
  const [pos, setPos] = useState({ x: -300, y: 200 })
  const [flip, setFlip] = useState(false)
  const [showText, setShowText] = useState(false)
  const frameRef = useRef()
  const targetRef = useRef({ x: 300, y: 200 })
  const posRef = useRef({ x: -300, y: 200 })

  const pickTarget = useCallback(() => {
    const maxX = window.innerWidth - 300
    const maxY = window.innerHeight - 160
    targetRef.current = {
      x: Math.random() * maxX,
      y: 80 + Math.random() * (maxY - 80),
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    pickTarget()
    let lastTime = 0
    const speed = 2.5

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp
      const delta = Math.min((timestamp - lastTime) / 16, 3)
      lastTime = timestamp

      const curr = posRef.current
      const tgt = targetRef.current
      const dx = tgt.x - curr.x
      const dy = tgt.y - curr.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 10) {
        pickTarget()
      } else {
        const step = speed * delta
        curr.x += (dx / dist) * step
        curr.y += (dy / dist) * step
        setPos({ ...curr })
        setFlip(dx < 0)
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [pickTarget])

  return (
    <div className="page landing-page">
      <FloatingHearts count={10} />
      <SpiderWeb position="top-left" size={150} />
      <SpiderWeb position="top-right" size={130} />

      <Scene3D>
        <Heart3D position={[0, 1.8, 0]} scale={0.35} color="#e8405f" />
        <Heart3D position={[-2.5, -1, -1]} scale={0.15} color="#ff7a93" rotationSpeed={0.6} />
        <Heart3D position={[2.8, 0.5, -1]} scale={0.12} color="#ffc2cf" rotationSpeed={-0.5} />
        <Rose3D position={[-2.5, 1.5, -0.5]} scale={0.5} />
        <Rose3D position={[2.5, -0.5, -0.5]} scale={0.4} />
        <SpiderWeb3D position={[-3, 2.5, 0]} scale={0.7} corner="top-left" />
        <SpiderWeb3D position={[3, 2.5, 0]} scale={0.6} corner="top-right" />
      </Scene3D>

      <McQueenCar
        className="landing-car"
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: 280,
          transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
          transition: 'transform 0.4s ease',
        }}
      />

      <div className={`landing-content ${showText ? 'visible' : ''}`}>
        <p className="landing-kachow">Ka-chow, my love!</p>
        <h1 className="landing-title">Meri Pyari Amanat</h1>
        <p className="landing-sub">Here's a little something just for you...</p>
        <button className="landing-btn" onClick={onNext} type="button">
          Open it
        </button>
      </div>

      <div className="speed-lines" aria-hidden="true" />
    </div>
  )
}
