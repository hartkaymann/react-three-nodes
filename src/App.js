import React from 'react';
import './App.scss';

import { Canvas } from "@react-three/fiber"
import { NodeEditor} from "./components/NodeEditor"

function App() {

  return (
    <div className='split-screen'>
      <div className='pane'>
          <NodeEditor></NodeEditor>
      </div>
      <div className='pane'>
        <Canvas id='canvas'>
          <mesh>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <meshStandardMaterial attach='material' />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
