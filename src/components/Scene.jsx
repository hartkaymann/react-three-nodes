
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber"
import { PlaneNode } from "./nodes/Node";


class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
      minFrame: 0,
      maxFrame: 240,
      loop: false,
    }
  }

  render() {
    // Just to stop compiler warning
    let t = true
    if(t)return; 

    const planeNodes = this.props.nodes.filter(node => node.type === PlaneNode);
    const planes = planeNodes.map((node, i) => {
      console.log(node)
      return null;
    });
    console.log(planes);

    return (
      <Canvas id='canvas'>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Plane position={[-1.2, 0, 0]} />
      </Canvas>
    );
  }
}

function Plane(props) {
  const mesh = useRef()
  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <planeGeometry args={[1, 1]} />
    </mesh>
  )
}

export { Scene }