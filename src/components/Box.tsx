import { Vector3 } from "three";

interface Props {
  position: Vector3;
  size: [
    width: number | undefined,
    height: number | undefined,
    depth: number | undefined
  ];
  color: string;
}

const Box = ({ position, size, color }: Props) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Box;
