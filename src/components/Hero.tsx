import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "./HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constant";
import { Vector3 } from "three";
import Target from "./Target";
import ReactLogo from "./ReactLogo";
import Cube from "./Cube";
import HeroCamera from "./HeroCamera";

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 p-5">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm Amitabh <span className="waving-hand">👋</span></p>
            <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">Building Products & Brands</p>
        </div>
        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom position={sizes.deskPosition as unknown as Vector3} rotation={[0, -Math.PI, 0]} scale={sizes.deskScale} />
                    </HeroCamera>
                    <group>
                        <Target position={sizes.targetPosition as unknown as Vector3} />
                        <ReactLogo position={sizes.reactLogoPosition as unknown as Vector3} />
                        <Cube position={sizes.cubePosition as unknown as Vector3} />
                        {/* <Rings position={sizes.ringPosition as unknown as Vector3} /> */}
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={isMobile ? 0.07 : 0.1} />
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero;