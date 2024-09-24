import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, type Vector3 } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { CanvasLoader } from "../components/CanvasLoader";
import { HackerRoom } from "../components/HackerRoom";
import { Target } from "../components/Target";
import { calculateSizes } from "../lib/utils";

export const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-center text-white font-generalsans">
          Hi, I am Shubham <span className="waving-hand">👋</span>
        </p>

        <p className="hero_tag text-gray_gradient">
          Building Products &amp; Brands
        </p>
      </div>

      <div className="size-full absolute inset-0">
        <Canvas className="size-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom
              position={sizes.deskPosition as Vector3}
              rotation={[0.1, -Math.PI, 0]}
              scale={sizes.deskScale}
            />

            <group>
              <Target position={sizes.targetPosition as Vector3} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
