import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { createCharacter } from "../stores/character";

interface PlaneProps {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  args: [number, number, number]; // Collision Box Args
  scale: [number, number];
}

const Plane = (props: PlaneProps) => {
  const [ref, api] = useBox(() => ({ type: "Static", mass: 0, ...props }));
  const pos = createCharacter((state) => state.position);

  return (
    <mesh
      receiveShadow
      position={props.position}
      rotation={props.rotation}
      ref={ref}
    >
      <planeGeometry attach="geometry" args={props.scale} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  );
};

export default Plane;
