import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Petal({ angle, tilt, radius, scaleY, color }) {
  return (
    <mesh
      position={[
        Math.cos(angle) * radius,
        scaleY * 0.3,
        Math.sin(angle) * radius,
      ]}
      rotation={[tilt, angle, 0]}
    >
      <sphereGeometry args={[0.35, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.15}
        roughness={0.5}
        side={THREE.DoubleSide}
        emissive={color}
        emissiveIntensity={0.08}
      />
    </mesh>
  )
}

export default function Rose3D({
  position = [0, 0, 0],
  scale = 1,
  color = '#e8405f',
}) {
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
  })

  const petals = useMemo(() => {
    const layers = []
    const colors = ['#c1121f', '#e8405f', '#ff7a93', '#ffc2cf']

    for (let ring = 0; ring < 4; ring++) {
      const count = 5 + ring * 2
      const radius = 0.1 + ring * 0.2
      const tilt = 0.3 + ring * 0.35
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + ring * 0.3
        layers.push({
          key: `${ring}-${i}`,
          angle,
          tilt,
          radius,
          scaleY: 1 - ring * 0.2,
          color: colors[ring],
        })
      }
    }
    return layers
  }, [])

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Center bud */}
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#8b0000"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>

        {/* Petal layers */}
        {petals.map((p) => (
          <Petal key={p.key} {...p} />
        ))}

        {/* Stem */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 1.2, 8]} />
          <meshStandardMaterial
            color="#2d6a2d"
            metalness={0.1}
            roughness={0.7}
          />
        </mesh>

        {/* Leaf */}
        <mesh position={[0.2, -0.7, 0]} rotation={[0, 0, -0.5]}>
          <sphereGeometry args={[0.2, 8, 8, 0, Math.PI, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#3a8a3a"
            metalness={0.1}
            roughness={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  )
}
