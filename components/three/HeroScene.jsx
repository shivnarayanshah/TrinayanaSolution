"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Grid, PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
    const groupRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.05;
            groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#FAF7F2" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#D4C3A3" />

            <group ref={groupRef}>
                {/* Abstract Architectural Cubes */}
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    {[...Array(12)].map((_, i) => (
                        <mesh
                            key={i}
                            position={[
                                Math.cos(i) * 3,
                                Math.sin(i) * 3,
                                (Math.random() - 0.5) * 2
                            ]}
                            rotation={[Math.random(), Math.random(), Math.random()]}
                        >
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#1A1A1A" : "#D4C3A3"}
                                wireframe={i % 3 === 0}
                                transparent
                                opacity={0.8}
                            />
                        </mesh>
                    ))}
                </Float>

                {/* Central Core Structure */}
                <mesh>
                    <octahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial
                        color="#1A1A1A"
                        wireframe
                        transparent
                        opacity={0.2}
                    />
                </mesh>
            </group>

            {/* Digital Grid Floor */}
            <Grid
                infiniteGrid
                fadeDistance={25}
                fadeStrength={10}
                cellSize={1}
                sectionSize={5}
                sectionColor="#D4C3A3"
                cellColor="#E5D9C3"
                sectionThickness={1.5}
                cellThickness={0.75}
                position={[0, -4, 0]}
                rotation={[0, 0, 0]}
            />
        </>
    );
}
