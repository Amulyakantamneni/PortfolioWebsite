import { ReactNode } from "react";
import { Html } from "@react-three/drei";

type Overlay3DProps = {
  position?: [number, number, number];
  children: ReactNode;
};

export function Overlay3D({ position = [0, 0, 0], children }: Overlay3DProps) {
  return (
    <Html position={position} center>
      {children}
    </Html>
  );
}

export default Overlay3D;
