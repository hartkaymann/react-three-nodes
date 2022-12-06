import React, { useContext } from "react";
import { NodesDispatchContext } from "../../App";
import { ColorInput, Input, NumberInput, Vec2Input, Vec3Input } from "../Input"

function Node(props) {
  const nodesDispatch = useContext(NodesDispatchContext);

  // Create inputs
  const inputs = props.inputs.map((input, i) => {
    const InputType = input.type;
    return (
      <React.Fragment key={'input-' + input.label.toLowerCase()}>
        <InputType
          label={input.label}
          onChange={(e) => handleChange(e)}
        />
      </React.Fragment>
    );
  })

  return (
    <div
      className='node'
      style={{
        left: props.position.x,
        top: props.position.y,
      }}
    >
      <p className="title"> {props.title}</p>
      <ul className='node-inputs'> {inputs} </ul>
    </div >
  );

  function handleChange(e) {
    nodesDispatch({
      type: 'change',
      payload: {
        node: "key",
      }
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
        value: { x: 0, y: 0, z: 0 },
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
          value: { x: 0, y: 0, z: 0 },
        },
        {
          label: 'Dimensions',
          type: Vec2Input,
          value: { x: 0, y: 0 },
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