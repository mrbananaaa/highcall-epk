"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Text3D, MeshRefractionMaterial } from "@react-three/drei";
import { Mesh } from "three";

const AnimatedText = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    const pulse = 1 + Math.sin(elapsed * 5) * 0.03;

    if (meshRef.current) {
      meshRef.current.scale.set(pulse, pulse, pulse);

      meshRef.current.rotation.y = Math.sin(elapsed * 1.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(elapsed * 1) * 0.05;
    }
  });

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font=""
        size={1.5}
        height={0.4}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.03}
        bevelOffset={0}
        bevelSegments={5}
      >
        HIGHCALL
      </Text3D>
    </Center>
  );
};

export default function HeroLogo() {
  return (
    <div className="h-[400px] w-full cursor-pointer">
      <Canvas>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, 5, 2]} intensity={2} color="#ff3333" />

        <AnimatedText />
      </Canvas>
    </div>
  );
}
