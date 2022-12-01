import React from 'react';
import { Node } from './Node'
import { Toolbar } from './Toolbar';

import './Components.scss'

export class NodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      selectedNode: null,
      selectedTool: null,
    }
  }

  render() {
    let classes = 'node-editor';
    classes += (this.state.selectedTool != null ? ' tool-selected' : ''); 

    return (
      <>
        <Toolbar onClick={(tool) => this.selectTool(tool)} />
        <div
          className={classes}
          onClick={(e) => this.handleClick(e)}
        >
          {this.state.nodes}
        </div>
      </>
    );
  }

  handleClick(e) {
    // Cancel if no tool is selected
    if (this.state.selectedTool == null)
      return;

    let { nodes } = this.state;
    nodes.push(
      <Node
        title={this.state.selectedTool}
        position={{
          x: e.clientX,
          y: e.clientY
        }}
      />
    );

    this.setState({
      nodes: nodes,
      selectedTool: null,
    });
  }

  selectTool(name) {
    this.setState({
      selectedTool: name,
    }, () => { console.log("Selected Tool: " + this.state.selectedTool) });

  }
}


export default NodeEditor;