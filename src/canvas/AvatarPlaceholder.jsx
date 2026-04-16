import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF, Center } from '@react-three/drei';

export default function AvatarPlaceholder() {
  const meshRef = useRef();
  // We reference your 'camera.glb' directly from the public folder
  const { scene } = useGLTF('/vintage_camera.glb');

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Add a subtle, continuous cinematic rotation
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        <Center>
          <primitive
            object={scene}
            scale={2.5}
          />
        </Center>
      </group>
    </Float>
  );
}

// Preload the model so the LoadingScreen holds until this is ready
useGLTF.preload('/vintage_camera.glb');
