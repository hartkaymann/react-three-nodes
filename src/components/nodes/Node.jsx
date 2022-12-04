import React from "react";
import { ColorInput, Input, NumberInput, Vec2Input, Vec3Input } from "../Input"

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: (props.title !== undefined ? props.title : "Node"),
      position: {
        x: props.position.x,
        y: props.position.y,
      },
      inputs: props.inputs.reduce((obj, item) => ({ ...obj, [item.label]: item }), {})
    }
  }

  render() {
    // Create inputs
    const inputs = this.props.inputs.map((input, i) => {
      const InputType = input.type;
      return (
        <li key={'input-' + i}>
          <InputType
            label={input.label}
            value={input.value}
            onChange={(e) => this.handleInputChange(e)}
          />
        </li>
      );
    })

    return (
      <div
        className='node'
        style={{
          left: this.state.position.x,
          top: this.state.position.y,
        }}
      >
        <p className="title"> {this.props.title}</p>
        <ul className='node-inputs'> {inputs} </ul>
      </div >
    );
  }

  handleInputChange(e) {
    console.log(e.target);

    const { inputs } = this.state;
    inputs[e.target.name].value = e.target.value;
    this.setState({
      inputs: inputs,
    })
  }
}

function OutputNode(props) {
  return (
    <Node
      title="Output"
      inputs={[{
        label: 'Outputs',
        type: Input,
        value: null
      }]}
      position={props.position}
    />
  );
}

function NumberNode(props) {
  return (
    <Node
      title="Number"
      inputs={[{
        label: 'Number',
        type: NumberInput,
        value: 0,
      }]}
      position={props.position}
    />
  );
}

function GeometryNode(props) {
  return (
    <Node
      title="Geometry"
      inputs={[{
        label: 'Position',
        type: Vec3Input,
        value: null,
      }]}
      position={props.position}
    />
  );
}

function PlaneNode(props) {
  return (
    <Node
      title='Plane'
      inputs={[
        {
          label: 'Position',
          type: Vec3Input,
          value: [0, 0, 0]
        },
        {
          label: 'Dimensions',
          type: Vec2Input,
          value: [0, 0],
        },
        {
          label: 'Color',
          type: ColorInput,
          value: '#000000'
        }
      ]}
      position={props.position}
    />

  );
}

export { Node, OutputNode, GeometryNode, PlaneNode, NumberNode }