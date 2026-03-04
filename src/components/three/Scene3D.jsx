import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export default function Scene3D({ children, style, className = '', overlay = true }) {
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    setSupported(hasWebGL())
  }, [])

  if (!supported) return null

  return (
    <div
      className={`scene3d-wrap ${className}`}
      style={{
        position: overlay ? 'absolute' : 'relative',
        inset: overlay ? 0 : undefined,
        zIndex: overlay ? 2 : undefined,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'default' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} color="#ffc2cf" />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffe0e8" />
        <pointLight position={[-3, -2, 4]} intensity={0.4} color="#e8b84e" />
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
