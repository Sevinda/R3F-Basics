import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

interface Props {
  position: Vector3;
  size?: [
    width: number | undefined,
    height: number | undefined,
    depth: number | undefined
  ];
  color: string;
}

const Box = ({ position, size, color }: Props) => {
  const ref = useRef<any>();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Box;
