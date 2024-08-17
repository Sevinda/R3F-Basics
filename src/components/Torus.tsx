import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

interface Props {
  position: Vector3;
  args?: [
    radius?: number | undefined,
    tube?: number | undefined,
    radialSegments?: number | undefined,
    tubularSegments?: number | undefined,
    arc?: number | undefined
  ];
  color?: string;
}

const Torus = ({ position, args, color }: Props) => {
  const ref = useRef<any>();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
