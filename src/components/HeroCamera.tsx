import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, type PropsWithChildren } from "react";
import * as THREE from "three";

interface HeroCameraProps {
  isMobile: boolean;
}

export const HeroCamera = ({
  children,
  isMobile,
}: PropsWithChildren<HeroCameraProps>) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};
