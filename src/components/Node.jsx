import React from "react";
import { ColorInput, Input, NumberInput, Vec2Input, Vec3Input } from "./Input"

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: (props.title !== undefined ? props.title : "Node"),
      dragging: false,
      selected: false,
      position: {
        x: props.position.x,
        y: props.position.y,
      },
      output: props.output,
    }
  }

  render() {
    const inputs = this.props.inputs.map((item, i) => {
      return (
        <li key={'input-' + i}>
          {item}
        </li>
      );
    })

    return (
      <div
        key={'node-' + this.state.title}
        className='node draggable'
        style={{
          left: this.state.position.x,
          top: this.state.position.y,
        }}
      >
        <p
          className="title"
        >
          {this.props.title}
        </p>
        <ul
          className='node-inputs'
        >
          {inputs}
        </ul>
      </div >
    );
  }
}

function OutputNode(props) {
  return (
    <Node
      title="Output"
      inputs={[
        <Input label="Outputs" />
      ]}
      position={props.position}
      output={null}
    />
  );
}

function NumberNode(props) {
  return (
    <Node
      title="Output"
      inputs={[
        <NumberInput label='Number' />
      ]}
      position={props.position}
    />
  );
}

function GeometryNode(props) {
  return (
    <Node
      title={props.title !== undefined ? props.title : "Geometry"}
      inputs={[
        <Vec3Input label='Position' />
      ]}
      position={props.position}
    />
  );
}

function PlaneNode(props) {
  return (
    <Node
      title={props.title !== undefined ? props.title : "Geometry"}
      inputs={[
        <Vec3Input label='Position' />,
        <Vec2Input label='Dimensions' />,
        <ColorInput />
      ]}
      position={props.position}
    />

  );
}

export { Node, OutputNode, GeometryNode, PlaneNode, NumberNode }