import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

type Scene3DProps = {
  children: ReactNode;
  className?: string;
};

export function Scene3D({ children, className }: Scene3DProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#0b1220"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} />
      <group>{children}</group>
    </Canvas>
  );
}

export default Scene3D;
