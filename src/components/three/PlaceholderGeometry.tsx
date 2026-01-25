import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

type PlaceholderGeometryProps = {
  color?: string;
};

export function PlaceholderGeometry({
  color = "#60a5fa",
}: PlaceholderGeometryProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.25;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.1, 0.35, 140, 16]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
    </mesh>
  );
}

export default PlaceholderGeometry;
