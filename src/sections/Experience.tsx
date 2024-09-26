import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { CanvasLoader } from "../components/CanvasLoader";
import { workExperiences } from "../constants";
import { Developer } from "../components/Developer";

export const Experience = () => {
  const [animationName, setAnimationName] = useState<
    "idle" | "salute" | "clapping" | "victory"
  >("idle");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">My work experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map(
                ({ animation, duration, icon, id, name, pos, title }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation)}
                    onPointerOver={() => setAnimationName(animation)}
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex h-full flex-col items-center justify-start py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt={name} className="size-full" />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="px-2.5 py-5 sm:p-5">
                      <p className="font-bold text-white-800">{name}</p>

                      <p className="mb-5 text-sm">
                        {pos} &bull; {duration}
                      </p>

                      <div className="transition duration-500 ease-in-out group-hover:text-white">
                        {title}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
