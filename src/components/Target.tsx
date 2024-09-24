import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import type { MeshProps } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
import * as THREE from "three";

export const Target = (props: MeshProps) => {
  const targetRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF("/models/target.gltf");

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};
