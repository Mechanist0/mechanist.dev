import * as THREE from "three";
import * as CANNON from "@react-three/cannon";
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { createCharacter } from "../stores/character";
import { useControls } from "./hooks/useControls";

const Character = (props: CANNON.BoxProps) => {
  const direction = useMemo(() => new THREE.Vector3(), []);
  const frontVect = useMemo(() => new THREE.Vector3(), []);
  const sideVect = useMemo(() => new THREE.Vector3(), []);
  const worldVect = useMemo(() => new THREE.Vector3(), []);
  const SPEED = 10;
  const ACCEL = 1;
  const { camera } = useThree();

  const [ref, api] = CANNON.useBox(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 3, 0],
    ...props,
  }));

  const setPosition = createCharacter((state) => state.setPosition);
  const { forward, backward, left, right } = useControls();
  const vel = useRef<any>([0, 0, 0]);
  useEffect(
    () => api.velocity.subscribe((v) => (vel.current = v)),
    [api.velocity],
  );
  useEffect(
    () =>
      api.position.subscribe((p) =>
        setPosition({
          x: p[0],
          y: p[1],
          z: p[2],
        }),
      ),
    [api.position, setPosition],
  );

  const charPosition = useRef([0, 0, 0]);
  useEffect(
    () => api.position.subscribe((p) => (charPosition.current = p)),
    [api.position],
  );

  const targetVelocity = useMemo(() => new THREE.Vector3(), []);
  const currentVelocity = useMemo(() => new THREE.Vector3(), []);

  const raycast = useMemo(() => new THREE.Raycaster(), []);

  useFrame(() => {
    frontVect.set(0, 0, Number(backward) - Number(forward));
    sideVect.set(Number(left) - Number(right), 0, 0);
    direction.subVectors(frontVect, sideVect).normalize().multiplyScalar(SPEED);

    targetVelocity.set(direction.x, vel.current[1], direction.z);
    currentVelocity.lerp(targetVelocity, ACCEL);

    api.velocity.set(currentVelocity.x, currentVelocity.y, currentVelocity.z);

    camera.position.set(
      charPosition.current[0] + 0,
      charPosition.current[1] + 1,
      charPosition.current[2] + 5,
    );
    camera.lookAt(
      charPosition.current[0],
      charPosition.current[1],
      charPosition.current[2],
    );
  });
  return (
    <group>
      <mesh
        castShadow={true}
        position={props.position}
        rotation={[0, 0, 0]}
        ref={ref}
      >
        <boxGeometry args={props.args} />
        <meshStandardMaterial color="#FF00FF" />
      </mesh>
    </group>
  );
};

export default Character;
