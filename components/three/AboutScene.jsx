"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";

export default function AboutScene() {
    const meshRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.2;
            meshRef.current.rotation.z = Math.sin(time * 0.3) * 0.2;
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
            <ambientLight intensity={0.8} />
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1.5} />

            <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color="#1A1A1A"
                        wireframe
                        linewidth={1}
                    />
                </mesh>
            </Float>
        </>
    );
}
