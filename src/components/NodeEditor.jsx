import React from 'react';
import { GeometryNode, NumberNode, OutputNode, PlaneNode } from './nodes/Node'
import { Toolbar } from './Toolbar';

import './Components.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { NodesContext, NodesDispatchContext } from '../App';

const components = {
  output: OutputNode,
  number: NumberNode,
  geometry: GeometryNode,
  plane: PlaneNode
}

function NodeEditor(props) {
  const [selectedTool, setSelectedTool] = useState(null);

  const nodes = useContext(NodesContext);
  const nodesDispatch = useContext(NodesDispatchContext);

  let classes = 'node-editor';
  classes += (selectedTool != null ? ' tool-selected' : '');

  const nodeElements = nodes.map((node, i) => {
    const NodeType = node.type;
    return (
      <React.Fragment key={node.key}>
        <NodeType
          inputs={node.inputs}
          position={node.position}
        />
      </React.Fragment>
    )
  })

  return (
    <>
      <Toolbar
        selected={selectedTool}
        onClick={(tool) => setSelectedTool(tool)} />
      <div
        className={classes}
        onClick={(e) => handleClick(e)}
      >
       {nodeElements}
      </div>
    </>
  );

  function handleClick(e) {
    // Cancel if no tool is selected
    if (selectedTool == null)
      return;

    let NodeType = components[selectedTool];

    nodesDispatch({
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

export { NodeEditor };