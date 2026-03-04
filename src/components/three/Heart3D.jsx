import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function createHeartShape() {
  const shape = new THREE.Shape()
  const x = 0, y = 0
  shape.moveTo(x, y + 0.5)
  shape.bezierCurveTo(x, y + 0.5, x - 0.5, y + 1.2, x - 1, y + 1.2)
  shape.bezierCurveTo(x - 1.7, y + 1.2, x - 1.7, y + 0.5, x - 1.7, y + 0.5)
  shape.bezierCurveTo(x - 1.7, y, x - 1, y - 0.5, x, y - 1.2)
  shape.bezierCurveTo(x + 1, y - 0.5, x + 1.7, y, x + 1.7, y + 0.5)
  shape.bezierCurveTo(x + 1.7, y + 0.5, x + 1.7, y + 1.2, x + 1, y + 1.2)
  shape.bezierCurveTo(x + 0.5, y + 1.2, x, y + 0.5, x, y + 0.5)
  return shape
}

export default function Heart3D({
  position = [0, 0, 0],
  scale = 1,
  color = '#e8405f',
  rotationSpeed = 0.4,
  floatIntensity = 1,
}) {
  const meshRef = useRef()
  const heartShape = useMemo(createHeartShape, [])

  const extrudeSettings = useMemo(() => ({
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 8,
    bevelSize: 0.15,
    bevelThickness: 0.15,
    curveSegments: 32,
  }), [])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={floatIntensity}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        rotation={[Math.PI, 0, 0]}
      >
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}
