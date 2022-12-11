import React, { createContext, useReducer } from 'react';
import { GeometryNode, NumberNode, OutputNode, PlaneNode } from './components/nodes/Node'
import { Toolbar } from './components/Toolbar';

import './components/Components.scss'
import { useState } from 'react';

const ACTIONS = {
  ADD: 'add',
  CHANGE: 'change',
}

const COMPONENTS = {
  output: OutputNode,
  number: NumberNode,
  geometry: GeometryNode,
  plane: PlaneNode
}


function nodesReducer(nodes, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return ([
        ...nodes,
        {
          id: 'node-' + nodes.length,
          position: action.payload.position,
          type: action.payload.type,
        }
      ]);
    }
    case ACTIONS.CHANGE: {
      return nodes.map((node, i) => {
        if (node.id === action.payload.id) {
          node.inputs = {
            ...(node.inputs),
            [action.payload.name]: action.payload.value
          }
        }
        return node;
      });
    }
    default:
      return nodes;
  }
}


function NodeEditor(props) {
  const [nodes, dispatch] = useReducer(nodesReducer, []);

  const [selectedTool, setSelectedTool] = useState(null);

  let classes = 'node-editor';
  classes += (selectedTool != null ? ' tool-selected' : '');

  const nodeElements = nodes.map((node, i) => {
    const NodeType = node.type;
    return (
      <React.Fragment key={node.id}>
        <NodeType
          id={node.id}
          inputs={node.inputs}
          position={node.position}
        />
      </React.Fragment>
    )
  })

  return (
    <NodesContext.Provider value={nodes}>
      <NodesDispatchContext.Provider value={dispatch}>
        <Toolbar
          selected={selectedTool}
          onClick={(tool) => setSelectedTool(tool)} />
        <div
          className={classes}
          onClick={(e) => handleClick(e)}
        >
          {nodeElements}
        </div>
      </NodesDispatchContext.Provider>
    </NodesContext.Provider>
  );

  function handleClick(e) {
    // Cancel if no tool is selected
    if (selectedTool == null)
      return;

    let NodeType = COMPONENTS[selectedTool];

    dispatch({
      type: 'add',
      payload: {
        type: NodeType,
        position: {
          x: e.clientX,
          y: e.clientY
        }
      }
    });

    setSelectedTool(null);
  }
}

export const NodesContext = createContext(null);
export const NodesDispatchContext = createContext(null);

export { NodeEditor };

