import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper, Vector3 } from "three";
import TorusKnot from "./TorusKnot";
import { useRef } from "react";

const Scene = () => {
  const directionalLightRef = useRef<any>();
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "red");

  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={0.5}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.1} />

      <TorusKnot
        position={new Vector3(0, 0, 0)}
        args={[1, 0.1, 1000, 50]}
        color="white"
      />
      <OrbitControls enableZoom={false} />

      {/* <Sphere
        position={new Vector3(0, 0, 0)}
        args={[1, 30, 30]}
        color="orange"
      /> */}

      {/* <Torus position={new Vector3(2, 0, 0)} args={[0.8, 0.1, 30, 30]} color="blue" />
      <TorusKnot position={new Vector3(-2, 0, 0)} args={[0.5, 0.1, 1000, 50]} color="red" /> */}

      {/* <Box position={new Vector3(0, 0, 0)} args={[1, 1, 1]} color="orange" /> */}

      {/* <group position={[-1, 0, 0]}>
        <Box position={new Vector3(1, 1, 0)} args={[1, 1, 1]} color="blue" />
        <Box position={new Vector3(1, -1, 0)} args={[1, 1, 1]} color="red" />
        <Box position={new Vector3(-1, 1, 0)} args={[1, 1, 1]} color="green" />
        <Box position={new Vector3(-1, -1, 0)} args={[1, 1, 1]} color="orange" />
      </group> */}
    </>
  );
};

export default Scene;
