import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    isHovered
      ? (ref.current.rotation.y += delta * 0.2)
      : (ref.current.rotation.y += delta * 1);
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered(true);
      }}
      onPointerLeave={(event) => {
        event.stopPropagation();
        setIsHovered(false);
      }}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 2 : 1}
    >
      <sphereGeometry args={!isHovered ? args : [2, 60, 60]} />
      <meshStandardMaterial
        color={!isHovered ? color : "hotpink"}
        wireframe={true}
      />
    </mesh>
  );
};

export default Sphere;
