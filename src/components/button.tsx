import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

interface ButtonProps {
  path: string;
  position: [number, number, number];
  rotation: [number, number, number];
  collision: [number, number, number]; // Collision Box Args
  scale: [number, number, number];
}

const Button = (props: ButtonProps) => {
  const gltf = useLoader(GLTFLoader, props.path);
  return (
    <group>
      <mesh {...props}>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
};

export default Button;
