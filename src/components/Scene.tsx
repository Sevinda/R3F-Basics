import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper, Vector3 } from "three";
import TorusKnot from "./TorusKnot";
import { useRef } from "react";
import { useControls } from "leva";

const Scene = () => {
  const directionalLightRef = useRef<any>();

  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.1,
    },
  });
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "red");

  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={lightIntensity}
        ref={directionalLightRef}
        color={lightColor}
      />
      <ambientLight intensity={0.1} />

      <TorusKnot
        position={new Vector3(0, 0, 0)}
        args={[1, 0.4, 1000, 100]}
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
