import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";

import TorusKnot from "./components/TorusKnot";
// import Torus from "./components/Torus";
// import Sphere from "./components/Sphere";
// import Box from "./components/Box";

import "./App.css";

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <TorusKnot position={new Vector3(0, 0, 0)} args={[1, 0.1, 1000, 50]} color="white" />
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
    </Canvas>
  );
};

export default App;
