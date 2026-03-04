import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

export default function Ring3D({
  position = [0, 0, 0],
  scale = 1,
}) {
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Gold band */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.15, 32, 64]} />
          <meshStandardMaterial
            color="#e8b84e"
            metalness={0.9}
            roughness={0.1}
            emissive="#e8b84e"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Diamond */}
        <mesh position={[0, 0.55, 0]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.4, 2]} />
          <meshStandardMaterial
            color="#e0f0ff"
            metalness={0.1}
            roughness={0.05}
            emissive="#b0c4de"
            emissiveIntensity={0.3}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Diamond sparkle glow */}
        <pointLight
          position={[0, 0.6, 0]}
          intensity={0.5}
          color="#b0c4de"
          distance={3}
        />

        {/* Side accent stones */}
        {[-0.7, 0.7].map((x) => (
          <mesh key={x} position={[x, 0.25, 0]}>
            <octahedronGeometry args={[0.12, 1]} />
            <meshStandardMaterial
              color="#ffc2cf"
              metalness={0.2}
              roughness={0.1}
              emissive="#ff7a93"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}
