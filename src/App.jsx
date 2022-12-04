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
            handleInputUpdate={(node, input, update) => this.handleInputUpdate(node, input, update)}
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

  // Add a new node object to state and sets its type
  handleAddNode(node) {
    const { nodes } = this.state;

    // Create new node with unique id (as long as deleting nodes is not implemented lul)
    nodes.push(node);

    this.setState({
      nodes: nodes,
    })
  }

  handleInputUpdate(node, input, value) {
    const [nodes] = this.state;
    nodes[node][input] = { value };
    this.setState({
      nodes: nodes,
    })
  }

}

export default App;
