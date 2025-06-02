"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  EffectComposer,
  Noise,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import * as THREE from "three";

// Noise function for organic movement
const noiseShader = `
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
  }
  
  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

// More dynamic version with color cycling
function GradientBackground() {
  const meshRef = useRef<THREE.Mesh>(null);

  const gradientMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uActiveColors: { value: [1, 1, 1, 1] }, // All colors active
        uBaseColor: { value: new THREE.Color(0x000008) }, // Much darker - was 0x0a0015
        uWaveColor1: { value: new THREE.Color(0x050010) }, // Much darker - was 0x1a0533
        uWaveColor2: { value: new THREE.Color(0x0a0520) }, // Much darker - was 0x2d1b4e
        uWaveColor3: { value: new THREE.Color(0x150025) }, // Much darker - was 0x4a0e4e
        uNoiseFreq: { value: new THREE.Vector2(0.00014, 0.00029) },
        uNoiseSpeed: { value: 0.000005 },
        uAmplitude: { value: 320 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec2 vUvNorm;
        
        void main() {
          vUv = uv;
          vUvNorm = uv * 2.0 - 1.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        ${noiseShader}
        
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec4 uActiveColors;
        uniform vec3 uBaseColor;
        uniform vec3 uWaveColor1;
        uniform vec3 uWaveColor2;
        uniform vec3 uWaveColor3;
        uniform vec2 uNoiseFreq;
        uniform float uNoiseSpeed;
        uniform float uAmplitude;
        
        varying vec2 vUv;
        varying vec2 vUvNorm;
        
        vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
          return (blend * opacity + base * (1.0 - opacity));
        }
        
        void main() {
          vec2 uv = vUv;
          
          float time = uTime * uNoiseSpeed;
          vec2 noiseCoord = uResolution * vUvNorm * uNoiseFreq;
          
          // Base color
          vec3 color = uBaseColor;
          
          // Wave layer 1
          if (uActiveColors.y == 1.0) {
            float noise1 = snoise(vec3(
              noiseCoord.x * 2.5 + time * 6.5,
              noiseCoord.y * 3.5,
              time * 11.0 + 10.0
            ));
            float wave1 = smoothstep(0.1, 0.63, noise1 / 2.0 + 0.5);
            color = blendNormal(color, uWaveColor1, pow(wave1, 4.0));
          }
          
          // Wave layer 2
          if (uActiveColors.z == 1.0) {
            float noise2 = snoise(vec3(
              noiseCoord.x * 3.0 + time * 6.8,
              noiseCoord.y * 4.0,
              time * 11.3 + 20.0
            ));
            float wave2 = smoothstep(0.1, 0.7, noise2 / 2.0 + 0.5);
            color = blendNormal(color, uWaveColor2, pow(wave2, 4.0));
          }
          
          // Wave layer 3
          if (uActiveColors.w == 1.0) {
            float noise3 = snoise(vec3(
              noiseCoord.x * 3.5 + time * 7.1,
              noiseCoord.y * 4.5,
              time * 11.6 + 30.0
            ));
            float wave3 = smoothstep(0.1, 0.77, noise3 / 2.0 + 0.5);
            color = blendNormal(color, uWaveColor3, pow(wave3, 4.0));
          }
          
          // Fade noise to zero at edges (like Stripe)
          float edgeFade = 1.0 - pow(abs(vUvNorm.y), 2.0);
          color *= edgeFade * 0.3 + 0.7;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * 1000;
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = time;

      // Slowly cycle through darker purple hues
      const hue1 = 280 + Math.sin(time * 0.0002) * 20;
      const hue2 = 260 + Math.cos(time * 0.0003) * 25;
      const hue3 = 300 + Math.sin(time * 0.00025) * 30;

      // Keep colors very dark
      material.uniforms.uWaveColor1.value.setHSL(hue1 / 360, 0.8, 0.03);
      material.uniforms.uWaveColor2.value.setHSL(hue2 / 360, 0.9, 0.05);
      material.uniforms.uWaveColor3.value.setHSL(hue3 / 360, 0.85, 0.07);
    }
  });

  return (
    <mesh ref={meshRef} scale={50}>
      <sphereGeometry args={[1, 32, 32]} />
      <primitive object={gradientMaterial} attach="material" />
    </mesh>
  );
}

// Enhanced metallic abstract shape component
// Enhanced metallic abstract shape component with transparency option
function MetallicAbstractShape({
  position = [0, 0, 0] as [number, number, number],
  scale = 1,
  transparency = 0,
}: {
  position?: [number, number, number];
  scale?: number;
  transparency?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create custom geometry with smooth curves
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 64, 64); // Higher resolution
    const vertices = geo.attributes.position.array;

    // Distort sphere to create organic shapes
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      const z = vertices[i + 2];

      // Apply more dramatic sinusoidal distortions
      vertices[i] = x * (1 + 0.4 * Math.sin(y * 3) * Math.cos(z * 2));
      vertices[i + 1] = y * (1 + 0.3 * Math.cos(x * 4) * Math.sin(z * 3));
      vertices[i + 2] = z * (1 + 0.35 * Math.sin(x * 2) * Math.cos(y * 2));
    }

    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Enhanced metallic material with transparency support
  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      metalness: 1.0, // Maximum metalness
      roughness: 0.05, // Very smooth
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      color: new THREE.Color(0x222222), // Darker base color
      envMapIntensity: 3.0, // Higher reflection intensity
      iridescence: 1.0,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [50, 600], // Wider range for more color variation
      transmission: transparency, // Add transmission for transparency
      transparent: transparency > 0, // Enable transparency if needed
      opacity: 1 - transparency, // Set opacity based on transparency value
      reflectivity: 1.0, // Maximum reflectivity
      ior: 2.4, // Higher index of refraction
    });
  }, [transparency]);

  // Smooth rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.008; // Slightly faster rotation
      meshRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      geometry={geometry}
      material={material}
      castShadow
      receiveShadow
    />
  );
}

// Component for multiple larger shapes with transparency
function AbstractShapes() {
  return (
    <>
      {/* <MetallicAbstractShape
        position={[0, -2, -2]}
        scale={3.5}
        transparency={0}
      /> */}
      {/* <MetallicAbstractShape
        position={[-5, 4, -2]}
        scale={5.8}
        transparency={0.6}
      /> */}
      <MetallicAbstractShape
        position={[2, 4, 3]}
        scale={3.75}
        transparency={0.9}
      />
      {/* <MetallicAbstractShape
        position={[1, 8, -3]}
        scale={4.5}
        transparency={0.5}
      /> */}
      {/* <MetallicAbstractShape
        position={[-6, -7, 2]}
        scale={3.9}
        transparency={0.6}
      /> */}
    </>
  );
}

// Enhanced lighting setup
function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4169E1" />
      <pointLight position={[10, -5, 10]} intensity={1} color="#FFD700" />
      <pointLight position={[10, -5, 10]} intensity={2} color="#FF1493" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color="#00CED1"
        castShadow
      />
    </>
  );
}

function MouseControlledShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Apply mouse movement to the group
  useFrame(() => {
    if (groupRef.current) {
      // Smoothly interpolate to mouse position
      groupRef.current.rotation.y +=
        (mouse.x * 0.5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (mouse.y * 0.3 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <AbstractShapes />
    </group>
  );
}

// Main component
export default function MetallicAbstractScene() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Canvas
        camera={{ position: [8, 8, 8], fov: 75 }}
        shadows
        gl={{
          antialias: true,
          alpha: false,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
        }}
      >
        {/* Gradient background */}
        <GradientBackground />

        <Lights />

        {/* Environment map for realistic reflections */}
        <Environment preset="warehouse" />

        {/* Abstract shapes */}
        {/* <AbstractShapes /> */}
        <MouseControlledShapes />

        {/* Camera controls */}
        {/* <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          minDistance={5}
          maxDistance={30}
        /> */}

        {/* Enhanced post-processing */}
        <EffectComposer>
          <Bloom
            intensity={2.2}
            luminanceThreshold={0.05}
            luminanceSmoothing={0.9}
            kernelSize={KernelSize.HUGE}
          />

          <ChromaticAberration
            offset={[0.001, 0.001]}
            blendFunction={BlendFunction.NORMAL}
          />

          <Noise
            opacity={0.2}
            premultiply={true}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
