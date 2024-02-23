"use client";

/*
Model Information:
* Title: Coffee cup with plate
* Source: [Coffee cup with plate on Sketchfab](https://sketchfab.com/3d-models/coffee-cup-with-plate-c3132a723f434ce2b94e2e563420ef7a)
* Author: [Elen](https://sketchfab.com/Kitty999)

Model License:
* License Type: [CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/)
* Requirements: Author must be credited. Modified versions must have the same license. Commercial use is allowed.

If you use this 3D model in your project, be sure to copy and paste this credit wherever you share it:
This work is based on "Coffee cup with plate" by Elen, licensed under [CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/).

*/

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/coffe-cup/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} scale={[1000, 1000, 1000]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function CoffeCup() {
  return (
    <div className="flex justify-center items-center">
      <Canvas camera={{ position: [100, 100, 0] }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
