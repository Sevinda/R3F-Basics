import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

interface Props {
  position: Vector3;
  args?: [
    radius: number | undefined,
    widthSegments: number | undefined,
    heightSegments: number | undefined
  ];
  color?: string;
}

const Sphere = ({ position, args, color }: Props) => {
  const ref = useRef<any>();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color={color} wireframe={true} />
    </mesh>
  );
};

export default Sphere;
