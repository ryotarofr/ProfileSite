import * as THREE from 'three'
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Trail, OrbitControls, Preload, useFBX } from "@react-three/drei";
import { Mesh, MeshBasicMaterial, MeshPhongMaterial, Object3D } from 'three';

import CanvasLoader from "../Loader";

const Earth = () => {
  const [color, setColor] = useState<string>('#ebf8ff');
  const earth = useFBX("./cube.fbx");
  const name: Object3D = useFBX("./name.fbx");
  name.traverse((child: Object3D) => {
    if (child instanceof Mesh) { // instanceof演算子を使用して、Mesh型であることを確認する
      const material = new MeshPhongMaterial({
        color: 0x122221,
        shininess: 100,
      });
      child.material = material;
    }
  });
  name.rotation.set(0, 1, -0.5);

  earth.traverse((child: Object3D) => {
    if (child instanceof Mesh) { // instanceof演算子を使用して、Mesh型であることを確認する
      const material = new MeshPhongMaterial({
        color: 0x001122,
        shininess: 100,
      });
      child.material = material;
    }
  });
  // const material = new THREE.MeshStandardMaterial({
  //   color: 0x6699ff,
  //   roughness: 0.5,
  // });

  return (
    <>
      <primitive object={earth} scale={0.005} position-y={0} />

      <primitive object={name} scale={0.02} position-y={0} rotation-y={0} />

    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      // shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight args={["#000000", 10]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;


