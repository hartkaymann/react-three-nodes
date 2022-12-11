
import React from "react";
import { Canvas } from "@react-three/fiber"

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

    const geometry = this.props.nodes.map((node, i) => {
      console.log(node)
      return null;
    });

    return (
      <Canvas id='canvas'>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {geometry}
      </Canvas>
    );
  }
}

export { Scene }