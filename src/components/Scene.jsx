
import React from "react";
import { Canvas } from "@react-three/fiber"


class Scene extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Canvas id='canvas'>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    );
  }
}

export { Scene }