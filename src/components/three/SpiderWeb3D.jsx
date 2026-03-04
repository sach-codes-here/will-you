import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SpiderWeb3D({
  position = [0, 0, 0],
  scale = 1,
  corner = 'top-left',
}) {
  const groupRef = useRef()

  const rotation = useMemo(() => {
    switch (corner) {
      case 'top-right': return [0, 0, -Math.PI / 2]
      case 'bottom-left': return [0, 0, Math.PI / 2]
      case 'bottom-right': return [0, 0, Math.PI]
      default: return [0, 0, 0]
    }
  }, [corner])

  const { radialPoints, spiralPoints } = useMemo(() => {
    const radials = []
    const spirals = []
    const numRadials = 8
    const numRings = 6
    const maxRadius = 2

    for (let i = 0; i < numRadials; i++) {
      const angle = (i / numRadials) * (Math.PI / 2)
      radials.push([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(
          Math.cos(angle) * maxRadius,
          Math.sin(angle) * maxRadius,
          0
        ),
      ])
    }

    for (let ring = 1; ring <= numRings; ring++) {
      const r = (ring / numRings) * maxRadius
      const pts = []
      const segments = 32
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * (Math.PI / 2)
        pts.push(new THREE.Vector3(
          Math.cos(angle) * r,
          Math.sin(angle) * r,
          Math.sin(j * 0.5) * 0.03
        ))
      }
      spirals.push(pts)
    }

    return { radialPoints: radials, spiralPoints: spirals }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {radialPoints.map((pts, i) => (
        <line key={`r-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#ffc2cf"
            transparent
            opacity={0.25 - i * 0.02}
            linewidth={1}
          />
        </line>
      ))}

      {spiralPoints.map((pts, i) => (
        <line key={`s-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pts.length}
              array={new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#ffc2cf"
            transparent
            opacity={0.2 - i * 0.025}
            linewidth={1}
          />
        </line>
      ))}

      {/* Small spider in center */}
      <mesh position={[0.3, 0.3, 0.02]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#2d1a24" emissive="#e8405f" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.25, 0.25, 0.02]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#2d1a24" />
      </mesh>
    </group>
  )
}
