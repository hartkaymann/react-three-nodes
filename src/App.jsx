import React from 'react';
import './App.scss';

import { NodeEditor } from "./NodeEditor"
import { Scene } from "./Scene"



function App(props) {

  return (
        <div className='split-screen'>
          <div className='pane'>
            <NodeEditor/>
          </div>
          <div className='pane'>
            <Scene
              nodes={null}
            />
          </div>
        </div>
  );
}

export default App;
