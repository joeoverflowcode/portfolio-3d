import { OrbitControls, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { RubiksCube } from "./RubiksCube";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px" });

  return (
    <Canvas camera={{ position: [3, 3, 5], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, 5, -5]} intensity={2.5} />
      <directionalLight position={[0, -5, 5]} intensity={1.5} />

      <hemisphereLight intensity={0.6} groundColor="black" />

      {/* <Bounds fit clip observe adjustCamera margin={2}> */}
        {/* </Bounds> */}
        <RubiksCube />
        <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={.6}
            minDistance={0.3}
        />
    </Canvas>
  );
};

export default HeroExperience;
