import "./styles/index.css";
import Character from "./components/character.tsx";
import Plane from "./components/plane.tsx";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { createRoot } from "react-dom/client";
import Model from "./components/model.tsx";

createRoot(document.getElementById("root")!).render(
  <Canvas>
    <Physics>
      {/*Floor Plane*/}
      <Plane
        color="#ff0000"
        position={[0, 0, 0]}
        rotation={[Math.PI / -2, 0, 0]}
        args={[50, 50, 1]}
        scale={[50, 50]}
      />
      {/*Floor Plane*/}
      <Plane
        color="#ff0000"
        position={[0, 10, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[50, 50, 1]}
        scale={[50, 50]}
      />
      {/*Left Wall*/}
      <Plane
        color="#ffFF00"
        position={[-25, 5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        args={[50, 10, 1]}
        scale={[50, 10]}
      />
      {/*Right Wall*/}
      <Plane
        color="#ff00ff"
        position={[25, 5, 0]}
        rotation={[0, Math.PI / -2, 0]}
        args={[50, 10, 1]}
        scale={[50, 10]}
      />
      {/*Back Wall*/}
      <Plane
        color="#ff00ff"
        position={[0, 5, 23]}
        rotation={[Math.PI, 0, 0]}
        args={[50, 10, 1]}
        scale={[50, 10]}
      />
      {/*Front Wall*/}
      <Plane
        color="#ff00ff"
        position={[0, 5, -23]}
        rotation={[0, 0, 0]}
        args={[50, 10, 1]}
        scale={[50, 10]}
      />

      <Model
        path="./src/assets/Pedestal.glb"
        position={[-10, 2, 0]}
        rotation={[0, 0, 0]}
        collision={[2, 4, 2]}
        scale={[1, 1, 1]}
      />
      <Model
        path="./src/assets/Pedestal.glb"
        position={[-5, 2, -2.5]}
        rotation={[0, 0, 0]}
        collision={[2, 4, 2]}
        scale={[1, 1, 1]}
      />
      <Model
        path="./src/assets/Pedestal.glb"
        position={[0, 2, -5]}
        rotation={[0, 0, 0]}
        collision={[2, 4, 2]}
        scale={[1, 1, 1]}
      />
      <Model
        path="./src/assets/Pedestal.glb"
        position={[5, 2, -2.5]}
        rotation={[0, 0, 0]}
        collision={[2, 4, 2]}
        scale={[1, 1, 1]}
      />
      <Model
        path="./src/assets/Pedestal.glb"
        position={[10, 2, 0]}
        rotation={[0, 0, 0]}
        collision={[2, 4, 2]}
        scale={[1, 1, 1]}
      />
      <ambientLight intensity={1} />
      <Character />
    </Physics>
  </Canvas>,
);
