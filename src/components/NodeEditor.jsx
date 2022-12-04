import React from 'react';
import { GeometryNode, NumberNode, OutputNode, PlaneNode } from './nodes/Node'
import { Toolbar } from './Toolbar';

import './Components.scss'

export class NodeEditor extends React.Component {
  components = {
    output: OutputNode,
    number: NumberNode,
    geometry: GeometryNode,
    plane: PlaneNode
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedNode: null,
      selectedTool: null,
    }
  }

  render() {
    let classes = 'node-editor';
    classes += (this.state.selectedTool != null ? ' tool-selected' : '');

    const nodes = this.props.nodes.map((node, i) => {
      return (
        <React.Fragment key={'node-' + i}>
          {node}
        </React.Fragment>
      )
    })

    return (
      <>
        <Toolbar onClick={(tool) => this.selectTool(tool)} />
        <div
          className={classes}
          onClick={(e) => this.handleClick(e)}
        >
          {nodes}
        </div>
      </>
    );
  }

  handleClick(e) {
    // Cancel if no tool is selected
    if (this.state.selectedTool == null)
      return;

    let NodeType = this.components[this.state.selectedTool];

    this.props.onAddNode(
      <NodeType
        position={{
          x: e.clientX,
          y: e.clientY
        }}
      />
    );

    this.setState({
      selectedTool: null,
    });
  }

  selectTool(tool) {
    this.setState({
      selectedTool: tool,
    });
  }
}

export default NodeEditor;