import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube() {
    const MeshRef = useRef();

    useFrame(() => {
        if (!MeshRef.current) return;
        MeshRef.current.rotation.x += 0.01;
        MeshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={MeshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    );
}

function E1() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    );
}

export default E1;
