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
      inputs: props.inputs.reduce((obj, input) => ({ ...obj, [input.label]: input }), {}),
    }
  }

  render() {
    // Create inputs
    const inputs = [];
    Object.values(this.state.inputs).forEach((input) => {
      const InputType = input.type;
      inputs.push(
        <React.Fragment key={'input-' + input.label.toLowerCase()}>
          <InputType
            label={input.label}
            value={input.value}
            onChange={(i, t) => this.handleInputChange(i, t)}
          />
        </React.Fragment>
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

  /**
  * Called when an input is changed
  * @param {String} input - The label of the changed input
  * @param {Object} target - The  input targeted by the change event 
  */
  handleInputChange(input, target) {
    const { inputs } = this.state;
    if (input === target.name) {
      inputs[input].value = target.value;
    } else {
      // Update value, create if new
      let val = inputs[input].value;
      val = {
        ...val,
        [target.name]: target.value,
      };
      inputs[input].value = val;
    }
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
        value: {x: 0, y: 0, z: 0},
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
          value: {x: 0, y: 0, z: 0},
        },
        {
          label: 'Dimensions',
          type: Vec2Input,
          value: {x: 0, y: 0 },
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