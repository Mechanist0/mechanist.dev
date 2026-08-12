import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

interface ModelProps {
  path: string;
  position: [number, number, number];
  rotation: [number, number, number];
  collision: [number, number, number]; // Collision Box Args
  scale: [number, number, number];
}

const Model = (props: ModelProps) => {
  const gltf = useLoader(GLTFLoader, props.path);
  return (
    <group>
      <mesh {...props}>
        <primitive object={gltf.scene.clone()} />
      </mesh>
    </group>
  );
};

export default Model;
