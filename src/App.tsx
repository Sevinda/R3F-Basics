import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

import Box from "./components/Box";

import "./App.css";

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />

      <Box position={new Vector3(1, 1, 0)} size={[1, 1, 1]} color="blue" />
      <Box position={new Vector3(1, -1, 0)} size={[1, 1, 1]} color="red" />
      <Box position={new Vector3(-1, 1, 0)} size={[1, 1, 1]} color="green" />
      <Box position={new Vector3(-1, -1, 0)} size={[1, 1, 1]} color="orange" />
    </Canvas>
  );
};

export default App;
