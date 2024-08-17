import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Vector3 } from "three";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

interface Props {
  position: Vector3;
  args?: [
    radius?: number | undefined,
    tube?: number | undefined,
    radialSegments?: number | undefined,
    tubularSegments?: number | undefined,
    p?: number | undefined,
    q?: number | undefined
  ];
  color?: string;
}

const TorusKnot = ({ position, args, color }: Props) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={args} />
      <MeshDistortMaterial distort={1} speed={1} color={color} />
      {/* <MeshWobbleMaterial factor={2} speed={2} color={color} /> */}
      {/* <meshStandardMaterial color={color} /> */}
    </mesh>
  );
};

export default TorusKnot;
