import { Canvas } from "@react-three/fiber";
// import { Vector3 } from "three";
// import { OrbitControls } from "@react-three/drei";

import Scene from "./components/Scene";
// import TorusKnot from "./components/TorusKnot";
// import Torus from "./components/Torus";
// import Sphere from "./components/Sphere";
// import Box from "./components/Box";

import "./App.css";

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
