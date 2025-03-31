import { Float, useGLTF } from "@react-three/drei";
import { JSX } from "react";
import * as THREE from 'three';

const ReactLogo = (props: JSX.IntrinsicElements['group']) => {
    const { nodes, materials } = useGLTF('../../public/models/react.glb');
  return (
    <Float floatIntensity={1}>
        <group position={[8, 8, 0]} scale={0.3} dispose={null} {...props}>
            <mesh
                geometry={(nodes['React-Logo_Material002_0'] as THREE.Mesh).geometry} 
                material={materials['Material.002']}
                position={[0, 0.79, 0.18]}
                rotation={[0, 0, -Math.PI/2]}
                scale={[0.39, 0.39, 0.5]}          
            />
        </group>
    </Float>
  )
}

useGLTF.preload('../../public/models/react.glb');

export default ReactLogo