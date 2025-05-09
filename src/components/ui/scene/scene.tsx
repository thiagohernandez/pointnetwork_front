"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Environment } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/p-3d-3.glb"); // Load 3D model
  const [texture] = useTexture(["/3.jpeg"]);

  const modelRef = useRef<THREE.Object3D | null>(null); // Reference for rotation animation

  // Rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  // Apply materials
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      // glowTexture.wrapS = glowTexture.wrapT = THREE.RepeatWrapping;
      // glowTexture.repeat.set(0.05, 0.05);

      (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
        // map: texture, // Apply the texture
        map: (() => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(0.15, 0.15); // Adjust these values to scale the texture
          return texture;
        })(), // Apply the scaled texture

        // Glow effect properties
        // emissive: new THREE.Color(0x00aaff), // Blue glow
        // emissiveMap: glowTexture,
        // emissiveIntensity: 0.1, // Strength of the glow

        metalness: 0.75, // Full metallic look
        roughness: 0.25, // Very glossy surface
        clearcoat: 1, // High-tech clear layer
        clearcoatRoughness: 0.1, // Glossy clearcoat
        reflectivity: 2, // Strong reflections
        envMapIntensity: 1, // Boost reflections from the environment

        transparent: true, // Enable transparency
        opacity: 0.8, // Adjust transparency level (0 = fully transparent, 1 = opaque)
        transmission: 1, // Light passes through (but not like glass)
        ior: 3, // Index of refraction, subtle refraction effect
      });
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[3.5, 3.5, 3.5]} />; // Change scale here
}

export default function Scene() {
  return (
    // <Canvas camera={{ position: [0, 1, 5] }} shadows>
    //   {/* Lights */}
    //   <ambientLight intensity={0.5} />
    //   <directionalLight position={[-100, -100, 0]} intensity={20} />
    //   <directionalLight position={[5, 5, 5]} intensity={2} />
    //   <directionalLight
    //     position={[-25, -5, 5]}
    //     intensity={8}
    //     color={0x00aaff}
    //     scale={32}
    //   />
    //   <directionalLight
    //     position={[5, -5, -15]}
    //     intensity={20}
    //     color={0xff0000}
    //   />

    //   {/* Environment Map for Realistic Reflections */}
    //   <Environment preset="city" background={false} />

    //   {/* 3D Model */}
    //   <Model />
    // </Canvas>

    <Canvas
      camera={{ position: [0, 1, 5] }}
      shadows
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.25,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-100, -100, 0]} intensity={20} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight
        position={[-25, -5, 5]}
        intensity={8}
        color={0x00aaff}
        scale={32}
      />
      <directionalLight
        position={[5, -5, -15]}
        intensity={20}
        color={0xff0000}
      />

      {/* Environment Map for Realistic Reflections */}
      <Environment preset="city" background={false} />

      {/* 3D Model */}
      <Model />

      <EffectComposer>
        <Noise
          opacity={0.5}
          premultiply={true}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </Canvas>
  );
}
