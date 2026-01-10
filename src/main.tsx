import "./styles/index.css";
import Character from "./components/character.tsx";
import Plane from "./components/plane.tsx";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <Canvas>
    <Physics>
      <Plane
        color="#ff0000"
        position={[0, 0, 0]}
        rotation={[Math.PI / -2, 0, 0]}
        args={[50, 50, 1]}
        scale={[50, 50]}
      />
      <ambientLight intensity={1} />
      <Character />
    </Physics>
  </Canvas>,
);
