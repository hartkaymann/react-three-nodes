import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';
import './App.scss';

import { NodeEditor } from "./components/NodeEditor"
import { Scene } from "./components/Scene"

const ACTIONS = {
  ADD: 'add',
  CHANGE: 'change',
}

function nodesReducer(nodes, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return ([
        ...nodes,
        {
          key: 'node-' + nodes.length,
          position: action.payload.position,
          type: action.payload.type,
        }
      ]);
    }
    case ACTIONS.CHANGE: {
      return nodes;
    }
    default:
      return nodes;
  }
}

function App(props) {
  const [nodes, dispatch] = useReducer(nodesReducer, []);

  return (
    <NodesContext.Provider value={nodes}>
      <NodesDispatchContext.Provider value={dispatch}>
        <div className='split-screen'>
          <div className='pane'>
            <NodeEditor
              nodes={nodes}
            />
          </div>
          <div className='pane'>
            <Scene
              nodes={nodes}
            />
          </div>
        </div>
      </NodesDispatchContext.Provider>
    </NodesContext.Provider>
  );
}

export const NodesContext = createContext(null);
export const NodesDispatchContext = createContext(null);

export default App;
