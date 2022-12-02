import React from 'react';
import './App.scss';

import { NodeEditor } from "./components/NodeEditor"
import { Scene } from "./components/Scene"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    }
  }

  render() {
    return (
      <div className='split-screen'>
        <div className='pane'>
          <NodeEditor
            nodes={this.state.nodes}
            onAddNode={(node) => this.handleAddNode(node)}
          />
        </div>
        <div className='pane'>
          <Scene 
            nodes={this.state.nodes}
          />
        </div>
      </div>
    );
  }

  handleAddNode(node) {
    const nodes = this.state.nodes;
    nodes.push(node);
    this.setState({
      nodes: nodes,
    })
  }

}

export default App;
