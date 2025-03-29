import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap';
import { JSX, useRef } from "react";
import { Mesh } from "three";

const Target = (props: JSX.IntrinsicElements['mesh']) => {
    const targetRef = useRef<Mesh | undefined>(undefined);
    const { scene } =  useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
    );

    useGSAP(() => {
        if(targetRef.current) {
            gsap.to(targetRef.current?.position, {
                y: targetRef.current?.position?.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true
            });
        }
    })

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI/5, 0]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target