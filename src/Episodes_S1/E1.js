import React from "react";
import { Canvas } from "@react-three/fiber";

function E1() {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}

export default E1;
