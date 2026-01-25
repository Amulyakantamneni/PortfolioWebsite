type ClickZone3DProps = {
  position?: [number, number, number];
  scale?: [number, number, number];
  onSelect?: () => void;
};

export function ClickZone3D({
  position = [0, 0, 0],
  scale = [2.6, 2.6, 2.6],
  onSelect,
}: ClickZone3DProps) {
  return (
    <mesh
      position={position}
      scale={scale}
      onClick={onSelect}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

export default ClickZone3D;
