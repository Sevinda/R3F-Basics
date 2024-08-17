import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { Vector3 } from "three";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

interface Props {
  position: Vector3;
  args: [
    radius: number,
    tube: number,
    radialSegments: number,
    tubularSegments: number,
    p?: number,
    q?: number
  ];
  color?: string;
}

const TorusKnot = ({ position, args }: Props) => {
  const { color, radius } = useControls({
    color: "white",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5,
    },
  });

  // const geometryArgs = { ...args, radius };
  const geometryArgs: [number, number, number, number, number?, number?] = [
    radius,
    args[1],
    args[2],
    args[3],
    args[4],
    args[5],
  ];

  return (
    <mesh position={position}>
      <torusKnotGeometry args={geometryArgs} />
      <MeshWobbleMaterial factor={2} speed={2} color={color} />
      {/* <MeshDistortMaterial distort={1} speed={1} color={color} /> */}
      {/* <meshStandardMaterial color={color} /> */}
    </mesh>
  );
};

export default TorusKnot;
